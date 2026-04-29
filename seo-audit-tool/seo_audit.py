#!/usr/bin/env python3
"""
SEO Technical Audit Tool
Crawle un site web et genere un rapport Markdown avec 32 verifications SEO.

Usage:
    python seo_audit.py https://example.com --verbose
    python seo_audit.py https://example.com --config config.yaml --output rapport.md
"""

import argparse
import os
import sys
import time
from collections import Counter
from urllib.parse import urlparse

try:
    import yaml
    HAS_YAML = True
except ImportError:
    HAS_YAML = False

from crawler import Crawler
from sitemap import SitemapParser
from analyzer import Analyzer
from report import ReportGenerator


class SiteAuditor:
    def __init__(self, base_url: str, max_pages: int = 50,
                 crawl_delay: float = 1.0, max_depth: int = 3,
                 output_file: str = "report.md", config_file: str = None,
                 timeout: int = 15, user_agent: str = "SEOAuditBot/1.0",
                 verbose: bool = False):
        self.base_url = base_url.rstrip("/")
        self.max_pages = max_pages
        self.crawl_delay = crawl_delay
        self.max_depth = max_depth
        self.output_file = output_file
        self.config_file = config_file
        self.timeout = timeout
        self.user_agent = user_agent
        self.verbose = verbose
        self.config = {}

    def _load_config(self):
        if not self.config_file:
            return
        if not HAS_YAML:
            print("Warning: pyyaml non installe. Config ignoree.", file=sys.stderr)
            print("Installer avec : pip install pyyaml", file=sys.stderr)
            return
        try:
            with open(self.config_file, "r", encoding="utf-8") as f:
                self.config = yaml.safe_load(f) or {}
            if self.verbose:
                print(f"  Config chargee : {self.config_file}", file=sys.stderr)
        except FileNotFoundError:
            print(f"Erreur : fichier introuvable : {self.config_file}", file=sys.stderr)
        except yaml.YAMLError as e:
            print(f"Erreur YAML : {e}", file=sys.stderr)

    def run(self):
        print(f"\n  SEO Audit Tool", file=sys.stderr)
        print(f"  Cible : {self.base_url}", file=sys.stderr)
        print(f"  Max pages : {self.max_pages} | Delai : {self.crawl_delay}s | Profondeur : {self.max_depth}\n", file=sys.stderr)

        self._load_config()
        start_time = time.time()

        # Phase 1 : Crawl
        print("  [1/4] Crawl en cours...", file=sys.stderr)
        crawler = Crawler(
            base_url=self.base_url,
            crawl_delay=self.crawl_delay,
            max_pages=self.max_pages,
            max_depth=self.max_depth,
            timeout=self.timeout,
            user_agent=self.user_agent,
            verbose=self.verbose,
        )
        pages = crawler.crawl()
        print(f"  [1/4] Termine — {len(pages)} pages", file=sys.stderr)

        # Phase 2 : Sitemap
        print("  [2/4] Parsing sitemap...", file=sys.stderr)
        sitemap_parser = SitemapParser(
            base_url=self.base_url,
            session=crawler.session,
            timeout=self.timeout,
            verbose=self.verbose,
        )
        sitemap_urls = sitemap_parser.parse(crawler.robots_sitemaps or None)
        print(f"  [2/4] Termine — {len(sitemap_urls)} URLs dans le sitemap", file=sys.stderr)

        # Phase 2.5 : Fetch URLs du sitemap non crawlees
        sitemap_only = set()
        for s_url in sitemap_urls:
            norm = crawler.normalize_url(s_url)
            if norm not in pages and len(pages) < self.max_pages:
                sitemap_only.add(s_url)

        if sitemap_only and self.verbose:
            print(f"  [2.5] Fetch de {len(sitemap_only)} URLs du sitemap...", file=sys.stderr)
        for s_url in list(sitemap_only)[:20]:
            page = crawler.fetch(s_url)
            if page:
                page.depth = -1
                pages[crawler.normalize_url(s_url)] = page
                if crawler.crawl_delay > 0:
                    time.sleep(crawler.crawl_delay)

        # Phase 3 : Analyse
        print("  [3/4] Analyse...", file=sys.stderr)
        analyzer = Analyzer(
            pages=pages,
            sitemap_urls=sitemap_urls,
            robots_rules=crawler.robots_rules,
            robots_sitemaps=crawler.robots_sitemaps,
            base_url=self.base_url,
            config=self.config,
        )
        findings = analyzer.analyze_all()
        print(f"  [3/4] Termine — {len(findings)} constats", file=sys.stderr)

        # Phase 4 : Rapport
        print("  [4/4] Generation du rapport...", file=sys.stderr)
        crawl_duration = time.time() - start_time
        report_gen = ReportGenerator(
            findings=findings,
            pages=pages,
            base_url=self.base_url,
            crawl_duration=crawl_duration,
            interrupted=crawler.interrupted,
        )
        report = report_gen.generate()

        if not os.path.isabs(self.output_file):
            script_dir = os.path.dirname(os.path.abspath(__file__))
            output_path = os.path.join(script_dir, self.output_file)
        else:
            output_path = os.path.normpath(self.output_file)
        # Write report
        try:
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(report)
        except FileNotFoundError:
            # Fallback: write next to the script
            output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), os.path.basename(self.output_file))
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(report)

        print(f"\n  Rapport sauvegarde : {output_path}", file=sys.stderr)
        print(f"  Duree totale : {crawl_duration:.0f}s", file=sys.stderr)

        severity_counts = Counter(f.severity for f in findings)
        print(f"\n  Resultats : {severity_counts.get('critical', 0)} critiques, "
              f"{severity_counts.get('warning', 0)} avertissements, "
              f"{severity_counts.get('info', 0)} infos\n", file=sys.stderr)


