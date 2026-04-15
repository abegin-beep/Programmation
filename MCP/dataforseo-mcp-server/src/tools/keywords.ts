import { BUILT_IN_BRANDS, CHARACTER_LIMIT } from "../constants.js";
import {
  fetchKeywordSuggestions,
  fetchKeywordIdeas,
  fetchKeywordsForKeywords,
  handleDfsError,
  createDataForSeoClient,
} from "../services/dataforseo.js";
import type {
  DfsLabsKeywordItem,
  DfsGoogleAdsKeywordItem,
  KeywordSource,
  UnifiedKeyword,
  KeywordResearchResult,
} from "../types.js";

// ─── Brand detection ──────────────────────────────────────────────────────────

/**
 * Build a regex that matches any brand name as a whole word (case-insensitive).
 * Escapes regex special characters in brand names.
 */
function buildBrandRegex(brands: string[]): RegExp {
  const escaped = brands.map((b) =>
    b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  return new RegExp(`\\b(${escaped.join("|")})\\b`, "i");
}

function isBrandKeyword(keyword: string, brandRegex: RegExp): boolean {
  return brandRegex.test(keyword);
}

// ─── Merge helpers ────────────────────────────────────────────────────────────

function fromLabsItem(
  item: DfsLabsKeywordItem,
  source: KeywordSource,
): UnifiedKeyword {
  return {
    keyword: item.keyword.toLowerCase().trim(),
    search_volume: item.keyword_info?.search_volume ?? null,
    competition_level: item.keyword_info?.competition_level ?? null,
    competition_index:
      item.keyword_info?.competition != null
        ? Math.round(item.keyword_info.competition * 100)
        : null,
    cpc: item.keyword_info?.cpc ?? null,
    keyword_difficulty: item.keyword_properties?.keyword_difficulty ?? null,
    main_intent: item.search_intent_info?.main_intent ?? null,
    is_brand: false, // filled in later
    sources: [source],
  };
}

function fromGoogleAdsItem(item: DfsGoogleAdsKeywordItem): UnifiedKeyword {
  return {
    keyword: item.keyword.toLowerCase().trim(),
    search_volume: item.search_volume ?? null,
    competition_level: item.competition ?? null,
    competition_index: item.competition_index ?? null,
    cpc: item.cpc ?? null,
    keyword_difficulty: null,
    main_intent: null,
    is_brand: false,
    sources: ["google_ads"],
  };
}

/**
 * Merge keyword data from the same keyword found in multiple sources.
 * Prefers non-null values; takes the highest search_volume when both present.
 */
function mergeKeywords(
  existing: UnifiedKeyword,
  incoming: UnifiedKeyword,
): UnifiedKeyword {
  return {
    keyword: existing.keyword,
    search_volume:
      existing.search_volume !== null && incoming.search_volume !== null
        ? Math.max(existing.search_volume, incoming.search_volume)
        : existing.search_volume ?? incoming.search_volume,
    competition_level: existing.competition_level ?? incoming.competition_level,
    competition_index: existing.competition_index ?? incoming.competition_index,
    cpc: existing.cpc ?? incoming.cpc,
    keyword_difficulty:
      existing.keyword_difficulty ?? incoming.keyword_difficulty,
    main_intent: existing.main_intent ?? incoming.main_intent,
    is_brand: false,
    sources: Array.from(
      new Set([...existing.sources, ...incoming.sources]),
    ) as KeywordSource[],
  };
}

// ─── Main logic ───────────────────────────────────────────────────────────────

export interface ResearchKeywordsParams {
  keywords: string[];
  location_code: number;
  language_code: string;
  limit_per_source: number;
  exclude_brands: string[];
  include_branded: boolean;
  min_search_volume: number;
  response_format: "markdown" | "json";
}

export async function researchKeywords(
  params: ResearchKeywordsParams,
): Promise<{ content: Array<{ type: "text"; text: string }>; structuredContent: Record<string, unknown> }> {
  const login = process.env["DATAFORSEO_LOGIN"];
  const password = process.env["DATAFORSEO_PASSWORD"];

  if (!login || !password) {
    throw new Error(
      "Missing credentials: set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD environment variables.",
    );
  }

  const client = createDataForSeoClient(login, password);

  // ── Fetch all three sources in parallel ──────────────────────────────────
  const sourceErrors: string[] = [];

  const [suggestionsResults, ideasResults, googleAdsResults] =
    await Promise.allSettled([
      // Source 1: Keyword Suggestions — uses the first seed keyword
      fetchKeywordSuggestions(
        client,
        params.keywords[0]!,
        params.location_code,
        params.language_code,
        params.limit_per_source,
      ),
      // Source 2: Keyword Ideas — all seed keywords in one request
      fetchKeywordIdeas(
        client,
        params.keywords,
        params.location_code,
        params.language_code,
        params.limit_per_source,
      ),
      // Source 3: Google Ads Keywords for Keywords
      fetchKeywordsForKeywords(
        client,
        params.keywords,
        params.location_code,
        params.language_code,
      ),
    ]);

  let suggestionsItems: DfsLabsKeywordItem[] = [];
  if (suggestionsResults.status === "fulfilled") {
    suggestionsItems = suggestionsResults.value;
  } else {
    sourceErrors.push(`suggestions: ${handleDfsError(suggestionsResults.reason)}`);
  }

  let ideasItems: DfsLabsKeywordItem[] = [];
  if (ideasResults.status === "fulfilled") {
    ideasItems = ideasResults.value;
  } else {
    sourceErrors.push(`ideas: ${handleDfsError(ideasResults.reason)}`);
  }

  let googleAdsItems: DfsGoogleAdsKeywordItem[] = [];
  if (googleAdsResults.status === "fulfilled") {
    googleAdsItems = googleAdsResults.value;
  } else {
    sourceErrors.push(`google_ads: ${handleDfsError(googleAdsResults.reason)}`);
  }

  // ── Build deduplicated map ────────────────────────────────────────────────
  const map = new Map<string, UnifiedKeyword>();

  function upsert(kw: UnifiedKeyword): void {
    const existing = map.get(kw.keyword);
    if (existing) {
      map.set(kw.keyword, mergeKeywords(existing, kw));
    } else {
      map.set(kw.keyword, kw);
    }
  }

  const totalRawCounts = {
    suggestions: suggestionsItems.length,
    ideas: ideasItems.length,
    google_ads: googleAdsItems.length,
  };

  for (const item of suggestionsItems) {
    if (item.keyword) upsert(fromLabsItem(item, "suggestions"));
  }
  for (const item of ideasItems) {
    if (item.keyword) upsert(fromLabsItem(item, "ideas"));
  }
  for (const item of googleAdsItems) {
    if (item.keyword) upsert(fromGoogleAdsItem(item));
  }

  const totalAfterDedup = map.size;

  // ── Brand detection ───────────────────────────────────────────────────────
  const allBrands = [
    ...BUILT_IN_BRANDS,
    ...params.exclude_brands.map((b) => b.toLowerCase()),
  ];
  const brandRegex = buildBrandRegex(allBrands);

  for (const kw of map.values()) {
    kw.is_brand = isBrandKeyword(kw.keyword, brandRegex);
  }

  // ── Apply filters ─────────────────────────────────────────────────────────
  let keywords = Array.from(map.values()).filter((kw) => {
    if (!params.include_branded && kw.is_brand) return false;
    if (
      params.min_search_volume > 0 &&
      (kw.search_volume ?? 0) < params.min_search_volume
    ) {
      return false;
    }
    return true;
  });

  const totalAfterBrandFilter = keywords.length;

  // ── Sort by search volume desc ────────────────────────────────────────────
  keywords.sort(
    (a, b) => (b.search_volume ?? 0) - (a.search_volume ?? 0),
  );

  // ── Build result object ───────────────────────────────────────────────────
  const brandsExcluded = params.include_branded
    ? []
    : Array.from(map.values())
        .filter((kw) => kw.is_brand)
        .map((kw) => kw.keyword)
        .sort();

  const result: KeywordResearchResult = {
    query_keywords: params.keywords,
    location_code: params.location_code,
    language_code: params.language_code,
    total_raw: totalRawCounts.suggestions + totalRawCounts.ideas + totalRawCounts.google_ads,
    total_after_dedup: totalAfterDedup,
    total_after_brand_filter: totalAfterBrandFilter,
    brands_excluded: brandsExcluded,
    keywords,
    sources_summary: totalRawCounts,
    ...(sourceErrors.length > 0 ? { errors: sourceErrors } : {}),
  };

  // ── Format text response ──────────────────────────────────────────────────
  let text: string;

  if (params.response_format === "json") {
    text = JSON.stringify(result, null, 2);
  } else {
    text = formatMarkdown(result, sourceErrors);
  }

  // ── Truncate if needed ────────────────────────────────────────────────────
  if (text.length > CHARACTER_LIMIT) {
    const half = Math.floor(keywords.length / 2);
    result.keywords = keywords.slice(0, half);
    result.truncated = true;
    result.truncation_message = `Response truncated: showing ${half} of ${keywords.length} keywords. Use min_search_volume or limit_per_source to narrow results.`;
    text =
      params.response_format === "json"
        ? JSON.stringify(result, null, 2)
        : formatMarkdown(result, sourceErrors);
  }

  return {
    content: [{ type: "text", text }],
    structuredContent: result as unknown as Record<string, unknown>,
  };
}

// ─── Markdown formatter ───────────────────────────────────────────────────────

function formatMarkdown(
  result: KeywordResearchResult,
  sourceErrors: string[],
): string {
  const lines: string[] = [];

  lines.push(`# Keyword Research: ${result.query_keywords.join(", ")}`);
  lines.push("");

  lines.push("## Summary");
  lines.push(
    `- **Location**: ${result.location_code} | **Language**: ${result.language_code}`,
  );
  lines.push(
    `- **Raw keywords collected**: ${result.total_raw} (suggestions: ${result.sources_summary.suggestions}, ideas: ${result.sources_summary.ideas}, google_ads: ${result.sources_summary.google_ads})`,
  );
  lines.push(`- **After deduplication**: ${result.total_after_dedup}`);
  lines.push(
    `- **After brand / noise filter**: ${result.total_after_brand_filter}`,
  );
  if (result.brands_excluded.length > 0) {
    lines.push(
      `- **Branded keywords removed**: ${result.brands_excluded.length}`,
    );
  }
  if (result.truncated) {
    lines.push(`- ⚠️ ${result.truncation_message}`);
  }
  if (sourceErrors.length > 0) {
    lines.push("");
    lines.push("### ⚠️ Source errors (partial results)");
    for (const err of sourceErrors) {
      lines.push(`- ${err}`);
    }
  }
  lines.push("");

  lines.push("## Keywords");
  lines.push("");
  lines.push(
    "| Keyword | Search Vol. | Competition | CPC | Difficulty | Intent | Sources |",
  );
  lines.push(
    "|---------|-------------|-------------|-----|------------|--------|---------|",
  );

  for (const kw of result.keywords) {
    const vol = kw.search_volume?.toLocaleString() ?? "—";
    const comp = kw.competition_level ?? "—";
    const cpc = kw.cpc != null ? `$${kw.cpc.toFixed(2)}` : "—";
    const diff = kw.keyword_difficulty != null ? `${kw.keyword_difficulty}/100` : "—";
    const intent = kw.main_intent ?? "—";
    const sources = kw.sources.join(", ");
    lines.push(
      `| ${kw.keyword} | ${vol} | ${comp} | ${cpc} | ${diff} | ${intent} | ${sources} |`,
    );
  }

  return lines.join("\n");
}
