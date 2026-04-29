Voici le brief que jai fourni au developpeur

Developer Brief — tourliv.ca
**Prepared by:** Audrey Begin
**For:** TourLiv Developer
**Date:** March 30, 2026
**Site:** https://tourliv.ca/
**Stack:** WordPress + Elementor, hosted on GoDaddy
---
> This document covers **all** required changes: technical SEO fixes + content
modifications (FR and EN versions).
> **CRITICAL** tasks must be done first — the site is currently **invisible on Google**.
---
## CRITICAL — Do immediately
### 1. Remove noindex, nofollow
**Problem:** Every page on the site contains this tag:
```html
<meta name='robots' content='noindex, nofollow' />
```
This prevents Google from indexing the site. The site is **completely invisible** in search
results.
**Action:**
1. Go to **Settings > Reading**
2. Uncheck **"Discourage search engines from indexing this site"**
3. Save
**Verification:** View page source (Ctrl+U) and confirm the `noindex, nofollow` tag is no
longer present.
---
### 2. Fix lang="fr-CA"
**Problem:** The `<html>` tag is currently:
```html
<html lang="en-US">
```
The site is in French, targeting a Quebec audience.

**Action:** Change to:
```html
<html lang="fr-CA">
```
**In WordPress:**
1. Go to **Settings > General**
2. Change **"Site Language"** to **Français (Canada)**
3. Save
**Note:** If the admin panel switches to French, that's expected. What matters is that the
front-end serves the correct `lang` attribute.
**Verification:** View page source and confirm `<html lang="fr-CA">`.
---
### 3. Create XML sitemap
**Problem:** No sitemap.xml exists. The robots.txt file references no sitemap. Google
doesn't know what pages exist on the site.
**Action:**
1. **Install and activate Yoast SEO** (or Rank Math if preferred)
2. The sitemap will be auto-generated at `https://tourliv.ca/sitemap_index.xml`
3. Verify the sitemap is accessible in a browser
4. Add to the `robots.txt` file:
```
Sitemap: https://tourliv.ca/sitemap_index.xml
```

**Verification:** Open `https://tourliv.ca/sitemap_index.xml` in a browser — the list of pages
should display.
---
### 4. Fix the H1
**Problem:** The page has **2 identical H1 tags**. There must be only **one H1 per page**.
**Action:**
- **Delete the 2nd H1**
- Replace the text of the remaining H1 with:
```
Appartements modernes à louer à Gatineau
```

