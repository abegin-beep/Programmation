"""Crawler BFS avec extraction SEO complète."""

import hashlib
import json
import re
import sys
import time
from urllib.parse import urljoin, urlparse, urlunparse
from typing import Optional

import requests
from bs4 import BeautifulSoup

try:
    import tldextract
    HAS_TLDEXTRACT = True
except ImportError:
    HAS_TLDEXTRACT = False

from models import PageData


class Crawler:
    def __init__(self, base_url: str, crawl_delay: float = 1.0,
                 max_pages: int = 50, max_depth: int = 3,
                 timeout: int = 15, user_agent: str = "SEOAuditBot/1.0 (technical-audit)",
                 verbose: bool = False):
        self.base_url = base_url.rstrip("/")
        self.crawl_delay = crawl_delay
        self.max_pages = max_pages
        self.max_depth = max_depth
        self.timeout = timeout
        self.user_agent = user_agent
        self.verbose = verbose

        parsed = urlparse(self.base_url)
        self.scheme = parsed.scheme
        self.domain = parsed.netloc

        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": self.user_agent,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "fr-CA,fr;q=0.9,en;q=0.8",
        })

        self.pages: dict[str, PageData] = {}
        self.visited: set[str] = set()
        self.robots_rules: dict = {}
        self.robots_sitemaps: list[str] = []
        self.interrupted = False

    def _log(self, msg: str):
        if self.verbose:
            print(f"  [crawl] {msg}", file=sys.stderr)

    def normalize_url(self, url: str) -> str:
        parsed = urlparse(url)
        path = parsed.path.rstrip("/") or "/"
        return urlunparse((
            parsed.scheme or self.scheme,
            parsed.netloc or self.domain,
            path, "", parsed.query, ""
        ))

    def _is_internal(self, url: str) -> bool:
        parsed = urlparse(url)
        if not parsed.netloc:
            return True
        if HAS_TLDEXTRACT:
            base_ext = tldextract.extract(self.domain)
            url_ext = tldextract.extract(parsed.netloc)
            return (base_ext.domain == url_ext.domain and
                    base_ext.suffix == url_ext.suffix)
        return parsed.netloc == self.domain

    def _is_crawlable(self, url: str) -> bool:
        parsed = urlparse(url)
        path = parsed.path.lower()
        skip_extensions = {
            ".pdf", ".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp",
            ".css", ".js", ".zip", ".tar", ".gz", ".mp4", ".mp3",
            ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
            ".ico", ".woff", ".woff2", ".ttf", ".eot"
        }
        for ext in skip_extensions:
            if path.endswith(ext):
                return False
        return True

    def _is_allowed_by_robots(self, url: str) -> bool:
        if not self.robots_rules:
            return True
        parsed = urlparse(url)
        path = parsed.path
        rules = self.robots_rules.get("*", [])
        for rule_type, rule_path in rules:
            if path.startswith(rule_path):
                return rule_type == "allow"
        return True

    def parse_robots_txt(self):
        robots_url = f"{self.scheme}://{self.domain}/robots.txt"
        self._log(f"Fetching robots.txt: {robots_url}")
        try:
            resp = self.session.get(robots_url, timeout=self.timeout)
            if resp.status_code != 200:
                self._log("robots.txt not found")
                return
            current_agent = None
            for line in resp.text.splitlines():
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if ":" not in line:
                    continue
                directive, _, value = line.partition(":")
                directive = directive.strip().lower()
                value = value.strip()

                if directive == "user-agent":
                    current_agent = value.lower()
                    if current_agent not in self.robots_rules:
                        self.robots_rules[current_agent] = []
                elif directive == "sitemap":
                    self.robots_sitemaps.append(value)
                elif directive in ("disallow", "allow") and current_agent:
                    if value:
                        self.robots_rules[current_agent].append((directive, value))
        except requests.RequestException as e:
            self._log(f"Error fetching robots.txt: {e}")

    def fetch(self, url: str) -> Optional[PageData]:
        page = PageData(url=url)
        redirect_chain = []
        current_url = url
        max_redirects = 10

        try:
            for _ in range(max_redirects):
                start = time.time()
                resp = self.session.get(
                    current_url, allow_redirects=False,
                    timeout=self.timeout, stream=True
                )
                elapsed = time.time() - start

                if page.response_time == 0:
                    page.response_time = elapsed

                if 300 <= resp.status_code < 400:
                    location = resp.headers.get("Location", "")
                    if location:
                        next_url = urljoin(current_url, location)
                        redirect_chain.append((current_url, resp.status_code, next_url))
                        current_url = next_url
                        continue
                break

            page.redirect_chain = redirect_chain
            page.final_url = current_url
            page.status_code = resp.status_code
            page.headers = dict(resp.headers)
            page.content_language = resp.headers.get("Content-Language", "")

            content_type = resp.headers.get("Content-Type", "")
            if "text/html" not in content_type and "application/xhtml" not in content_type:
                page.is_html = False
                page.content_length = int(resp.headers.get("Content-Length", 0))
                return page

            body = resp.content
            page.content_length = len(body)
            page.is_html = True

            soup = BeautifulSoup(body, "lxml")
            self._extract_page_data(soup, page, current_url)

        except requests.Timeout:
            page.error = "timeout"
            page.status_code = 0
        except requests.ConnectionError:
            page.error = "connection_error"
            page.status_code = 0
        except requests.RequestException as e:
            page.error = str(e)
            page.status_code = 0

        return page

    def _extract_page_data(self, soup: BeautifulSoup, page: PageData, url: str):
        html_tag = soup.find("html")
        if html_tag:
            page.html_lang = html_tag.get("lang", "")

        title_tag = soup.find("title")
        page.title = title_tag.get_text(strip=True) if title_tag else ""

        for meta in soup.find_all("meta"):
            name = (meta.get("name") or meta.get("property") or "").lower()
            content = meta.get("content", "")
            if name == "description":
                page.meta_description = content
            elif name == "robots":
                page.meta_robots = content
            elif name == "viewport":
                page.viewport_meta = content
            elif name.startswith("og:"):
                page.og_tags[name] = content
            elif name.startswith("twitter:"):
                page.twitter_tags[name] = content

        canon = soup.find("link", rel="canonical")
        if canon and canon.get("href"):
            page.canonical = urljoin(url, canon["href"])

        for link in soup.find_all("link", rel="alternate"):
            hreflang = link.get("hreflang")
            href = link.get("href")
            if hreflang and href:
                page.hreflang_tags.append({"lang": hreflang, "href": urljoin(url, href)})

        prev_link = soup.find("link", rel="prev")
        next_link = soup.find("link", rel="next")
        if prev_link and prev_link.get("href"):
            page.rel_prev = urljoin(url, prev_link["href"])
        if next_link and next_link.get("href"):
            page.rel_next = urljoin(url, next_link["href"])

        for level in range(1, 7):
            tag_name = f"h{level}"
            found = soup.find_all(tag_name)
            texts = [h.get_text(strip=True) for h in found]
            page.headings[tag_name] = texts
            if level == 1:
                page.h1_list = texts

        for img in soup.find_all("img"):
            src = img.get("src", "")
            alt = img.get("alt")
            page.images.append({
                "src": urljoin(url, src) if src else "",
                "alt": alt,
                "missing_alt": alt is None or alt.strip() == ""
            })

        for a in soup.find_all("a", href=True):
            href = a["href"]
            if href.startswith(("#", "mailto:", "tel:", "javascript:")):
                continue
            full_url = urljoin(url, href)
            if self._is_internal(full_url):
                page.internal_links.append(self.normalize_url(full_url))
            else:
                page.external_links.append(full_url)

        for script in soup.find_all("script", type="application/ld+json"):
            try:
                data = json.loads(script.string or "")
                if isinstance(data, list):
                    page.structured_data.extend(data)
                else:
                    page.structured_data.append(data)
            except (json.JSONDecodeError, TypeError):
                pass

        for tag in soup(["script", "style", "noscript"]):
            tag.decompose()
        text = soup.get_text(separator=" ", strip=True)
        page.word_count = len(text.split())
        page.body_text = text[:5000]

        normalized = re.sub(r"\s+", " ", text.lower().strip())
        page.content_hash = hashlib.md5(normalized[:2000].encode()).hexdigest()

        scripts = soup.find_all("script", src=True)
        stylesheets = soup.find_all("link", rel="stylesheet")
        page.resource_count = len(scripts) + len(stylesheets) + len(page.images)

    def crawl(self) -> dict[str, PageData]:
        self.parse_robots_txt()

        queue: list[tuple[str, int]] = [(self.base_url, 0)]
        self.visited.add(self.normalize_url(self.base_url))

        try:
            while queue and len(self.pages) < self.max_pages:
                url, depth = queue.pop(0)
                norm_url = self.normalize_url(url)

                if not self._is_crawlable(url):
                    continue
                if not self._is_allowed_by_robots(url):
                    self._log(f"Blocked by robots.txt: {url}")
                    continue

                self._log(f"[{len(self.pages)+1}/{self.max_pages}] depth={depth} {url}")

                page = self.fetch(url)
                if page is None:
                    continue

                page.depth = depth
                self.pages[norm_url] = page

                if depth < self.max_depth and page.is_html and page.status_code == 200:
                    for link in page.internal_links:
                        norm_link = self.normalize_url(link)
                        if norm_link not in self.visited:
                            self.visited.add(norm_link)
                            queue.append((link, depth + 1))

                if self.crawl_delay > 0:
                    time.sleep(self.crawl_delay)

        except KeyboardInterrupt:
            self.interrupted = True
            print("\n  Interrupted! Generating partial report...", file=sys.stderr)

        return self.pages
