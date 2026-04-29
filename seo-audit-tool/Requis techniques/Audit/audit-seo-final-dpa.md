# Audit SEO — Groupe DPA Assurances
**Avril 2026 — Rapport final**

---

## Résumé exécutif

Groupe DPA Assurances enregistre une chute de trafic organique de **-46,6%** entre février 2025 et février 2026. Cette baisse n'est pas progressive : elle est verticale, débutant précisément le 7 janvier 2026, date de la migration de serveur. Ce n'est pas un changement d'algorithme Google. C'est un événement technique daté, identifiable, et en grande partie récupérable.

Cet audit couvre trois dimensions :

1. **Technique** : les problèmes introduits lors de la migration qui ont causé la chute et qui freinent encore le site aujourd'hui.
2. **On-site** : l'état du contenu, pourquoi les pages de services sont invisibles sur Google, et ce qu'il faut construire pour générer du trafic qualifié.
3. **Off-site** : l'autorité du domaine, le profil de liens et la présence locale.

La conclusion est la suivante : DPA Assurances a une base solide — 80 ans d'histoire, 35 000 clients, 4 succursales, une réputation de marque forte. Mais le site ne traduit pas cette autorité réelle en autorité SEO. Avec les bonnes interventions, le trafic perdu est récupérable à court terme, et le trafic nouveau (hors marque) est atteignable à moyen terme.

---

## 1. Analyse de la chute de trafic

### 1.1 Les chiffres

| Période | Sessions organiques |
|---|---|
| Février 2025 | ~784 sessions |
| Février 2026 | ~419 sessions |
| **Variation** | **-46,6%** |

La baisse n'est pas uniforme sur l'année. Elle se concentre sur une rupture nette au **7 janvier 2026**, coïncidant exactement avec la migration de serveur.

### 1.2 Répartition du trafic actuel

Avant de corriger, il est essentiel de comprendre ce que représente ce trafic résiduel :

| Source | Part du trafic |
|---|---|
| Article EN « 7 sons et bruits de la maison » | ~62% |
| Trafic de marque (DPA, Groupe DPA, groupedpa.com) | ~33% |
| Trafic hors marque, hors article | **~1%** |

Ce tableau est le signal le plus important de l'audit. **Seulement 1% du trafic organique provient de personnes qui ne connaissent pas encore DPA.** Le site ne génère pas de nouveaux clients via Google — il sert uniquement ceux qui cherchent déjà la marque.

### 1.3 Le cas de l'article « 7 sons et bruits »

L'article en version anglaise génère 62% du trafic du site. Ce chiffre est trompeur pour plusieurs raisons :

- **Seulement 7% de ce trafic provient du Canada.** Le reste vient de France, de Belgique et d'Afrique francophone — des marchés sans valeur commerciale pour DPA.
- **L'intention de recherche est informationnelle**, pas transactionnelle. Quelqu'un qui entend un bruit dans son plancher ne cherche pas un courtier en assurance — il cherche à identifier la cause du bruit.
- **Le taux de conversion est proche de zéro.**
- **La version française de cet article est bloquée à Google depuis janvier 2025** (balise `noindex` introduite lors d'une migration précédente). Le CTR de la version française était de 7,6% contre 0,8% pour l'anglaise — les francophones cliquaient 10 fois plus. C'est du trafic récupérable immédiatement avec une correction technique.

Dépendre de cet article pour 62% du trafic, c'est construire sur du sable. L'objectif réel est de bâtir du trafic qualifié sur les pages produits.

---

## 2. Audit technique

### 2.1 Priorité 1 — Problèmes critiques (impact direct sur le trafic)

#### Redirections brisées

**Problème :** Lors d'une migration de serveur, chaque page qui change d'adresse doit laisser une redirection 301 — une « note de transfert » qui indique à Google où trouver le contenu. Ces redirections ont été mal configurées ou absentes lors de la migration de janvier 2026.

**Impact :** Google a perdu le fil de nombreuses pages. L'autorité accumulée sur ces URLs (backlinks, historique de clics, signaux d'engagement) ne s'est pas transférée aux nouvelles adresses.

**Action :** Demander la table de redirections complète à l'agence ayant géré la migration. Identifier les URLs sources (ancien site) et leurs équivalents actuels. Corriger les redirections qui pointent au mauvais endroit. Revalider via Google Search Console.

**Responsable :** Audrey + Agence

---

#### Article « 7 sons FR » en noindex

**Problème :** La page `https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/7-sons-et-bruits-de-la-maison-a-ne-pas-ignorer` porte une balise `<meta name="robots" content="noindex">` depuis janvier 2025. Google ne peut pas l'indexer.

**Impact :** La version française de l'article le plus performant du site est invisible sur Google depuis plus d'un an. Récupérable en quelques jours après correction.

**Action :** Modifier la balise `noindex` en `index, follow`. Soumettre l'URL pour réindexation via Google Search Console > Inspection d'URL.

**Responsable :** Développeur

---

#### Sitemap non mis à jour depuis décembre 2025

**Problème :** Le sitemap XML contient des URLs en 404, des pages avec balise `noindex`, des pages `/node/` sans valeur SEO, et des pages `/en/` de la version anglaise abandonnée.

**Impact :** Google gaspille son budget de crawl sur des pages mortes et ignore les pages qui comptent. Des pages indexables peuvent rester ignorées pendant des semaines.

**Action :** Régénérer le sitemap. Règle absolue : un sitemap ne doit contenir que des pages indexables (statut 200, sans noindex, sans canonical pointant ailleurs). Soumettre le nouveau sitemap via Google Search Console > Sitemaps.

**Responsable :** Développeur

---

#### Pages /node/ dans le sitemap

**Problème :** 10 URLs de type `/fr/node/XXX` sont présentes dans le sitemap. Ce sont des pages techniques générées par Drupal, sans contenu pour les utilisateurs.

**URLs concernées :** `/fr/node/749`, `/fr/node/747`, `/fr/node/744`, `/fr/node/631`, `/fr/node/721`, `/fr/node/553`, `/fr/node/584`, `/fr/node/583`, `/fr/node/551`, `/fr/node/582`, et la page `/fr/carrieres/merci`.

**Action :** Retirer ces URLs du sitemap. Ajouter une balise `noindex` sur chacune. Si certaines génèrent encore du trafic, rediriger en 301 vers une page pertinente.

**Responsable :** Développeur

---

#### Canonical contradictoire sur /carrieres

**Problème :** La page `/fr/carrieres/courtier-assurance-des-particuliers-ventes-0` redirige (301) vers `/fr/carrieres/courtierere-assurance-des-particuliers-ventes-academie-intact`. Mais cette page de destination possède une balise canonical qui pointe vers l'ancienne URL — créant une boucle logique. Google ne sait pas quelle version valoriser.

**Impact mesuré :** Cette page est passée de 685 impressions à 0 dans Google Search Console.