**In Elementor:** Find the two H1 Title widgets, delete the second one, replace the text of
the first.
---
## IMPORTANT — Do after criticals
### 5. Title + meta description — FINAL VERSION
**Problem:** Current title is `<title>Tourliv</title>` (7 characters, no keywords). Meta
description is **completely missing**.
**Action — replace with:**
**Title (55 chars):**
```
Appartements neufs à louer à Gatineau (Hull) | TourLiv
```
**Meta description (158 chars):**
```
Appartements modernes de 1 à 3 chambres au 202 rue Papineau, Gatineau. Eau chaude,
wifi et électroménagers inclus. Visitez TourLiv dans le secteur Hull.
```
**In WordPress with Yoast SEO:** Fill in the "SEO Title" and "Meta description" fields at the
bottom of the homepage editor.
—
### 5b. Open Graph + Twitter Card tags - FR
**Problem:** No Open Graph or Twitter Card tags are present. When tourliv.ca is shared on
Facebook, LinkedIn, or X (Twitter), no preview image or optimized text appears — just the
raw URL.
**Action:** Add the following tags in the `<head>` of the FR homepage (via WPCode / Insert
Headers and Footers plugin):
```html
<!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_CA" />
<meta property="og:url" content="https://tourliv.ca/" />
<meta property="og:title" content="Appartements neufs à louer à Gatineau (Hull) | TourLiv"
/>

<meta property="og:description" content="Appartements modernes de 1 à 3 chambres au
202 rue Papineau, Gatineau. Eau chaude, wifi et électroménagers inclus. Visitez TourLiv
dans le secteur Hull." />
<meta property="og:image"
content="https://tourliv.ca/wp-content/uploads/tourliv-apercu-social.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="TourLiv" />
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Appartements neufs à louer à Gatineau (Hull) | TourLiv"
/>
<meta name="twitter:description" content="Appartements modernes de 1 à 3 chambres au
202 rue Papineau, Gatineau. Eau chaude, wifi et électroménagers inclus." />
<meta name="twitter:image"
content="https://tourliv.ca/wp-content/uploads/tourliv-apercu-social.jpg" />
```
**Image requirements (og:image):**
- Dimensions: **1200 × 630 px** (required for all platforms)
- Format: JPG
- Content suggestion: exterior photo of the building or a bright apartment interior
- Upload to WordPress Media Library, copy the URL, replace the placeholder above
**Alternative — via Yoast SEO (simpler):**
1. Go to the homepage editor in WordPress
2. Scroll to the Yoast SEO panel → click **"Social"** tab
3. Fill in: Facebook Title, Facebook Description, Facebook Image (1200×630)
4. Same fields exist for Twitter
**Verification:** Use the [Facebook Sharing
Debugger](https://developers.facebook.com/tools/debug/) and [LinkedIn Post
Inspector](https://www.linkedin.com/post-inspector/) to preview how the link renders.
---
### 6. Image alt texts
**Problem:** **62 images** on the site have no `alt` attribute. This hurts image SEO and
accessibility.
**Action:** Add the following alt texts. Highest priority:
| Image | Alt text to add |
|-------|----------------|
| Living room photo | Salon moderne — appartement TourLiv Gatineau |
| Kitchen photo | Cuisine équipée avec îlot — TourLiv Gatineau |

| Bedroom photo | Chambre à coucher spacieuse — appartement Hull Gatineau |
| Bathroom photo | Salle de bain contemporaine — TourLiv |
| Building exterior | Immeuble TourLiv — 202 rue Papineau, Gatineau |
| Floor plan | Plan 41⁄2 — appartement TourLiv Gatineau |
| Amenities slider — slide 1 | Centre de remise en forme — immeuble TourLiv Gatineau |
| Amenities slider — slide 2 | Terrasse sur le toit avec vue sur Ottawa — TourLiv Hull |
| Amenities slider — slide 3 | Terrasse extérieure — appartements TourLiv Gatineau |
**In Elementor:** Click each image widget, fill in the "Alternative Text" field.
**In Media Library:** Go to Media > Library, click each image, fill in "Alternative Text".
---
### 7. Add ApartmentComplex JSON-LD Schema
**Problem:** No structured data is present. Google doesn't understand this is an apartment
complex.
**Action:** Add the following JSON-LD in the `<head>` of all pages (via WPCode / Insert
Headers and Footers plugin):
```html
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@graph": [
{
"@type": "ApartmentComplex",
"name": "TourLiv",
"description": "Complexe d'appartements modernes à louer à Gatineau, secteur Hull.
Studios, 31⁄2, 41⁄2 et 51⁄2 disponibles au 202 rue Papineau.",
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
{ "@type": "City", "name": "Gatineau" },
{ "@type": "City", "name": "Hull" }
],
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
"opens": "09:00",
"closes": "17:00"
}
}
]
}
</script>
```
**Notes:**
- Update `image` with the actual URL of the building exterior photo
- Validate at https://validator.schema.org/ before deploying
---
### 8. Remove Lorem Ipsum + hidden English content
**Problem:** The page source contains Lorem Ipsum text and hidden English content (likely
via hidden Elementor elements or `display:none` CSS).
**English content identified:**
- H2 `"Apartments"` — in English
- H2 `"Residence Features"` — in English
- H2 `"Kitchen Features"` — in English
- H2 `"Bath Features"` — in English
- Contact Form 7 with `lang="en-US"` and English labels

**Action:**
1. Translate the English H2s (final text provided in task 9 below)
2. Delete all Lorem Ipsum — search for hidden sections in Elementor (eye icon with
strikethrough)
3. Contact Form 7: edit the form, change language and labels to French
4. Do a text search across all Elementor content to find any other hidden English text
---
### 9. Fix heading hierarchy
**Problem:** Current heading structure on the homepage:
```
H1 — Appartements modernes conçus pour votre style de vie
H1 — Appartements modernes conçus pour votre style de vie ← DUPLICATE
H2 — Apartments ← ENGLISH
H2 — Residence Features ← ENGLISH
H2 — Kitchen Features ← ENGLISH
H2 — Bath Features ← ENGLISH
H2 — Aperçu de notre bâtiment
H2 — Les appartements de luxe de haute qualité
H2 — Salle de sport
H2 — Eau chaude incluse
H2 — Wifi inclus
H2 — Électroménagers inclus
H2 — Garages avec bornes électriques
H2 — Sécuriser les espaces communs avec caméras
H2 — Équipements
H4 — Centre de remise en forme ← SKIPS H3
H4 — Terrasse sur le toit
H4 — Terrasse extérieure
H2 — Plans d'appartements
H3 — Unité 101 ← ~100 H3 TAGS
H3 — Unité 102 FOR EACH UNIT!
... (~100 units in H3)
H2 — Notre galerie
H2 — Lieux
H2 — Distance
H2 — Aperçu de notre bâtiment ← DUPLICATE H2
H2 — Demander une visite
H2 — Contactez-nous aujourd'hui !
H2 — Écrire à l'agent
H2 — Liens rapides ← UI, NOT CONTENT
H2 — Coordonnées ← UI, NOT CONTENT
H2 — © 2025 Tour LIV. Tous droits réservés. ← UI, NOT CONTENT
H2 — Retour en haut ← UI, NOT CONTENT
```

**Target structure (per the content guide):**
```
H1 — Appartements modernes à louer à Gatineau
H2 — Appartements de qualité supérieure au cœur de Hull
H2 — Équipements et commodités
H3 — Centre de remise en forme
H3 — Terrasse sur le toit
H3 — Terrasse extérieure
H2 — Plans d'appartements
(individual units = buttons or plain text, NOT headings)
H2 — Notre galerie
H2 — Emplacement au cœur de Hull, à quelques minutes d'Ottawa
H2 — Questions fréquentes
H3 — [each FAQ question]
H2 — Demander une visite
Footer: no H2 tags
```

**Detailed actions:**
1. Delete the 2nd H1 — keep only one H1 at the top of the page (text provided in task 4)
2. Translate the English H2s (final text provided in the content tasks below)
3. **Remove heading tags from the ~100 unit numbers** — replace with **buttons** or styled
**div/span** elements. This is the most impactful fix: Google currently sees ~100 "topics" on
the page, which massively dilutes the SEO signal
4. Fix the H2→H4 skip in the Amenities section: change those H4s to H3
5. Remove headings from the footer: "Liens rapides", "Coordonnées", "© 2025", "Retour en
haut" must be `<p>` or `<span>` tags, NOT H2
6. Delete the duplicate H2 "Aperçu de notre bâtiment"
7. Merge the descriptive H2s (Salle de sport, Eau chaude, Wifi, Électroménagers, Garages,
Caméras) under a single H2 "Équipements et commodités" with H3s or a bullet list
underneath
---
## CONTENT CHANGES — FRENCH VERSION
> These changes apply to the French homepage.
> All changes are made in Elementor.
---
### 10. Section 1 — Hero
| Element | Current text | Final text |
|---------|-------------|------------|
| Title (H1) | Appartements modernes conçus pour votre style de vie | **Appartements
modernes à louer à Gatineau** |

| Subtitle | *(current)* | **Découvrez l'élégance moderne de nos résidences neuves à Hull, à
quelques minutes d'Ottawa.** |
| CTA button | *(current)* | **Contactez-nous** |
---
### 11. Section 2 — Building Overview
**H2 — replace with:**
```
Appartements de qualité supérieure au cœur de Hull
```

**Optimized paragraph — add/replace with:**
```
TourLiv propose un large choix d'appartements à louer, de 1 à 3 chambres, dans le secteur
Hull de Gatineau. Les surfaces sont supérieures aux standards du marché et la multitude de
plans différents saura plaire aux familles, aux couples ou aux célibataires. Les cuisines et
les salles de bains sont dotées de comptoirs en quartz. Chaque appartement dispose d'un
balcon ou d'une terrasse. La construction entièrement en béton assure une insonorisation
exceptionnelle.
```
**Icons — technical fix only:**
The 6 icons keep their text and visuals. Only technical change: in Elementor, switch the
widget from "Heading" to "Text Editor", or change the HTML tag from `<h2>` to `<p>`.
Icon texts (keep as-is):
- Salle de sport
- Eau chaude incluse
- Wifi inclus
- Électroménagers inclus
- Stationnement avec bornes électriques
- Espaces communs sécurisés
---
### 12. Section 3 — Amenities
**H2 — replace with:**
```
Équipements et commodités
```

**Intro text (below the H2) — add:**
```
TourLiv offre des espaces communs conçus pour votre confort et votre bien-être, inclus avec
chaque appartement à louer.

```

**Subheadings — change from H4 to H3 (level only, keep the text):**
- H3 : Centre de remise en forme
- H3 : Terrasse sur le toit
- H3 : Terrasse extérieure
**Slider alt texts (see also task 6):**
| Slide | Alt text |
|-------|----------|
| Slide 1 | Centre de remise en forme — immeuble TourLiv Gatineau |
| Slide 2 | Terrasse sur le toit avec vue sur Ottawa — TourLiv Hull |
| Slide 3 | Terrasse extérieure — appartements TourLiv Gatineau |
---
### 13. Section 4 — Floor Plans
**H2 — replace with:**
```
Plans d'appartements
```
**Intro text (below the H2) — add:**
```
Explorez nos plans d'étage et trouvez l'appartement idéal parmi nos 31⁄2, 41⁄2 et 51⁄2 au 202,
rue Papineau, Gatineau.
```

**Critical fix — ~100 H3 unit tags:**
In Elementor, change the Heading widgets for all unit numbers (Unité 101, 102, etc.) to
**Button** or **Text** widgets to remove the H3 tags.
---
### 14. Section 5 — Gallery
No changes required. Keep as-is.
---
### 15. Section 6 — Location
**optimized H2:**
```
Emplacement au cœur de Hull, à quelques minutes d'Ottawa
```

**Add this text ABOVE the distance table:**
```
TourLiv est idéalement situé au 202 rue Papineau, dans le secteur Hull de Gatineau. À
quelques
pas du Musée canadien de l'histoire et du parc Jacques-Cartier, l'immeuble offre un accès
rapide
au centre-ville d'Ottawa via le transport en commun.
Un emplacement de choix pour les fonctionnaires fédéraux et les professionnels travaillant à
Ottawa.
```
Keep the existing distance table and Google Maps embed.
---
### 16. Section 7 — FAQ: New section to create
**This section does not exist yet. It needs to be built from scratch.**
**Implementation in Elementor:** Use an **Accordion** or **Toggle** widget so answers are
collapsible. Clean visually and keeps the page lightweight.
**H2:**
```
Questions fréquentes
```
**Questions and answers — each question is an H3 inside the accordion:**
---
**H3 : Quels types d'appartements sont disponibles chez TourLiv ?**
TourLiv offre des 31⁄2, 41⁄2 et 51⁄2 dans un immeuble neuf de 9 étages au 202 rue Papineau,
dans le secteur Hull de Gatineau. Les surfaces sont supérieures aux standards du marché,
avec des plans variés pour les familles, les couples et les célibataires.
---
**H3 : Qu'est-ce qui est inclus dans le loyer ?**
Chaque appartement inclut l'eau chaude, le wifi haute vitesse et les électroménagers neufs
(réfrigérateur, cuisinière, lave-vaisselle). Tous les appartements disposent d'un balcon ou
d'une terrasse et bénéficient d'une construction en béton pour une insonorisation
exceptionnelle.
---

**H3 : Est-ce que TourLiv est proche d'Ottawa ?**
Oui. L'immeuble est situé dans le secteur Hull de Gatineau, à 2,3 km du Parlement du
Canada et à 400 m du Musée canadien de l'histoire. Le transport en commun (STO,
Rapibus) offre un accès direct au centre-ville d'Ottawa. C'est un emplacement idéal pour les
fonctionnaires fédéraux et les professionnels travaillant à Ottawa.
---
**H3 : Est-ce qu'il y a du stationnement ?**
Oui, TourLiv offre un stationnement intérieur avec bornes de recharge pour véhicules
électriques.
---
**H3 : Comment planifier une visite ?**
Contactez-nous par téléphone au (514) 442-3419, par courriel à info@tourliv.ca ou
remplissez le formulaire ci-dessous.
---
**FAQPage JSON-LD Schema — ADD in the `<head>` via WPCode, in addition to the
ApartmentComplex schema:**
```html
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "Quels types d'appartements sont disponibles chez TourLiv?",
"acceptedAnswer": {
"@type": "Answer",
"text": "TourLiv offre des 31⁄2, 41⁄2 et 51⁄2 dans un immeuble neuf de 9 étages au 202 rue
Papineau, dans le secteur Hull de Gatineau."
}
},
{
"@type": "Question",
"name": "Qu'est-ce qui est inclus dans le loyer?",
"acceptedAnswer": {
"@type": "Answer",

"text": "Chaque appartement inclut l'eau chaude, le wifi haute vitesse et les
électroménagers neufs (réfrigérateur, cuisinière, lave-vaisselle). Tous les appartements
disposent d'un balcon ou d'une terrasse."
}
},
{
"@type": "Question",
"name": "Est-ce que TourLiv est proche d'Ottawa?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Oui. L'immeuble est situé dans le secteur Hull de Gatineau, à 2,3 km du
Parlement du Canada et à 400 m du Musée canadien de l'histoire. Le transport en commun
(STO, Rapibus) offre un accès direct au centre-ville d'Ottawa."
}
},
{
"@type": "Question",
"name": "Est-ce qu'il y a du stationnement?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Oui, TourLiv offre un stationnement intérieur avec bornes de recharge pour
véhicules électriques."
}
},
{
"@type": "Question",
"name": "Comment planifier une visite?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Contactez-nous par téléphone au (514) 442-3419, par courriel à info@tourliv.ca
ou via le formulaire sur notre site."
}
}
]
}
</script>
```

