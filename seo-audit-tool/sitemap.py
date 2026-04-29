"""Parser de sitemap XML."""

import sys
from typing import Optional

import requests
from bs4 import BeautifulSoup


class SitemapParser:
    def __init__(self, base_url: str, session: requests.Session,
                 timeout: int = 15, verbose: bool = False):
        from urllib.parse import urlparse
        self.base_url = base_url.rstrip("/")
        self.session = session
        self.timeout = timeout
        self.verbose = verbose
        parsed = urlparse(self.base_url)
        self.scheme = parsed.scheme
        self.domain = parsed.netloc

    def _log(self, msg: str):
        if self.verbose:
            print(f"  [sitemap] {msg}", file=sys.stderr)

    def parse(self, sitemap_urls: Optional[list[str]] = None) -> set[str]:
        urls_found: set[str] = set()
        if not sitemap_urls:
            sitemap_urls = [f"{self.scheme}://{self.domain}/sitemap.xml"]

        for sitemap_url in sitemap_urls:
            self._fetch_sitemap(sitemap_url, urls_found)

        self._log(f"Total URLs in sitemaps: {len(urls_found)}")
        return urls_found

    def _fetch_sitemap(self, url: str, urls_found: set[str], depth: int = 0):
        if depth > 5:
            return
        self._log(f"Fetching: {url}")
        try:
            resp = self.session.get(url, timeout=self.timeout)
            if resp.status_code != 200:
                self._log(f"Sitemap returned {resp.status_code}: {url}")
                return
            content = resp.text

            if "<sitemapindex" in content:
                soup = BeautifulSoup(content, "lxml-xml")
                for loc in soup.find_all("loc"):
                    child_url = loc.get_text(strip=True)
                    self._fetch_sitemap(child_url, urls_found, depth + 1)
            else:
                soup = BeautifulSoup(content, "lxml-xml")
                for loc in soup.find_all("loc"):
                    urls_found.add(loc.get_text(strip=True))

        except requests.RequestException as e:
            self._log(f"Error: {e}")
