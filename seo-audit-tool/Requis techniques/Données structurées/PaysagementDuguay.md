# Données structurées - Paysagement Duguay

Documentation des schémas JSON-LD à intégrer sur le site [paysagementduguay.ca](https://paysagementduguay.ca/).

| Type de Page | Schémas à intégrer |
|---|---|
| Page d'Accueil | Organization, LocalBusiness, AggregateRating |
| Pages Services | Service, FAQPage |
| Page Contact | LocalBusiness (avec openingHours) |
| Blogue (si présent) | Article ou BlogPosting |

---

## 1. Page d'Accueil

### 1.1 Organization + LocalBusiness

> **Note aux développeurs :** Ce bloc combine Organization et LocalBusiness. Il doit être placé dans le `<head>` de la page d'accueil.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": "https://paysagementduguay.ca/#organization",
  "name": "Paysagement Duguay",
  "url": "https://paysagementduguay.ca/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://paysagementduguay.ca/wp-content/uploads/2020/02/Paysagement_Duguay_logo-300x88.png"
  },
  "image": "https://paysagementduguay.ca/wp-content/uploads/2020/02/Paysagement_Duguay_logo-300x88.png",
  "description": "Paysagement Duguay est un spécialiste en aménagement paysager desservant la Rive-Nord depuis plus de 15 ans. Projets extérieurs haut de gamme conçus avec rigueur et bâtis pour durer.",
  "telephone": "+1-438-933-0876",
  "email": "info@paysagementduguay.ca",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1271 Boulevard Jolibourg",
    "addressLocality": "Laval",
    "addressRegion": "QC",
    "postalCode": "H1Y 1Z0",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.529285,
    "longitude": -73.812235
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" },
    { "@type": "City", "name": "Boisbriand" },
    { "@type": "City", "name": "Rosemère" },
    { "@type": "City", "name": "Lorraine" },
    { "@type": "City", "name": "Saint-Eustache" },
    { "@type": "City", "name": "Bois-des-Filion" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ],
  "sameAs": [
    "https://www.facebook.com/paysagementduguay/"
  ],
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de paysagement",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aménagement paysager" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mini-excavation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Terrassement paysager" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coupe et taille de haie de cèdres" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balcon en bois et composite" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gestion des eaux de pluie" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Projets clé en main" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction de murs et murets de soutènement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation de pavé uni" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pose de tourbe et gazon" } }
    ]
  }
}
</script>
```

### 1.2 AggregateRating

> **Note aux développeurs :** À intégrer seulement si le client a des avis vérifiables (Google, etc.). Remplacer les valeurs `ratingValue`, `reviewCount` et `ratingCount` par les données réelles.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://paysagementduguay.ca/#organization",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "ratingCount": "78",
    "reviewCount": "78"
  }
}
</script>
```

> **Source :** Google Business Profile — 5,0 étoiles, 78 avis (mars 2026).

---

## 2. Pages Services

### 2.1 Service (un bloc par page de service)

> **Note aux développeurs :** Chaque page de service doit avoir son propre bloc `Service`. Adapter le `name`, `description` et `url` selon la page. Voici les blocs pour chaque service :

#### Mini-excavation

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mini-excavation",
  "name": "Mini-excavation à Laval, Montréal et Rive-Nord",
  "description": "Services de mini-excavation professionnels pour vos projets d'aménagement paysager à Laval, Montréal et la Rive-Nord.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/mini-excavation-a-laval/",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://paysagementduguay.ca/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ]
}
</script>
```

#### Terrassement paysager

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Terrassement paysager",
  "name": "Travaux de terrassement paysager",
  "description": "Services de terrassement paysager pour préparer et niveler votre terrain à Laval, Montréal et la Rive-Nord.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/travaux-de-terrasssement-paysager/",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://paysagementduguay.ca/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ]
}
</script>
```

#### Coupe et taille de haie de cedres

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Coupe et taille de haie de cèdres",
  "name": "Coupe et taille de haie de cèdres",
  "description": "Service professionnel de coupe et taille de haies de cèdres à Laval, Montréal et la Rive-Nord.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/coupe-et-taille-de-haie-de-cedres/",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://paysagementduguay.ca/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ]
}
</script>
```

#### Projets d'amenagement cle en main

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Aménagement paysager clé en main",
  "name": "Projets d'aménagement paysager clé en main",
  "description": "Prise en charge complète de votre projet d'aménagement paysager, de la conception à la réalisation, à Laval, Montréal et la Rive-Nord.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/projet-amenagement-paysager-cle-en-main/",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://paysagementduguay.ca/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ]
}
</script>
```

#### Construction de murs et murets de soutenement

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction de murs de soutènement",
  "name": "Construction de murs et murets de soutènement",
  "description": "Construction professionnelle de murs et murets de soutènement pour vos aménagements extérieurs à Laval, Montréal et la Rive-Nord.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/construction-de-murs-et-murets-de-soutenement/",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://paysagementduguay.ca/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ]
}
</script>
```

#### Installation de pave uni

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Installation de pavé uni",
  "name": "Installation de pavé uni",
  "description": "Installation professionnelle de pavé uni pour entrées, patios et allées à Laval, Montréal et la Rive-Nord.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://paysagementduguay.ca/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ]
}
</script>
```