---
### 17. Section 8 — Contact
Text above the form:
```
Appartements à louer à Gatineau
```
**H2:**

```
Demander une visite
```

Contact info:
- Email: info@tourliv.ca
- Phone: (514) 442-3419
- Address: 202 Rue Papineau, Gatineau, QC, J8X 1W2, Canada
---
### 18. Section 9 — Footer
The footer must contain **no H2 tags**. In Elementor, replace the "Title" widgets with "Text
Editor" widgets for these 4 elements:
| Element | Current tag | Target tag |
|---------|------------|------------|
| Liens rapides | H2 | `<p>` or `<span>` |
| Coordonnées | H2 | `<p>` or `<span>` |
| © 2025 Tour LIV. Tous droits réservés. | H2 | `<p>` or `<span>` |
| Retour en haut | H2 | `<p>` or `<span>` |
Footer content (keep as-is, change tags only):
- Logo TourLiv + Logo Rizzo Capital
- Liens rapides : Équipements — Plans — Galerie — Contactez-nous
- Adresse : 202 Rue Papineau, Gatineau, QC J8X 1W2, Canada
- E-mail : info@tourliv.ca
- Téléphone : (514) 442-3419
---
## CONTENT CHANGES — ENGLISH VERSION
> These changes apply to the English version of the site.
> If the English version is a separate page (`/en/`), apply changes there.
> If managed via a multilingual plugin (Polylang/WPML), apply via the plugin interface.
---
### 19. Meta title + meta description (EN)
**Title (54 chars):**
```
New Apartments for Rent in Gatineau (Hull) | TourLiv
```
**Meta description (156 chars):**

