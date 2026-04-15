#!/usr/bin/env node
/**
 * DataForSEO MCP Server
 *
 * Exposes a single tool `dataforseo_research_keywords` that queries three
 * DataForSEO sources simultaneously (Keyword Suggestions, Keyword Ideas,
 * Google Ads Keywords for Keywords), merges and deduplicates the results,
 * and removes branded / noisy keywords.
 */

// Charge c:\Programmation\.env (3 niveaux au-dessus de dist/index.js)
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import dotenv from "dotenv";
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../../../.env") });

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { researchKeywords } from "./tools/keywords.js";
import { handleDfsError } from "./services/dataforseo.js";

// ─── Server instance ──────────────────────────────────────────────────────────

const server = new McpServer({
  name: "dataforseo-mcp-server",
  version: "1.0.0",
});

// ─── Input schema ─────────────────────────────────────────────────────────────

enum ResponseFormat {
  MARKDOWN = "markdown",
  JSON = "json",
}

const ResearchKeywordsSchema = z
  .object({
    keywords: z
      .array(z.string().min(1).max(80))
      .min(1)
      .max(20)
      .describe(
        "One or more seed keywords to research (max 20). " +
          "All keywords are used for Keyword Ideas and Google Ads. " +
          "The first keyword is also used as the seed for Keyword Suggestions.",
      ),

    location_code: z
      .number()
      .int()
      .positive()
      .default(2840)
      .describe(
        "DataForSEO location code for the target country. " +
          "Defaults to 2840 (United States). " +
          "See https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages for full list.",
      ),

    language_code: z
      .string()
      .min(2)
      .max(10)
      .default("en")
      .describe(
        "BCP-47 language code for the target language (e.g. 'en', 'fr', 'es'). " +
          "Defaults to 'en'.",
      ),

    limit_per_source: z
      .number()
      .int()
      .min(10)
      .max(1000)
      .default(200)
      .describe(
        "Maximum number of keywords to fetch from each DataForSEO source " +
          "(Keyword Suggestions and Keyword Ideas). Range: 10–1000. Default: 200.",
      ),

    exclude_brands: z
      .array(z.string().min(1))
      .default([])
      .describe(
        "Additional brand names to exclude on top of the built-in brand list. " +
          "Example: ['acme', 'my_competitor']. " +
          "A keyword is flagged as branded when it contains any brand name as a whole word.",
      ),

    include_branded: z
      .boolean()
      .default(false)
      .describe(
        "Set to true to keep branded keywords in the results. " +
          "When false (default) all keywords matching the brand list are removed.",
      ),

    min_search_volume: z
      .number()
      .int()
      .min(0)
      .default(0)
      .describe(
        "Minimum monthly search volume threshold. " +
          "Keywords with search volume below this value are removed. " +
          "Set to 0 (default) to keep all keywords regardless of volume.",
      ),

    response_format: z
      .nativeEnum(ResponseFormat)
      .default(ResponseFormat.MARKDOWN)
      .describe(
        "Output format. " +
          "'markdown' (default) returns a human-readable summary table. " +
          "'json' returns the full structured data.",
      ),
  })
  .strict();

type ResearchKeywordsInput = z.infer<typeof ResearchKeywordsSchema>;

// ─── Tool registration ────────────────────────────────────────────────────────

server.registerTool(
  "dataforseo_research_keywords",
  {
    title: "DataForSEO Keyword Research",
    description: `Research keywords using three DataForSEO sources simultaneously, then merge, deduplicate and clean the results.

**Sources queried in parallel:**
1. DataForSEO Labs — Google Keyword Suggestions (seed-based suggestions)
2. DataForSEO Labs — Google Keyword Ideas (related keyword ideas for multiple seeds)
3. Keywords Data — Google Ads Keywords for Keywords (Google Ads data)

**Post-processing:**
- All results are merged and deduplicated by keyword (case-insensitive)
- When the same keyword appears in multiple sources, metrics are merged (preferring highest search volume)
- Brand keywords (matching a built-in list of ~120 brands + custom \`exclude_brands\`) are flagged and removed by default
- Results are sorted by search volume descending

**Args:**
- keywords (string[]): 1–20 seed keywords to research
- location_code (number): DataForSEO location code (default: 2840 = USA)
- language_code (string): BCP-47 language code (default: 'en')
- limit_per_source (number): Max keywords per source, 10–1000 (default: 200)
- exclude_brands (string[]): Extra brand names to filter out
- include_branded (boolean): Keep branded keywords (default: false)
- min_search_volume (number): Minimum monthly search volume (default: 0)
- response_format ('markdown' | 'json'): Output format (default: 'markdown')

**Returns (markdown):** Summary table with keyword, search volume, competition, CPC, keyword difficulty, main intent, and which sources found it.

**Returns (json):**
\`\`\`json
{
  "query_keywords": string[],
  "location_code": number,
  "language_code": string,
  "total_raw": number,
  "total_after_dedup": number,
  "total_after_brand_filter": number,
  "brands_excluded": string[],
  "sources_summary": { "suggestions": number, "ideas": number, "google_ads": number },
  "keywords": [{
    "keyword": string,
    "search_volume": number | null,
    "competition_level": "LOW" | "MEDIUM" | "HIGH" | null,
    "competition_index": number | null,
    "cpc": number | null,
    "keyword_difficulty": number | null,
    "main_intent": string | null,
    "is_brand": boolean,
    "sources": ("suggestions" | "ideas" | "google_ads")[]
  }]
}
\`\`\`

**Environment variables required:**
- DATAFORSEO_LOGIN — your DataForSEO account email
- DATAFORSEO_PASSWORD — your DataForSEO API password

**Examples:**
- Research "seo tools": keywords=["seo tools"], defaults → clean English US keyword list
- Competitor gap: keywords=["project management software", "task manager"], exclude_brands=["asana","monday","trello"]
- High-intent only: keywords=["crm software"], min_search_volume=500`,

    inputSchema: ResearchKeywordsSchema,

    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: true,
    },
  },

  async (params: ResearchKeywordsInput) => {
    try {
      return await researchKeywords({
        keywords: params.keywords,
        location_code: params.location_code,
        language_code: params.language_code,
        limit_per_source: params.limit_per_source,
        exclude_brands: params.exclude_brands,
        include_branded: params.include_branded,
        min_search_volume: params.min_search_volume,
        response_format: params.response_format,
      });
    } catch (error) {
      return {
        isError: true,
        content: [{ type: "text" as const, text: handleDfsError(error) }],
      };
    }
  },
);

// ─── Entry point ──────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const login = process.env["DATAFORSEO_LOGIN"];
  const password = process.env["DATAFORSEO_PASSWORD"];

  if (!login || !password) {
    console.error(
      "ERROR: DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD environment variables are required.\n" +
        "Get your credentials at https://app.dataforseo.com/api-access",
    );
    process.exit(1);
  }

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("DataForSEO MCP server running via stdio");
}

main().catch((error: unknown) => {
  console.error("Fatal error:", error instanceof Error ? error.message : error);
  process.exit(1);
});
