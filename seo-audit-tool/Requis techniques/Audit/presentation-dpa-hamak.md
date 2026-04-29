# Audit SEO — Groupe DPA Assurances
## groupedpa.com/fr
### Avril 2026

---

> **hamak** | Marketing numérique
> Préparé par : Audrey Begin

---

---

# TABLE DES MATIÈRES

1. Mise en contexte & situation
2. Audit technique
3. Audit on-site
4. Audit off-site
5. Plan d'action prioritaire

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━
# MISE EN CONTEXTE
# ━━━━━━━━━━━━━━━━━━━━━━━━

---

## Situation actuelle

### Chute de trafic organique : **-46,6 %**

| Période | Sessions organiques |
|---|---|
| Février 2025 | ~784 sessions |
| Février 2026 | ~419 sessions |

**Cause principale identifiée :** migration serveur de janvier 2026 — incomplète sur le plan technique.

---

## Ce qui s'est passé en janvier 2026

La migration a introduit trois problèmes structurels qui se cumulent :

- **Redirections brisées** → perte immédiate et structurelle du trafic acquis
- **Abandon de /en/ sans redirections** → perte de pages avec historique SEO fort
- **Bugs on-page post-migration** → affaiblissement des signaux SEO (noindex, canonical, H1 absent)

> **Note :** La priorité absolue reste la table des redirections. C'est le seul élément qui peut expliquer une chute aussi verticale (-46,6 % en un point de rupture net au 7 janvier 2026). Les autres problèmes aggravent la situation mais n'en sont pas la cause principale.

---

## À propos de la refonte à venir

Une refonte du site est prévue — la date n'est pas encore arrêtée. **Cela ne reporte pas les corrections prioritaires**, au contraire :

- Les redirections et corrections techniques doivent être faites **maintenant** pour stopper l'hémorragie de trafic
- La table des redirections construite aujourd'hui servira de **base indispensable** à la migration future
- Corriger les métadonnées et le contenu aujourd'hui améliore le signal SEO que la refonte héritera

> Nous recommandons de traiter les actions P1 et P2 avant la refonte, indépendamment de son calendrier.

---

## Note sur l'article en anglais

L'article *"7 sounds and noises your house you shouldn't ignore"* (version EN) génère environ **62 % du trafic organique total** du site. C'est un résultat intentionnel et voulu par le client.

Voici pourquoi il performe : il répond à une requête à fort volume cherchée en anglais, même au Québec, et il n'a pas de concurrent direct fort en langue anglaise dans ce créneau.

**Ce que ça révèle :** le site a la capacité de générer du trafic de contenu — mais cette capacité est concentrée sur un seul article, dans une seule langue.

La version française du même article (**"7 sons et bruits de la maison"**) était elle aussi performante avant la migration (CTR de 7,6 % vs 0,8 % pour la version EN). Elle est **bloquée depuis janvier 2026** par une balise noindex — c'est du trafic récupérable immédiatement.

---

## Note sur la redirection de l'article EN

La redirection associée à l'article en anglais **n'est pas la bonne**. Ce point a été mentionné en cours de rencontre. Il est documenté dans les recommandations techniques (P2 — URLs /en/ en 404) et doit être corrigé pour ne pas perdre l'autorité SEO accumulée sur cet article.

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━
# AUDIT TECHNIQUE
# ━━━━━━━━━━━━━━━━━━━━━━━━

---

## Vue d'ensemble — Problèmes techniques identifiés

| Priorité | Nb de problèmes |
|---|---|
| **P1 — Critique** | 6 |
| **P2 — Élevé** | 5 |
| **P3 — Moyen** | 9 |
| **P4 — Bas** | 2 |

---

## P1 — Problèmes critiques

### 1. Redirections brisées

**Problème :** De nombreuses redirections 301 pointent vers le mauvais endroit ou sont cassées, causant une perte de trafic directe et structurelle.