```
Modern 1 to 3 bedroom apartments at 202 Papineau St, Gatineau. Hot water, wifi and
appliances included. Visit TourLiv in Hull, minutes from Ottawa.
```
—
### 19b. Open Graph + Twitter Card tags - EN
**Action:** Add the following tags in the `<head>` of the EN page (via WPCode, on the EN
page only):
```html
<!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_CA" />
<meta property="og:url" content="https://tourliv.ca/en/" />
<meta property="og:title" content="New Apartments for Rent in Gatineau (Hull) | TourLiv" />
<meta property="og:description" content="Modern 1 to 3 bedroom apartments at 202
Papineau St, Gatineau. Hot water, wifi and appliances included. Visit TourLiv in Hull, minutes
from Ottawa." />
<meta property="og:image"
content="https://tourliv.ca/wp-content/uploads/tourliv-apercu-social.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="TourLiv" />
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="New Apartments for Rent in Gatineau (Hull) | TourLiv" />
<meta name="twitter:description" content="Modern 1 to 3 bedroom apartments at 202
Papineau St, Gatineau. Hot water, wifi and appliances included." />
<meta name="twitter:image"
content="https://tourliv.ca/wp-content/uploads/tourliv-apercu-social.jpg" />
```

**Note:** Same og:image as the FR version (1200×630 px) so no need to create a second
image unless a different visual is preferred for the EN audience.
**Alternative — via Yoast SEO:** Same process as task 5b, but on the EN page.
---
### 20. Section 1 — Hero (EN)
| Element | Final text |
|---------|------------|
| H1 | **Modern Apartments for Rent in Gatineau — Hull** |

