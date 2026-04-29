# Checklist Audit SEO

## Technique

- [ ] **Crawl Screaming Frog**
  - Lancer un crawl complet du site
  - Vérifier les erreurs 4xx (pages introuvables) et 5xx (erreurs serveur) -> les corriger ou rediriger
  - Identifier les chaînes de redirections (301/302) -> les simplifier en une seule redirection
  - Repérer les pages orphelines (aucune page ne pointe vers elles) -> les lier ou les supprimer

- [ ] **sitemap.xml**
  - Vérifier qu'il existe à /sitemap.xml
  - S'assurer qu'il contient toutes les pages indexables (et aucune page noindex/404)

- [ ] **robots.txt**
  - Vérifier qu'il existe à /robots.txt
  - S'assurer qu'il ne bloque pas des pages ou dossiers importants (ex: /services/, /produits/)
  - Vérifier que le lien vers le sitemap est inclus dedans

- [ ] **Vitesse de chargement (Core Web Vitals)**
  - Tester avec PageSpeed Insights (mobile + desktop)
  - LCP (Largest Contentful Paint) : doit être < 2.5s -> optimiser images, serveur
  - INP (Interaction to Next Paint) : doit être < 200ms -> réduire le JS bloquant
  - CLS (Cumulative Layout Shift) : doit être < 0.1 -> définir les dimensions des images/pubs
  - Vérifier les pages les plus lentes dans Search Console > Core Web Vitals

- [ ] **Mobile-friendly**
  - Tester les pages principales avec le test mobile Google
  - Vérifier que le texte est lisible sans zoom
  - Vérifier que les boutons/liens ne sont pas trop proches les uns des autres
  - S'assurer que le contenu ne déborde pas de l'écran

- [ ] **HTTPS**
  - Vérifier que toutes les pages sont en HTTPS (pas de mixed content)
  - Vérifier que HTTP redirige vers HTTPS (301)
  - S'assurer que le certificat SSL est valide et pas expiré

- [ ] **Canonicals**
  - Vérifier que chaque page a une balise canonical qui pointe vers elle-même
  - S'assurer qu'il n'y a pas de pages dupliquées avec des canonicals qui se contredisent
  - Vérifier que les pages avec paramètres URL (?sort=, ?page=) pointent vers la bonne canonical

- [ ] **Hreflang (si site multilingue)**
  - Vérifier que chaque page a les balises hreflang vers ses versions dans les autres langues
  - S'assurer que les hreflang sont réciproques (FR pointe vers EN et EN pointe vers FR)
  - Valider les codes de langue (fr-CA, en-CA, etc.)

- [ ] **Données structurées / Schema.org**
  - Tester avec le Rich Results Test de Google
  - Vérifier les types pertinents : LocalBusiness, FAQ, Product, Breadcrumb, Article
  - S'assurer qu'il n'y a pas d'erreurs ou d'avertissements
  - Ajouter les schemas manquants selon le type de contenu

- [ ] **Fichiers CSS/JS**
  - Vérifier que les fichiers CSS et JS ne sont pas bloqués dans robots.txt
  - Google doit pouvoir rendre les pages correctement (tester avec l'inspection d'URL dans Search Console)

---

## On-site

- [ ] **Balises title**
  - Vérifier que chaque page a un title unique
  - Longueur idéale : 50-60 caractères (sinon Google le tronque)
  - Le mot-clé principal doit être au début du title
  - Exporter la liste des titles depuis Screaming Frog -> repérer les doublons et les manquants

- [ ] **Meta descriptions**
  - Vérifier que chaque page a une meta description unique
  - Longueur idéale : 120-155 caractères
  - Doit donner envie de cliquer (inclure un appel à l'action)
  - Exporter depuis Screaming Frog -> repérer les manquantes et les dupliquées

- [ ] **Structure de titres (H1, H2, H3)**
  - Chaque page doit avoir un seul H1 (le titre principal)
  - Les H2 servent de sous-sections, les H3 de sous-sous-sections
  - Vérifier qu'il n'y a pas de sauts de niveaux (H1 -> H3 sans H2)
  - Le H1 doit contenir le mot-clé principal de la page

- [ ] **Contenu dupliqué interne**
  - Chercher dans Screaming Frog les pages avec contenu similaire (near duplicates)
  - Vérifier que les pages de catégories/filtres ne créent pas de duplication
  - Solutions : fusionner les pages, ajouter du contenu unique, ou mettre des canonicals

- [ ] **Maillage interne**
  - Vérifier que les pages importantes reçoivent des liens depuis d'autres pages du site
  - Les ancres de liens doivent être descriptives (pas "cliquez ici")
  - Ajouter des liens contextuels dans le contenu (blog -> services, services -> entre eux)
  - Utiliser Screaming Frog pour voir quelles pages ont le plus/moins de liens internes

- [ ] **Images**
  - Vérifier que toutes les images ont un attribut alt descriptif
  - Compresser les images (TinyPNG, ShortPixel) -> viser < 200 Ko par image
  - Utiliser les formats modernes (WebP ou AVIF) au lieu de PNG/JPG quand possible
  - Vérifier les dimensions : ne pas servir une image de 2000px si elle s'affiche en 400px

- [ ] **URLs**
  - Vérifier que les URLs sont courtes et descriptives (/services/plomberie plutôt que /page?id=123)
  - Pas de caractères spéciaux, accents ou espaces dans les URLs
  - Structure logique qui reflète l'arborescence du site
  - Pas de changement d'URL sans redirection 301

- [ ] **Fil d'Ariane (breadcrumbs)**
  - Vérifier qu'il est présent sur toutes les pages (sauf l'accueil)
  - Vérifier qu'il est balisé en Schema.org BreadcrumbList
  - Les liens doivent fonctionner et refléter la vraie hiérarchie du site