**Action :** Corriger la balise canonical de la page de destination pour qu'elle soit auto-référencée (`self-referencing`). Corriger la typo « courtierere » dans le slug si ce n'est pas intentionnel. Mettre à jour les balises hreflang et x-default.

**Responsable :** Développeur

---

#### Pages /en/ encore dans le sitemap

**Problème :** 24+ pages de la version anglaise abandonnée restent dans le sitemap. Google continue de les crawler, découvre des contenus sans avenir, et dépense du crawl budget sur des pages qui ne seront jamais indexées correctement.

**Pages concernées :** `/en/reclamations`, `/en/blog/train-de-vie/*`, `/en/blog/boite-a-outils/*`, `/en/blog/allo-courtier/*`, `/en/a-propos/nos-bureaux`, `/en/a-propos/nous-joindre`, etc.

**Action :** Décision préalable à confirmer : la version anglaise est-elle définitivement abandonnée ? Si oui, rediriger chaque URL `/en/` en 301 vers son équivalent `/fr/`. Retirer toutes les URLs `/en/` du sitemap.

**Responsable :** Développeur

---

### 2.2 Priorité 2 — Problèmes élevés

#### H1 manquant sur /nos-bureaux

La page `/fr/a-propos/nos-bureaux` n'a pas de H1. Son contenu commence directement en H2/H3. Le H1 est le signal de pertinence le plus important pour Google sur une page.

**Action :** Ajouter un H1 : « Nos bureaux — DPA Assurances » ou « Trouvez votre bureau DPA Assurances près de chez vous ».

---

#### Meta descriptions absentes ou trop courtes sur toutes les pages de services

**Problème :** Les 38 pages de services ont des méta-descriptions de 2 à 3 mots qui répètent le nom du produit. Exemples : « Assurances Automobile », « Assurances Habitation », « Assurance moto ».

**Impact :** Une méta-description n'est pas un facteur de classement direct, mais elle est le texte qui apparaît dans les résultats Google. Une description de 3 mots ne convainc pas l'utilisateur de cliquer. Google la réécrit de toute façon — mais la version générée automatiquement est rarement optimale.

**Format cible :** 120 à 160 caractères, avec : le mot-clé cible principal + une proposition de valeur ou bénéfice client + un appel à l'action.

**Exemple actuel :** « Assurances Automobile »
**Exemple cible :** « Comparez 5 assureurs reconnus pour votre assurance auto au Québec. Obtenez une soumission personnalisée avec un courtier DPA — en ligne ou par téléphone. »

La réécriture des 38 méta-descriptions est un chantier de faible effort technique et d'impact visible immédiat dans les résultats de recherche.

**Responsable :** Audrey

---

#### Core Web Vitals échoué (CLS 0,29 sur desktop — seuil maximum : 0,1)

**Problème :** Le Cumulative Layout Shift (CLS) mesure la stabilité visuelle d'une page au chargement. Un score de 0,29 signifie que les éléments de la page se déplacent visiblement pendant le chargement — expérience utilisateur dégradée, facteur de classement Google raté.

**Causes identifiées :**
- Images sans attributs `width` et `height` définis
- Carrousel hero sans espace réservé
- ~755 Ko de JavaScript inutilisé
- ~195 Ko de CSS inutilisé

**Actions :**
- Ajouter `width` et `height` sur toutes les images
- Réserver l'espace du carrousel avec `min-height` ou `aspect-ratio` en CSS
- Supprimer ou différer le JavaScript non critique
- Précharger l'image principale (LCP) avec `<link rel="preload">`

**Responsable :** Développeur

---

#### Contenu dupliqué sur le thème des dommages par l'eau

**Problème :** Deux pages couvrent le même sujet sans coordination :
- `/fr/dommage-par-eau-en-6-etapes` (landing page standalone)
- `/fr/a-propos/blogue/allo-courtier/quoi-faire-en-cas-de-dommages-par-leau-en-6-etapes` (article de blogue)

Google ne sait pas quelle version valoriser. L'autorité se dilue entre les deux.