| Subtitle | **Discover our new rental apartments in Hull, just minutes from downtown
Ottawa.** |
| CTA button | **Contact Us** |
---
### 21. Section 2 — Building Overview (EN)
**H2:**
```
Premium Apartments in the Heart of Hull
```

**Optimized paragraph — add/replace with:**
```
TourLiv offers a wide selection of apartments for rent, from 1 to 3 bedrooms, in the Hull
sector
of Gatineau. Our units are larger than market standards and the variety of floor plans will
appeal
to families, couples and singles alike. Kitchens and bathrooms feature quartz countertops.
Every
apartment includes a balcony or terrace. The full concrete construction ensures exceptional
soundproofing.
```
**Icons — technical fix only (same as FR):**
Switch widget from "Heading" to "Text Editor" (`<p>` instead of `<h2>`).
Icon texts:
- Fitness Centre
- Hot Water Included
- Wifi Included
- Appliances Included
- Parking with EV Charging Stations
- Secure Common Areas
---
### 22. Section 3 — Amenities (EN)
**H2:**
```
Amenities and Inclusions
```
**Intro text (below the H2) — add:**
```

TourLiv offers common spaces designed for your comfort and well-being, included with every
rental apartment.
```

**Subheadings — change from H4 to H3 (level only, keep text):**
- H3: Fitness Centre
- H3: Rooftop Terrace
- H3: Outdoor Terrace
**Slider alt texts:**
| Slide | Alt text |
|-------|----------|
| Slide 1 | Fitness centre — TourLiv apartment building Gatineau |
| Slide 2 | Rooftop terrace with view of Ottawa — TourLiv Hull |
| Slide 3 | Outdoor terrace — TourLiv apartments Gatineau |
---
### 23. Section 4 — Floor Plans (EN)
**H2:**
```
Floor Plans — 1, 2 and 3 Bedroom Apartments Available
```
**Intro text (below the H2) — add:**
```
Explore our floor plans and find the perfect apartment among our 1, 2 and 3 bedroom units
at 202 Papineau St, Gatineau.
```

