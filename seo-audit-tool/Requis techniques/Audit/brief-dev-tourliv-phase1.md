# Brief Developpeur — tourliv.ca
## Phase 1 : Corrections techniques phase 1

**Prepare par :** Audrey Begin — Strategie & Optimisation SEO
**Pour :** Developpeur de TourLiv
**Date :** 27 mars 2026
**Site :** https://tourliv.ca/
**Stack :** WordPress + Elementor, heberge chez GoDaddy

---

> **Contexte :** Le site est actuellement **invisible sur Google** a cause d'une balise noindex.
> Ce brief contient les corrections techniques urgentes qui peuvent etre executees immediatement.
> Un deuxieme brief suivra avec les contenus optimises (titres, H1/H2/H3, meta descriptions, textes alt) une fois la recherche de mots-cles completee.

---

## CRITIQUES — A faire immediatement

### 1. Retirer noindex, nofollow (0,5h)

**Probleme :** Toutes les pages du site contiennent cette balise :
```html
<meta name='robots' content='noindex, nofollow' />
```
Cela empeche Google d'indexer le site. Le site est **completement invisible** dans les resultats de recherche.

**Action :** Supprimer cette balise sur toutes les pages.

**Dans WordPress :**
1. Aller dans **Reglages > Lecture**
2. Decocher **"Demander aux moteurs de recherche de ne pas indexer ce site"**
3. Sauvegarder

**Verification :** Afficher le code source de la page d'accueil (Ctrl+U) et confirmer que la balise `<meta name='robots' content='noindex, nofollow' />` n'est plus presente.

---

### 2. Corriger lang="fr-CA" (0,5h)

**Probleme :** La balise `<html>` est actuellement :
```html
<html lang="en-US">
```
Le site est en francais, destine a un public quebecois. Cela nuit au SEO et a l'accessibilite.

**Action :** Changer pour :
```html
<html lang="fr-CA">
```

**Dans WordPress :**
1. Aller dans **Reglages > General**
2. Changer **"Langue du site"** a **Francais (Canada)**
3. Sauvegarder

**Note :** Le back-office passera en francais — c'est normal et souhaitable.

**Verification :** Afficher le code source et confirmer `<html lang="fr-CA">`.

---

### 3. Creer sitemap XML (1h)

**Probleme :** Aucun sitemap.xml n'existe. Le fichier robots.txt ne reference aucun sitemap. Google ne connait pas la liste des pages du site.

**Action :**

1. **Installer et activer Yoast SEO** (ou Rank Math)
2. Le sitemap sera genere automatiquement a `https://tourliv.ca/sitemap_index.xml`
3. Verifier que le sitemap est accessible dans un navigateur
4. Ajouter dans le fichier `robots.txt` :
```
Sitemap: https://tourliv.ca/sitemap_index.xml
```

**Verification :** Ouvrir `https://tourliv.ca/sitemap_index.xml` — la liste des pages doit s'afficher en XML.

---

## IMPORTANT

### 4. Integrer Schema JSON-LD (1h)

**Probleme :** Aucune donnee structuree n'est presente. Google ne comprend pas que le site represente un complexe d'appartements a Gatineau.

**Action :** Ajouter le code JSON-LD suivant dans le `<head>` de **toutes les pages**.

