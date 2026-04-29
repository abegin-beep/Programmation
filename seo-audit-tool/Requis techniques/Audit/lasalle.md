# Audit SEO — Centre dentaire et d'implantologie LaSalle
**URL:** https://dentisteimplantlasalle.com/
**Date:** 2026-04-02
**Budget publicitaire client:** 5 000$/mois Google + 1 500$/mois Meta
**Score SEO global : 5.5 / 10**

---

## Contexte département des ventes

La cliente dépense **6 500$/mois en pub** sans performances satisfaisantes.  
Le problème est **on-site avant tout** — la base technique est cassée à plusieurs niveaux.  
Corriger ça permettra de rentabiliser immédiatement le budget publicitaire existant.

---

## PROBLÈMES CRITIQUES — P1 (corriger immédiatement)

### 1. Aucun schema LocalBusiness / Dentist sur le site entier
- L'adresse, le téléphone et les heures d'ouverture **sont dans le texte des pages mais JAMAIS dans le code structuré**
- Google ne peut pas les lire pour les résultats enrichis et la recherche locale
- Téléphone réel : **(514) 363-7414** — absent du schema
- Adresse réelle : **7631 rue Centrale, LaSalle QC H8P 1L1** — absente du schema
- Heures réelles : Lun 10h–20h, Mar–Jeu 8h–18h, Ven fermé (1/mois) — absentes du schema
- Schemas présents : WebPage, WebSite, BreadcrumbList seulement
- **Fix** : Implémenter schema.org/Dentist (sous-type MedicalBusiness) sur toutes les pages

### 2. Pages inutiles indexées dans Google (contenu mince + pages "old")
Pages actuellement dans le sitemap et indexables par Google alors qu'elles ne devraient PAS l'être :

| URL | Problème |
|-----|----------|
| `/confirmation/` | Page de confirmation (~30 mots). Zéro valeur SEO. |
| `/en/confirmation/` | Idem, version anglaise |
| `/rendez-vous-en-ligne-old/` | Page "ancienne" abandonnée, toujours indexée |
| `/en/online-appointment-booking-old/` | Idem, version anglaise |
| `/formulaire-de-rendez-vous-en-ligne-urgence-2/` | Doublon créé accidentellement par WordPress (le `-2` trahit une duplication) |
| `/en/appointment-booking-for-surgeries/` + `/en/appointment-booking-form-for-surgeries/` | Deux pages quasi-identiques pour la même chose |

**Fix** : Ajouter `noindex` sur ces pages ET les retirer du sitemap

### 3. Multiples H1 sur plusieurs pages (pas seulement la homepage)
- Homepage : **4 H1** identiques (confirmé)
- `/nous-joindre/` : **3 H1** ("Nous joindre", "Communiquez avec nous.", "Prise de rendez-vous")
- `/botox/` : **2 H1**
- **Cause probable** : Elementor génère des blocs desktop ET mobile dans le même HTML et les cache via CSS — Google voit les deux versions dans le DOM
- **Fix** : Revoir la structure de chaque page dans Elementor, s'assurer qu'un seul H1 est rendu

### 4. Typo dans une URL canonique — `/nos-technolgies/` (manque le "o")
- L'URL correcte devrait être `/nos-technologies/`
- La canonical pointe sur la **version avec la faute** : `<link rel="canonical" href="https://dentisteimplantlasalle.com/nos-technolgies/">`
- Le titre de la page dit bien "Nos technologies" — seule l'URL est fausse
- Pendant ce temps la version anglaise est à la bonne URL `/en/our-technologies/`
- **Fix** : Corriger le slug WordPress + ajouter une redirection 301 de l'ancienne URL vers la bonne

---

## PROBLÈMES IMPORTANTS — P2

### 5. Aucun `hreflang="x-default"` sur aucune page
- Le site est bilingue FR/EN (WPML), les hreflang FR↔EN sont présents
- Mais il manque le tag `x-default` qui dit à Google quelle version afficher par défaut
- **Fix** : Ajouter `<link rel="alternate" hreflang="x-default" href="https://dentisteimplantlasalle.com/"/>` sur toutes les pages