**Same fix as FR:** Change ~100 H3 unit heading widgets to Button or Text widgets.
---
### 24. Section 5 — Gallery (EN)
No changes required. Keep as-is.
---
### 25. Section 6 — Location (EN)
optimized H2:**
```
Location in the Heart of Hull, Minutes from Ottawa
```

**Add this text ABOVE the distance table:**
```
TourLiv is located at 202 Papineau St, in the Hull sector of Gatineau. Steps away from the
Canadian Museum of History and Jacques-Cartier Park, the building offers quick access to
downtown Ottawa via public transit. A prime location for federal government employees and
professionals working in Ottawa.
```
Keep the existing distance table and Google Maps embed.
---
### 26. Section 7 — FAQ: New section to create (EN)
**This section does not exist yet. It needs to be built from scratch.**
**Implementation in Elementor:** Use an **Accordion** or **Toggle** widget so answers are
collapsible.
**H2:**
```
Frequently Asked Questions
```

**Questions and answers — each question is an H3 inside the accordion:**
---
**H3: What types of apartments are available at TourLiv?**
TourLiv offers 1, 2 and 3 bedroom apartments in a new 9-storey building at 202 Papineau St,
in the Hull sector of Gatineau. Our units are larger than market standards, with varied floor
plans for families, couples and singles.
---
**H3: What is included in the rent?**
Every apartment includes hot water, high-speed wifi and new appliances (refrigerator, stove,
dishwasher). All apartments have a balcony or terrace and benefit from concrete
construction for exceptional soundproofing.
---
**H3: Is TourLiv close to Ottawa?**
Yes. The building is located in the Hull sector of Gatineau, 2.3 km from Parliament Hill and
400 m from the Canadian Museum of History. Public transit (STO, Rapibus) provides direct

