# SEO Audit Tool

Outil d'audit SEO technique en ligne de commande. Crawle un site web et produit un rapport Markdown structuré avec 32 vérifications techniques.

## Installation

### 1. Installer Python

Télécharger Python 3.12+ depuis [python.org](https://www.python.org/downloads/).

**Important** : cocher "Add python.exe to PATH" pendant l'installation.

### 2. Créer l'environnement

```bash
cd seo-audit-tool
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

### 3. Installer les dépendances

```bash
pip install -r requirements.txt
```

## Utilisation

### Audit rapide

```bash
python seo_audit.py https://www.example.com --verbose
```

### Audit complet avec config

```bash
python seo_audit.py https://www.groupedpa.com/fr \
    --config config_example.yaml \
    --max-pages 300 \
    --verbose \
    --output rapport-groupedpa.md
```

### Options

| Option | Défaut | Description |
|--------|--------|-------------|
| `url` | (requis) | URL de base du site |
| `--max-pages` | 200 | Nombre max de pages à crawler |
| `--crawl-delay` | 1.0 | Délai entre requêtes (secondes) |
| `--max-depth` | 5 | Profondeur max de crawl |
| `--output` / `-o` | report.md | Fichier de sortie |
| `--config` / `-c` | — | Fichier YAML de configuration |
| `--timeout` | 15 | Timeout par requête (secondes) |
| `--user-agent` | SEOAuditBot/1.0 | User-Agent personnalisé |
| `--verbose` / `-v` | — | Afficher la progression |

## Fichier de configuration YAML

Le fichier de config permet de vérifier des redirections spécifiques et des pages hub. Voir `config_example.yaml` pour un exemple complet.

```yaml
redirect_mappings:
  /ancienne-url: /nouvelle-url

hub_pages:
  - /fr/section-principale

old_url_patterns:
  - /fr/ancienne-section/
```

## Vérifications effectuées (32)

### Vérifications de migration (12)
1. Redirections 301 configurées
2. Pages hub en 404
3. Alias URL dupliqués (-0, -1)
4. Fichiers médias 404
5. URLs /node/ dans le sitemap
6. Anciennes URLs encore live
7. Cohérence du sitemap
8. Hreflang vers des redirections
9. Pages noindex dans le sitemap
10. H1 manquants ou vides
11. Boucles canoniques

### Vérifications techniques (20)
12. Analyse robots.txt
13. Cohérence des canonical tags
14. Données structurées JSON-LD
15. Open Graph / Twitter Cards
16. Contenu mixte HTTP/HTTPS
17. Chaînes de redirections
18. Temps de réponse (TTFB)
19. Headers de sécurité HTTP
20. Liens internes cassés
21. Profondeur de crawl
22. Titres et meta descriptions
23. Hiérarchie des headings
24. Alt text des images
25. Pagination (rel=prev/next)
26. Détection rendu JavaScript
27. Meta viewport mobile
28. Cohérence langue/locale
29. Poids des pages
30. Contenu dupliqué
31. Pages orphelines

## Rapport

Le rapport Markdown généré contient :
- Résumé exécutif avec comptage par sévérité
- Problèmes critiques, avertissements et informations
- Recommandations pour chaque problème
- Statistiques de crawl
- Inventaire complet des pages crawlées