**Action :** Garder la version blogue (meilleure structure d'URL). Rediriger `/fr/dommage-par-eau-en-6-etapes` en 301 vers l'article de blogue.

**Responsable :** Développeur

---

### 2.3 Priorité 3 — À planifier

#### 33 images sans texte alternatif

Les balises `alt` manquent sur 33 images (logos, icônes SVG, thumbnails d'articles). C'est un signal d'accessibilité et de pertinence pour Google Image Search.

**Action :** Ajouter un attribut `alt` descriptif sur chaque image. Logos : `alt="Logo DPA Assurances"`. Images de contenu : décrire le sujet en lien avec l'article.

---

#### 17+ pages orphelines dans le sitemap

Ces pages sont présentes dans le sitemap mais ne reçoivent aucun lien interne. Google peut les crawler mais ne leur accorde aucune autorité.

**Pages concernées :** `/fr/offre-assurance-vehicule-de-loisirs`, `/fr/avantage-AAPQ`, `/fr/employe`, `/fr/proprietaire`, `/fr/travailleur-autonome` (landing page distincte), `/fr/concoursamvoq`, plusieurs pages d'actualités.

**Action :** Pour chaque page — soit l'intégrer dans la navigation ou dans le maillage interne, soit la retirer du sitemap et la mettre en `noindex`.

---

#### Données structurées incomplètes

Le site utilise les schémas `InsuranceAgency`, `Website`, `BreadcrumbList` et `Article`. Il manque :

- **`LocalBusiness`** sur chaque page de bureau individuel (adresse, téléphone, horaires, coordonnées GPS) — essentiel pour le SEO local
- **`FAQPage`** sur les pages produits — permet d'apparaître dans les extraits enrichis de Google
- **`Organization`** complété sur l'accueil (adresse du siège, zone desservie, LinkedIn)

---

#### Pages carrières en 403 accessibles par Google

22 anciennes URLs de carrières retournent un statut 403 (accès interdit) mais restent accessibles par les robots de Google.

**Action :** Rediriger chaque URL en 301 vers la page principale des carrières ou vers un poste actif équivalent.

---

#### Images et fichiers brisés post-migration

~25 ressources embarquées dans les articles de blogue retournent une erreur 404. Ces images et PDFs ont existé avant la migration mais n'ont pas été transférés.

**Action :** Retrouver les fichiers originaux dans les backups pre-migration ou sur l'ancien serveur. Les ré-uploader aux mêmes chemins. Si introuvables, retirer les références dans les articles. Ne pas utiliser de redirections 301 pour les images — ce sont des ressources embarquées, pas des pages indexées.

---

### 2.4 Priorité 4 — Améliorations structurelles

#### Maillage interne faible

Le site n'a pas de stratégie de maillage interne. Les pages de services ne se lient pas entre elles. Les articles de blogue ne pointent pas vers les pages commerciales correspondantes. Chaque page est une île.

**Impact :** Google utilise les liens internes pour évaluer l'importance relative des pages et transférer l'autorité. Sans liens, les pages commerciales (auto, maison) ne bénéficient d'aucun « jus SEO » des autres pages.

**Actions :**
- Ajouter des liens contextuels entre produits connexes (ex. : assurance auto → assistance routière → pardon des accidents)
- Lier chaque article de blogue vers la page de service correspondante
- Créer des CTA dans les articles pointant vers les pages commerciales

---

#### Page /notre-equipe en 404 depuis 2022

La page `/fr/a-propos/notre-equipe` retourne une erreur 404. Cette page n'est pas liée à la migration de janvier 2026 — elle était déjà absente.

**Impact SEO :** Google évalue la crédibilité des sites d'assurance avec une attention particulière au E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Une page « Notre équipe » avec des courtiers nommés, leurs années d'expérience et leurs spécialisations renforce directement ce signal dans un secteur que Google classe comme « Your Money or Your Life » (YMYL).

**Action :** Recréer la page avec les photos, noms, titres et expertises des courtiers.

---

## 3. Audit on-site — Contenu

### 3.1 Portrait du trafic organique actuel

Le site est **entièrement dépendant de la notoriété de marque**. Les personnes qui trouvent DPA via Google vous connaissent déjà. Seulement 1% du trafic organique provient de personnes qui découvrent DPA pour la première fois via une recherche non-commerciale.

Ce chiffre est la vraie mesure de la performance SEO on-site — pas le trafic total, pas le trafic de marque. **1%.**

La bonne nouvelle : c'est aussi la plus grande opportunité. Les produits d'assurance génèrent des milliers de questions avant qu'un client contacte un courtier. Ces questions sont posées chaque mois sur Google. Le site n'y répond pas encore.

---

### 3.2 Analyse des pages de services — Pourquoi elles ne se positionnent pas

Quatre pages ont été analysées en détail : `/mon-auto`, `/ma-maison`, `/entreprise-agricole`, et `/biens-et-resp-civile`. Le diagnostic est le même pour toutes.

#### Le problème fondamental : des pages de navigation déguisées en pages de contenu

Chaque page de service suit exactement le même gabarit :

1. Héros avec CTA « Soumission en ligne »
2. Processus en 3 étapes (remplir → soumission → courtier)
3. Liste de caractéristiques produit (noms de produits Intact)
4. Programme FADOQ
5. Formulaire de contact

**Google voit 20 pages avec la même architecture, le même volume de contenu, et la même structure.** Il ne peut pas les différencier. Ces pages ne répondent à aucune intention de recherche — elles attendent que l'utilisateur soit déjà convaincu pour lui demander une soumission.

---

#### /mon-auto — Assurance automobile

**Situation actuelle :**

| Élément | Contenu actuel | Problème |
|---|---|---|
| H1 | « Automobile » | Terme navigationnel. Aucun mot-clé ciblé. |
| Meta title | « DPA Assurances: Protections Auto - Particuliers » | La marque en premier, pas le mot-clé |
| Meta description | Absente | Google génère un extrait aléatoire |
| H2 principaux | « Débutez votre soumission », « Prix, protection, service : un trio gagnant », « Pour l'accès à des programmes de qualité » | 100% marketing. Aucun H2 ne correspond à une recherche réelle. |
| Contenu utile | ~400 mots hors navigation | Insuffisant |

**Ce que les utilisateurs cherchent et que cette page ne couvre pas :**

- *« est-ce obligatoire d'avoir une assurance auto au Québec »* → absent
- *« combien coûte une assurance auto au Québec »* → absent (aucune fourchette, aucun facteur explicatif)
- *« c'est quoi le pardon des accidents »* → mentionné en titre de section mais jamais expliqué
- *« assurance auto tous risques vs responsabilité civile »* → absent
- *« que couvre l'assurance auto de base »* → absent
- *« comment est calculée ma prime d'assurance auto »* → absent

**Volume de recherche mensuel estimé (Québec) :** 2 600 requêtes/mois pour les questions liées à l'assurance automobile.

---

#### /ma-maison — Assurance habitation propriétaire

**Situation actuelle :**

| Élément | Contenu actuel | Problème |
|---|---|---|
| H1 | « Ma maison » | Nom de navigation Intact, pas un mot-clé |
| Meta title | « Ma Maison - Particuliers - DPA Assurances » | Aucun mot-clé commercial |
| Meta description | Absente | — |
| H2 principaux | « Pour trouver la sérénité », « Ma maison et moi », « Assurance Synchro », « LibrEspace FADOQ » | Tous des noms de produits Intact |
| Point positif | Section « Dommages causés par l'eau » avec conseils | Bonne intuition — à développer massivement |

**Observation critique :** Cette page ressemble à une brochure Intact, pas à une page DPA. Tous les avantages mis en avant (Garantie service-client, Réseau Confiance, Ma maison et moi) sont des marques déposées Intact — que n'importe quel autre courtier peut aussi proposer. Il n'y a aucune proposition de valeur propre à DPA.

**Ce que les utilisateurs cherchent et que cette page ne couvre pas :**

- *« combien coûte une assurance habitation au Québec »* → absent
- *« qu'est-ce que couvre une assurance habitation »* → partiellement, noyé dans le contenu
- *« assurance habitation et inondation au Québec »* → 4 points de prévention, pas une explication de couverture
- *« valeur à neuf ou valeur réelle : quelle différence »* → absent
- *« que faire en cas de sinistre habitation »* → absent

**Volume de recherche mensuel estimé (Québec) :** 2 100 requêtes/mois.

**Lien interne manquant critique :** la page ne crée aucun lien vers `/mon-auto` pour l'assurance Synchro (combo auto+habitation avec 15% d'économies). Ce lien devrait exister dans les deux sens.

---

#### /entreprise-agricole — Assurance agricole

**Situation actuelle :**

| Élément | Contenu actuel | Problème |
|---|---|---|
| H1 | « Assurance Agricole » | Acceptable — c'est un mot-clé réel |
| Meta title | « Assurance agricole - Entreprises - DPA Assurances » | Correct mais générique |
| Meta description | Absente | — |
| Contenu | ~900-1 100 mots | Trop mince pour un sujet spécialisé |
| Point fort majeur | Mario Poirier nommé, 75 ans d'expérience, fondation 1948 | Excellent signal E-E-A-T — sous-exploité |

**C'est la page qui a le plus grand potentiel inexploité du site.** DPA a un avantage concurrentiel réel et documenté (75 ans de spécialisation agricole, expert nommé, ancrage régional). Mais la page ne démontre pas cet avantage de façon suffisamment approfondie. Un courtier généraliste avec une page mieux structurée et plus dense peut la déclasser.

**Ce que les utilisateurs cherchent :**

- *« assurance ferme laitière Québec »*
- *« comment assurer mes équipements agricoles »*
- *« assurance bâtiments agricoles »*
- *« assurance perte de revenus agricole »*
- *« assurance animaux d'élevage »*

**Ces recherches sont de faible volume mais de très haute intention commerciale.** Un agriculteur qui cherche une assurance pour sa ferme laitière est prêt à contacter un courtier.

---

#### /biens-et-resp-civile — Assurance biens et responsabilité civile

**Situation actuelle :**

| Élément | Contenu actuel | Problème |
|---|---|---|
| H1 | « Assurance Biens et Responsabilité Civile » | Terme technique interne |
| Meta title | Idem au H1 | Personne ne cherche cette formulation exacte |
| Contenu | **650-750 mots** | La page la plus mince du site sur un sujet qui concerne toutes les entreprises |
| Point fort | Introduction avec exemples narratifs concrets | Très bonne approche — à amplifier massivement |

**C'est la page la plus problématique du segment entreprises.** 650 mots sur l'assurance responsabilité civile commerciale — un sujet qui touche toutes les PME du Québec. Un concurrent avec une page de 1 800 mots bien structurée la déclasse automatiquement sur des requêtes à fort volume.

L'introduction existante (« votre stagiaire emboutit un véhicule dans l'entrée ») est excellente — c'est exactement la bonne façon de rendre un produit abstrait concret. Le reste de la page abandonne cette approche et retombe dans la liste de caractéristiques.