### 6. H2 dupliqués sur les pages de services (Elementor desktop/mobile DOM)
Sur `/implantologie/`, ces H2 apparaissent **deux fois chacun** dans le code HTML :
```
"Qu'est-ce qu'un implant dentaire ?"  (×2)
"Prenez rendez-vous."  (×2)
```
Même cause que le problème des H1 multiples — Elementor injecte les deux versions dans le DOM.

### 7. Anchor text générique "En savoir plus" sur toutes les CTA
Sur `/dentisterie-generale-et-familiale/`, tous les liens vers les services utilisent :
```html
<a href="/examen-et-nettoyage/">En savoir plus (Examen et nettoyage)</a>
<a href="/traitement-de-la-carie/">En savoir plus (Traitement de la carie)</a>
```
Google lit "En savoir plus" comme ancre — pas le nom du service.  
**Fix** : Remplacer par l'ancre = le nom du service directement

### 8. Aucun `<link rel="preconnect">` pour les ressources externes
Les connexions vers ces domaines ne sont pas pré-établies au chargement de la page :
- `fonts.googleapis.com` / `fonts.gstatic.com` (Google Fonts)
- `www.googletagmanager.com` (GTM)
- `www.google.com` (reCAPTCHA)
- Impact : latence mesurable sur TTFB/LCP
- **Fix** : Ajouter des `<link rel="preconnect">` dans le `<head>`

### 9. Incohérence du nom de marque dans les balises title
- Homepage : **"LaSalle"** (S majuscule)
- Pages intérieures : **"Lasalle"** (s minuscule)
- Exemple :
  - Homepage : `Centre dentaire et d'implantologie LaSalle - Dentiste, implantologie`
  - Implantologie : `Implantologie | Centre dentaire et d'implantologie Lasalle`
- **Fix** : Uniformiser via Yoast SEO (template de titre)

### 10. Title tag homepage trop long + meta description trop courte
- Title : 73 caractères (idéal : 50-60)
- Meta description : 106 caractères (idéal : 150-160) — fragment de phrase sans CTA, sous-utilise l'espace
- **Fix** : Réécrire les deux

---

## PROBLÈMES D'OPTIMISATION — P3

### 11. Aucune image avec dimensions `width` / `height` dans le HTML
- Cause des Layout Shift (CLS) — le navigateur ne peut pas réserver l'espace avant le chargement
- Problème sur toutes les pages analysées

### 12. Images alt="" (vide, pas absent — c'est différent)
- Sur `/implantologie/` : 4 images avec `alt=""` explicitement vide
- `alt=""` dit à Google "image décorative, ignore" — or ces images montrent des procédures dentaires
- **Fix** : Rédiger des alt descriptifs (ex : `alt="Implant dentaire en titane posé dans la mâchoire"`)

### 13. Aucun CDN — assets servis depuis GoDaddy directement
- Toutes les images et fichiers servis depuis `dentisteimplantlasalle.com/wp-content/uploads/`
- L'hébergement semble être GoDaddy (script `img1.wsimg.com` détecté)
- Aucun Cloudflare, aucun CDN image détecté

### 14. Polices Google chargées sans preload
- Fira Sans + Crimson Text chargées via WebFont loader
- Aucun `<link rel="preload" as="font">` détecté
- Risque de FOIT (texte invisible pendant le chargement)
- **Fix** : `font-display: swap` + preload des fontes critiques

### 15. Script emoji WordPress actif (inutile pour un site dentaire)
- `wp-emoji-loader.min.js` chargé depuis `s.w.org` sans `async`/`defer`
- Complètement inutile pour ce site — ralentit le rendu
- **Fix** : `remove_action('wp_head', 'print_emoji_detection_script', 7)` dans le thème

### 16. robots.txt sans directive Sitemap
- Contenu actuel du robots.txt :
  ```
  User-Agent: *
  Disallow:
  ```
