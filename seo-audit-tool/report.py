"""Generateur de rapport Markdown."""

import time
from collections import Counter
from urllib.parse import urlparse

from models import PageData, Finding


class ReportGenerator:
    SEVERITY_ORDER = {"critical": 0, "warning": 1, "info": 2}
    SEVERITY_LABELS = {"critical": "Critique", "warning": "Avertissement", "info": "Info"}
    SEVERITY_ICONS = {"critical": "🔴", "warning": "🟡", "info": "🔵"}

    def __init__(self, findings: list[Finding], pages: dict[str, PageData],
                 base_url: str, crawl_duration: float, interrupted: bool = False):
        self.findings = sorted(findings, key=lambda f: self.SEVERITY_ORDER.get(f.severity, 9))
        self.pages = pages
        self.base_url = base_url
        self.crawl_duration = crawl_duration
        self.interrupted = interrupted

    def generate(self) -> str:
        lines = []
        lines.append("# Rapport d'audit SEO technique\n")
        lines.append(f"**Site :** {self.base_url}  ")
        lines.append(f"**Date :** {time.strftime('%Y-%m-%d %H:%M')}  ")
        lines.append(f"**Pages crawlees :** {len(self.pages)}  ")
        lines.append(f"**Duree du crawl :** {self.crawl_duration:.0f}s  ")
        if self.interrupted:
            lines.append("**Note :** Crawl interrompu — rapport partiel  ")
        lines.append("")

        # Resume executif
        lines.append("## Resume executif\n")
        severity_counts = Counter(f.severity for f in self.findings)
        lines.append("| Severite | Nombre |")
        lines.append("|----------|--------|")
        for sev in ["critical", "warning", "info"]:
            icon = self.SEVERITY_ICONS[sev]
            label = self.SEVERITY_LABELS[sev]
            count = severity_counts.get(sev, 0)
            lines.append(f"| {icon} {label} | {count} |")
        lines.append("")

        # Priorites
        critical = [f for f in self.findings if f.severity == "critical"]
        if critical:
            lines.append("### Priorites immediates\n")
            for i, f in enumerate(critical, 1):
                lines.append(f"{i}. **{f.title}** ({f.category})")
            lines.append("")

        # Findings par severite
        for severity in ["critical", "warning", "info"]:
            sev_findings = [f for f in self.findings if f.severity == severity]
            if not sev_findings:
                continue
            icon = self.SEVERITY_ICONS[severity]
            label = self.SEVERITY_LABELS[severity]
            lines.append(f"---\n\n## {icon} {label}s\n")
            for f in sev_findings:
                lines.append(f"### {f.title}\n")
                lines.append(f"**Categorie :** {f.category}\n")
                lines.append(f"{f.details}\n")
                if f.recommendation:
                    lines.append(f"**Recommandation :** {f.recommendation}\n")
                lines.append("")

        # Stats
        lines.append("---\n\n## Statistiques de crawl\n")
        lines.extend(self._stats())

        # Inventaire
        lines.append("\n---\n\n## Annexe : Inventaire des pages\n")
        lines.extend(self._inventory())

        return "\n".join(lines)

    def _stats(self) -> list[str]:
        lines = []
        html_pages = [p for p in self.pages.values() if p.is_html and p.status_code == 200]
        all_pages = list(self.pages.values())

        status_counts = Counter(p.status_code for p in all_pages)
        lines.append("### Codes HTTP\n")
        lines.append("| Code | Nombre |")
        lines.append("|------|--------|")
        for code, count in sorted(status_counts.items()):
            lines.append(f"| {code} | {count} |")
        lines.append("")

        times = [p.response_time for p in all_pages if p.response_time > 0]
        if times:
            lines.append(f"- **TTFB moyen :** {sum(times)/len(times):.2f}s")
            lines.append(f"- **TTFB min :** {min(times):.2f}s")
            lines.append(f"- **TTFB max :** {max(times):.2f}s")

        if html_pages:
            lines.append(f"- **Liens internes :** {sum(len(p.internal_links) for p in html_pages)}")
            lines.append(f"- **Liens externes :** {sum(len(p.external_links) for p in html_pages)}")
            lines.append(f"- **Images :** {sum(len(p.images) for p in html_pages)}")
            lines.append(f"- **Pages avec JSON-LD :** {sum(1 for p in html_pages if p.structured_data)}/{len(html_pages)}")
            lines.append(f"- **Pages avec Open Graph :** {sum(1 for p in html_pages if p.og_tags)}/{len(html_pages)}")
            lines.append(f"- **Pages avec canonical :** {sum(1 for p in html_pages if p.canonical)}/{len(html_pages)}")
        lines.append("")
        return lines

    def _inventory(self) -> list[str]:
        lines = []
        lines.append("| URL | Statut | TTFB | Titre | Prof. |")
        lines.append("|-----|--------|------|-------|-------|")
        for url, page in sorted(self.pages.items(), key=lambda x: x[1].depth):
            path = urlparse(url).path
            title = (page.title[:40] + "...") if len(page.title) > 40 else page.title
            title = title.replace("|", "\\|")
            ttfb = f"{page.response_time:.2f}s" if page.response_time > 0 else "—"
            lines.append(f"| `{path}` | {page.status_code} | {ttfb} | {title} | {page.depth} |")
        lines.append("")
        return lines
