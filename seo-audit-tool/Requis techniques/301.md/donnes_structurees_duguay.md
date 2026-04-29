# Données structurées — Paysagement Duguay
Documentation des schémas JSON-LD à intégrer sur le site [paysagementduguay.ca](https://paysagementduguay.ca/).

> **Règle absolue :** le contenu des FAQPage doit correspondre exactement au texte visible sur la page. Toute divergence peut entraîner une pénalité Google.

---

## 1. Page d'accueil

### 1.1 Organization + LocalBusiness + AggregateRating

> **Note développeur :** Bloc unique combinant les trois types. À placer dans le `<head>`. L'AggregateRating est basé sur Google Business Profile (mars 2026) : 5,0 étoiles, 78 avis — à mettre à jour lors des audits SEO.

```html
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
    { "@type": "City", "name": "Ahuntsic" },
    { "@type": "City", "name": "Ville Saint-Laurent" },
    { "@type": "City", "name": "Ville Mont-Royal" },
    { "@type": "AdministrativeArea", "name": "Rive-Nord" }
  ],
  "sameAs": [
    "https://www.facebook.com/paysagementduguay/"
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "ratingCount": "78",
    "reviewCount": "78"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de paysagement",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation de pavé uni" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balcon et terrasse en bois et composite" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marches et paliers extérieurs" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction de murs et murets de soutènement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pavé perméable" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Porcelaine extérieure" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mini-excavation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Terrassement paysager" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gestion des eaux de pluie" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pose de tourbe et gazon" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coupe et taille de haie de cèdres" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Projets d'aménagement paysager clé en main" } }
    ]
  }
}
</script>
```

### 1.2 BreadcrumbList — Accueil

```html
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
    }
  ]
}
</script>
```

---

## 2. Pages Services

---

### 2.1 Aménagement paysager (page principale des services)

**URL :** `https://paysagementduguay.ca/amenagement-paysager/`

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Aménagement paysager",
  "name": "Aménagement paysager à Laval, Montréal et Rive-Nord",
  "description": "Services complets d'aménagement paysager à Laval, Montréal et la Rive-Nord : pavé uni, terrassement, murets, terrasses, tourbe et projets clé en main.",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelles sont les étapes d'un projet d'aménagement paysager ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un projet d'aménagement paysager réussi commence par une réflexion claire : vos besoins, les espaces à transformer, le style recherché et le budget que vous souhaitez y consacrer. Ces éléments permettent de concevoir un projet cohérent et bien structuré dès le départ. La conception et la planification peuvent ensuite être réalisées."
      }
    },
    {
      "@type": "Question",
      "name": "Quels matériaux choisir pour un aménagement paysager durable ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque matériau a ses forces : pavé-uni, porcelaine, pierre naturelle, béton, bois ou composite. Le bon choix dépend de l'usage, du style recherché et du niveau d'investissement prévu. Certains demandent plus d'entretien que d'autres, ce qui peut aussi influencer la décision. Paysagement Duguay est là pour vous guider vers le bon choix de matériaux et privilégie l'utilisation de matériaux de grande qualité pour assurer la durabilité de votre aménagement."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi faire appel à un professionnel pour son aménagement paysager ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un aménagement paysager ne repose pas seulement sur l'esthétique, mais aussi sur la conception, les fondations et l'exécution. Faire appel à un professionnel permet d'éviter les erreurs coûteuses et d'assurer un résultat durable, structuré et cohérent. C'est la différence entre un projet qui vieillit bien et un projet à refaire après quelques saisons."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure un projet d'aménagement paysager ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La durée varie selon l'ampleur du projet, mais la plupart des aménagements résidentiels se réalisent en quelques jours à quelques semaines. Une fois le chantier débuté, les travaux sont exécutés de façon continue et bien planifiée afin de respecter l'échéancier établi. L'objectif est simple : avancer efficacement et livrer le projet comme prévu, sans délai inutile."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les avantages d'un aménagement paysager clé en main ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un aménagement clé en main permet une prise en charge complète du projet, de la conception à la finition, avec une vision claire et une exécution parfaitement maîtrisée. Chaque détail est planifié pour assurer un déroulement fluide, sans compromis ni imprévu. Résultat : vous profitez pleinement du processus, sans gestion ni travail, jusqu'à un résultat final à la hauteur de votre propriété."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" }
  ]
}
</script>
```

---

### 2.2 Installation de pavé uni et dalle

**URL :** `https://paysagementduguay.ca/amenagement-paysager/installation-de-pave-uni/` *(à confirmer selon l'URL réelle du site)*

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Installation de pavé uni",
  "name": "Installation de pavé uni à Laval et sur la Rive-Nord",
  "description": "Installation professionnelle de pavé uni pour entrées de stationnement, terrasses arrière, allées piétonnières et contours de piscine à Laval et sur la Rive-Nord. Garantie écrite de 2 ans. Entrepreneur certifié Techo-Pro.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/installation-de-pave-uni/",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pourquoi mon pavé uni s'affaisse ou forme des vagues après l'hiver ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans notre climat, la cause principale de l'affaissement est une fondation qui manque d'épaisseur, mal compactée ou un sol qui draine mal. À Laval et sur la Rive-Nord, le sol est souvent argileux et très sensible au gel/dégel. Depuis plus de 15 ans, nous respectons les plus hautes normes d'installation des fabricants comme Techo-Bloc et adaptons l'épaisseur de fondation selon le type de sol et l'usage afin d'assurer une base durable."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle épaisseur de base faut-il sous un pavé (entrée, terrasse) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'épaisseur de la fondation dépend de l'usage (terrasse, patio, entrée de stationnement), du type de sol et du drainage de votre terrain. En général, on recommande 6 à 12 pouces pour une terrasse ou une allée piétonnière, et 12 à 24 pouces pour un stationnement. Chez Paysagement Duguay, chaque projet est fait en fonction du type de sol et des normes du fabricant. Nous offrons une garantie écrite de 2 ans sur nos travaux de pavé."
      }
    },
    {
      "@type": "Question",
      "name": "Est-il normal de voir des mauvaises herbes apparaître dans les joints de pavé avec du sable polymère ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un sable polymère bien installé réduit fortement la pousse de mauvaises herbes et stabilise les joints. Cependant, sans entretien ou si l'installation initiale n'a pas été faite correctement, certaines pousses peuvent apparaître avec le temps. Une bonne compaction et un sable de qualité font toute la différence."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que la garantie Techo-Pro ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le programme Techo-Pro regroupe des entrepreneurs certifiés ayant suivi des formations continues auprès de Techo-Bloc et respectant des standards élevés en installation de pavé uni et d'aménagement paysager. Ces entrepreneurs doivent détenir une assurance responsabilité valide et offrir une garantie minimale de 2 ans sur leurs travaux. Paysagement Duguay est fier de faire partie du programme Techo-Pro, ce qui témoigne de la qualité de ses services, de son expertise et de son engagement envers des réalisations durables et professionnelles."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Installation de pavé uni", "item": "https://paysagementduguay.ca/amenagement-paysager/installation-de-pave-uni/" }
  ]
}
</script>
```

---

### 2.3 Balcon et terrasse en bois et composite

**URL :** `https://paysagementduguay.ca/amenagement-paysager/balcon-et-terrasse/` *(à confirmer)*

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction de balcon et terrasse",
  "name": "Balcons et terrasses en bois et composite à Laval et sur la Rive-Nord",
  "description": "Conception et construction de terrasses et balcons en bois ou en composite à Laval et sur la Rive-Nord. Fondations sur pieux vissés ou sonotubes, rampes bois, aluminium ou verre. Projets sur mesure.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/balcon-et-terrasse/",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Devrais-je choisir une terrasse en bois ou en composite ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bois offre un aspect naturel et chaleureux. Le composite propose une finition plus constante et demande très peu d'entretien. Le choix dépend surtout de vos priorités et de l'entretien souhaité."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la durée de vie du composite comparée au bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le composite de qualité offre une excellente tenue dans le temps, souvent avec des garanties de 25 à 30 ans. Le bois peut aussi durer longtemps, à condition d'être entretenu régulièrement."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que la structure est aussi importante que le revêtement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. La durabilité d'une terrasse dépend d'abord de sa structure. Une fondation et une charpente bien conçues assurent stabilité, confort et longévité, peu importe le matériau en surface."
      }
    },
    {
      "@type": "Question",
      "name": "Quels types de fondations utilisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon le projet, nous utilisons des pieux vissés, des sonotubes ou une structure sur dalle existante. Le choix dépend du sol, des charges et des contraintes du terrain."
      }
    },
    {
      "@type": "Question",
      "name": "Quel entretien est nécessaire pour le bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bois demande un entretien périodique pour conserver son apparence. Le composite nécessite généralement un simple nettoyage occasionnel, ce qui en fait une option facile au quotidien."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Balcon et terrasse", "item": "https://paysagementduguay.ca/amenagement-paysager/balcon-et-terrasse/" }
  ]
}
</script>
```

---

### 2.4 Marches et paliers extérieurs

**URL :** `https://paysagementduguay.ca/amenagement-paysager/marches-et-paliers/` *(à confirmer)*

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction de marches et paliers extérieurs",
  "name": "Marches et paliers extérieurs à Laval et sur la Rive-Nord",
  "description": "Construction de marches et paliers extérieurs en blocs préfabriqués, blocs monolithiques ou pierre naturelle à Laval et sur la Rive-Nord. Fondations adaptées aux cycles de gel et dégel.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/marches-et-paliers/",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelle est la meilleure option pour mes marches : blocs, pierre naturelle ou monolithique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le choix dépend de la hauteur à franchir, du style recherché et de l'espace disponible. Les blocs préfabriqués offrent une grande flexibilité, les marches monolithiques apportent une présence plus structurée, tandis que la pierre naturelle s'intègre davantage à l'environnement. Une évaluation du site permet de déterminer la solution la plus adaptée."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi certaines marches bougent ou s'affaissent avec le temps ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans la majorité des cas, le problème provient d'une fondation inadéquate ou mal compactée. Une base insuffisante ou un drainage déficient peut entraîner des mouvements, particulièrement avec les cycles saisonniers. Une préparation adéquate du sol est essentielle pour assurer la stabilité à long terme."
      }
    },
    {
      "@type": "Question",
      "name": "Est-il possible de refaire mes marches sans tout démolir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, dans certains cas. Si la structure existante est stable et en bon état, un recouvrement avec des blocs ou de la porcelaine peut être envisagé. Toutefois, si le béton est fissuré ou en désagrégation, une reconstruction complète sera recommandée afin d'assurer la durabilité des travaux."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les dimensions idéales pour des marches confortables ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Des proportions cohérentes sont essentielles pour le confort et la sécurité. En général, une contremarche d'environ 6 à 7 pouces et un giron (profondeur) d'au moins 11 à 12 pouces offrent une utilisation naturelle et sécuritaire. Chaque projet est ajusté en fonction du terrain et des contraintes."
      }
    },
    {
      "@type": "Question",
      "name": "Les marches en pierre naturelle sont-elles aussi stables que les autres options ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, à condition qu'elles soient installées sur une fondation adéquate. Leur poids et leur épaisseur offrent une excellente stabilité, mais exigent une préparation rigoureuse du support. Une installation précise est essentielle pour assurer un appui uniforme et durable."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Marches et paliers", "item": "https://paysagementduguay.ca/amenagement-paysager/marches-et-paliers/" }
  ]
}
</script>
```

---

### 2.5 Construction de murs et murets de soutènement

**URL :** `https://paysagementduguay.ca/amenagement-paysager/construction-de-murs-et-murets-de-soutenement/`

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction de murs de soutènement",
  "name": "Construction de murs et murets de soutènement durables à Laval et sur la Rive-Nord",
  "description": "Construction professionnelle de murs et murets de soutènement en blocs préfabriqués, blocs architecturaux massifs ou pierre naturelle à Laval et sur la Rive-Nord. Drainage intégré, géogrille au besoin.",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel type de muret de soutènement choisir (blocs architecturaux, pierre naturelle ou blocs préfabriqués) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le choix dépend de la hauteur à retenir, du style recherché et du budget. Les blocs architecturaux massifs et les blocs préfabriqués sont particulièrement adaptés aux murs de soutènement structuraux, car ils permettent l'installation de géogrille et offrent une grande stabilité. Ils s'intègrent facilement à différents types d'aménagement paysager. La pierre naturelle offre un cachet haut de gamme et intemporel, mais demande un budget plus élevé et une installation plus complexe."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi le drainage derrière un muret de soutènement est-il obligatoire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sans drainage, l'eau s'accumule derrière le mur. En hiver, cette eau gèle et exerce une pression importante qui peut incliner ou fissurer la structure. Chez Paysagement Duguay, nous installons systématiquement un remblai en ¾ net drainant, un drain agricole gainé et assurons une évacuation adéquate de l'eau afin d'assurer une stabilité à long terme."
      }
    },
    {
      "@type": "Question",
      "name": "Quand est-ce qu'un muret a besoin de géogrille (geogrid) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'utilisation d'une géogrille dépend surtout de la hauteur, de la pente du terrain, des charges appliquées (ex : entrée, stationnement) et du type de sol. Pour de petits murets décoratifs, ce n'est souvent pas nécessaire. Plus la hauteur augmente, plus la géogrille devient essentielle pour assurer la stabilité."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Murs et murets de soutènement", "item": "https://paysagementduguay.ca/amenagement-paysager/construction-de-murs-et-murets-de-soutenement/" }
  ]
}
</script>
```

---

### 2.6 Pavé perméable

**URL :** `https://paysagementduguay.ca/amenagement-paysager/pave-permeable/` *(à confirmer)*

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Installation de pavé perméable",
  "name": "Pavé perméable à Laval et sur la Rive-Nord",
  "description": "Installation de systèmes de pavé perméable pour une gestion efficace des eaux pluviales à Laval et sur la Rive-Nord. Solution drainante adaptée aux sols argileux et aux épisodes de pluies intenses.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/pave-permeable/",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Est-ce que le pavé perméable est adapté pour une entrée de stationnement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Il offre une capacité portante adaptée à un usage résidentiel, incluant les stationnements. Il permet aussi de gérer l'eau directement à la source en favorisant son infiltration plutôt que son écoulement vers les égouts."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que le pavé perméable est une solution plus écologique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Il réduit le ruissellement et la pression sur les réseaux d'égout en permettant à l'eau de s'infiltrer naturellement dans le sol. C'est une approche plus responsable, sans compromis sur la performance."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que les joints en pierre vont se vider avec le temps ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Lorsqu'ils sont bien installés, les joints en pierre 1/8 restent en place et assurent un drainage efficace. Un entretien léger peut être nécessaire au fil du temps."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que le pavé perméable fonctionne bien dans notre climat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. En limitant l'accumulation d'eau en surface, il réduit les effets liés au gel et améliore la stabilité, particulièrement sur les sols argileux fréquents à Laval et sur la Rive-Nord."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que ça remplace complètement le drainage traditionnel ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pas toujours. Il agit comme un système complémentaire qui gère l'eau à la source et peut réduire le besoin d'infrastructures plus complexes selon le projet."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Pavé perméable", "item": "https://paysagementduguay.ca/amenagement-paysager/pave-permeable/" }
  ]
}
</script>
```

---

### 2.7 Porcelaine extérieure

**URL :** `https://paysagementduguay.ca/amenagement-paysager/porcelaine-exterieure/` *(à confirmer)*

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Installation de porcelaine extérieure",
  "name": "Porcelaine extérieure à Laval et sur la Rive-Nord",
  "description": "Installation de carreaux de porcelaine extérieure pour terrasses, marches et surfaces extérieures à Laval et sur la Rive-Nord. Finition haut de gamme, résistante au gel.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/porcelaine-exterieure/",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Est-ce que la porcelaine est assez solide pour une terrasse ou un stationnement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Les pavés de porcelaine de 3 cm sont conçus pour les stationnements résidentiels et offrent une excellente capacité portante lorsqu'ils sont installés sur une fondation adéquate. Ils permettent de créer des entrées durables, stables et au rendu haut de gamme, avec une finition qui reste uniforme dans le temps. Les dalles de 2 cm sont, quant à elles, idéales pour les terrasses et espaces piétonniers."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les méthodes d'installation possibles ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La porcelaine peut être installée sur fondation granulaire, sur plots ajustables ou en recouvrement sur une dalle de béton existante. Chaque méthode permet d'obtenir un résultat précis, stable et adapté aux contraintes du projet."
      }
    },
    {
      "@type": "Question",
      "name": "Dans quels types de projets peut-on utiliser la porcelaine ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Terrasses, allées, stationnements, toits-terrasses sur plots ou recouvrement de béton existant. C'est une solution polyvalente qui permet de créer des aménagements complets avec une finition uniforme."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que la porcelaine est aussi durable que le pavé de béton ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Les deux offrent une excellente durabilité lorsqu'ils sont bien installés. Le béton est robuste et polyvalent, tandis que la porcelaine se distingue par sa stabilité de couleur et son apparence constante dans le temps."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que la porcelaine demande beaucoup d'entretien ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Elle ne nécessite pas de scellant et résiste aux taches et aux produits de nettoyage. Un entretien simple suffit pour conserver une surface propre et uniforme."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Porcelaine extérieure", "item": "https://paysagementduguay.ca/amenagement-paysager/porcelaine-exterieure/" }
  ]
}
</script>
```

---

### 2.8 Projet d'aménagement paysager clé en main

**URL :** `https://paysagementduguay.ca/amenagement-paysager/projet-amenagement-paysager-cle-en-main/`

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Aménagement paysager clé en main",
  "name": "Projet d'aménagement paysager clé en main à Laval et sur la Rive-Nord",
  "description": "Prise en charge complète de votre projet d'aménagement paysager, de la conception à la réalisation, à Laval, Montréal et la Rive-Nord. Un seul point de contact, coordination complète des travaux.",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un projet clé en main en aménagement extérieur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un projet clé en main signifie que nous prenons en charge l'ensemble des étapes, de la conception à la réalisation. Vous bénéficiez d'un projet complet, sans avoir à coordonner les différents intervenants."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que je dois m'occuper de coordonner les travaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Nous planifions et coordonnons l'ensemble des travaux afin d'assurer une exécution fluide et structurée. Vous avez un seul point de contact du début à la fin."
      }
    },
    {
      "@type": "Question",
      "name": "Quels types de travaux peuvent être inclus dans un projet clé en main ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un projet peut inclure l'ensemble de l'aménagement extérieur : pavé, murets, terrasses, plantation, gestion de l'eau et éclairage. L'objectif est de livrer un aménagement complet et cohérent."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que vous réalisez tous les travaux vous-mêmes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous réalisons directement les travaux principaux liés à l'aménagement. Pour certains éléments spécialisés comme l'irrigation ou les clôtures en bois, ornementales ou en verre, nous intégrons des collaborateurs de confiance avec qui nous travaillons régulièrement. Chaque étape est planifiée et supervisée afin d'assurer un résultat uniforme et de qualité."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi choisir un projet clé en main ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parce que c'est la solution la plus simple et la plus efficace. Vous bénéficiez d'une prise en charge complète, d'une coordination structurée et d'un projet réalisé sans tracas."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Projet clé en main", "item": "https://paysagementduguay.ca/amenagement-paysager/projet-amenagement-paysager-cle-en-main/" }
  ]
}
</script>
```

---

### 2.9 Mini-excavation

**URL :** `https://paysagementduguay.ca/amenagement-paysager/mini-excavation-a-laval/`

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mini-excavation",
  "name": "Mini-excavation à Laval, Montréal et Rive-Nord",
  "description": "Services de mini-excavation professionnels pour vos projets d'aménagement paysager à Laval, Montréal et la Rive-Nord. Mini pelle 1.7 et 3.5 tonnes, chargeur compact. Idéal pour les espaces restreints.",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels types de travaux de mini-excavation réalisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous réalisons principalement des travaux d'excavation liés à nos projets d'aménagement extérieur : préparation de fondations pour pavé, terrasses et murets, nivellement de terrain, excavation pour drainage ou correction de pentes, et travaux préparatoires pour aménagement paysager. Nous intervenons dans un contexte structuré, en lien avec un projet global, plutôt que pour de simples travaux isolés."
      }
    },
    {
      "@type": "Question",
      "name": "Quels équipements utilisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous disposons d'équipements compacts adaptés aux environnements résidentiels : mini pelle 1.7 tonne, mini pelle 3.5 tonnes et chargeur compact (skid steer). Ce type de machinerie permet d'accéder à des espaces restreints tout en assurant un travail précis et efficace."
      }
    },
    {
      "@type": "Question",
      "name": "Offrez-vous la location de machinerie avec opérateur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Nous ne faisons pas de location de machinerie. Nos équipements sont utilisés dans le cadre de nos propres interventions, afin d'assurer un contrôle complet sur la qualité des travaux réalisés."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que vous vous déplacez pour de petits travaux d'excavation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous nous déplaçons pour des projets qui nécessitent une approche structurée et une exécution professionnelle. Chaque intervention implique la mobilisation d'équipement, de transport et de main-d'œuvre. Nous priorisons donc les projets où ces ressources sont pleinement justifiées."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi intégrer la mini-excavation à votre projet d'aménagement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La qualité d'un aménagement extérieur dépend en grande partie de la préparation du terrain. En intégrant l'excavation directement à nos projets, nous assurons une meilleure coordination des travaux, une préparation adaptée aux exigences du projet et un contrôle accru sur les niveaux et le drainage. C'est une étape clé pour garantir la stabilité et la durabilité des aménagements réalisés."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Mini-excavation", "item": "https://paysagementduguay.ca/amenagement-paysager/mini-excavation-a-laval/" }
  ]
}
</script>
```

---

### 2.10 Travaux de terrassement paysager

**URL :** `https://paysagementduguay.ca/amenagement-paysager/travaux-de-terrasssement-paysager/`

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Terrassement paysager",
  "name": "Travaux de terrassement paysager à Laval, Montréal et la Rive-Nord",
  "description": "Services de terrassement paysager pour préparer et niveler votre terrain à Laval, Montréal et la Rive-Nord. Mise à niveau, correction de pentes, gestion du drainage et préparation pour aménagement.",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels types de travaux de terrassement réalisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous réalisons principalement des travaux de terrassement liés à l'aménagement extérieur : mise à niveau de terrain, préparation de fondations pour pavé, terrasses et murets, correction de pentes et gestion du drainage, et travaux préparatoires avant aménagement paysager. Nos interventions s'inscrivent dans une approche structurée, en lien avec un projet global, afin d'assurer un résultat stable et durable."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi le terrassement est-il une étape aussi importante ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La qualité d'un aménagement extérieur dépend directement de la préparation du terrain. Un terrassement mal exécuté peut entraîner des accumulations d'eau, des affaissements, des mouvements de surface et des problèmes de drainage à long terme. Un bon terrassement permet d'assurer une base stable, un écoulement adéquat de l'eau et une meilleure durabilité des travaux."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que vous faites du nivelage de terrain seulement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous pouvons réaliser des travaux de nivelage, mais principalement lorsqu'ils s'intègrent dans un projet plus complet ou nécessitent une approche structurée. Chaque intervention implique une planification, de la machinerie et une gestion des niveaux. Nous privilégions donc les projets où ces éléments sont pleinement justifiés."
      }
    },
    {
      "@type": "Question",
      "name": "Comment assurez-vous un bon drainage du terrain ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le drainage est intégré dès la phase de conception du terrassement. Selon le projet, cela peut inclure l'ajustement des pentes, l'utilisation de matériaux drainants, la mise en place de zones d'évacuation et la préparation adaptée aux systèmes comme le pavé perméable. Sur les sols argileux fréquents à Laval et sur la Rive-Nord, une gestion adéquate de l'eau est essentielle pour éviter les problèmes à long terme."
      }
    },
    {
      "@type": "Question",
      "name": "Dans quels cas un terrassement est-il nécessaire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un terrassement est généralement requis lorsque le terrain présente des pentes irrégulières, qu'il y a accumulation d'eau, qu'une nouvelle structure doit être installée (pavé, terrasse, muret) ou que le sol doit être stabilisé avant un aménagement. C'est souvent la première étape pour assurer la réussite d'un projet extérieur."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Travaux de terrassement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/travaux-de-terrasssement-paysager/" }
  ]
}
</script>
```

---

### 2.11 Gestion des eaux de pluie

**URL :** `https://paysagementduguay.ca/amenagement-paysager/gestion-des-eaux-de-pluie/` *(à confirmer)*

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Gestion des eaux de pluie",
  "name": "Gestion des eaux de pluie à Laval, Montréal et la Rive-Nord",
  "description": "Solutions durables de gestion des eaux pluviales à Laval et sur la Rive-Nord : puits secs, bassins de rétention, jardins de pluie et pavé perméable. Prévention des inondations et recharge des nappes phréatiques.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/gestion-des-eaux-de-pluie/",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pourquoi ai-je des accumulations d'eau sur mon terrain ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les accumulations sont souvent causées par une pente inadéquate, un sol peu drainant ou un manque de gestion de l'eau. À Laval et à Montréal, il est aussi fréquent que certaines propriétés soient en contrebas de la rue ou que l'entrée de stationnement descende vers le sous-sol, ce qui dirige naturellement l'eau vers la maison lors de fortes pluies."
      }
    },
    {
      "@type": "Question",
      "name": "Comment corriger un problème de drainage sur un terrain ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La solution dépend du site. Elle peut inclure l'ajustement des pentes, l'ajout de matériaux drainants, l'installation de drains ou l'intégration de systèmes comme le pavé perméable ou d'autres solutions de gestion de l'eau adaptées au terrain. Une bonne analyse permet de choisir une approche efficace et durable."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que le pavé perméable peut aider à gérer l'eau ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, dans plusieurs cas. Il permet de gérer l'eau directement à la source en favorisant son infiltration dans le sol. C'est une solution efficace pour les entrées de stationnement, terrasses et autres zones où l'eau s'accumule."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que tous les terrains peuvent être drainés efficacement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans la majorité des cas, oui. Avec une conception adaptée, il est possible d'améliorer significativement l'écoulement de l'eau et de réduire les accumulations à long terme."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi intégrer la gestion de l'eau dès le début du projet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parce que la stabilité d'un aménagement dépend directement du drainage. Une bonne gestion de l'eau permet d'éviter les affaissements, les accumulations et certains risques d'infiltration vers la maison, tout en limitant la surcharge sur les systèmes municipaux."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Gestion des eaux de pluie", "item": "https://paysagementduguay.ca/amenagement-paysager/gestion-des-eaux-de-pluie/" }
  ]
}
</script>
```

---

### 2.12 Pose de tourbe et gazon

**URL :** `https://paysagementduguay.ca/amenagement-paysager/pose-de-tourbe-et-gazon/` *(à confirmer)*

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Pose de tourbe et gazon",
  "name": "Pose de tourbe et gazon à Laval, Montréal et la Rive-Nord",
  "description": "Service de pose de tourbe en rouleaux et ensemencement pour une pelouse verdoyante à Laval, Montréal et la Rive-Nord. Résultat instantané, absence de mauvaises herbes, pelouse dense et en santé.",
  "url": "https://paysagementduguay.ca/amenagement-paysager/pose-de-tourbe-et-gazon/",
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

#### FAQPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le meilleur moment pour poser de la tourbe au Québec ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Au Québec, les meilleures périodes pour l'installation de tourbe sont au printemps (mi-mai à fin juin) et à l'automne (septembre à fin octobre). À Montréal, Laval et sur la couronne nord, nous commençons habituellement à poser à partir du 10 mai. Le printemps et l'automne offrent des conditions idéales pour l'enracinement. En été, l'arrosage doit être plus rigoureux."
      }
    },
    {
      "@type": "Question",
      "name": "Comment arroser une nouvelle tourbe ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pendant les deux premières semaines, la tourbe doit rester uniformément humide. On arrose généralement chaque jour au début, puis on diminue la fréquence en arrosant plus profondément lorsque les racines s'installent."
      }
    },
    {
      "@type": "Question",
      "name": "À quelle hauteur dois-je couper ma pelouse afin qu'elle reste dense ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour maintenir une pelouse dense et en bonne santé, nous recommandons de couper le gazon à une hauteur d'environ 3 à 4 pouces. Cette hauteur permet de protéger le sol, de conserver l'humidité et de limiter la croissance des mauvaises herbes dans vos espaces paysagers. Il est important de ne jamais couper plus du tiers du brin à la fois et d'utiliser une lame bien aiguisée pour favoriser une pelouse dense et en santé."
      }
    }
  ]
}
</script>
```

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Pose de tourbe et gazon", "item": "https://paysagementduguay.ca/amenagement-paysager/pose-de-tourbe-et-gazon/" }
  ]
}
</script>
```

