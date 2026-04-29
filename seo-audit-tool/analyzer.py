"""Analyzer — 32 vérifications SEO techniques."""

import re
from collections import Counter, defaultdict
from urllib.parse import urlparse, urljoin, urlunparse

from models import PageData, Finding


class Analyzer:
    def __init__(self, pages: dict[str, PageData], sitemap_urls: set[str],
                 robots_rules: dict, robots_sitemaps: list[str],
                 base_url: str, config: dict):
        self.pages = pages
        self.sitemap_urls = sitemap_urls
        self.robots_rules = robots_rules
        self.robots_sitemaps = robots_sitemaps
        self.base_url = base_url
        self.config = config
        self.findings: list[Finding] = []

    def analyze_all(self) -> list[Finding]:
        self.findings = []

        # Migration checks
        self._check_redirect_mappings()
        self._check_hub_404s()
        self._check_duplicate_aliases()
        self._check_media_404s()
        self._check_node_urls_in_sitemap()
        self._check_old_urls_live()
        self._check_sitemap_content()
        self._check_hreflang_redirects()
        self._check_noindex_in_sitemap()
        self._check_empty_h1()
        self._check_canonical_loops()

        # Critical indexation checks
        self._check_noindex_nofollow()
        self._check_sitemap_presence()
        self._check_html_lang_tag()
        self._check_placeholder_content()

        # Technical checks
        self._check_robots_txt()
        self._check_canonical_consistency()
        self._check_structured_data()
        self._check_og_twitter_meta()
        self._check_mixed_content()
        self._check_redirect_chains()
        self._check_response_times()
        self._check_security_headers()
        self._check_broken_internal_links()
        self._check_crawl_depth()
        self._check_meta_titles_descriptions()
        self._check_heading_hierarchy()
        self._check_image_alt_text()
        self._check_pagination()
        self._check_js_rendering()
        self._check_mobile_viewport()
        self._check_language_consistency()
        self._check_page_weight()
        self._check_duplicate_content()
        self._check_orphan_pages()

        return self.findings

    def _add(self, severity, category, title, details,
             affected_urls=None, recommendation=""):
        self.findings.append(Finding(
            severity=severity, category=category, title=title,
            details=details, affected_urls=affected_urls or [],
            recommendation=recommendation
        ))

    def _normalize(self, url: str) -> str:
        parsed = urlparse(url)
        path = parsed.path.rstrip("/") or "/"
        return urlunparse((
            parsed.scheme or "https",
            parsed.netloc or urlparse(self.base_url).netloc,
            path, "", parsed.query, ""
        ))

    # ---------------------------------------------------------------
    # MIGRATION CHECKS (11)
    # ---------------------------------------------------------------

    def _check_redirect_mappings(self):
        mappings = self.config.get("redirect_mappings", {})
        if not mappings:
            return
        issues = []
        for old_path, expected_new_path in mappings.items():
            full_old = urljoin(self.base_url, old_path)
            norm = self._normalize(full_old)
            page = self.pages.get(norm)
            if not page:
                issues.append(f"- `{old_path}` : non crawle")
                continue
            if page.status_code == 404:
                issues.append(f"- `{old_path}` -> **404** (devrait pointer vers `{expected_new_path}`)")
            elif page.status_code in (301, 302):
                actual_dest = page.redirect_chain[-1][2] if page.redirect_chain else page.final_url
                dest_path = urlparse(actual_dest).path
                if dest_path.rstrip("/") != expected_new_path.rstrip("/"):
                    issues.append(f"- `{old_path}` -> `{dest_path}` (attendu : `{expected_new_path}`)")
            elif page.status_code == 200:
                issues.append(f"- `{old_path}` -> **200** (redirection 301 manquante)")
        if issues:
            self._add("critical", "Redirections", "Redirections 301 manquantes ou incorrectes",
                       "Verification des mappings :\n" + "\n".join(issues),
                       recommendation="Configurer les 301 dans Drupal (module Redirect) ou .htaccess")

    def _check_hub_404s(self):
        hub_pages = self.config.get("hub_pages", [])
        issues = []
        for path in hub_pages:
            full_url = urljoin(self.base_url, path)
            norm = self._normalize(full_url)
            page = self.pages.get(norm)
            if page and page.status_code == 404:
                issues.append(full_url)
            elif not page:
                issues.append(f"{full_url} (non crawle)")
        if issues:
            self._add("critical", "Architecture", "Pages hub en 404",
                       "Pages tetes de section en 404 :",
                       affected_urls=issues,
                       recommendation="Creer ces pages ou configurer des 301")

    def _check_duplicate_aliases(self):
        urls_by_path = defaultdict(list)
        for url, page in self.pages.items():
            if page.status_code == 200 and page.is_html:
                path = urlparse(url).path
                urls_by_path[path].append(url)
        issues = []
        for path in urls_by_path:
            if re.search(r"-\d+$", path):
                base_path = re.sub(r"-\d+$", "", path)
                if base_path in urls_by_path:
                    issues.append(f"- `{path}` doublon de `{base_path}`")
        if issues:
            self._add("warning", "Contenu duplique", "Alias URL avec suffixe numerique",
                       "Drupal cree des alias en cas de conflit :\n" + "\n".join(issues),
                       recommendation="Supprimer les doublons et rediriger en 301")

    def _check_media_404s(self):
        media_urls = []
        for url, page in self.pages.items():
            if page.is_html and page.status_code == 200:
                for img in page.images:
                    src = img.get("src", "")
                    if "/sites/" in src and "/files/" in src:
                        media_urls.append(src)
        if media_urls:
            unique = list(set(media_urls))[:20]
            self._add("critical", "Medias", f"Images /sites/*/files/ ({len(set(media_urls))})",
                       "Chemins medias potentiellement casses :\n" +
                       "\n".join(f"- `{u}`" for u in unique),
                       affected_urls=unique,
                       recommendation="Verifier les chemins et configurer une regle de reecriture serveur")

    def _check_node_urls_in_sitemap(self):
        node_urls = [u for u in self.sitemap_urls if "/node/" in urlparse(u).path]
        if node_urls:
            self._add("warning", "Sitemap", f"URLs /node/ dans le sitemap ({len(node_urls)})",
                       "\n".join(f"- `{u}`" for u in node_urls[:10]),
                       affected_urls=node_urls,
                       recommendation="Retirer du sitemap et activer la redirection node -> alias")

    def _check_old_urls_live(self):
        old_patterns = self.config.get("old_url_patterns", [])
        if not old_patterns:
            return
        live_old = []
        for url, page in self.pages.items():
            path = urlparse(url).path
            for pattern in old_patterns:
                if path.startswith(pattern) and page.status_code == 200:
                    live_old.append(url)
        if live_old:
            self._add("warning", "Migration", f"Anciennes URLs actives ({len(live_old)})",
                       "\n".join(f"- `{u}`" for u in live_old[:10]),
                       affected_urls=live_old,
                       recommendation="Configurer des 301 vers les nouvelles URLs")

    def _check_sitemap_content(self):
        issues = []
        for sitemap_url in self.sitemap_urls:
            norm = self._normalize(sitemap_url)
            page = self.pages.get(norm)
            if page:
                if page.status_code == 404:
                    issues.append(f"- `{sitemap_url}` -> **404**")
                elif page.status_code in (301, 302):
                    issues.append(f"- `{sitemap_url}` -> **{page.status_code}**")
                elif page.meta_robots and "noindex" in page.meta_robots.lower():
                    issues.append(f"- `{sitemap_url}` -> noindex")
        if issues:
            self._add("warning", "Sitemap", f"URLs problematiques dans le sitemap ({len(issues)})",
                       "\n".join(issues[:20]),
                       recommendation="Nettoyer le sitemap : uniquement des URLs 200 indexables")

    def _check_hreflang_redirects(self):
        issues = []
        for url, page in self.pages.items():
            if page.status_code != 200:
                continue
            for tag in page.hreflang_tags:
                href = tag["href"]
                norm = self._normalize(href)
                ref_page = self.pages.get(norm)
                if ref_page and ref_page.status_code in (301, 302):
                    issues.append(f"- `{url}` hreflang `{tag['lang']}` -> `{href}` ({ref_page.status_code})")
        if issues:
            self._add("warning", "Hreflang", f"Hreflang vers des redirections ({len(issues)})",
                       "\n".join(issues[:10]),
                       recommendation="Pointer les hreflang vers les URLs finales")

    def _check_noindex_in_sitemap(self):
        noindex = []
        for sitemap_url in self.sitemap_urls:
            norm = self._normalize(sitemap_url)
            page = self.pages.get(norm)
            if page and page.status_code == 200:
                if page.meta_robots and "noindex" in page.meta_robots.lower():
                    noindex.append(sitemap_url)
        if noindex:
            self._add("warning", "Indexation", f"Pages noindex dans le sitemap ({len(noindex)})",
                       "\n".join(f"- `{u}`" for u in noindex[:15]),
                       affected_urls=noindex,
                       recommendation="Retirer du sitemap OU retirer le noindex")

    def _check_empty_h1(self):
        issues = []
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            if not page.h1_list:
                issues.append(f"- `{url}` — H1 absent")
            elif any(h.strip() == "" for h in page.h1_list):
                issues.append(f"- `{url}` — H1 vide")
        if issues:
            self._add("warning", "Contenu", f"H1 manquant ou vide ({len(issues)})",
                       "\n".join(issues[:15]),
                       recommendation="Ajouter un H1 descriptif unique par page")

    def _check_canonical_loops(self):
        issues = []
        for url, page in self.pages.items():
            if not page.canonical or page.status_code != 200:
                continue
            canon_norm = self._normalize(page.canonical)
            canon_page = self.pages.get(canon_norm)
            if canon_page and canon_page.canonical:
                other_canon = self._normalize(canon_page.canonical)
                norm_url = self._normalize(url)
                if other_canon == norm_url and canon_norm != norm_url:
                    issues.append(f"- `{url}` <-> `{page.canonical}`")
        if issues:
            self._add("warning", "Canonical", f"Boucles canonical ({len(issues)})",
                       "\n".join(issues[:10]),
                       recommendation="Definir une seule page canonique")

    # ---------------------------------------------------------------
    # CRITICAL INDEXATION CHECKS (4)
    # ---------------------------------------------------------------

    def _check_noindex_nofollow(self):
        noindex_pages = []
        nofollow_pages = []
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            robots = page.meta_robots.lower()
            if "noindex" in robots:
                noindex_pages.append(url)
            if "nofollow" in robots:
                nofollow_pages.append(url)
        if noindex_pages or nofollow_pages:
            details = ""
            if noindex_pages:
                details += f"**{len(noindex_pages)} pages avec noindex** — Google ne les indexera pas :\n"
                details += "\n".join(f"- `{u}`" for u in noindex_pages[:20])
            if nofollow_pages:
                if details:
                    details += "\n\n"
                details += f"**{len(nofollow_pages)} pages avec nofollow** — les liens ne transmettent pas d'autorite :\n"
                details += "\n".join(f"- `{u}`" for u in nofollow_pages[:20])
            total_html = sum(1 for p in self.pages.values() if p.status_code == 200 and p.is_html)
            if len(noindex_pages) == total_html and total_html > 0:
                details += "\n\n**ALERTE : TOUTES les pages sont en noindex — le site entier est invisible pour Google !**"
            self._add("critical", "Indexation", f"Pages bloquees par meta robots ({len(noindex_pages)} noindex, {len(nofollow_pages)} nofollow)",
                       details, affected_urls=list(set(noindex_pages + nofollow_pages)),
                       recommendation="Retirer les balises meta robots noindex/nofollow sauf si l'exclusion est intentionnelle")

    def _check_sitemap_presence(self):
        has_sitemap_in_robots = len(self.robots_sitemaps) > 0
        has_sitemap_urls = len(self.sitemap_urls) > 0
        if not has_sitemap_urls:
            details = "Aucune URL trouvee dans le sitemap XML."
            if not has_sitemap_in_robots:
                details += "\nAucune reference au sitemap dans robots.txt."
            self._add("critical", "Indexation", "Sitemap XML absent ou vide",
                       details,
                       recommendation="Creer un sitemap.xml et le declarer dans robots.txt (Sitemap: https://example.com/sitemap.xml)")

    def _check_html_lang_tag(self):
        issues = []
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            if not page.html_lang:
                issues.append(f"- `{url}` — attribut lang absent sur <html>")
            elif page.html_lang.lower() not in ("fr", "fr-ca", "fr-fr", "en", "en-ca", "en-us"):
                issues.append(f"- `{url}` — lang=\"{page.html_lang}\" (valeur non standard ou incorrecte)")
        if issues:
            self._add("critical", "Indexation", f"Balise lang incorrecte ou absente ({len(issues)})",
                       "\n".join(issues[:20]),
                       recommendation="Ajouter lang=\"fr-CA\" sur la balise <html> pour indiquer la langue et la region")

    def _check_placeholder_content(self):
        lorem_pages = []
        lorem_pattern = re.compile(r"lorem\s+ipsum", re.IGNORECASE)
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            search_text = page.body_text or " ".join(
                text for level in page.headings.values() for text in level
            )
            if lorem_pattern.search(search_text):
                lorem_pages.append(url)
        if lorem_pages:
            details = f"**{len(lorem_pages)} pages contiennent du Lorem Ipsum** :\n"
            details += "\n".join(f"- `{u}`" for u in lorem_pages[:15])
            self._add("critical", "Contenu", f"Contenu placeholder detecte ({len(lorem_pages)})",
                       details, affected_urls=lorem_pages,
                       recommendation="Remplacer tout le contenu Lorem Ipsum par du vrai contenu")

    # ---------------------------------------------------------------
    # TECHNICAL CHECKS (20)
    # ---------------------------------------------------------------

    def _check_robots_txt(self):
        if not self.robots_rules:
            self._add("info", "Robots.txt", "Aucun robots.txt",
                       "Le site n'a pas de robots.txt.",
                       recommendation="Creer un robots.txt")
            return
        details = []
        all_disallows = []
        for agent, rules in self.robots_rules.items():
            disallows = [r[1] for r in rules if r[0] == "disallow"]
            allows = [r[1] for r in rules if r[0] == "allow"]
            all_disallows.extend(disallows)
            details.append(f"**User-agent: {agent}**")
            if disallows:
                details.append("  Disallow: " + ", ".join(f"`{d}`" for d in disallows))
            if allows:
                details.append("  Allow: " + ", ".join(f"`{a}`" for a in allows))
        if self.robots_sitemaps:
            details.append(f"\nSitemaps : " + ", ".join(f"`{s}`" for s in self.robots_sitemaps))
        severity = "critical" if any(d == "/" for d in all_disallows) else "info"
        if any(d == "/" for d in all_disallows):
            details.append("\n**ATTENTION : Disallow: / — site entier bloque !**")
        self._add(severity, "Robots.txt", "Analyse robots.txt", "\n".join(details))

    def _check_canonical_consistency(self):
        issues = []
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            if not page.canonical:
                issues.append(f"- `{url}` — canonical manquant")
            elif self._normalize(page.canonical) != self._normalize(url):
                if self._normalize(page.canonical) != self._normalize(page.final_url):
                    issues.append(f"- `{url}` -> `{page.canonical}`")
        if issues:
            self._add("warning", "Canonical", f"Incoherences canonical ({len(issues)})",
                       "\n".join(issues[:20]),
                       recommendation="Chaque page doit avoir un canonical auto-reference")

    def _check_structured_data(self):
        pages_with = 0
        pages_without = []
        issues = []
        required = {
            "Organization": ["name", "url"],
            "LocalBusiness": ["name", "address"],
            "Article": ["headline", "datePublished"],
            "BreadcrumbList": ["itemListElement"],
        }
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            if page.structured_data:
                pages_with += 1
                for sd in page.structured_data:
                    sd_type = sd.get("@type", "")
                    if sd_type in required:
                        missing = [f for f in required[sd_type] if f not in sd]
                        if missing:
                            issues.append(f"- `{url}` {sd_type} : manque `{', '.join(missing)}`")
            else:
                pages_without.append(url)
        total = sum(1 for p in self.pages.values() if p.status_code == 200 and p.is_html)
        details = f"Avec JSON-LD : {pages_with}/{total}\n"
        if issues:
            details += "\n" + "\n".join(issues[:15])
        if pages_without:
            details += f"\n\n{len(pages_without)} pages sans donnees structurees."
        self._add("info" if pages_with else "warning", "Donnees structurees", "Audit JSON-LD",
                  details, recommendation="Ajouter JSON-LD (Organization, BreadcrumbList) sur les pages cles")

    def _check_og_twitter_meta(self):
        missing_og = []
        required_og = {"og:title", "og:description", "og:image", "og:url"}
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            if not set(page.og_tags.keys()) & required_og:
                missing_og.append(url)
        if missing_og:
            self._add("info", "Social Meta", f"Open Graph manquant ({len(missing_og)} pages)",
                       f"{len(missing_og)} pages sans balises Open Graph.",
                       affected_urls=missing_og[:5],
                       recommendation="Ajouter og:title, og:description, og:image, og:url")

    def _check_mixed_content(self):
        issues = []
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html or not url.startswith("https"):
                continue
            for img in page.images:
                if img["src"].startswith("http://"):
                    issues.append(f"- `{url}` image HTTP : `{img['src'][:80]}`")
                    break
        if issues:
            self._add("warning", "Securite", f"Contenu mixte HTTP/HTTPS ({len(issues)})",
                       "\n".join(issues[:10]),
                       recommendation="Passer toutes les ressources en HTTPS")

    def _check_redirect_chains(self):
        chains = []
        for url, page in self.pages.items():
            if len(page.redirect_chain) > 1:
                chain_str = " -> ".join(
                    [page.redirect_chain[0][0]] +
                    [f"({r[1]}) {r[2]}" for r in page.redirect_chain]
                )
                chains.append(f"- {chain_str}")
        if chains:
            self._add("warning", "Redirections", f"Chaines de redirections ({len(chains)})",
                       "\n".join(chains[:10]),
                       recommendation="Pointer directement vers l'URL finale")

    def _check_response_times(self):
        slow = []
        times = []
        for url, page in self.pages.items():
            if page.response_time > 0:
                times.append(page.response_time)
                if page.response_time > 1.0:
                    slow.append((url, page.response_time))
        if not times:
            return
        avg = sum(times) / len(times)
        slow.sort(key=lambda x: x[1], reverse=True)
        details = f"TTFB moyen : **{avg:.2f}s**\n"
        if slow:
            details += "\nPages lentes (> 1s) :\n"
            details += "\n".join(f"- `{u}` — {t:.2f}s" for u, t in slow[:10])
        self._add("warning" if slow else "info", "Performance", "Temps de reponse (TTFB)",
                  details, affected_urls=[u for u, _ in slow[:10]],
                  recommendation="Optimiser le cache serveur et activer un CDN")

    def _check_security_headers(self):
        missing = defaultdict(list)
        headers = {
            "Strict-Transport-Security": "HSTS",
            "X-Content-Type-Options": "X-Content-Type-Options",
            "X-Frame-Options": "X-Frame-Options",
            "Content-Security-Policy": "CSP",
            "Referrer-Policy": "Referrer-Policy",
        }
        for url, page in self.pages.items():
            if page.status_code != 200:
                continue
            h_lower = {k.lower(): v for k, v in page.headers.items()}
            for header, label in headers.items():
                if header.lower() not in h_lower:
                    missing[label].append(url)
        if missing:
            details = "Headers manquants :\n"
            for h, urls in missing.items():
                details += f"- **{h}** : absent sur {len(urls)} pages\n"
            self._add("info", "Securite", "Headers HTTP de securite", details,
                       recommendation="Configurer au niveau serveur (Apache/Nginx)")

    def _check_broken_internal_links(self):
        broken = defaultdict(list)
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            for link in page.internal_links:
                norm = self._normalize(link)
                target = self.pages.get(norm)
                if target and target.status_code in (404, 410):
                    broken[link].append(url)
        if broken:
            details = "Liens cassés :\n"
            for target, sources in list(broken.items())[:15]:
                details += f"- `{target}` (**404**) — {len(sources)} page(s)\n"
            self._add("critical", "Liens internes", f"Liens internes casses ({len(broken)})",
                       details, affected_urls=list(broken.keys())[:15],
                       recommendation="Corriger ou supprimer ces liens")

    def _check_crawl_depth(self):
        deep = [(u, p.depth) for u, p in self.pages.items()
                if p.depth > 3 and p.status_code == 200]
        if deep:
            deep.sort(key=lambda x: x[1], reverse=True)
            details = f"{len(deep)} pages a plus de 3 clics :\n"
            details += "\n".join(f"- `{u}` — profondeur {d}" for u, d in deep[:15])
            self._add("warning", "Architecture", f"Pages profondes ({len(deep)})",
                       details, affected_urls=[u for u, _ in deep[:15]],
                       recommendation="Ameliorer le maillage interne")

    def _check_meta_titles_descriptions(self):
        issues = []
        titles = Counter()
        descs = Counter()
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            if not page.title:
                issues.append(f"- `{url}` — titre manquant")
            elif len(page.title) < 15:
                issues.append(f"- `{url}` — titre trop court ({len(page.title)} car.)")
            elif len(page.title) > 65:
                issues.append(f"- `{url}` — titre trop long ({len(page.title)} car.)")
            titles[page.title] += 1
            if not page.meta_description:
                issues.append(f"- `{url}` — meta description manquante")
            elif len(page.meta_description) < 50:
                issues.append(f"- `{url}` — meta description trop courte")
            elif len(page.meta_description) > 160:
                issues.append(f"- `{url}` — meta description trop longue")
            descs[page.meta_description] += 1
        for t, c in titles.items():
            if c > 1 and t:
                issues.append(f"- Titre duplique ({c}x) : `{t[:60]}`")
        for d, c in descs.items():
            if c > 1 and d:
                issues.append(f"- Meta desc dupliquee ({c}x) : `{d[:60]}...`")
        if issues:
            self._add("warning", "Meta tags", f"Titres et meta descriptions ({len(issues)})",
                       "\n".join(issues[:25]),
                       recommendation="Titres uniques 50-65 car., meta descriptions 120-155 car.")

    def _check_heading_hierarchy(self):
        issues = []
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            if len(page.h1_list) > 1:
                issues.append(f"- `{url}` — {len(page.h1_list)} H1")
            levels = [i for i in range(1, 7) if page.headings.get(f"h{i}")]
            for i in range(len(levels) - 1):
                if levels[i + 1] - levels[i] > 1:
                    issues.append(f"- `{url}` — saut H{levels[i]} -> H{levels[i+1]}")
        if issues:
            self._add("warning", "Contenu", f"Hierarchie headings ({len(issues)})",
                       "\n".join(issues[:15]),
                       recommendation="Respecter H1 > H2 > H3 sans sauter de niveaux")

    def _check_image_alt_text(self):
        total_missing = 0
        pages_issues = []
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            missing = [img for img in page.images if img["missing_alt"]]
            if missing:
                total_missing += len(missing)
                pages_issues.append((url, len(missing)))
        if pages_issues:
            pages_issues.sort(key=lambda x: x[1], reverse=True)
            details = f"**{total_missing} images** sans alt sur {len(pages_issues)} pages :\n"
            details += "\n".join(f"- `{u}` — {n} images" for u, n in pages_issues[:15])
            self._add("warning", "Accessibilite", f"Images sans alt ({total_missing})",
                       details, affected_urls=[u for u, _ in pages_issues[:15]],
                       recommendation="Ajouter un alt descriptif a chaque image")

    def _check_pagination(self):
        pages_paginated = [u for u, p in self.pages.items()
                          if p.status_code == 200 and p.is_html and (p.rel_prev or p.rel_next)]
        if pages_paginated:
            self._add("info", "Pagination", f"Pages avec rel=prev/next ({len(pages_paginated)})",
                       "\n".join(f"- `{u}`" for u in pages_paginated[:10]),
                       recommendation="Verifier le canonical auto-reference sur les pages paginees")

    def _check_js_rendering(self):
        suspect = [(u, p.word_count, p.content_length) for u, p in self.pages.items()
                   if p.status_code == 200 and p.is_html
                   and p.word_count < 50 and p.content_length > 5000]
        if suspect:
            details = "Pages potentiellement rendues cote client :\n"
            details += "\n".join(f"- `{u}` — {wc} mots, {cl} octets" for u, wc, cl in suspect[:10])
            self._add("warning", "Rendering", f"Rendu JS potentiel ({len(suspect)})",
                       details, recommendation="Verifier le contenu dans le HTML source")

    def _check_mobile_viewport(self):
        missing = [u for u, p in self.pages.items()
                   if p.status_code == 200 and p.is_html and not p.viewport_meta]
        if missing:
            self._add("warning", "Mobile", f"Viewport manquante ({len(missing)})",
                       "\n".join(f"- `{u}`" for u in missing[:10]),
                       affected_urls=missing[:10],
                       recommendation="Ajouter <meta name='viewport' content='width=device-width, initial-scale=1'>")

    def _check_language_consistency(self):
        issues = []
        for url, page in self.pages.items():
            if page.status_code != 200 or not page.is_html:
                continue
            if not page.html_lang:
                issues.append(f"- `{url}` — lang manquant sur <html>")
                continue
            if page.hreflang_tags:
                self_ref = any(self._normalize(t["href"]) == self._normalize(url)
                              for t in page.hreflang_tags)
                if not self_ref:
                    issues.append(f"- `{url}` — hreflang sans auto-reference")
        if issues:
            self._add("warning", "Internationalisation", f"Problemes de langue ({len(issues)})",
                       "\n".join(issues[:15]),
                       recommendation="Definir lang sur <html> et inclure un hreflang auto-reference")

    def _check_page_weight(self):
        heavy = [(u, p.content_length) for u, p in self.pages.items()
                 if p.status_code == 200 and p.is_html and p.content_length > 500_000]
        high_res = [(u, p.resource_count) for u, p in self.pages.items()
                    if p.status_code == 200 and p.is_html and p.resource_count > 80]
        details = ""
        if heavy:
            heavy.sort(key=lambda x: x[1], reverse=True)
            details += "HTML > 500 KB :\n" + "\n".join(f"- `{u}` — {s/1024:.0f} KB" for u, s in heavy[:10])
        if high_res:
            high_res.sort(key=lambda x: x[1], reverse=True)
            details += "\n\n> 80 ressources :\n" + "\n".join(f"- `{u}` — {n}" for u, n in high_res[:10])
        if details:
            self._add("warning", "Performance", "Poids des pages", details,
                       recommendation="Minifier, differer les scripts, optimiser les images")

    def _check_duplicate_content(self):
        groups = defaultdict(list)
        for url, page in self.pages.items():
            if page.status_code == 200 and page.is_html and page.content_hash:
                groups[page.content_hash].append(url)
        dupes = {h: urls for h, urls in groups.items() if len(urls) > 1}
        if dupes:
            details = "Pages avec contenu identique :\n"
            for h, urls in list(dupes.items())[:10]:
                details += "\nGroupe :\n" + "\n".join(f"  - `{u}`" for u in urls)
            self._add("warning", "Contenu duplique",
                       f"Contenu duplique ({sum(len(u) for u in dupes.values())} pages)",
                       details, recommendation="Consolider avec des canonicals ou supprimer")

    def _check_orphan_pages(self):
        if not self.sitemap_urls:
            return
        linked = set()
        for url, page in self.pages.items():
            if page.status_code == 200:
                for link in page.internal_links:
                    linked.add(self._normalize(link))
        orphans = []
        for s_url in self.sitemap_urls:
            norm = self._normalize(s_url)
            if norm not in linked:
                page = self.pages.get(norm)
                if page and page.status_code == 200:
                    orphans.append(s_url)
        if orphans:
            self._add("warning", "Architecture", f"Pages orphelines ({len(orphans)})",
                       "Dans le sitemap mais sans lien interne :\n" +
                       "\n".join(f"- `{u}`" for u in orphans[:15]),
                       affected_urls=orphans[:15],
                       recommendation="Ajouter des liens internes ou retirer du sitemap")