- [ ] **Pages FAQ**
  - Vérifier que le contenu répond à de vraies questions que les gens cherchent
  - Ajouter le balisage Schema FAQPage pour apparaître en rich snippet
  - Les réponses doivent être concises mais complètes
  - Lier les FAQ vers les pages de services pertinentes

- [ ] **Blogue**
  - Vérifier la fréquence de publication (idéal : au moins 2-4 articles/mois)
  - Chaque article doit cibler un mot-clé spécifique avec du volume de recherche
  - Vérifier que les anciens articles sont mis à jour si le contenu est dépassé
  - S'assurer que les articles lient vers les pages de services/produits

- [ ] **Thin content**
  - Identifier les pages avec moins de 300 mots de contenu utile
  - Décider pour chaque : étoffer le contenu, fusionner avec une autre page, ou supprimer (avec redirection)
  - Les pages de catégories vides ou presque vides sont un problème fréquent

- [ ] **Cannibalisation de mots-clés**
  - Vérifier dans Search Console si plusieurs pages se positionnent sur le même mot-clé
  - Si oui : choisir une page principale, rediriger ou fusionner les autres
  - Utiliser des mots-clés différents mais complémentaires pour chaque page

- [ ] **CTAs et conversion**
  - Vérifier que chaque page de service a un appel à l'action clair (bouton, formulaire, téléphone)
  - Le CTA doit être visible sans scroller (above the fold)
  - Tester que les formulaires fonctionnent et que les soumissions arrivent bien

- [ ] **Recherche de mots-clés**
  - Faire une recherche de mots-clés avec SEMrush, Ahrefs ou Google Keyword Planner
  - Identifier les mots-clés à fort volume où le site ne se positionne pas encore
  - Vérifier l'intention de recherche (informationnelle, transactionnelle, navigationnelle)
  - Prioriser les opportunités : mots-clés en position 5-20 (faciles à remonter)

---

## Off-site

- [ ] **Fiche Google Business Profile (anciennement GMB)**
  - Vérifier que toutes les infos sont complètes : nom, adresse, téléphone, horaires, site web
  - Ajouter des photos récentes et de qualité (local, équipe, produits)
  - Choisir les bonnes catégories (principale + secondaires)
  - Publier des Google Posts régulièrement (offres, événements, nouveautés)
  - Répondre à tous les avis (positifs et négatifs)

- [ ] **Profil de backlinks**
  - Analyser avec Ahrefs, SEMrush ou Moz les backlinks existants
  - Vérifier la qualité : Domain Authority des sites qui pointent vers nous
  - Identifier les liens toxiques (spam, sites douteux) -> les ajouter au fichier de désaveu (Disavow)
  - Vérifier la diversité : pas tous les liens depuis le même site ou le même type de site

- [ ] **Citations NAP**
  - Vérifier que le Nom, Adresse et Téléphone sont identiques partout (site, Google, annuaires)
  - La moindre différence (rue vs. r., suite 200 vs #200) peut nuire au SEO local
  - Utiliser un outil comme BrightLocal ou Whitespark pour auditer les citations

- [ ] **Avis Google**
  - Vérifier le nombre d'avis et la note moyenne (viser 4.0+)
  - Mettre en place un processus pour demander des avis aux clients satisfaits
  - Répondre à tous les avis (surtout les négatifs, de façon professionnelle)
  - Vérifier aussi les avis sur les autres plateformes (Facebook, Yelp, Pages Jaunes)

- [ ] **Présence sur annuaires locaux**
  - Vérifier l'inscription sur les annuaires pertinents au secteur et à la région
  - Pages Jaunes, Yelp, TripAdvisor (si applicable), annuaires de l'industrie
  - S'assurer que les infos sont à jour sur chaque annuaire

- [ ] **Réseaux sociaux**
  - Vérifier que les profils existent et sont actifs (Facebook, LinkedIn, Instagram selon le secteur)
  - Les profils doivent avoir un lien vers le site web
  - Cohérence du branding (nom, logo, description) sur tous les réseaux

- [ ] **Stratégie de netlinking**
  - Identifier les opportunités : partenaires, fournisseurs, associations locales, commandites
  - Contenu linkable : créer des ressources utiles que d'autres voudront citer (guides, études, outils)
  - Guest blogging sur des sites pertinents dans le même secteur
  - Relations publiques numériques : communiqués, mentions dans les médias locaux

- [ ] **Analyse des backlinks des concurrents**
  - Identifier les 3-5 concurrents principaux
  - Analyser leurs backlinks avec Ahrefs/SEMrush -> trouver les sites qui lient vers eux mais pas vers nous
  - Contacter ces sites pour proposer du contenu ou un partenariat

- [ ] **Mentions de marque sans lien**
  - Chercher les mentions du nom de l'entreprise sur Google (sans lien vers le site)
  - Contacter les sites qui mentionnent la marque pour demander d'ajouter un lien
  - Configurer une alerte Google Alerts pour surveiller les nouvelles mentions