access to downtown Ottawa. An ideal location for federal government employees and
professionals working in Ottawa.
---
**H3: Is there parking available?**
Yes, TourLiv offers indoor parking with electric vehicle charging stations.
---
**H3: How can I schedule a visit?**
Contact us by phone at (514) 442-3419, by email at info@tourliv.ca or fill out the form below.
---
**FAQPage JSON-LD Schema (EN) — ADD in the `<head>` via WPCode on the EN page:**
```html
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "What types of apartments are available at TourLiv?",
"acceptedAnswer": {
"@type": "Answer",
"text": "TourLiv offers 1, 2 and 3 bedroom apartments in a new 9-storey building at 202
Papineau St, in the Hull sector of Gatineau."
}
},
{
"@type": "Question",
"name": "What is included in the rent?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Every apartment includes hot water, high-speed wifi and new appliances
(refrigerator, stove, dishwasher). All apartments have a balcony or terrace."
}
},
{
"@type": "Question",
"name": "Is TourLiv close to Ottawa?",
"acceptedAnswer": {
"@type": "Answer",

"text": "Yes. The building is located in the Hull sector of Gatineau, 2.3 km from
Parliament Hill and 400 m from the Canadian Museum of History. Public transit (STO,
Rapibus) provides direct access to downtown Ottawa."
}
},
{
"@type": "Question",
"name": "Is there parking available?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, TourLiv offers indoor parking with electric vehicle charging stations."
}
},
{
"@type": "Question",
"name": "How can I schedule a visit?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Contact us by phone at (514) 442-3419, by email at info@tourliv.ca or via the
form on our website."
}
}
]
}
</script>
```

---
### 27. Section 8 — Contact (EN)
Text above the form:
```
Apartments for Rent in Gatineau
```
**H2:**
```
Schedule a Visit
```
Contact info:
- Email: info@tourliv.ca
- Phone: (514) 442-3419
- Address: 202 Papineau St, Gatineau, QC, J8X 1W2, Canada
---

### 28. Section 9 — Footer (EN)
Same fix as FR: replace "Title" widgets with "Text Editor" widgets for these 4 elements:
- Quick Links
- Contact Info
- © 2025 Tour LIV. All rights reserved.
- Back to top
Footer content (keep as-is, change tags only):
- TourLiv logo + Rizzo Capital logo
- Quick Links: Amenities — Plans — Gallery — Contact Us
- Address: 202 Papineau St, Gatineau, QC J8X 1W2, Canada
- Email: info@tourliv.ca
- Phone: (514) 442-3419
---
## MEDIUM TERM — To be planned
### 29. Deduplicate jQuery/Bootstrap/GTranslate
**Problem:** The site loads duplicate libraries:
- **Bootstrap**: v5.3.3 AND v5.0.2 loaded simultaneously
- **jQuery**: loaded by WordPress core + potentially again by the theme
- **GTranslate**: translation widget adding unnecessary page weight
**Action:**
1. Bootstrap: Keep only version 5.3.3, remove all references to 5.0.2
2. jQuery: Check if the theme enqueues its own copy on top of WordPress's; remove
duplicates
3. GTranslate: If auto-translation is no longer needed (replaced by the native EN version),
deactivate/delete the plugin
**Where to look:**
- Active WordPress plugins (deactivate GTranslate if present)
- Theme's `functions.php` (script enqueue calls)
- Elementor > Theme settings
---
### 30. Hreflang fr-CA / en-CA
**Add in the `<head>` of each page (FR and EN):**
```html
<!-- On the FR page -->
<link rel="alternate" hreflang="fr-CA" href="https://tourliv.ca/" />
<link rel="alternate" hreflang="en-CA" href="https://tourliv.ca/en/" />

<link rel="alternate" hreflang="x-default" href="https://tourliv.ca/" />
<!-- On the EN page -->
<link rel="alternate" hreflang="fr-CA" href="https://tourliv.ca/" />
<link rel="alternate" hreflang="en-CA" href="https://tourliv.ca/en/" />
<link rel="alternate" hreflang="x-default" href="https://tourliv.ca/" />
```
Use a multilingual plugin (WPML or Polylang) rather than GTranslate.
---
### 31. Migrate PDFs to tourliv.ca
**Problem:** ~99 links to PDF files (floor plans, etc.) that may be hosted on an external
domain.
**Action:**
1. Check where the PDFs are currently hosted
2. Make sure all PDFs are at `tourliv.ca/wp-content/uploads/`
3. If any PDFs point to an external domain, download and re-upload them to the WordPress
Media Library
4. Update all links on the page
**SEO file naming:**
- ~~`plan-123.pdf`~~ → `plan-4-et-demi-tourliv-gatineau.pdf`
- ~~`floor-plan-A.pdf`~~ → `plan-studio-tourliv-202-papineau.pdf`
---
### 32. Fix broken tel: link
**Problem:** The `tel:` link in the source code is broken — the `tel:` prefix appears twice:
```html
<a href="tel:tel:5144423419"> ← broken
```
**Action:** Fix the HTML link everywhere it appears (header, footer, contact section):
```html
<a href="tel:+15144423419">(514) 442-3419</a>
```

