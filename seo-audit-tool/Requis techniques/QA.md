# Requis techniques SEO — Mise en ligne

---

## Indexation et crawl

- [ ] Fichier `robots.txt` présent avec lien vers le sitemap
- [ ] Sitemap XML généré et soumis à Google Search Console
- [ ] Toutes les pages stratégiques renvoient un statut 200 et sont indexables
- [ ] Chaque page a un URL statique et indexable
- [ ] Aucune section importante bloquée par le robots.txt
- [ ] Rendu JavaScript vérifié : contenus (H1, textes, CTA) visibles et indexables
- [ ] Vérification des erreurs de crawl (crawl errors)
- [ ] Analyse des logs serveur (log audit)

---

## Structure des URLs

- [ ] Version officielle de l'URL choisie (www ou sans www)
- [ ] Redirection de la version non officielle vers la version officielle
- [ ] Redirection de toutes les URLs http vers https
- [ ] Certificat SSL valide et actif
- [ ] Aucun caractère spécial dans les URLs (?, #, etc.) ni accent (é, è, à, etc.)
- [ ] URLs descriptives et lisibles

---

## Redirections

- [ ] Redirections 301 en place pour toutes les anciennes URLs (si changement d'URLs)
- [ ] Redirections 301 pointant vers les pages correspondantes (et non uniquement vers l'accueil)
- [ ] Aucune chaîne de redirections (redirect chains)
- [ ] Aucune erreur 404 sur les anciennes URLs

---

## Balises et métadonnées

- [ ] Chaque page a un titre (title) unique et non tronqué dans les résultats de recherche
- [ ] Chaque page a une meta description unique et non tronquée dans les résultats de recherche
- [ ] Un seul H1 par page
- [ ] Hiérarchie des balises Hn logique et cohérente (H1 > H2 > H3...)
- [ ] Balises Open Graph configurées (og:title, og:description, og:image)
- [ ] Balise hreflang configurée (si site multilingue)
- [ ] Balise canonical présente sur chaque page

---

## Données structurées

- [ ] Donnée structurée "Organization" sur la page d'accueil
- [ ] Données structurées supplémentaires selon le type de contenu (LocalBusiness, FAQ, BreadcrumbList, etc.)
- [ ] Validation des données structurées via l'outil de test de Google

---

## Images

- [ ] Noms de fichiers descriptifs (ex : `vehicule_noir_avec_lettrage.jpg` et non `IMG_7021.jpg`)
- [ ] Balises alt text remplies sur toutes les images
- [ ] Images compressées (plugin de compression ou compression manuelle avant ajout)
- [ ] Format d'image optimisé (WebP privilégié)

---

## Performance et mobile

- [ ] Score PageSpeed acceptable sur desktop et mobile (vérifier via [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=fr))
- [ ] Core Web Vitals dans les seuils acceptables (LCP, FID/INP, CLS)
- [ ] Site bien adapté à la version mobile (mobile-friendly)
- [ ] JavaScript non bloquant pour le rendu des contenus critiques

---

## Liens

- [ ] Aucun lien interne brisé (broken internal links)
- [ ] Aucun lien externe brisé (broken outbound links)
- [ ] Maillage interne cohérent entre les pages stratégiques

---

## Contenu

- [ ] Contenu unique et pertinent sur chaque page
- [ ] Lisibilité du contenu adaptée à l'audience cible
- [ ] Aucun contenu dupliqué entre les pages

---

## Outils et suivi

- [ ] Google Search Console connecté et propriété validée
- [ ] Google Analytics installé
- [ ] Sitemap soumis dans Google Search Console
- [ ] Migration de domaine effectuée dans Google Search Console (si applicable)

---

## Plugins et extensions

- [ ] Plugin de compression d'images installé (ou processus manuel en place)
- [ ] Aucun plugin/extension qui bloque l'indexation ou le rendu des pages