---

#### Ce que toutes ces pages ont en commun

Cinq problèmes traversent les quatre pages analysées et, par extension, les 20 pages de services du site :

**1. Des H1 qui sont des catégories de navigation, pas des mots-clés**
« Automobile », « Ma maison », « Assurance Biens et Responsabilité Civile » — aucun ne correspond à une requête que quelqu'un taperait dans Google.

**2. Zéro section FAQ**
Les questions que les utilisateurs se posent avant de contracter une assurance (coût, couverture, exclusions, processus de réclamation) ne trouvent pas de réponse sur le site. Google ne peut pas positionner ces pages sur des requêtes de type question.

**3. Un contenu orienté vente, pas réponse**
Chaque page pousse immédiatement vers la soumission. Un utilisateur qui n'a pas encore décidé — c'est-à-dire la majorité — rebondit. Google interprète ce comportement comme un signe que la page ne correspond pas à la recherche.

**4. Aucun lien interne entre produits connexes**
La page auto ne pointe pas vers l'assistance routière ni vers le pardon des accidents. La page maison ne pointe pas vers la page auto pour le combo. La page entreprise agricole ne pointe pas vers la responsabilité civile agricole. Chaque page est une île.

**5. Un contenu de marque Intact, pas un contenu DPA**
Les avantages mis en avant (Synchro, LibrEspace, Ma maison et moi, Garantie service-client, Réseau Confiance) sont tous des produits Intact. Un client qui les cherche trouvera Intact directement — et sera redirigé vers un autre courtier.

---

### 3.3 Recommandation majeure — Architecture de contenu des pages de services

#### Principe directeur

Chaque page de service doit fonctionner à deux niveaux simultanément :
1. **Répondre aux questions** que l'utilisateur se pose avant de demander une soumission (contenu SEO)
2. **Convaincre de choisir DPA** plutôt qu'un assureur direct ou un autre courtier (contenu de conversion)

Ces deux objectifs ne sont pas contradictoires. Un utilisateur qui trouve une réponse claire et experte à sa question associe cette expertise à DPA — et est plus enclin à demander une soumission.

#### Structure recommandée pour /mon-auto

**H1 :** Assurance automobile au Québec | Courtier DPA — Soumission en ligne

```
H2 : Ce qui est obligatoire et ce qui est optionnel en assurance auto au Québec
  H3 : La responsabilité civile — obligatoire par la loi
  H3 : Les protections additionnelles — facultatives mais essentielles
  H3 : Ce que la SAAQ couvre (et ce qu'elle ne couvre pas)

H2 : Quels facteurs influencent le prix de votre assurance auto ?
  H3 : Votre profil de conducteur
  H3 : Votre véhicule
  H3 : Votre historique de réclamations
  H3 : Comment réduire votre prime

H2 : Qu'est-ce que le pardon des accidents ?
  [Explication claire, 150-200 mots]

H2 : Assurance tous risques, collision, ou responsabilité seulement : quelle différence ?
  [Tableau comparatif]

H2 : Pourquoi passer par un courtier DPA plutôt que par un assureur direct ?
  [Proposition de valeur DPA — 5 assureurs comparés, service local, courtier attitré]

H2 : Questions fréquentes — Assurance automobile
  H3 : Mon assurance auto couvre-t-elle le vol de mon véhicule ?
  H3 : Que se passe-t-il si je prête mon véhicule ?
  H3 : Comment fonctionne une réclamation d'assurance auto ?
  [Schema FAQPage sur cette section]

[CTA Soumission en ligne]
```

**Volume cible :** 1 500 à 1 800 mots de contenu utile.

---

#### Structure recommandée pour /ma-maison

**H1 :** Assurance habitation pour propriétaires au Québec | DPA Assurances

```
H2 : Que couvre exactement une assurance habitation ?
  H3 : Votre bâtiment (structure et dépendances)
  H3 : Votre contenu (effets personnels)
  H3 : Votre responsabilité civile
  H3 : Les frais de subsistance en cas de sinistre

H2 : Assurance habitation et dommages par l'eau au Québec — ce qu'il faut savoir
  H3 : Ce qui est couvert
  H3 : Ce qui est exclu (refoulement d'égout, inondation de surface)
  H3 : Comment renforcer votre couverture
  [Cette section existait — la développer de 4 bullets à 300 mots structurés]

H2 : Valeur à neuf ou valeur réelle : quelle formule choisir ?
  [Question très recherchée — explication claire avec exemple chiffré]

H2 : Quels facteurs influencent le coût de votre assurance maison ?
  [Emplacement, âge du bâtiment, matériaux de construction, historique de réclamations]

H2 : Combiner votre assurance auto et habitation : les économies possibles
  [Synchro présenté avec chiffre concret (jusqu'à 15%) + lien vers /mon-auto]

H2 : Vous rénovez ? Ce que votre assurance doit savoir
  [Section existante — développer]

H2 : Questions fréquentes — Assurance habitation
  [Schema FAQPage]

[CTA Soumission en ligne]
```

---

#### Structure recommandée pour /entreprise-agricole

**H1 :** Assurance agricole au Québec | Courtier spécialisé depuis 1948