---

## Summary
| # | Priority | Task | Hours |
|---|----------|------|-------|
| 1 | CRITICAL | Remove noindex, nofollow | 0.5h |
| 2 | CRITICAL | Fix lang=fr-CA | 0.5h |
| 3 | CRITICAL | Create XML sitemap | 1h |
| 4 | CRITICAL | Fix H1 (one per page) | 0.5h |
| 5 | IMPORTANT | Title + meta description (FR) — final version | 0.5h |
| 6 | IMPORTANT | Image alt texts (~62) + slider | 1h |
| 7 | IMPORTANT | Add ApartmentComplex JSON-LD Schema | 1h |
| 8 | IMPORTANT | Remove Lorem Ipsum + hidden English content | 2h |
| 9 | IMPORTANT | Fix heading hierarchy | 2h |
| 10 | CONTENT FR | Section 1 — Hero | 0.25h |
| 11 | CONTENT FR | Section 2 — Building Overview | 0.5h |
| 12 | CONTENT FR | Section 3 — Amenities (H4→H3, alt texts) | 0.5h |
| 13 | CONTENT FR | Section 4 — Floor Plans (H2, intro, fix ~100 H3s) | 1h |
| 15 | CONTENT FR | Section 6 — Location (merged H2 + new text) | 0.5h |
| 16 | CONTENT FR | Section 7 — FAQ: create + FAQPage schema FR | 1h |
| 17 | CONTENT FR | Section 8 — Contact | 0.25h |
| 18 | CONTENT FR | Section 9 — Footer (remove H2s) | 0.5h |
| 19 | CONTENT EN | Meta title + meta description EN | 0.25h |
| 20–28 | CONTENT EN | All EN sections (hero → footer) | 4h |
| 29 | MEDIUM TERM | Deduplicate jQuery/Bootstrap/GTranslate | 2h |
| 30 | MEDIUM TERM | Hreflang fr-CA / en-CA | 2h |
| 31 | MEDIUM TERM | Migrate PDFs to tourliv.ca | 1h |
| 32 | MEDIUM TERM | Fix broken tel: link (double prefix) | 0.25h |
| | | **TOTAL** | **~24h** |
---
## Notes for the developer
- **After each change**, clear the cache (WordPress cache + GoDaddy CDN if applicable)
- **Test on mobile** — the majority of traffic is mobile
- Tasks 1–4 are the most urgent: until they are done, the site remains invisible on Google
- To validate JSON-LD schemas: https://validator.schema.org/
- To check indexation after fixes: search `site:tourliv.ca` on Google (allow 1–2 weeks for
indexation)
- For any questions about this brief, contact Audrey