**Solution :**
- Demander la table des redirections de l'ancien site à l'agence (demande formelle)
- Obtenir la liste des redirections actives
- Corriger celles qui pointent au mauvais endroit
- Renvoyer la liste mise à jour à l'agence

**Intervenant :** Audrey + Agence

---

### 2. Article "7 sons et bruits" en noindex/nofollow

**Problème :** Cet article performait bien avant la migration. Il est actuellement bloqué par une balise robots incorrecte.
`https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/7-sons-et-bruits-de-la-maison-a-ne-pas-ignorer`

**Solution :**
- Changer les balises robots en `index, follow` sur cette page
- Demander une réindexation via Google Search Console une fois corrigé

**Intervenant :** Développeur

---

### 3. Sitemap non mis à jour depuis décembre 2025

**Problème :** Le sitemap contient des pages en 404, en noindex, des URLs /node/ et des URLs /en/ — Google continue de les crawler inutilement.

**Solution :**
- Régénérer le sitemap
- Retirer les URLs /en/ si la version anglaise est abandonnée
- S'assurer qu'aucune URL en noindex ou 404 n'est incluse
- Vérifier dans GSC > Sitemaps que le sitemap est soumis sans erreurs

**Intervenant :** Développeur

---

### 4. Pages non pertinentes dans le sitemap

**Problème :** Pages /node/, pages de remerciement et pages de redirection présentes dans le sitemap.

Pages concernées : `/fr/node/749`, `/fr/node/747`, `/fr/node/744`, `/fr/node/631`, `/fr/node/721`, `/fr/node/553`, `/fr/node/584`, `/fr/node/583`, `/fr/node/551`, `/fr/node/582`, `/fr/carrieres/merci`, `/fr/proprietaire`

**Solution :**
- Retirer ces pages du sitemap
- Ajouter une balise noindex sur chacune
- Si le contenu n'a aucune utilité, envisager une redirection 301 vers une page pertinente

**Intervenant :** Développeur

---

### 5. Canonical contradictoire sur la page carrières

**Problème :** La 301 dit "va là-bas" mais la canonical dit "reviens ici". La page a perdu **100 % de ses impressions** (685 → 0).

- URL source : `/fr/carrieres/courtier-assurance-des-particuliers-ventes-0`
- URL destination : `/fr/carrieres/courtierere-assurance-des-particuliers-ventes-academie-intact`

**Solution :**
- Corriger la balise canonical de la page de destination pour qu'elle soit self-referencing
- Corriger la typo "**courtierere**" dans le slug si non intentionnel
- Mettre à jour les hreflang et x-default en conséquence
- Demander une réindexation via GSC

**Intervenant :** Développeur

---

### 6. Pages /en/ encore dans le sitemap

**Problème :** Google continue de crawler des dizaines de pages /en/ abandonnées inutilement.

Pages identifiées : `/en/reclamations`, `/en/blog/train-de-vie/tips-help-new-drivers...`, `/en/blog/boite-a-outils/winter-storage-checklist...`, et 20+ autres URLs /en/.

**Solution :**
- Rediriger chaque URL /en/ en 301 vers son équivalent /fr/
- Retirer toutes les URLs /en/ du sitemap

**Intervenant :** Développeur

---

## P2 — Problèmes élevés

### 7. URLs anglaises de l'article "7 sons" en 404

**Problème :** Trois variantes d'URL anglaises pour l'article le plus performant du site retournent des 404 — variantes générées automatiquement par Drupal.

| URL | Statut |
|---|---|
| `/en/blog/allo-courtier/7-sounds-and-noises-your-house-you-shouldnt-ignore` | À vérifier |
| `/en/blog/allo-courtier/7-sounds-and-noises-in-your-house-that-you-shouldnt-ignore` | 404 |
| `/en/blog/allo-courtier/7-sounds-and-noises-your-house-that-you-shouldnt-ignore` | À vérifier |

**Solution :**
- Identifier l'URL anglaise qui fonctionne
- Rediriger les variantes en 404 vers celle-ci
- Si la version anglaise est abandonnée : rediriger toutes les variantes vers l'équivalent français