- Manque : `Sitemap: https://dentisteimplantlasalle.com/sitemap.xml`
- Aucune règle de blocage — pas catastrophique mais incomplet

### 17. Sitemap incomplet — pas de sitemap d'images
- 1 seul sitemap enfant (`page-sitemap.xml`) pour 71 URLs
- Aucun sitemap d'images (`image-sitemap.xml`)
- Google Images ne peut pas découvrir toutes les images via le sitemap

### 18. Aucun schema AggregateRating malgré 4,9/173 avis GMB
- Les étoiles ne s'affichent pas dans les résultats Google (rich snippets)
- **Fix** : Implémenter AggregateRating schema avec les données d'avis Google

### 19. Open Graph incomplet + aucune Twitter Card
- Manquants : `og:image`, `og:url`, `og:type`, `og:title`
- Aucun tag Twitter Card
- Les partages sur les réseaux n'ont pas de visuel

---

## Ce qui fonctionne bien ✓

- Structure URL propre avec mots-clés en français
- hreflang FR/EN présents (WPML + Yoast) — manque juste x-default
- Canonical tags en place sur toutes les pages
- Design responsive, viewport mobile correct
- GTM correctement configuré
- 71 pages dans le sitemap — bonne couverture thématique
- Navigation principale bien structurée avec mots-clés
- Contenu récemment mis à jour (juillet–décembre 2025)
- Lazy loading sur les images des pages intérieures
- Maillage interne solide (25+ liens)

---

## Infrastructure technique

| Élément | Valeur |
|---------|--------|
| CMS | WordPress |
| Plugin SEO | Yoast SEO |
| Constructeur | Elementor |
| Multilingue | WPML |
| Analytics | Google Tag Manager (GTM-P6WR3TKK) |
| Formulaires | Contact Form 7 |
| Hébergement | GoDaddy |
| Sécurité | reCAPTCHA |
| CDN | Aucun |

---

## Plan d'action priorisé

### Semaine 1 — P1 critiques
1. Implémenter schema Dentist/LocalBusiness (adresse, tel, heures, services)
2. Ajouter `noindex` sur les pages orphelines + les retirer du sitemap
3. Corriger le H1 unique sur toutes les pages (vérifier le rendu Elementor desktop+mobile)
4. Corriger le slug `/nos-technolgies/` → `/nos-technologies/` + 301 redirect

### Semaine 2-3 — P2 importants
5. Ajouter `hreflang="x-default"` sur toutes les pages
6. Corriger les H2 dupliqués (Elementor DOM issue)
7. Remplacer les anchors "En savoir plus" par le nom des services
8. Ajouter `<link rel="preconnect">` pour Google Fonts, GTM, reCAPTCHA
9. Uniformiser "LaSalle" vs "Lasalle" dans tous les titres

### Semaine 3-4 — P2 suite
10. Réécrire le title + meta description de la homepage
11. Implémenter schema AggregateRating (4,9 / 173 avis)
12. Compléter les Open Graph + ajouter Twitter Cards

### Mois 2 — P3 optimisations
13. Ajouter `width`/`height` sur toutes les images (fix CLS)
14. Rédiger les attributs `alt` pour toutes les images
15. Désactiver le script emoji WordPress
16. Ajouter preload + `font-display: swap` pour Google Fonts
17. Corriger le `robots.txt` (ajouter directive Sitemap)
18. Créer un sitemap d'images
19. Évaluer un CDN (Cloudflare gratuit suffit pour commencer)

---

## Argument de vente clé

> La cliente dépense 6 500$/mois en acquisition (Google + Meta). Ses annonces pointent sur un site qui a des problèmes techniques à 3 niveaux : contenu dupliqué indexé (dilue l'autorité), aucun signal local structuré (l'algo ne "voit" pas la clinique correctement), et un DOM Elementor cassé qui génère des balises H1/H2 multiples sur presque toutes les pages. Corriger la base technique = améliorer le Quality Score Google Ads (réduire le CPC) ET améliorer le classement organique. Double impact sur le ROI d'un budget déjà existant.