**Methode recommandee :** Installer le plugin **"Insert Headers and Footers"** (WPCode) et coller le code dans la section Header.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "name": "TourLiv",
      "description": "Complexe d'appartements modernes a louer a Gatineau, secteur Hull. Studios, 3½, 4½ et 5½ disponibles au 202 rue Papineau.",
      "url": "https://tourliv.ca/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "202 Rue Papineau",
        "addressLocality": "Gatineau",
        "addressRegion": "QC",
        "postalCode": "J8X 1W2",
        "addressCountry": "CA"
      },
      "telephone": "+1-514-442-3419",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 45.4292,
        "longitude": -75.7360
      },
      "image": "https://tourliv.ca/wp-content/uploads/2024/tourliv-exterior.jpg",
      "numberOfAvailableAccommodation": {
        "@type": "QuantitativeValue",
        "value": "multiple"
      },
      "petsAllowed": false
    },
    {
      "@type": "LocalBusiness",
      "name": "TourLiv",
      "url": "https://tourliv.ca/",
      "telephone": "+1-514-442-3419",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "202 Rue Papineau",
        "addressLocality": "Gatineau",
        "addressRegion": "QC",
        "postalCode": "J8X 1W2",
        "addressCountry": "CA"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Gatineau"
        },
        {
          "@type": "City",
          "name": "Hull"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ]
}
</script>
```

**A ajuster avec le client :**
- `image` : remplacer par l'URL reelle de la photo exterieure de l'immeuble

**Aussi a corriger — lien telephone casse :**
Le lien `tel:` actuel dans le code source a un double prefixe :
```html
<!-- ACTUEL (brise — ne fonctionne pas sur mobile) -->
<a href="tel:tel:5144423419">

<!-- CORRIGE -->
<a href="tel:+15144423419">(514) 442-3419</a>
```
Chercher-remplacer sur tout le site (header, footer, contact).

**Verification :** Coller l'URL du site dans https://validator.schema.org/ et confirmer que les types ApartmentComplex et LocalBusiness sont detectes sans erreur.

---

## MOYEN TERME

### 5. Dedupliquer jQuery/Bootstrap/GTranslate (2h)

**Probleme :** Le site charge des librairies en double :
- **Bootstrap** : v5.3.3 ET v5.0.2 chargees simultanement
- **jQuery** : potentiellement charge en double (WordPress + theme)
- **GTranslate** : widget de traduction automatique qui ajoute du poids

Cela ralentit le chargement et peut causer des conflits JavaScript.

**Action :**
1. **Bootstrap** : Garder uniquement la v5.3.3. Supprimer les references a la v5.0.2
2. **jQuery** : Verifier dans `functions.php` et les extensions si jQuery est enqueue en double. Supprimer les doublons
3. **GTranslate** : Desactiver/supprimer le plugin — il sera remplace par un vrai plugin multilingue (voir tache 6)

**Ou chercher :**
- Extensions WordPress actives
- `functions.php` du theme (wp_enqueue_script)
- Parametres Elementor

---

### 6. Mise en place du site bilingue (2h)

**Probleme :** Le site n'a aucune balise hreflang. GTranslate genere une traduction automatique de mauvaise qualite qui nuit au SEO (contenu duplique, pas d'URL distincte par langue, traduction approximative).

**Action :** Remplacer GTranslate par une vraie architecture bilingue.

**Etape 1 — Installer un plugin multilingue**

Utiliser **WPML** (payant, ~$39/an) ou **Polylang** (gratuit). Polylang est recommande pour ce projet.

Polylang :
1. Installer et activer Polylang
2. Configurer les 2 langues : **Francais (Canada)** comme langue par defaut + **English (Canada)**
3. Choisir le mode d'URL : **repertoire** (recommande)
   - Francais : `https://tourliv.ca/`
   - Anglais : `https://tourliv.ca/en/`

**Etape 2 — Structure d'URL**

Chaque page doit avoir sa version dans chaque langue avec une URL distincte :
| Page | Francais | Anglais |
|------|----------|---------|
| Accueil | `tourliv.ca/` | `tourliv.ca/en/` |

**Etape 3 — Balises hreflang**