def main():
    parser = argparse.ArgumentParser(
        description="SEO Audit Tool — Crawle un site et genere un rapport Markdown",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Exemples :
  python seo_audit.py https://example.com
  python seo_audit.py https://example.com --max-pages 100 --verbose
  python seo_audit.py https://example.com --config redirects.yaml -o rapport.md
        """
    )
    parser.add_argument("url", help="URL de base du site")
    parser.add_argument("--max-pages", type=int, default=50,
                        help="Nombre max de pages (defaut: 50)")
    parser.add_argument("--crawl-delay", type=float, default=1.0,
                        help="Delai entre requetes en secondes (defaut: 1.0)")
    parser.add_argument("--max-depth", type=int, default=3,
                        help="Profondeur max de crawl (defaut: 3)")
    parser.add_argument("--output", "-o", default="report.md",
                        help="Fichier de sortie (defaut: report.md)")
    parser.add_argument("--config", "-c", default=None,
                        help="Fichier YAML de configuration")
    parser.add_argument("--timeout", type=int, default=15,
                        help="Timeout par requete en secondes (defaut: 15)")
    parser.add_argument("--user-agent", default="SEOAuditBot/1.0 (technical-audit)",
                        help="User-Agent personnalise")
    parser.add_argument("--verbose", "-v", action="store_true",
                        help="Afficher la progression")

    args = parser.parse_args()

    parsed = urlparse(args.url)
    if not parsed.scheme or not parsed.netloc:
        print("Erreur : URL complete requise (ex: https://example.com)", file=sys.stderr)
        sys.exit(1)

    auditor = SiteAuditor(
        base_url=args.url,
        max_pages=args.max_pages,
        crawl_delay=args.crawl_delay,
        max_depth=args.max_depth,
        output_file=args.output,
        config_file=args.config,
        timeout=args.timeout,
        user_agent=args.user_agent,
        verbose=args.verbose,
    )
    auditor.run()


if __name__ == "__main__":
    main()
