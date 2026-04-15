// ─── DataForSEO raw API response types ───────────────────────────────────────

export interface DfsTaskStatus {
  id: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  result_count: number;
  path: string[];
}

// --- Labs endpoints (Keyword Suggestions + Keyword Ideas) --------------------

export interface DfsLabsKeywordItem {
  se_type?: string;
  keyword: string;
  keyword_info?: {
    search_volume: number | null;
    competition: number | null;
    competition_level: string | null;
    cpc: number | null;
    monthly_searches?: Array<{ year: number; month: number; search_volume: number }>;
  };
  keyword_properties?: {
    keyword_difficulty: number | null;
    detected_language?: string | null;
    is_another_language?: boolean;
  };
  search_intent_info?: {
    main_intent?: string | null;
    foreign_intent?: string[] | null;
    last_updated_time?: string;
  };
}

export interface DfsLabsResult {
  seed_keyword?: string;
  seed_keywords?: string[];
  total_count?: number;
  items_count?: number;
  items?: DfsLabsKeywordItem[];
}

export interface DfsLabsTask extends DfsTaskStatus {
  result: DfsLabsResult[] | null;
}

export interface DfsLabsResponse {
  version: string;
  status_code: number;
  status_message: string;
  cost: number;
  tasks: DfsLabsTask[];
}

// --- Keywords Data endpoint (Google Ads Keywords for Keywords) ---------------

export interface DfsGoogleAdsKeywordItem {
  keyword: string;
  search_volume: number | null;
  competition: string | null;       // "LOW" | "MEDIUM" | "HIGH"
  competition_index: number | null; // 0–100
  cpc: number | null;
  monthly_searches?: Array<{ year: number; month: number; search_volume: number }>;
}

export interface DfsGoogleAdsTask extends DfsTaskStatus {
  result: DfsGoogleAdsKeywordItem[] | null;
}

export interface DfsGoogleAdsResponse {
  version: string;
  status_code: number;
  status_message: string;
  cost: number;
  tasks: DfsGoogleAdsTask[];
}

// ─── Unified keyword model (after merge + clean) ─────────────────────────────

export type KeywordSource =
  | "suggestions"
  | "ideas"
  | "google_ads";

export interface UnifiedKeyword {
  keyword: string;
  search_volume: number | null;
  competition_level: string | null;
  competition_index: number | null;
  cpc: number | null;
  keyword_difficulty: number | null;
  main_intent: string | null;
  is_brand: boolean;
  sources: KeywordSource[];
}

// ─── Tool output ──────────────────────────────────────────────────────────────

export interface KeywordResearchResult {
  query_keywords: string[];
  location_code: number;
  language_code: string;
  total_raw: number;
  total_after_dedup: number;
  total_after_brand_filter: number;
  brands_excluded: string[];
  keywords: UnifiedKeyword[];
  sources_summary: {
    suggestions: number;
    ideas: number;
    google_ads: number;
  };
  truncated?: boolean;
  truncation_message?: string;
  errors?: string[];
}
