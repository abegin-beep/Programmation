# Audit GEO/SEO — Hamak Marketing Numérique
**Date :** 29 avril 2026  
**Site :** https://hamak.ca/  
**Secteur :** Agence de marketing numérique (SEO, Paid Media, Contenu, Web)  
**Marchés :** Montréal + Québec (bilingual FR/EN)  
**Fondée :** 2014 | 10-49 employés | Google Premier Partner

---

## Résumé exécutif

| Catégorie | Statut | Score |
|---|---|---|
| Crawling & Indexation | ⚠️ Problème critique | 4/8 |
| Technique | ⚠️ Données manquantes | À vérifier |
| Contenu | ✅ Bonne base | 5/8 |
| Avis & Social proof | ⚠️ Lacunes sur Clutch | 3/5 |
| Listicles | ❌ Sous-représentés | 2/9 |
| Citations d'autorité | ❌ Absent Wikidata/Wiki | 1/6 |
| Local | ✅ Bon départ (CCIQ) | 1/4 |

**Priorité absolue :** Le robots.txt bloque GPTBot, ClaudeBot et Amazonbot — une agence de marketing numérique est invisible aux IA qu'elle conseille à ses clients d'optimiser. C'est un contre-message stratégique majeur.

---

## 1. Crawling & Indexation

### ✅ Ce qui fonctionne
- **robots.txt présent** et correctement configuré (Yoast)
- **Sitemap XML déclaré** : `sitemap_index.xml` référencé dans robots.txt
- Site en WordPress = pages majoritairement HTML

### ❌ Problème critique — Crawlers IA bloqués

Le robots.txt contient ces directives :

```
User-agent: GPTBot → Disallow
User-agent: ClaudeBot → Disallow
User-agent: Amazonbot → Disallow
```

**Impact direct :** ChatGPT, Claude, Perplexity et les autres LLMs majeurs ne peuvent pas crawler le contenu de hamak.ca. Le contenu éditorial, les pages services, les réalisations — tout est invisible pour les IA qui répondent aux requêtes de vos prospects.

**Ironie stratégique :** Une agence qui vend du GEO et du SEO, et dont le site est bloqué pour les LLMs.

**Action :** Retirer les User-agent GPTBot, ClaudeBot, Amazonbot du robots.txt. Conserver `ai-train=no` si la restriction d'entraînement est souhaitée — c'est un paramètre distinct de l'indexation.

### ❌ Pas de fichier llms.txt
- Aucun fichier `llms.txt` détecté (404)
- Opportunité de positionner Hamak comme agence avant-gardiste
- Le fichier permet d'indiquer aux LLMs quels contenus prioriser

**Action :** Créer `/llms.txt` avec description de l'agence, services, pages clés, et contexte pour les IA.