```
H2 : Un courtier agricole, pas un généraliste
  [Mettre Mario Poirier en avant : photo terrain (pas portrait de bureau), citation,
   régions couvertes, types de fermes accompagnées depuis 75 ans]

H2 : Quels types d'exploitations agricoles assure-t-on ?
  [Pour chaque type — 2 paragraphes avec les enjeux spécifiques de ce type de ferme,
   pas juste une liste : ferme laitière, ferme porcine, céréalière, maraîchère, etc.]

H2 : Que couvre l'assurance agricole ?
  H3 : Vos bâtiments et équipements (machinerie, silos, granges)
  H3 : Vos animaux d'élevage
  H3 : Vos récoltes et pertes de revenus
  H3 : Votre responsabilité civile agricole
  H3 : Les exclusions courantes à connaître

H2 : Comment est calculée la prime d'assurance pour une exploitation agricole ?

H2 : Questions fréquentes — Assurance agricole

[CTA : Parler à Mario Poirier — formulaire personnalisé]
```

**Signal E-E-A-T à ajouter :** Mentionner les associations partenaires (UPA, syndicats sectoriels), les certifications si applicable, des témoignages clients (avec permission).

---

#### Structure recommandée pour /biens-et-resp-civile

**H1 :** Assurance responsabilité civile et biens commerciaux pour entreprises au Québec

```
H2 : Qu'est-ce que la responsabilité civile générale pour une entreprise ?
  [Développer les exemples narratifs existants — c'est la bonne approche.
   Ajouter : l'obligation légale, les cas réels, ce qui se passe sans couverture]

H2 : Que couvre l'assurance biens commerciaux ?
  H3 : Vos bâtiments et locaux
  H3 : Vos équipements et machinerie
  H3 : Vos stocks et marchandises
  H3 : Les exclusions importantes

H2 : Pour quels types d'entreprises est-ce essentiel ?
  [Reprendre la liste existante + 2-3 phrases par type avec le risque spécifique]

H2 : Comment est calculée la prime d'assurance responsabilité civile pour une PME ?
  [Facteurs : secteur d'activité, chiffre d'affaires, nombre d'employés, historique]

H2 : Assurance biens vs assurance responsabilité civile : quelle différence ?
  [Question très cherchée]

H2 : Questions fréquentes — Assurance entreprise

[CTA Formulaire de soumission]
```

**Lien interne critique :** Lier cette page depuis `/assurances-entreprises/assurances-commerciales` (page hub qui est actuellement quasi-vide) ET depuis les pages sectorielles (restauration, détaillant, construction, etc.).

---

### 3.4 Stratégie de contenu — Blogue

#### L'état actuel du blogue : le problème de l'article-miroir

Le blogue de DPA a créé, sans le vouloir, une situation paradoxale : l'article le plus populaire (`7 sons et bruits`) génère 62% du trafic organique du site, mais ce trafic est géographiquement hors-cible, intentionnellement hors-sujet, et génère zéro conversion.

Ce n'est pas une réussite SEO — c'est un miroir déformant. Un blogue performant pour une firme de courtage n'est pas un blogue de lifestyle généraliste. C'est un blogue qui génère des soumissions.

**Chaque article publié doit répondre à deux questions :**
1. Cette requête est-elle posée par quelqu'un qui pourrait devenir un client DPA ?
2. Cet article pointe-t-il vers une page de service avec un CTA clair ?

Si la réponse à l'une de ces deux questions est non, l'article ne devrait pas exister.

---

#### Le modèle d'organisation : contenu en clusters thématiques

La structure la plus efficace pour un blogue SEO dans le secteur de l'assurance est le **modèle pilier-cluster** :

- Une **page pilier** couvre un sujet en profondeur (ex. : l'assurance automobile au Québec — tout ce qu'il faut savoir)
- Des **articles cluster** traitent des sous-questions spécifiques et pointent vers la page pilier
- La page pilier pointe vers les articles cluster

Ce maillage crée un réseau de pertinence thématique que Google récompense.

**Cluster 1 — Assurance automobile (2 600 req/mois)**

Page pilier cible : `/mon-auto` (après réécriture)

| Article | Intention | Volume estimé |
|---|---|---|
| « Qu'est-ce que l'assurance auto couvre au Québec en 2026 ? » | Informationnelle | Élevé |
| « Combien coûte une assurance auto pour un jeune conducteur au Québec ? » | Informationnelle | Moyen |
| « C'est quoi le pardon des accidents en assurance auto ? » | Informationnelle | Moyen |
| « Assurance auto : que faire le lendemain d'un accident ? » | Informationnelle/urgence | Moyen |
| « Assurance véhicule électrique au Québec : ce qui change » | Émergente | Croissance forte |
| « Assurance auto au Québec : courtier ou assureur direct ? » | Comparaison | Moyen |

**Cluster 2 — Assurance habitation (2 100 req/mois)**

Page pilier cible : `/ma-maison` (après réécriture)

| Article | Intention | Volume estimé |
|---|---|---|
| « Que couvre exactement l'assurance habitation au Québec ? » | Informationnelle | Élevé |
| « Assurance habitation et dommages par l'eau : ce qui est couvert (et ce qui ne l'est pas) » | Informationnelle | Moyen-élevé |
| « Valeur à neuf ou valeur réelle : comment choisir votre assurance maison ? » | Informationnelle | Moyen |
| « Assurance habitation au Québec : les changements climatiques et vos protections » | Actualité | Croissance |
| « Que faire quand vous avez un dégât d'eau ? Guide étape par étape » | Urgence/conversion | Moyen |

**Cluster 3 — Assurance entreprise (150 req/mois — haute valeur)**

Page pilier cible : `/assurances-commerciales` (à enrichir)

| Article | Intention | Volume estimé |
|---|---|---|
| « Qu'est-ce que la responsabilité civile pour une entreprise au Québec ? » | Informationnelle | Moyen |
| « Assurance PME au Québec : les couvertures essentielles en 2026 » | Informationnelle | Faible-moyen |
| « Loi 25 et assurance cybersécurité : ce que les entreprises québécoises doivent savoir » | Actualité | Moyen |
| « Assurance erreurs et omissions : pour qui, et pourquoi ? » | Informationnelle | Faible, haute valeur |

**Cluster 4 — Choix du courtier (contenu de conversion)**

Ces articles n'ont pas un fort volume de recherche, mais convertissent — ils visent un utilisateur déjà en mode décision.

| Article | Objectif |
|---|---|
| « Courtier en assurance vs assureur direct : 5 différences à connaître » | Justifier le passage par DPA |
| « Pourquoi avoir un seul courtier pour toutes vos assurances ? » | Vente croisée |
| « Comment choisir son courtier en assurance au Québec ? » | Convaincre en fin de parcours |

---

#### Ce que chaque article doit contenir

Pour qu'un article de blogue ait un impact SEO et commercial :

