import axios, { AxiosError, type AxiosInstance } from "axios";
import {
  DATAFORSEO_API_BASE,
  ENDPOINTS,
  DEFAULT_LIMIT_PER_SOURCE,
} from "../constants.js";
import type {
  DfsLabsResponse,
  DfsGoogleAdsResponse,
  DfsLabsKeywordItem,
  DfsGoogleAdsKeywordItem,
} from "../types.js";

// ─── Client factory ───────────────────────────────────────────────────────────

export function createDataForSeoClient(login: string, password: string): AxiosInstance {
  const token = Buffer.from(`${login}:${password}`).toString("base64");
  return axios.create({
    baseURL: DATAFORSEO_API_BASE,
    timeout: 60_000,
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
  });
}

// ─── Error helper ─────────────────────────────────────────────────────────────

export function handleDfsError(error: unknown): string {
  if (error instanceof AxiosError) {
    if (error.response) {
      const status = error.response.status;
      const msg = (error.response.data as { status_message?: string })
        ?.status_message ?? error.message;
      if (status === 401 || status === 403) {
        return `Authentication error (${status}): check DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD. ${msg}`;
      }
      if (status === 402) {
        return `Insufficient DataForSEO credits (402). Top-up your account to continue.`;
      }
      if (status === 429) {
        return `Rate limit exceeded (429). Wait before retrying or reduce request frequency.`;
      }
      return `DataForSEO API error ${status}: ${msg}`;
    }
    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
      return "Request timed out. DataForSEO may be slow — try again shortly.";
    }
    return `Network error: ${error.message}`;
  }
  return `Unexpected error: ${error instanceof Error ? error.message : String(error)}`;
}

// ─── Source 1 — Keyword Suggestions ──────────────────────────────────────────

export async function fetchKeywordSuggestions(
  client: AxiosInstance,
  keyword: string,
  locationCode: number,
  languageCode: string,
  limit: number = DEFAULT_LIMIT_PER_SOURCE,
): Promise<DfsLabsKeywordItem[]> {
  const body = [
    {
      keyword,
      location_code: locationCode,
      language_code: languageCode,
      include_seed_keyword: true,
      limit,
    },
  ];

  const response = await client.post<DfsLabsResponse>(
    ENDPOINTS.KEYWORD_SUGGESTIONS,
    body,
  );

  const task = response.data.tasks?.[0];
  if (!task || task.status_code !== 20000 || !task.result) {
    throw new Error(
      `Keyword Suggestions task failed: ${task?.status_message ?? "no result"}`,
    );
  }

  const items: DfsLabsKeywordItem[] = [];
  for (const result of task.result) {
    if (result.items) items.push(...result.items);
  }
  return items;
}

// ─── Source 2 — Keyword Ideas ─────────────────────────────────────────────────

export async function fetchKeywordIdeas(
  client: AxiosInstance,
  keywords: string[],
  locationCode: number,
  languageCode: string,
  limit: number = DEFAULT_LIMIT_PER_SOURCE,
): Promise<DfsLabsKeywordItem[]> {
  const body = [
    {
      keywords,
      location_code: locationCode,
      language_code: languageCode,
      limit,
    },
  ];

  const response = await client.post<DfsLabsResponse>(
    ENDPOINTS.KEYWORD_IDEAS,
    body,
  );

  const task = response.data.tasks?.[0];
  if (!task || task.status_code !== 20000 || !task.result) {
    throw new Error(
      `Keyword Ideas task failed: ${task?.status_message ?? "no result"}`,
    );
  }

  const items: DfsLabsKeywordItem[] = [];
  for (const result of task.result) {
    if (result.items) items.push(...result.items);
  }
  return items;
}

// ─── Source 3 — Google Ads Keywords for Keywords ──────────────────────────────

export async function fetchKeywordsForKeywords(
  client: AxiosInstance,
  keywords: string[],
  locationCode: number,
  languageCode: string,
): Promise<DfsGoogleAdsKeywordItem[]> {
  // Google Ads endpoint accepts max 20 keywords per request
  const sliced = keywords.slice(0, 20);

  const body = [
    {
      keywords: sliced,
      location_code: locationCode,
      language_code: languageCode,
    },
  ];

  const response = await client.post<DfsGoogleAdsResponse>(
    ENDPOINTS.KEYWORDS_FOR_KEYWORDS,
    body,
  );

  const task = response.data.tasks?.[0];
  if (!task || task.status_code !== 20000 || !task.result) {
    throw new Error(
      `Keywords for Keywords task failed: ${task?.status_message ?? "no result"}`,
    );
  }

  return task.result ?? [];
}