Polylang genere automatiquement les balises hreflang. Verifier qu'elles apparaissent dans le `<head>` de chaque page :
```html
<!-- Sur la page francaise -->
<link rel="alternate" hreflang="fr-CA" href="https://tourliv.ca/" />
<link rel="alternate" hreflang="en-CA" href="https://tourliv.ca/en/" />
<link rel="alternate" hreflang="x-default" href="https://tourliv.ca/" />
```
```html
<!-- Sur la page anglaise -->
<link rel="alternate" hreflang="fr-CA" href="https://tourliv.ca/" />
<link rel="alternate" hreflang="en-CA" href="https://tourliv.ca/en/" />
<link rel="alternate" hreflang="x-default" href="https://tourliv.ca/" />
```
`x-default` pointe vers le francais car c'est la langue principale.

**Etape 4 — Selecteur de langue**

Ajouter un selecteur de langue visible dans le header ou le menu principal (widget Polylang). Eviter les drapeaux seuls — utiliser le texte : **FR | EN**.


**Regles importantes :**
- Chaque page doit etre liee a sa traduction dans Polylang (icone crayon dans la liste des pages)
- Le sitemap XML (tache 3) doit inclure les 2 langues — Yoast + Polylang gerent ca automatiquement
- Le Schema JSON-LD (tache 4) doit etre present sur les pages des 2 langues
- Ne jamais melanger du contenu francais et anglais sur la meme page
- Le `<html lang="">` doit changer selon la page : `fr-CA` sur les pages francaises, `en-CA` sur les pages anglaises (Polylang gere ca automatiquement)

---

### 7. Migrer PDFs de rizzocapital.com vers tourliv.ca (1h)

**Probleme :** Les plans d'etage (~99 liens PDF) sont heberges sur un **domaine externe** :
```
https://rizzocapital.com/wp-content/uploads/2026/01/Tour-LIV-102-Revised.pdf
```

C'est problematique pour 3 raisons :
1. **SEO** : Google attribue la valeur du contenu PDF a rizzocapital.com, pas a tourliv.ca
2. **Fiabilite** : si rizzocapital.com change sa structure ou supprime les fichiers, tous les liens cassent
3. **Image de marque** : un visiteur qui clique sur un plan voit "rizzocapital.com" dans la barre d'adresse

**Action :**
1. Telecharger **tous** les PDFs depuis rizzocapital.com
2. Les renommer avec un format SEO-friendly et en francais :
   - `Tour-LIV-102-Revised.pdf` → `plan-appartement-102-tourliv-gatineau.pdf`
   - `Tour-LIV-305-Revised.pdf` → `plan-appartement-305-tourliv-gatineau.pdf`
   - Inclure le type quand possible : `plan-4-et-demi-tourliv-gatineau.pdf`
3. Les uploader dans la **mediatheque WordPress** de tourliv.ca (`tourliv.ca/wp-content/uploads/plans/`)
4. Faire un **chercher-remplacer** dans la base de donnees pour mettre a jour tous les liens :
   - Ancien : `https://rizzocapital.com/wp-content/uploads/2026/01/Tour-LIV-XXX-Revised.pdf`
   - Nouveau : `https://tourliv.ca/wp-content/uploads/plans/plan-appartement-XXX-tourliv-gatineau.pdf`
5. Tester chaque lien PDF apres la migration

**Outil recommande pour le chercher-remplacer :** Plugin **Better Search Replace** dans WordPress (permet de remplacer les URLs dans toute la base de donnees en un clic).

---

## Recapitulatif

| # | Priorite | Tache | Heures |
|---|----------|-------|--------|
| 1 | CRITIQUE | Retirer noindex, nofollow | 0,5h |
| 2 | CRITIQUE | Corriger lang=fr-CA | 0,5h |
| 3 | CRITIQUE | Creer sitemap XML | 1h |
| 4 | IMPORTANT | Integrer Schema JSON-LD | 1h |
| 5 | MOYEN TERME | Dedupliquer jQuery/Bootstrap/GTranslate | 2h |
| 6 | MOYEN TERME | Mise en place site bilingue (Polylang + hreflang) | 2h |
| 7 | MOYEN TERME | Migrer PDFs de rizzocapital.com vers tourliv.ca | 1h |
| | | **TOTAL** | **8h** |

---