#### Pose de tourbe et gazon

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Pose de tourbe et gazon",
  "name": "Pose de tourbe et gazon",
  "description": "Service de pose de tourbe et gazon pour une pelouse verdoyante et uniforme à Laval, Montréal et la Rive-Nord.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://paysagementduguay.ca/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ]
}
</script>
```

### 2.2 FAQPage (pages services)

> **Note aux développeurs :** À placer sur les pages de services qui contiennent une section FAQ. Adapter les questions/réponses selon le contenu réel de chaque page. Voici un exemple de structure :

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels types de projets d'aménagement paysager réalisez-vous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous réalisons tous types de projets d'aménagement paysager : installation de pavé uni, construction de murs de soutènement, pose de tourbe, terrassement, mini-excavation, coupe de haies de cèdres et projets clé en main."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles régions desservez-vous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous desservons Laval, Montréal, la Rive-Nord ainsi que Boisbriand, Rosemère, Lorraine, Saint-Eustache, Bois-des-Filion, Ahuntsic, Ville Saint-Laurent et Ville Mont-Royal."
      }
    },
    {
      "@type": "Question",
      "name": "Offrez-vous des soumissions gratuites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous offrons des soumissions gratuites et sans engagement pour tous nos services d'aménagement paysager."
      }
    }
  ]
}
</script>
```

> **TODO :** Adapter les questions/réponses selon le contenu FAQ réel de chaque page de service, si existant.

---

## 3. Page Contact

### 3.1 LocalBusiness avec heures d'ouverture

> **Note aux développeurs :** Remplacer les heures d'ouverture par les vraies heures du commerce. Le format `openingHoursSpecification` est le plus précis pour Google.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://paysagementduguay.ca/#organization",
  "name": "Paysagement Duguay",
  "url": "https://paysagementduguay.ca/",
  "logo": "https://paysagementduguay.ca/wp-content/uploads/2020/02/Paysagement_Duguay_logo-300x88.png",
  "telephone": "+1-438-933-0876",
  "email": "info@paysagementduguay.ca",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1271 Boulevard Jolibourg",
    "addressLocality": "Laval",
    "addressRegion": "QC",
    "postalCode": "H1Y 1Z0",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.529285,
    "longitude": -73.812235
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "06:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "06:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/paysagementduguay/"
  ]
}
</script>
```

> **Source :** Heures confirmées via Google Business Profile (mars 2026).

---

## 4. Blogue (si present)

### 4.1 Article / BlogPosting

> **Note aux développeurs :** À intégrer dynamiquement sur chaque article de blogue. Les champs entre `{{ }}` doivent être remplacés par les valeurs réelles de chaque article.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{ titre de l'article }}",
  "description": "{{ meta description de l'article }}",
  "image": "{{ URL de l'image mise en avant }}",
  "url": "{{ URL canonique de l'article }}",
  "datePublished": "{{ date de publication YYYY-MM-DD }}",
  "dateModified": "{{ date de modification YYYY-MM-DD }}",
  "author": {
    "@type": "Organization",
    "name": "Paysagement Duguay",
    "@id": "https://paysagementduguay.ca/#organization"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Paysagement Duguay",
    "logo": {
      "@type": "ImageObject",
      "url": "https://paysagementduguay.ca/wp-content/uploads/2020/02/Paysagement_Duguay_logo-300x88.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{ URL canonique de l'article }}"
  }
}
</script>
```

---

## 5. BreadcrumbList (toutes les pages)

> **Note aux développeurs :** Ajouter un fil d'Ariane sur toutes les pages pour améliorer la navigation dans les résultats Google. Adapter les items selon la hiérarchie de la page.

### Exemple pour une page de service

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://paysagementduguay.ca/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Aménagement paysager",
      "item": "https://paysagementduguay.ca/amenagement-paysager/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{{ Nom du service }}",
      "item": "{{ URL du service }}"
    }
  ]
}
</script>
```

---

## Checklist de validation

- [x] Confirmer les heures d'ouverture avec le client (lun-ven 6h-21h, sam 6h-19h, dim 6h-17h)
- [x] Valider la note Google et le nombre d'avis pour l'AggregateRating (5.0 / 78 avis)
- [x] Confirmer les coordonnées GPS (45.529285, -73.812235 — Sainte-Dorothée, Laval)
- [ ] Adapter les FAQ selon le contenu réel des pages
- [ ] Mettre à jour les URLs des services si certaines pages n'existent pas encore
- [ ] Tester chaque bloc avec le [Rich Results Test de Google](https://search.google.com/test/rich-results)
- [ ] Valider avec le [Schema Markup Validator](https://validator.schema.org/)