**Intervenant :** Développeur

---

### 8. Contenu dupliqué — page "dommages par eau"

**Problème :** Deux pages couvrent le même sujet (dommages par eau en 6 étapes) sans redirection ni canonical entre elles.

- `/fr/dommage-par-eau-en-6-etapes` (landing page standalone)
- `/fr/a-propos/blogue/allo-courtier/quoi-faire-en-cas-de-dommages-par-leau-en-6-etapes` (article blogue)

**Solution :** Garder la version blogue (meilleure structure d'URL) et rediriger `/fr/dommage-par-eau-en-6-etapes` en 301 vers la version blogue.

**Intervenant :** Développeur

---

### 9. H1 manquant sur /fr/a-propos/nos-bureaux

**Problème :** Le contenu est en H2/H3 uniquement — signal de pertinence absent.

**Solution :** Ajouter un H1 unique avec le mot-clé cible, ex : *"Nos bureaux — DPA Assurances"* ou *"Trouvez votre bureau DPA Assurances"*.

**Intervenant :** Développeur

---

### 10. Meta descriptions trop courtes sur 38 pages de services

**Problème :** Actuellement 2-3 mots qui répètent le nom du produit (12-25 caractères au lieu de 120-160).

**Exemples :**
- `/fr/assurances-personnelles/mon-auto` → actuel : *"Assurances Automobile"*
- `/fr/assurances-personnelles/ma-residence` → actuel : *"Assurances Habitation"*
- `/fr/assurances-entreprises/produits-specifiques/administrateurs-et-dirigeants` → contient une **faute de frappe** ("drigigeants")

**Solution :** Réécrire chaque meta description en 120-160 caractères avec :
- Le mot-clé cible principal
- Une proposition de valeur ou un bénéfice client
- Un appel à l'action

**Pages concernées :** 38 pages (toutes les pages de services personnels, entreprises, réclamations, à propos)

**Intervenant :** Audrey

---

### 11. Core Web Vitals — échec sur desktop

**Problème :** CLS de **0,29** (seuil max : 0,1). Images sans dimensions, carrousel sans espace réservé.

**Solution :**
- Ajouter les attributs `width` et `height` sur toutes les images
- Réserver l'espace du carrousel hero avec `min-height` ou `aspect-ratio` CSS
- Précharger l'image LCP avec `<link rel="preload">`
- Optimiser les images (économie ~530 Ko) → LCP mobile sous 2,5 s
- Supprimer le JavaScript inutilisé (~755 Ko) et le CSS inutilisé (~195 Ko)
- Différer les scripts non critiques (2× GTM, cookie consent)
- Éliminer les ressources bloquant le rendu (~2 560 ms d'économie)

**Intervenant :** Développeur

---

## P3 — Problèmes moyens (résumé)

| # | Problème | Solution | Intervenant |
|---|---|---|---|
| 12 | Page `/travailleur-autonome-0` dans le sitemap (doublon) | Retirer du sitemap + noindex ou 301 | Développeur |
| 13 | Images et fichiers manquants en 404 (23 ressources) | Retrouver depuis backup pré-migration ou retirer les balises cassées | Développeur |
| 14 | Anciennes pages carrières retournent 403 (21 URLs) | Rediriger en 301 vers la page carrières ou le poste actif équivalent | Développeur |
| 15 | Données structurées incomplètes (LocalBusiness, FAQPage absents) | Ajouter LocalBusiness sur chaque page de bureau, enrichir Organization | Développeur |
| 16 | Alt text manquant sur 33 images | Ajouter un attribut alt descriptif sur chaque image | Développeur |
| 17 | 17+ pages orphelines dans le sitemap sans lien interne | Intégrer dans la navigation ou retirer du sitemap + noindex | Développeur |
| 18 | Pages hub manquantes (assurances personnelles / entreprises) | Créer 2 pages hub optimisées avec liens vers les sous-pages | Développeur + Audrey |
| 19 | PDFs manquants en 404 (3 fichiers) | Retrouver depuis backup ou retirer les liens | Développeur |

---

## P4 — Problèmes à planifier

| # | Problème | Solution | Intervenant |
|---|---|---|---|
| 20 | Maillage interne faible — blogue déconnecté des pages commerciales | Ajouter des liens contextuels entre services connexes + CTAs dans les articles | Audrey + Développeur |
| 21 | `/fr/a-propos/notre-equipe` retourne un 404 depuis 2022 | Recréer une page équipe pour renforcer le E-E-A-T (non lié à la migration) | Développeur + Client |

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━
# AUDIT ON-SITE
# ━━━━━━━━━━━━━━━━━━━━━━━━

---

## État des lieux — Composition du trafic organique

| Source | Part du trafic |
|---|---|
| Article EN *"7 sounds and noises"* | **~62 %** |
| Trafic de marque (dpa, groupe dpa…) | **~33 %** |
| Hors-marque hors-article | **~1 %** |
| **Total** | **100 %** |

> Votre site est très dépendant de votre notoriété de marque — les gens qui vous trouvent vous connaissent déjà. Vous n'avez qu'un seul article qui génère du trafic organique significatif, uniquement dans sa version anglaise, et la version française est invisible sur Google depuis janvier 2026 en raison d'une erreur technique. **Seulement 1 % de votre trafic provient de personnes qui ne vous connaissent pas encore.**

---

## L'opportunité

Les produits d'assurance suscitent de nombreuses questions avant même qu'un client contacte un courtier. C'est une opportunité précieuse pour :
- **Générer du trafic qualifié** sur des requêtes informationnelles à fort volume
- **Renforcer la crédibilité** de DPA comme référence en assurance au Québec
- **Favoriser les conversions** en répondant aux questions au bon moment du parcours

---

## PRIORITÉ CRITIQUE — Actions immédiates

### #1 — Corriger le noindex de l'article FR "7 sons et bruits de la maison"

**Action :** Changer `noindex` → `index, follow` + réindexation via GSC

> La version française est bloquée depuis janvier 2026 (migration). La version EN génère 62 % du trafic du site — **la version FR avait un CTR de 7,6 % vs 0,8 % pour la version EN** : les francophones cliquaient 10× plus. C'est du **trafic récupérable immédiatement**.

**Intervenant :** Développeur | **Effort :** Très faible

---

### #2 — H1 de la page d'accueil : absent (bug template)

**Action :** Rédiger un H1 pour l'accueil

> Le signal de pertinence le plus important pour Google est absent sur la page la plus stratégique du site.

**Intervenant :** Audrey | **Effort :** Très faible

---

## PRIORITÉ ÉLEVÉE — On-page & Métadonnées

| # | Problème | Action | Effort |
|---|---|---|---|
| 3 | **H1 des pages produits** (auto, résidence) : termes navigationnels (*"Automobile"*, *"Ma maison"*) — Google ne comprend pas sur quels mots-clés les positionner | Rédiger H1 orientés mots-clés | Faible |
| 4 | **Balises Title des pages résidence** : format navigational | Réécrire selon le modèle : *Assurance [produit] au Québec \| DPA Assurances* | Faible |
| 5 | **Page /travailleur-autonome** : "assurance" absent du Title et du H1 | Ajouter le mot-clé principal | Très faible |
| 6 | **Page /reclamations/declarer-un-sinistre** : Title = "Nouvelle demande" | Titre de formulaire interne visible dans les SERP — à corriger | Très faible |
| 7 | **Meta description EN de l'article "7 sounds"** : rédigée en français | Rédiger en anglais | Très faible |

**Intervenant :** Audrey

---

## PRIORITÉ ÉLEVÉE — Contenu

| # | Problème | Action | Effort |
|---|---|---|---|
| 8 | **Page /travailleur-autonome** : contenu insuffisant, pas de H2 orientés questions | Page la plus sous-optimisée — rédaction à prioriser | Moyen |
| 9 | **FAQ structurée** sur les pages auto, maison, condo | Ajouter contenu FAQ + Schema FAQPage → featured snippets sur requêtes à fort volume | Moyen |
| 10 | **Page hub /assurances-commerciales** : quasi-vide | Impossible de se positionner sur "assurance entreprise Québec" sans contenu | Moyen |
| 11 | **H2 orientés questions** sur /mon-auto et /ma-maison | Aucun H2 ne correspond à ce que les gens cherchent — pages invisibles sur la longue traîne | Faible |

**Intervenant :** Audrey

---

## PRIORITÉ ÉLEVÉE — Maillage interne

| # | Problème | Action | Effort |
|---|---|---|---|
| 12 | **CTAs génériques** sur toutes les pages (*"Obtenir une soumission"*) | Personnaliser les CTAs par contexte pour augmenter les conversions | Moyen |
| 13 | **Articles de blogue sans liens** vers les pages produits | Le jus SEO des articles ne transite jamais vers les pages commerciales — ajouter 1-2 liens contextuels par article | Faible |
| 14 | **/ma-maison ↔ /mon-auto** : maillage inexistant | La combo auto+habitation est un produit clé — lien bidirectionnel évident non exploité | Très faible |
| 15 | **/dommage-par-eau-en-6-etapes** : page orpheline | Doit être liée depuis /ma-maison et /mon-condo | Très faible |

**Intervenant :** Audrey + Développeur

---

## PRIORITÉ MOYENNE — Stratégie de contenu

> Le trafic hors-marque représente **1 % du total**. Les recommandations suivantes visent à changer cette réalité.

| # | Action | Impact | Effort |
|---|---|---|---|
| 16 | **/travailleur-autonome** → **/entreprises-de-services** : lien manquant | Faible | Très faible |
| 17 | Créer une **page pilier "Pourquoi choisir un courtier"** (article de 2020 à transformer) | Requête transversale — convertir en landing page `/fr/pourquoi-un-courtier` | Moyen |
| 18 | **Pages locales par ville** : Saint-Hyacinthe, Drummondville, Brossard | DPA est 1er sur GMB localement mais zéro page ciblant "assurance auto Saint-Hyacinthe" | Élevé |
| 19 | **Contenu sur les sinistres climatiques** (inondations, verglas) | Sujet d'actualité au Québec — la page dommages-par-eau est orpheline, aucune stratégie autour du risque climatique | Moyen |
| 20 | **Page cybersécurité** : ajouter contenu Loi 25 / LPRPDE | Renforcer la page la mieux structurée du site avec un sujet d'actualité légale | Faible |
| 21 | **Page condo** : mentionner les changements Loi 16/141 (syndicats de copropriété) | Sujet réglementaire directement lié aux besoins des copropriétaires québécois | Faible |

---

## PRIORITÉ BASSE — Opportunités futures

| # | Opportunité | Contexte | Effort |
|---|---|---|---|
| 22 | **Page assurance véhicule électrique** | Marché en forte croissance au Québec, concurrence encore faible chez les courtiers — gap sémantique à saisir | Moyen |
| 23 | **CTAs dans le corps des articles** | Les CTAs sont uniquement en sidebar — les intégrer dans le corps du texte augmente les conversions | Faible |

---

## Référence à retenir

> La page **/cybersecurite** est le **modèle à suivre** : H2 par besoin client, contenu dense avec stats, CTA intégré naturellement. Ce standard doit s'appliquer à **/mon-auto** et **/ma-maison** en priorité — ce sont les pages avec le plus grand potentiel de trafic perdu.

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━
# AUDIT OFF-SITE
# ━━━━━━━━━━━━━━━━━━━━━━━━

---

## Contexte SEO local

Dans la quasi-totalité des villes desservies, les volumes de recherche sont **très faibles** pour les requêtes locales de type "courtier assurance [ville]". Cela indique que les utilisateurs qui cherchent un courtier ne privilégient pas de solutions hyperlocales.

Dans la plupart des villes, les fiches **La Turquoise** apparaissent déjà parmi les 3 premiers résultats.

Les notes des fiches DPA sont presque toutes à **4+ étoiles** — peu de risque d'être écarté lors des comparaisons.

> **Conclusion :** Le potentiel d'attirer plus de trafic grâce au SEO local est plutôt **limité** — mais il reste des lacunes concrètes à corriger.

---

## Opportunités organiques identifiées

| Thématique | Volume mensuel (Québec) | Exemple de requête |
|---|---|---|
| Questions assurance habitation | ~2 100 / mois | *"combien coûte une assurance habitation"* |
| Questions assurance auto | ~2 600 / mois | *"est-ce obligatoire d'avoir une assurance auto ?"* |
| Questions assurance entreprise | ~110 / mois | *"combien coûte une assurance entreprise ?"* |

> Nous sommes optimistes sur la possibilité d'améliorer le trafic et les soumissions organiques avec un travail de SEO on-site (contenus des pages de services) et off-site (réputation en ligne, backlinks). Pareil pour une stratégie de contenu blogue — nous sommes confiants que ça peut générer du trafic et des soumissions.

---

## Google Business Profile — État des fiches

| Succursale | Position GMB | Étoiles | Avis |
|---|---|---|---|
| Saint-Hyacinthe | **1er** | ★ 4,8 | 426 avis |
| Drummondville | **1er** | ★ 4,8 | 53 avis |
| Brossard | **8e** | ★ 4,7 | 246 avis |
| Roxton Pond | **PAS DE FICHE** | — | — |

**Points forts :** Saint-Hyacinthe domine localement. Bonne réputation globale.

**Problèmes :**
- **Roxton Pond sans fiche** = opportunité manquée pour une acquisition récente
- **Brossard en 8e position** — optimisation nécessaire
- **Drummondville** : seulement 53 avis malgré une bonne note — campagne de collecte à lancer

---

## Profil de backlinks (données SEMrush)

**Autorité de domaine (DA) : 21/100** — modeste pour une entreprise avec 35 000 clients et plus de 80 ans d'histoire.

| Indicateur | Valeur |
|---|---|
| Domaines référents | 238 |
| Liens de qualité réels (DA 20+) | ~10–15 domaines pertinents |
| Liens éditoriaux sur mots-clés commerciaux | Aucun |

### Liens de qualité identifiés

| Domaine | DA | Industrie | Qualité |
|---|---|---|---|
| santemonteregie.qc.ca | 47 | Santé | ✓ Bon — lien éditorial régional |
| grenier.qc.ca | 38 | Marketing/pub | ✓ Bon — média québécois |
| cegepmontpetit.ca | 37 | Éducation | ✓ Bon — institution |
| eebeauce.com | 28 | Médias | ✓ Bon — média régional |
| arpac.org | 27 | Automobile | ✓ Bon — association |
| aappq.qc.ca | 26 | Architecture | ✓ Bon — association professionnelle |
| ccid.qc.ca | 24 | Commerce | ✓ Bon — chambre de commerce |
| yahoo.com | 100 | Médias | ✗ Faible — annuaire automatique |

---

## Recommandations off-site

| Priorité | Action |
|---|---|
| **P1** | Créer la fiche GMB pour **Roxton Pond** |
| **P1** | Optimiser la fiche **Brossard** (photos, description, posts réguliers) |
| **P2** | Stratégie d'acquisition de liens — associations professionnelles, médias régionaux |
| **P2** | Campagne de collecte d'avis Google à **Drummondville** |
| **P3** | Désavouer les liens de scraping B2B (clodura, success.ai, salezshark) |

---

---

# ━━━━━━━━━━━━━━━━━━━━━━━━
# PLAN D'ACTION PRIORITAIRE
# ━━━━━━━━━━━━━━━━━━━━━━━━

---

## Récapitulatif — Actions par priorité

### PRIORITÉ CRITIQUE — À faire dans les 2 semaines

| # | Action | Intervenant | Impact attendu |
|---|---|---|---|
| 1 | Demander la **table des redirections** à l'agence + corriger les 301 brisées | Audrey + Agence | Récupérer le trafic perdu depuis janvier 2026 |
| 2 | Corriger le **noindex de l'article FR "7 sons et bruits"** + réindexation GSC | Développeur | Récupérer immédiatement du trafic (CTR FR = 7,6 %) |
| 3 | **Régénérer le sitemap** (retirer 404, noindex, /en/, /node/) | Développeur | Meilleure crawl efficiency, moins d'erreurs GSC |
| 4 | Corriger le **canonical contradictoire** sur la page carrières | Développeur | Récupérer les 685 impressions perdues à 0 |
| 5 | **Rediriger les URLs /en/** en 301 vers les équivalents /fr/ | Développeur | Transférer l'autorité SEO des pages abandonnées |

---

### PRIORITÉ ÉLEVÉE — Dans le mois

| # | Action | Intervenant | Impact attendu |
|---|---|---|---|
| 6 | Rédiger les **H1 et Titles** des pages auto, résidence, travailleur autonome | Audrey | Améliorer le positionnement sur les mots-clés principaux |
| 7 | Rédiger les **38 meta descriptions** de service | Audrey | Améliorer le CTR dans les SERP |
| 8 | Corriger les **variantes d'URL /en/ de l'article "7 sounds"** en 404 | Développeur | Protéger l'article le plus performant du site |
| 9 | Créer la **fiche GMB de Roxton Pond** | Audrey | Opportunité locale manquée à saisir rapidement |
| 10 | **Optimiser la fiche Brossard** (photos, description, posts) | Audrey | Progresser depuis la 8e position |

---

### PRIORITÉ MOYENNE — Dans les 3 mois

| # | Action | Intervenant | Impact attendu |
|---|---|---|---|
| 11 | Améliorer le contenu de **/travailleur-autonome** | Audrey | Page la plus sous-optimisée du site |
| 12 | Ajouter des **FAQ structurées** sur /mon-auto, /ma-maison, /mon-condo | Audrey | Viser les featured snippets sur requêtes à fort volume |
| 13 | Enrichir la **page hub /assurances-commerciales** | Audrey | Se positionner sur "assurance entreprise Québec" |
| 14 | **Maillage interne** : lier les articles de blogue aux pages produits | Audrey | Faire transiter le jus SEO vers les pages commerciales |
| 15 | Ajouter des **données structurées LocalBusiness** sur les pages de bureau | Développeur | Renforcer la présence locale dans les SERP |
| 16 | **Campagne d'avis Google** à Drummondville | Audrey | Renforcer la fiche GMB (53 avis insuffisants) |

---

### PRIORITÉ BASSE — Planification future

| # | Action | Intervenant | Impact attendu |
|---|---|---|---|
| 17 | **Pages locales** par ville (Saint-Hyacinthe, Drummondville, Brossard) | Audrey + Développeur | Capter le trafic local hors-marque |
| 18 | **Page pilier "Pourquoi choisir un courtier"** | Audrey | Requête transversale à tout le site |
| 19 | **Page assurance véhicule électrique** | Audrey | Gap sémantique à saisir avant les concurrents |
| 20 | Contenu **sinistres climatiques / Loi 25 / Loi 16** | Audrey | Sujets d'actualité à fort potentiel |
| 21 | **Stratégie de backlinks** — associations pro, médias régionaux | Audrey | Augmenter le DA (actuellement 21/100) |
| 22 | Recréer la page **/notre-equipe** (404 depuis 2022) | Développeur + Client | Renforcer le E-E-A-T — critique en assurance |

---

## Prochaine étape recommandée

**Action #1 à poser aujourd'hui :** Envoyer une demande formelle à l'agence pour obtenir la table des redirections de l'ancien site. C'est le levier unique qui peut expliquer — et corriger — la chute de -46,6 % de trafic.

---

*Audit préparé par hamak | Avril 2026*
*Données : Google Search Console, Google Analytics 4, SEMrush*
