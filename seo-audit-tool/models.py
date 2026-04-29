"""Dataclasses pour l'audit SEO."""

from dataclasses import dataclass, field


@dataclass
class PageData:
    url: str
    final_url: str = ""
    status_code: int = 0
    redirect_chain: list = field(default_factory=list)
    response_time: float = 0.0
    content_length: int = 0
    headers: dict = field(default_factory=dict)
    title: str = ""
    meta_description: str = ""
    canonical: str = ""
    h1_list: list = field(default_factory=list)
    headings: dict = field(default_factory=dict)
    images: list = field(default_factory=list)
    internal_links: list = field(default_factory=list)
    external_links: list = field(default_factory=list)
    hreflang_tags: list = field(default_factory=list)
    structured_data: list = field(default_factory=list)
    og_tags: dict = field(default_factory=dict)
    twitter_tags: dict = field(default_factory=dict)
    meta_robots: str = ""
    viewport_meta: str = ""
    rel_prev: str = ""
    rel_next: str = ""
    word_count: int = 0
    resource_count: int = 0
    content_hash: str = ""
    body_text: str = ""
    depth: int = 0
    html_lang: str = ""
    content_language: str = ""
    is_html: bool = True
    error: str = ""


@dataclass
class Finding:
    severity: str  # "critical", "warning", "info"
    category: str
    title: str
    details: str
    affected_urls: list = field(default_factory=list)
    recommendation: str = ""