### ⚠️ À vérifier
- Balises `<lastmod>` dans le sitemap (accès 403 lors de l'audit)
- Sitemaps dédiés images et vidéos
- Soumission sitemap dans GSC et Bing Webmaster Tools
- Confirmation que les LLMs crawlent via les logs serveur

---

## 2. Technique

### ⚠️ À vérifier (accès 403 sur le site principal)
- HTTPS + HSTS activé
- Schema `Organization` avec liens `sameAs` vers profils sociaux
- Schema adapté sur pages commerciales stratégiques (SEO, Google Ads, Contenu…)
- Core Web Vitals (LCP, INP, CLS) sur mobile et desktop
- Vitesse de chargement < 2 secondes
- Schema `Author` sur les articles de blog
- Pages auteurs dédiées avec `ProfilePage`

**Note :** Audrey Bégin est identifiée comme auteure SEO sur le blog (résultats de recherche le confirment). Vérifier que le schema `author` est bien implémenté et lié à une page de profil.

---

## 3. Contenu

### ✅ Ce qui fonctionne
- **Blog actif** avec publications récentes (article « boost post » daté d'avril 2026)
- **Publications régulières** en 2025-2026, dont des articles SEO et audit
- **Contenu expertise terrain** signé par des spécialistes identifiés (Audrey Bégin - Analyste SEO)
- **Contenu bilingue** FR et EN sur le site

### ⚠️ Opportunités
- Vérifier si les dates de publication sont visibles sur toutes les pages
- Ajouter un balisage **FAQ** sur les pages services (SEO, Google Ads, Social Media) — les questions clients sont un levier GEO fort
- Publier du contenu basé sur des **données propriétaires** (benchmarks clients, études de cas chiffrées)
- Communiqués de presse / actualités corporate (lauréats, certifications, nouveaux bureaux)
- Vérifier la mise à jour des pages stratégiques dans les 6 derniers mois
- Activer **IndexNow** pour notifier Bing à chaque publication

---

## 4. Avis & Social proof

### ✅ Présences détectées
| Plateforme | Avis | Note |
|---|---|---|
| Google | 53 | ⭐ 5.0/5 |
| Facebook | 19 | 100% recommandé |
| Glassdoor | 17 | 4.6/5 |
| Clutch | 0 vérifiés | — |

### ❌ Problème Clutch — 0 avis vérifiés
Clutch est **la** plateforme de référence B2B pour les agences marketing. C'est une source de citation majeure pour les LLMs qui répondent à « meilleure agence SEO Montréal ». Avoir 0 avis vérifiés sur Clutch est un handicap direct en GEO.

**Action :** Lancer une campagne de collecte d'avis Clutch auprès des clients actuels. Objectif : 5-10 avis dans les 3 prochains mois.

### ⚠️ Vélocité des avis
- Pas de visibilité sur la fréquence d'ajout de nouveaux avis
- À monitorer dans le temps vs concurrents

---

## 5. Listicles — Opportunité majeure

### État actuel de la visibilité dans les listicles clés

| Article | Hamak présent? | Position |
|---|---|---|
| Digitad — Meilleures agences SEO Montréal 2026 | ❌ Non | Absent |
| Rablab — Best SEO Agency Montreal 2026 | ✅ Oui | #5 |
| seomontreal.io — Best SEO Agencies Montreal | ✅ Oui | #6 |
| OptiWeb — Top SEO Digital Marketing 2026 | ⚠️ Non confirmé | — |
| Clutch — Top SEO Companies Montreal | ⚠️ Non confirmé | — |
| Semrush Agencies — SEO Montreal | ⚠️ Non confirmé | — |

### Lacune critique : Absent de l'article Digitad
L'article Digitad est probablement l'un des plus lus et référencés sur ce sujet. Il inclut Adviso, Bloom, Rablab, Falia, Dialekta, Momentumm, Référencement PME, Turko Marketing — mais pas Hamak.

**Actions prioritaires :**
1. Constituer une liste exhaustive des listicles « meilleures agences » où les concurrents sont présents
2. Scorer chaque opportunité (DA, trafic estimé, fréquence de mise à jour)
3. Prendre contact avec les auteurs des articles pour proposer d'intégrer Hamak
4. Objectif : passer de 2 à 7+ listicles couverts dans les 6 mois

---

## 6. Citations d'autorité

### ❌ Absent de Wikidata et Wikipédia
Aucune entrée Wikidata ni page Wikipédia trouvée pour Hamak ou Hamak Marketing Numérique.

**Pourquoi c'est important en 2026 :** Les LLMs utilisent Wikidata comme knowledge graph structuré. Une fiche Wikidata avec les attributs de base (nom, fondation, siège, services, liens sameAs) améliore la probabilité d'être cité avec exactitude dans les réponses IA.

**Actions :**
1. Créer une entrée **Wikidata** pour Hamak Marketing Numérique (nom, fondée en 2014, siège Montréal, type : agence marketing numérique, liens vers site, LinkedIn, Facebook)
2. Évaluer l'éligibilité à une page **Wikipédia** (notabilité : 10+ ans, 200+ clients, Premier Google Partner, présence presse)

### ✅ Présences détectées
- **LinkedIn** : ca.linkedin.com/company/hamak
- **Facebook** : facebook.com/agenceHamak
- **Clutch** : présence (sans avis vérifiés)
- **CCIQ** : membre répertorié (cciquebec.ca/membre/hamak-marketing-numerique)
- **ZoomInfo, Wheree** : fiches présentes

### ⚠️ À construire
- Liste « Dream 100 » des sites cibles pour des mentions (médias business, publications tech, associations)
- Stratégie de pitching pour obtenir des backlinks et mentions sur ces 100 cibles
- Expert métier identifié pour podcasts et tribunes (potentiel : équipe de direction)

---

## 7. Local

### ✅ Ce qui fonctionne
- Membre de la **CCIQ** (Chambre de Commerce et d'Industrie de Québec) — mention sur leur site
- Bureau à Québec (2828 Bd Laurier Suite 700) + bureau Montréal

### ❌ Opportunités non exploitées visibles
- Articles ou témoignages dans des **médias locaux** (Les Affaires, Infopresse, Le Devoir Économie)
- Participation à des **événements** (C2 Montréal, SXSW Québec, événements marketing)
- Associations locales à but non lucratif (mentions partenaires)

---

## Opportunités prioritaires (plan 90 jours)

### 🔴 Urgent (semaine 1-2)
1. **Corriger le robots.txt** — Retirer le blocage GPTBot, ClaudeBot, Amazonbot
2. **Créer llms.txt** — Décrire l'agence, ses services, ses pages clés pour les LLMs

### 🟠 Court terme (mois 1)
3. **Lancer collecte avis Clutch** — Contacter 10 clients satisfaits pour un avis vérifié
4. **Créer fiche Wikidata** — 1h de travail, impact GEO durable
5. **Auditer et activer schema markup** — Organization, Author, FAQ sur les pages clés

### 🟡 Moyen terme (mois 2-3)
6. **Campagne listicles** — Identifier les 15 articles "meilleures agences" sans Hamak, pitcher les auteurs
7. **Contenu first-party** — Publier une étude de cas ou benchmark avec données propriétaires
8. **Activer IndexNow** — Notifier Bing/autres moteurs à chaque publication
9. **Balises FAQ** — Ajouter sur les pages services (SEO, Google Ads, Social Media, Web)

### 🟢 Long terme (mois 3-6)
10. **Relations presse** — Viser Les Affaires, Infopresse, podcasts marketing québécois
11. **Évaluer Wikipédia** — Dossier de notabilité si 3+ sources tierces indépendantes disponibles
12. **Suivi LLM** — Benchmarker la visibilité de la marque sur ChatGPT, Perplexity, Gemini

---

## Résumé des lacunes vs concurrents

| Critère | Hamak | Digitad | Rablab | Adviso |
|---|---|---|---|---|
| Avis Clutch | ❌ 0 | ✅ | ✅ | ✅ |
| Wikidata | ❌ | ? | ? | ? |
| llms.txt | ❌ | ? | ? | ? |
| Robots.txt IA-friendly | ❌ | ? | ? | ? |
| Top listicles Digitad | ❌ | ✅ (self) | ✅ | ✅ |
| Présence médias presse | ? | ✅ | ✅ | ✅ |
| Blog actif | ✅ | ✅ | ✅ | ✅ |

---

*Audit réalisé le 29 avril 2026 — Sources : robots.txt hamak.ca, Clutch, Glassdoor, Facebook, rablab.ca, seomontreal.io, digitad.ca, cciquebec.ca*