1. **Un H1 qui contient la requête cible** (pas un titre créatif — un titre qui correspond à ce que quelqu'un tape dans Google)
2. **Une réponse directe dans les 2 premiers paragraphes** (Google valorise les pages qui répondent vite)
3. **Des H2 qui traitent des sous-questions** (structure qui permet à Google d'extraire des featured snippets)
4. **Un lien contextuel vers la page de service correspondante** dans le corps du texte (pas en sidebar)
5. **Un CTA clair en fin d'article** : « Vous avez des questions sur votre assurance auto ? Parlez à un courtier DPA. »
6. **Une longueur de 900 à 1 400 mots** pour les articles informationnels (pas plus — pas moins)

---

#### Que faire avec l'article « 7 sons et bruits »

La version anglaise génère un trafic sans valeur commerciale. La version française (bloquée par erreur) doit être réactivée immédiatement.

Une fois réactivée, l'article ne doit pas être supprimé (perte de liens entrants et d'historique), mais **optimisé pour la conversion** :
- Ajouter une section en fin d'article : « Un bruit dans vos murs peut signaler un problème couvert par votre assurance habitation »
- Lier vers `/ma-maison` avec un CTA contextuel
- Ajouter une section FAQ en bas pour capter d'autres requêtes informelles (bruit dans plancher, bruit dans tuyauterie)

Cela ne transformera pas l'article en machine à soumissions — mais cela captera les quelques % de visiteurs canadiens qui ont un réflexe d'assurance.

---

### 3.5 Opportunités produits — Segment particuliers

Ces produits présentent un potentiel de trafic organique non couvert. Dans chaque cas, la première étape est de valider si DPA distribue ce produit avant de créer la page.

| Produit | Présent chez la concurrence | Volume Québec | Recommandation |
|---|---|---|---|
| Assurance véhicule électrique | Belairdirect, Assur360 | Croissance forte | Créer `/vehicule-electrique` — gap sémantique à saisir rapidement |
| Assurance haute valeur | Chubb, Lussier | Faible-moyen | La page `/particuliers/haute-valeur` **existe déjà** mais est invisible — aucun lien interne ne pointe vers elle. Intervention immédiate : ajouter des liens depuis `/ma-maison` et `/accueil`. |
| Assurance animaux de compagnie | CAA-Québec, Sonnet, Trupanion | 500–1 500/mois | Valider si DPA distribue |
| Assurance voyage | La Turquoise, CAA-Québec | Élevé (saisonnier jan-août) | Valider si DPA distribue |
| Assurance chalet | Usage courant Mauricie/Estrie | 200–400/mois | Cohérent avec la géographie DPA — valider la clientèle existante |

---

### 3.6 Opportunités produits — Segment entreprises

| Produit / Page | Contexte | Cible | Action |
|---|---|---|---|
| Erreurs & omissions / Responsabilité professionnelle | Présent chez 3 concurrents sur 4. Absent chez DPA. | Consultants, comptables, ingénieurs, architectes, conseillers TI | Créer `/assurances-entreprises/produits-specifiques/erreurs-et-omissions` |
| Page hub Travailleurs autonomes | La page `/travailleur-autonome` existante cible la résidence, pas les besoins professionnels. | Personnes qui travaillent de la maison et facturent des services | Créer `/travailleurs-autonomes` comme page hub regroupant assurance bureau à domicile, RC professionnelle, assurance revenus |
| Page hub PME | Covalen et Lussier captent le trafic non-spécifique avant de l'orienter vers le bon secteur | Propriétaires de PME qui cherchent une couverture globale | Créer `/assurances-entreprises/pme` comme porte d'entrée avant segmentation sectorielle |

---

## 4. Audit off-site

### 4.1 Autorité de domaine

| Indicateur | Valeur | Lecture |
|---|---|---|
| DA SEMrush | 21 / 100 | Faible pour 80 ans d'histoire et 35 000 clients |
| Domaines référents | 238 | Majorité nofollow ou générés automatiquement |
| Liens de qualité réels (DA 20+) | 10–15 | Très peu pour un acteur établi du secteur |

Un DA de 21 n'est pas catastrophique pour un courtier régional — mais il est en dessous du potentiel réel de DPA. Une entreprise fondée en 1948 avec 35 000 clients devrait avoir accumulé naturellement plus de liens éditoriaux. Cela indique que la stratégie de relations avec les médias, les associations et les partenaires n'a pas été orientée vers la création de liens.

---

### 4.2 Profil de backlinks

**Liens de qualité identifiés (DA 20+) :**

| Domaine | DA | Secteur | Qualité |
|---|---|---|---|
| santemonteregie.qc.ca | 47 | Santé publique | Bon — lien éditorial régional |
| grenier.qc.ca | 38 | Marketing/pub Québec | Bon — média québécois |
| cegepmontpetit.ca | 37 | Éducation | Bon — institution |
| eebeauce.com | 28 | Médias | Bon — média régional |
| arpac.org | 27 | Automobile | Bon — association |
| aappq.qc.ca | 26 | Architecture | Bon — association professionnelle |
| ccid.qc.ca | 24 | Commerce | Bon — chambre de commerce |
| yahoo.com | 100 | Médias | Faible — annuaire automatique |

**Ce qui manque :** Aucun lien éditorial sur des mots-clés commerciaux (« courtier assurance Québec », « assurance habitation Montérégie »). Les liens existants sont institutionnels ou géographiques — pas thématiques.

**Liens toxiques à désavouer :** Des domaines de type scraping B2B (clodura, success.ai, salezshark) ont généré des backlinks automatiques sans valeur. Ces liens ne nuisent probablement pas activement, mais un fichier de désaveu via Google Search Console assainit le profil.

---

### 4.3 Google Business Profile

| Succursale | Position | Note | Avis | Statut |
|---|---|---|---|---|
| Saint-Hyacinthe | 1er | 4,8 ★ | 426 | Modèle — conserver le rythme |
| Drummondville | 1er | 4,8 ★ | 53 | Bonne note, trop peu d'avis |
| Brossard | **8e** | 4,7 ★ | 246 | Position insuffisante — à optimiser |
| Roxton Pond | **Aucune fiche** | — | — | Opportunité manquée — acquisition sans fiche GBP |

**Contexte :** Les volumes de recherche locaux pour les courtiers en assurance sont faibles. Les utilisateurs qui cherchent un courtier ne filtrent pas nécessairement par ville. La fiche GBP a donc moins d'impact sur le trafic que le SEO on-site — mais elle reste essentielle pour les recherches de type « courtier assurance près de moi » et pour la crédibilité des nouveaux clients.

**Points forts :** Saint-Hyacinthe domine localement. La réputation globale est solide (toutes les fiches au-dessus de 4,7 étoiles).

**Problème principal :** Dans la plupart des villes servies par DPA, La Turquoise apparaît déjà dans les 3 premiers résultats GMB. La concurrence est établie sur ce terrain.

---

### 4.4 Recommandations off-site

| Priorité | Action |
|---|---|
| P1 | Créer la fiche Google Business Profile pour Roxton Pond (acquisition récente sans présence locale) |
| P1 | Optimiser la fiche Brossard : photos récentes, description avec mots-clés, publications régulières, réponse aux avis |
| P2 | Stratégie d'acquisition de liens — cibles prioritaires : associations professionnelles régionales, médias économiques Montérégie/Centre-du-Québec, partenaires agricoles (UPA, syndicats sectoriels) |
| P2 | Campagne de collecte d'avis Google à Drummondville — objectif : atteindre 150 avis en 6 mois (actuellement 53) |
| P3 | Désavouer les liens de scraping B2B via Google Search Console |

---

## 5. Résumé des recommandations

DPA Assurances planifie une refonte de site dans un horizon prochain. Ce contexte oriente la priorisation des recommandations en deux phases distinctes : des corrections techniques à exécuter immédiatement sur le site actuel pour stopper l'hémorragie de trafic, et un cadre stratégique à intégrer dès la conception du nouveau site pour ne pas reproduire les mêmes erreurs et bâtir sur des fondations solides.

---

### Phase 1 — Site actuel : corrections à impact immédiat

Ces actions ciblent les problèmes techniques issus de la migration de janvier 2026. Elles sont rapides à exécuter, ne dépendent pas d'une refonte, et ont un effet direct sur le trafic perdu. Plusieurs sont récupérables en quelques jours après correction.

| # | Action principale | Description | Impact attendu | Priorité |
|---|---|---|---|---|
| 1 | **Corriger les redirections brisées** | Obtenir la table de redirections de l'agence ayant géré la migration. Identifier les URLs sources et leurs équivalents actuels. Corriger les redirections mal configurées ou absentes. | Récupération partielle et structurelle du trafic perdu depuis janvier 2026. C'est la cause #1 de la chute. | 🔴 Critique |
| 2 | **Réactiver l'article « 7 sons FR »** | Changer la balise `noindex` en `index, follow` sur la version française de l'article. Soumettre pour réindexation via Google Search Console. | Récupération du trafic francophone sous 2 à 4 semaines. CTR FR = 7,6% vs 0,8% EN — les francophones cliquaient 10× plus. | 🔴 Critique |
| 3 | **Régénérer le sitemap XML** | Retirer du sitemap toutes les URLs en 404, en noindex, les pages `/node/`, les pages `/en/` et les pages de remerciement. Le sitemap ne doit contenir que des pages indexables. | Amélioration du crawl budget. Google indexe les bonnes pages et cesse de crawler les pages mortes. | 🔴 Critique |
| 4 | **Rediriger les pages /en/ en 301** | Rediriger chaque URL `/en/` vers son équivalent `/fr/`. 24+ pages concernées, listées dans la section technique. | Consolidation de l'autorité des pages anglaises vers les pages françaises. Fin du gaspillage de crawl budget. | 🔴 Critique |
| 5 | **Corriger la canonical de /carrieres** | La page de destination d'une redirection 301 pointe son canonical vers l'ancienne URL — boucle logique. Corriger la balise canonical pour qu'elle soit auto-référencée. Corriger la typo « courtierere ». | Récupération des 685 impressions perdues à zéro depuis la migration. | 🔴 Critique |
| 6 | **Créer la fiche GMB — Roxton Pond** | Créer et compléter la fiche Google Business Profile pour le bureau de Roxton Pond (acquisition récente sans présence locale). | Visibilité locale immédiate pour une succursale actuellement invisible sur Google Maps. | 🔴 Critique |
| 7 | **Retirer les pages /node/ et techniques du sitemap** | Ajouter `noindex` sur les 10 pages `/node/` et pages de remerciement. Les retirer du sitemap. | Qualité du crawl améliorée. Google concentre ses ressources sur les pages utiles. | 🟠 Élevée |
| 8 | **Corriger les Core Web Vitals (CLS 0,29)** | Ajouter `width`/`height` sur toutes les images. Réserver l'espace du carrousel hero. Supprimer ~755 Ko de JS inutilisé et ~195 Ko de CSS inutilisé. Précharger l'image LCP. | Facteur de classement Google récupéré. Expérience utilisateur améliorée sur desktop. | 🟠 Élevée |
| 9 | **Résoudre le contenu dupliqué (dommage par eau)** | Rediriger `/fr/dommage-par-eau-en-6-etapes` en 301 vers l'article de blogue équivalent. Garder la version blogue comme référence canonique. | L'autorité de la page landing se consolide dans l'article blogue. | 🟠 Élevée |
| 10 | **Optimiser la fiche GMB — Brossard** | Ajouter des photos récentes, rédiger une description avec mots-clés locaux, publier des posts réguliers, répondre à tous les avis. | Amélioration de la position actuelle (8e) vers le top 3 local. | 🟠 Élevée |
| 11 | **Rédiger les méta-descriptions manquantes** | Réécrire les 38 méta-descriptions de pages de services. Format : mot-clé cible + bénéfice client + appel à l'action. 120-160 caractères. | Amélioration du taux de clic dans les SERP sans impact sur le classement. | 🟡 Moyenne |
| 12 | **Résoudre les pages carrières en 403** | Rediriger les 22 URLs de carrières retournant 403 en 301 vers la page carrières principale. | Fin de l'exposition de pages d'erreur à Google. | 🟡 Moyenne |
| 13 | **Corriger les images et PDFs brisés** | Retrouver les ~25 ressources 404 dans les backups pre-migration ou retirer les références dans les articles. | Expérience utilisateur améliorée dans le blogue. | 🟡 Moyenne |
| 14 | **Lancer une campagne d'avis — Drummondville** | Programme de collecte d'avis Google auprès des clients actuels du bureau de Drummondville. Objectif : 150 avis en 6 mois (actuellement 53). | Renforcement de la crédibilité locale et du classement GMB. | 🟡 Moyenne |
| 15 | **Désavouer les liens de scraping B2B** | Créer un fichier de désaveu via Google Search Console pour les domaines identifiés (clodura, success.ai, salezshark). | Assainissement du profil de backlinks. Impact marginal mais hygiène SEO. | 🟢 Faible |

---

### Phase 2 — Nouveau site : construire pour performer

La refonte est une opportunité rare de corriger à la source les problèmes structurels qui empêchent le site de générer du trafic organique qualifié. Les recommandations suivantes doivent être intégrées dès la conception — les appliquer après livraison coûte deux à trois fois plus cher en temps et en effort.

| # | Action principale | Description | Impact attendu | Priorité |
|---|---|---|---|---|
| 1 | **Réécrire les H1 de toutes les pages de services** | Remplacer les H1 navigationnels (« Automobile », « Ma maison ») par des H1 orientés mots-clés : « Assurance automobile au Québec », « Assurance habitation pour propriétaires au Québec ». Une seule règle : le H1 doit correspondre à ce que quelqu'un taperait dans Google. | Condition nécessaire au positionnement organique sur les mots-clés commerciaux. Sans H1 correct, aucune autre optimisation ne peut pleinement fonctionner. | 🔴 Critique |
| 2 | **Enrichir les pages de services en profondeur** | Passer de 150-400 mots par page à 1 500-2 000 mots structurés. Chaque page doit répondre aux questions que l'utilisateur se pose avant de demander une soumission. Architecture H2/H3 fournie dans la section 3.3 de cet audit pour les pages auto, maison, agricole et biens/RC. | Condition nécessaire au positionnement sur des requêtes à volume (auto : 2 600/mois, habitation : 2 100/mois). Pages actuelles invisibles sur la longue traîne. | 🔴 Critique |
| 3 | **Ajouter des sections FAQ sur toutes les pages produits** | Intégrer une section FAQ structurée sur chaque page de service (minimum 5 questions/réponses). Ajouter le schéma `FAQPage` (données structurées) sur chaque section FAQ. | Éligibilité aux featured snippets Google. Réponse directe aux intentions de recherche de type question. | 🔴 Critique |
| 4 | **Construire un maillage interne structuré** | Chaque page produit pointe vers les pages connexes dans le corps du texte. Règles minimales : auto ↔ maison (combo Synchro), auto → assistance routière → pardon des accidents, maison → dommage par eau, entreprise agricole → RC agricole. Les articles de blogue pointent vers les pages de services correspondantes. | Transfert d'autorité entre pages. Amélioration du classement des pages commerciales. Réduction du taux de rebond. | 🔴 Critique |
| 5 | **Mettre en place la stratégie de contenu blogue (clusters)** | Organiser le blogue en clusters thématiques (auto, habitation, entreprise, courtier). Publier 2 articles/mois minimum. Chaque article répond à une question cherchée sur Google et pointe vers une page de service. Détail des clusters et suggestions d'articles dans la section 3.4. | Génération progressive de trafic hors marque. Cible : passer de 1% à 10-15% de trafic hors marque en 12 mois. | 🔴 Critique |
| 6 | **Créer les pages manquantes identifiées** | Pages à créer en priorité : `/assurances-entreprises/erreurs-et-omissions`, `/assurances-entreprises/pme` (page hub), `/travailleurs-autonomes` (page hub), `/vehicule-electrique`. | Couverture des gaps produits vs concurrents. Captation de trafic sur des requêtes sans concurrence actuelle chez DPA. | 🟠 Élevée |
| 7 | **Intégrer les données structurées dès le développement** | Configurer `LocalBusiness` sur chaque page de bureau (adresse, téléphone, GPS, horaires). Configurer `Organization` complet sur l'accueil. Configurer `FAQPage` sur toutes les pages produits avec section FAQ. | Éligibilité aux rich results Google. Amélioration du SEO local. Renforcement de l'autorité de domaine. | 🟠 Élevée |
| 8 | **Recréer la page /notre-equipe** | Page avec photos, noms, titres et expertises des courtiers. Mario Poirier en particulier (spécialisation agricole, 75 ans d'expérience). Citations et spécialisations régionales. | Signal E-E-A-T fort pour un secteur classé YMYL (Your Money or Your Life) par Google. Facteur de confiance pour les visiteurs. | 🟠 Élevée |
| 9 | **Implémenter les pages locales par ville** | Créer une page dédiée par ville principale : « Assurance auto à Saint-Hyacinthe », « Courtier assurance Drummondville », « Assurance habitation Brossard ». | Captation du trafic local longue traîne. Renforcement du SEO local en complément des fiches GMB. | 🟠 Élevée |
| 10 | **Ajouter un H1 à la page d'accueil** | La page d'accueil n'a pas de H1 (bug template). Le H1 est le signal de pertinence le plus important d'une page pour Google. | Signal de pertinence rétabli sur la page la plus visitée du site. | 🟡 Moyenne |
| 11 | **Stratégie d'acquisition de liens (off-site)** | Identifier 20 à 30 cibles de liens prioritaires : associations professionnelles régionales (UPA, AAPQ, chambres de commerce), médias économiques de Montérégie/Centre-du-Québec, partenaires agricoles, fournisseurs locaux. Objectif : porter le DA de 21 à 30+ en 12 mois. | Amélioration progressive de l'autorité de domaine. Impact sur le positionnement de toutes les pages du site. | 🟡 Moyenne |
| 12 | **Configurer les balises title selon le modèle recommandé** | Format cible pour toutes les pages produits : `Assurance [produit] au Québec | DPA Assurances`. Intégrer le mot-clé cible en premier, la marque en suffixe. | Amélioration du taux de clic et du positionnement sur les mots-clés produits. | 🟡 Moyenne |
| 13 | **Résoudre les pages orphelines** | Lors de la refonte, intégrer dans la navigation ou dans le maillage interne les 17+ pages actuellement orphelines (sans lien interne). Supprimer ou rediriger celles qui n'ont pas de valeur. | Consolidation de l'autorité du site. Fin des pages invisibles à Google malgré leur présence dans le sitemap. | 🟡 Moyenne |

---

## 6. Indicateurs de succès

Les objectifs suivants sont mesurables dans Google Search Console et Google Analytics. La baseline de référence est le mois d'avril 2026.

| Indicateur | Situation actuelle | Objectif à 3 mois (Phase 1) | Objectif à 12 mois (nouveau site) |
|---|---|---|---|
| Sessions organiques mensuelles | ~419 | ~620 | ~1 200+ |
| Part du trafic hors marque et hors article | ~1% | ~4% | ~15% |
| Impressions GSC sur mots-clés produits | Très faibles | +60% | +200% |
| Position sur « assurance auto Québec » | Non classé top 50 | Top 30 | Top 10 |
| Position sur « assurance habitation Québec » | Non classé top 50 | Top 30 | Top 10 |
| Soumissions en ligne d'origine organique | Baseline à établir | +15% vs baseline | +50% vs baseline |
| Articles de blogue publiés | ~25 (existants) | +4 nouveaux | +20 nouveaux |
| DA SEMrush | 21 / 100 | 21-22 | 28-32 |
| Avis Google — Drummondville | 53 | 100 | 180 |
| Fiche GMB — Roxton Pond | Inexistante | Créée et complétée | Top 3 local |

---

## Note finale

Cet audit représente un état des lieux au mois d'avril 2026. Les problèmes techniques sont récents et pour la plupart réversibles rapidement. Les problèmes de contenu sont plus anciens et nécessiteront un effort éditorial soutenu — effort qui doit être planifié dès la refonte, pas après.

DPA Assurances a toutes les ressources pour performer en SEO : une expertise sectorielle réelle de 80 ans, des experts nommés (Mario Poirier en agricole), une réputation client solide (4,7 à 4,8 étoiles sur tous les bureaux actifs), et une présence régionale établie. Le travail est de faire traduire cette réalité dans le contenu du site — pour que Google puisse la reconnaître et la valoriser.

La refonte est une fenêtre d'opportunité. Bien préparée sur le plan SEO, elle peut transformer un site qui perd 46,6% de son trafic en un actif qui génère des soumissions de façon autonome.

---

*Audit réalisé par [Votre agence] — Avril 2026*
*Données : Google Search Console, Google Analytics, SEMrush, analyse directe des pages*