---

### 2.13 Coupe et taille de haie de cèdres

**URL :** `https://paysagementduguay.ca/amenagement-paysager/coupe-et-taille-de-haie-de-cedres/`

> **Note :** Ajouter le bloc FAQPage une fois la section FAQ rédigée sur la page.

#### Service

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Coupe et taille de haie de cèdres",
  "name": "Coupe et taille de haie de cèdres à Laval, Montréal et la Rive-Nord",
  "description": "Service professionnel de coupe et taille de haies de cèdres à Laval, Montréal et la Rive-Nord. Taille soignée pour maintenir l'apparence et la santé de vos haies.",
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

#### BreadcrumbList

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Aménagement paysager", "item": "https://paysagementduguay.ca/amenagement-paysager/" },
    { "@type": "ListItem", "position": 3, "name": "Coupe et taille de haie de cèdres", "item": "https://paysagementduguay.ca/amenagement-paysager/coupe-et-taille-de-haie-de-cedres/" }
  ]
}
</script>
```

---

## 3. Page Contact

### 3.1 LocalBusiness avec heures d'ouverture

> **Note :** Ce bloc répète les informations principales pour la page Contact et ajoute les heures d'ouverture. Source : Google Business Profile (mars 2026).

```html
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

### 3.2 BreadcrumbList — Contact

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://paysagementduguay.ca/contact/" }
  ]
}
</script>
```

---

## 4. Blogue — À mettre en place une fois le blogue lancé

> **Suggestion :** Dès que le blogue sera actif, ajouter ce bloc sur chaque article. Les champs entre `{{ }}` doivent être remplacés dynamiquement par les valeurs réelles de chaque article (via WordPress/ACF ou équivalent). Ne pas activer ce schéma avant la mise en ligne du blogue : une page vide ou inaccessible pénalise la crédibilité du domaine auprès de Google.

### 4.1 BlogPosting (par article)

```html
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

### 4.2 BreadcrumbList — Article de blogue

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://paysagementduguay.ca/" },
    { "@type": "ListItem", "position": 2, "name": "Blogue", "item": "https://paysagementduguay.ca/blogue/" },
    { "@type": "ListItem", "position": 3, "name": "{{ titre de l'article }}", "item": "{{ URL canonique de l'article }}" }
  ]
}
</script>
```

---

## 5. Checklist de validation et de déploiement

### URLs à confirmer avant déploiement
- [ ] Pavé uni : `/amenagement-paysager/installation-de-pave-uni/`
- [ ] Balcon et terrasse : `/amenagement-paysager/balcon-et-terrasse/`
- [ ] Marches et paliers : `/amenagement-paysager/marches-et-paliers/`
- [ ] Pavé perméable : `/amenagement-paysager/pave-permeable/`
- [ ] Porcelaine extérieure : `/amenagement-paysager/porcelaine-exterieure/`
- [ ] Gestion des eaux de pluie : `/amenagement-paysager/gestion-des-eaux-de-pluie/`
- [ ] Pose de tourbe : `/amenagement-paysager/pose-de-tourbe-et-gazon/`
- [ ] Page Contact : `/contact/`
