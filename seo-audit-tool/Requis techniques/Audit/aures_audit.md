# Audit SEO / GEO — Aures Audioprothésistes
**URL :** https://aures.ca  
**Date :** Avril 2026  
**Mandat :** 25h — Optimisation on-site SEO + GEO (SEO pour LLMs)  
**Cliniques :** Québec · Beaupré · Baie-Saint-Paul

---

## Sommaire exécutif

Site bien positionné localement avec un E-E-A-T fort (fondateurs porteurs d'appareils, vice-présidente OAQ, 15+ ans d'expérience). Le contenu de blog est riche mais la structure sémantique est insuffisante pour être cité par les LLMs. Un problème de sécurité critique (injection de spam) doit être réglé en priorité absolue. Aucun schéma Schema.org détecté. Les 8 pages de services sont sous-optimisées pour les requêtes conversationnelles.

---

## 🚨 PRIORITÉ 0 — SÉCURITÉ (avant tout le reste)

| # | Problème | Impact | Action |
|---|----------|--------|--------|
| S1 | **Injection de spam** : liens vers « casino minimum deposit » et jeux de hasard visibles dans le DOM | Pénalité Google, méfiance des LLMs, perte de crédibilité | Identifier l'origine (plugin compromis, base de données, template) et supprimer immédiatement. Scanner avec Wordfence ou Sucuri. |
| S2 | **Statistiques avec des zéros** (taux de satisfaction, nb patients, etc.) | Nuit à la crédibilité et aux signaux E-E-A-T | Remplir avec les vraies données ou retirer les sections vides |

**Estimation : 2h** (inclut vérification post-correction + demande de réindexation GSC)

---

## PRIORITÉ 1 — Technique SEO

| # | Page | Problème | Impact | Action |
|---|------|----------|--------|--------|
| T1 | Toutes | **Aucun Schema.org détecté** | Les LLMs et Google ne peuvent pas lire les entités structurées | Ajouter FAQPage, LocalBusiness × 3, MedicalBusiness, Organization, BreadcrumbList |
| T2 | `/a-propos`, pages services | **Meta descriptions absentes ou génériques** | Taux de clic faible, mauvaise lisibilité dans les SERPs | Rédiger une meta desc unique par page (150–160 car.) |
| T3 | Accueil | **H1 = "Aures vos audioprothésistes de quartier"** — zéro mot-clé ciblé | Perd le signal sémantique principal | Reformuler pour inclure « audioprothésiste Québec » : ex. _"Audioprothésistes à Québec, Beaupré et Baie-Saint-Paul — Aures"_ |
| T4 | `/a-propos` | **Title = "À propos - Aures"** — trop vague | Pas de valeur SEO | Reformuler : _"Notre équipe d'audioprothésistes à Québec | Aures"_ |
| T5 | Images | **Alt text manquant** sur plusieurs SVG et images de section | Accessibilité + signal de contenu | Ajouter alt text descriptif sur toutes les images |
| T6 | `/blog` | **404** sur cette URL | Liens internes cassés potentiels | Identifier l'URL correcte du blogue et rediriger |
| T7 | Toutes | **Sitemap.xml** — vérifier qu'il est à jour et soumis dans GSC | Indexation incomplète | Valider via Google Search Console |

**Estimation : 3h**

---

## PRIORITÉ 2 — GEO (SEO pour LLMs)

Les LLMs (ChatGPT, Perplexity, Google SGE) citent les sites qui répondent directement aux questions, avec des entités nommées claires et une structure question/réponse. Aures a le contenu — il manque la structure.

### 2.1 Schema.org à implémenter

```json
// Priorités en ordre
1. FAQPage      → sur chaque page de service + articles de blog
2. LocalBusiness / MedicalBusiness × 3  → une par clinique avec NAP complet
3. Organization → page À propos (avec sameAs LinkedIn, APAQ, OAQ)
4. BreadcrumbList → partout
5. Person       → fiches Stéphane Fortin et Marie-Pier Gendron (avec credentials)
```

### 2.2 Optimisation des pages de services pour les LLMs

Les 8 pages de services n'ont pas de section FAQ visible. Les LLMs adorent les formats questions/réponses.

**Pour chaque page de service, ajouter :**
- Un H2 "Questions fréquentes" avec 3–5 FAQ en schema FAQPage
- Un paragraphe d'introduction qui répond à "c'est quoi X ?" en 2–3 phrases
- Des entités nommées : nom du service, localisation, professionnel concerné, prix approximatif si public

**Pages de services à prioriser :**

| Page | Question à répondre |
|------|---------------------|
| Test auditif | Combien coûte un test auditif ? Qui peut faire un test ? |
| Appareils auditifs | Quel est le prix des appareils auditifs au Québec ? |
| Entretien/réparation | Est-ce que la réparation d'un appareil auditif est couverte par la RAMQ ? |
| Otoscopie | C'est quoi une otoscopie non diagnostique ? |
| Visites à domicile | Est-ce qu'un audioprothésiste peut se déplacer à domicile ? |
| Bouchons sur mesure | C'est quoi la différence entre des bouchons sur mesure et des bouchons génériques ? |

**Estimation : 6h** (rédaction + implémentation FAQ schema sur les 8 pages)

---

## PRIORITÉ 3 — Blog / Contenu existant

Le blog contient 20+ articles sur des sujets pertinents. Le problème : ils sont écrits comme des articles généralistes, pas comme des ressources conversationnelles pour LLMs.

### 3.1 Restructuration sémantique — Articles prioritaires

Pour chaque article, vérifier et corriger :
- [ ] H2/H3 formulés en **questions naturelles** (ex : "Quel est le prix des appareils auditifs?" → conserver, c'est déjà bon)
- [ ] **Introduction directe** : répondre à la question dès le premier paragraphe (pas d'intro vague)
- [ ] **Micro-FAQ** en fin d'article avec Schema FAQPage
- [ ] **Liens internes** vers les pages de services correspondantes
- [ ] **Auteur visible** avec lien vers la bio (Marie-Pier Gendron ou Stéphane Fortin) — renforce E-E-A-T

### 3.2 Articles à optimiser en priorité (volume de recherche + requêtes LLMs)

| Article | Priorité | Pourquoi |
|---------|----------|---------|
| "Quel est le prix des appareils auditifs?" | ★★★ | Requête transactionnelle élevée |
| "La différence entre un audioprothésiste, un audiologiste et un ORL" | ★★★ | Question classique aux LLMs |
| "Tout ce que vous devez savoir sur les appareils auditifs" | ★★★ | Contenu pilier — doit couvrir les entités sémantiques |
| "Au secours, j'ai des acouphènes!" | ★★ | Sujet émotionnel, fort engagement |
| "Ma prothèse auditive ne fonctionne plus" | ★★ | Intent transactionnel — lien vers service réparation |
| "Est-ce que je suis sourd?" | ★★ | Question conversationnelle, idéale pour GEO |

**Estimation : 5h** (6 articles prioritaires restructurés + FAQ schema ajoutées)

---

## PRIORITÉ 4 — E-E-A-T (Expérience, Expertise, Autorité, Confiance)

Aures a un E-E-A-T exceptionnel — mais il est mal mis en avant dans le contenu.

### Atouts à mieux valoriser

| Signal E-E-A-T | Constat | Action |
|----------------|---------|--------|
| Stéphane Fortin porte lui-même un appareil auditif | Mentionné en À propos mais pas dans le contenu | Ajouter dans les articles pertinents + pages services |
| Marie-Pier Gendron, vice-présidente OAQ 2018 | Présent dans À propos | Ajouter un balisage `Person` schema + mention dans les articles d'autorité |
| Accréditation OAQ + APAQ | Logos présents | Ajouter du texte explicatif : "Membres de l'Ordre des audioprothésistes du Québec depuis..." |
| ThreeBestRated Top 3 | Badge présent | Ajouter la date et le contexte textuel (les LLMs lisent le texte, pas les images) |
| Fondé en 2011, 3 cliniques | Mentionné | Intégrer dans les meta descriptions et les introductions de pages |

**Estimation : 2h**

---

## PRIORITÉ 5 — Google Business Profile (3 fiches)

Les GMB sont à la fois SEO local et GEO — les LLMs comme Google SGE puisent dans les fiches GBP.

### Pour chacune des 3 fiches :

| Action | Impact |
|--------|--------|
| Vérifier que NAP (Nom, Adresse, Téléphone) est identique sur le site et la fiche | NAP consistency = signal local |
| Ajouter des photos récentes (équipe, clinique, appareils) | Engagement + confiance |
| Compléter les attributs : accessibilité, langues, stationnement | Filtres de recherche locale |
| Répondre à tous les avis Google existants | E-E-A-T + signaux d'engagement |
| Ajouter des posts GBP (actualités, promos, événements) | Fraîcheur du contenu |
| Créer une section Q&A avec les questions fréquentes | Apparaît dans la fiche Knowledge Panel — idéal GEO |
| Vérifier les catégories principales et secondaires | "Audioprothésiste" + "Centre auditif" + "Appareil auditif" |

**Estimation : 3h** (1h par fiche)

---

## Répartition des 25 heures

| Bloc | Description | Heures |
|------|-------------|--------|
| S — Sécurité | Injection spam + statistiques manquantes | 2h |
| T — Technique | Schema.org, meta desc, H1/title, alt text | 3h |
| GEO — Pages services | FAQ + Schema FAQPage sur 8 pages services | 6h |
| C — Blog | Restructuration 6 articles prioritaires | 5h |
| E-E-A-T | Valorisation signaux autorité dans le contenu | 2h |
| GMB | 3 fiches Google Business Profile | 3h |
| **Réserve** | Vérifications, retouches, tests | **4h** |
| **Total** | | **25h** |

---

## Ce qui est hors mandat (à proposer en phase 2)

- **Backlinks** : médias locaux (Le Soleil, Charlevoisien), associations santé
- **Nouvelles pages de contenu** : guide comparatif audioprothésiste/audiologiste/ORL complet, page "Remboursement RAMQ appareils auditifs"
- **Recherche de mots-clés** approfondie avec DataForSEO
- **Audit technique approfondi** : Core Web Vitals, mobile, vitesse de chargement

---

## Points forts à préserver

- E-E-A-T authentique et rare dans ce secteur (praticiens porteurs d'appareils)
- Blog existant riche en contenu — ne pas réécrire, restructurer
- 3 GMB déjà actives — base locale solide
- Test auditif en ligne gratuit — excellent aimant à trafic
- Accréditations visibles (OAQ, APAQ, ThreeBestRated)

---

*Audit réalisé par Hamak — abegin@hamak.ca*

Sources:
- [Aures Audioprothésistes](https://aures.ca/)
- [À propos - Aures](https://aures.ca/qui-sommes-nous/)
- [Test auditif en ligne - Aures](https://aures.ca/test-auditif)
- [APAQ - Aures Fortin & Gendron](https://apaqaudio.qc.ca/cliniques/aures-fortin-gendron-audioprothesistes-3/)
- [ThreeBestRated - Audiologistes Québec](https://threebestrated.ca/fr-audiologiste-in-quebec-qc)


Service 1: Entretien et réparation
Ajustement et réparation de vos appareils auditifs
Vous remarquez que votre audition ne semble pas être à son meilleur ? Nous sommes là pour vous aider à retrouver une audition optimale en prenant soin de l’ajustement, de l’entretien et des réparations de vos prothèses auditives.

Prendre un rendez-vous
Découvrir les différences des modèles
Continuer à vivre pleinement chaque sonet chaque moment.
L’ajustement
L'ajustement d'un appareil auditif comprend plusieurs paramètres essentiels qui sont recommandés d’être ajustés.

Quand réajuster ses prothèses auditives ?
Le processus d'ajustement est effectué par un audioprothésiste à l’aide d’analyseur électro-acoustique à la fine pointe de la technologie.

Lors de votre visite, l'audioprothésiste discutera de vos besoins auditifs, effectuera des tests, examinera vos conduits auditifs et ajustera les paramètres de votre appareil auditif en fonction de votre audiogramme et de vos préférences uniques.

Les ajustements sont faits de manière ‘’In-Vivo’’. Il s’agit donc de mesures objectives effectuées sur le patient. Nous nous assurons ainsi que les réglages soient précis, reproductibles et reconnus scientifiquement.
Comment se déroule l’ajustement de mes appareils auditifs ?
Le processus d'ajustement est effectué par un audioprothésiste à l’aide d’analyseur électro-acoustique à la fine pointe de la technologie.

Lors de votre visite, l'audioprothésiste discutera de vos besoins auditifs, effectuera des tests, examinera vos conduits auditifs et ajustera les paramètres de votre appareil auditif en fonction de votre audiogramme et de vos préférences uniques.

Les ajustements sont faits de manière ‘’In-Vivo’’. Il s’agit donc de mesures objectives effectuées sur le patient. Nous nous assurons ainsi que les réglages soient précis, reproductibles et reconnus scientifiquement.
Le processus d'ajustement est effectué par un audioprothésiste à l’aide d’analyseur électro-acoustique à la fine pointe de la technologie.

Lors de votre visite, l'audioprothésiste discutera de vos besoins auditifs, effectuera des tests, examinera vos conduits auditifs et ajustera les paramètres de votre appareil auditif en fonction de votre audiogramme et de vos préférences uniques.

Les ajustements sont faits de manière ‘’In-Vivo’’. Il s’agit donc de mesures objectives effectuées sur le patient. Nous nous assurons ainsi que les réglages soient précis, reproductibles et reconnus scientifiquement.

Puis-je faire ajuster mon appareil en étant suivi par une autre clinique ?
Le processus d'ajustement est effectué par un audioprothésiste à l’aide d’analyseur électro-acoustique à la fine pointe de la technologie.

Lors de votre visite, l'audioprothésiste discutera de vos besoins auditifs, effectuera des tests, examinera vos conduits auditifs et ajustera les paramètres de votre appareil auditif en fonction de votre audiogramme et de vos préférences uniques.

Les ajustements sont faits de manière ‘’In-Vivo’’. Il s’agit donc de mesures objectives effectuées sur le patient. Nous nous assurons ainsi que les réglages soient précis, reproductibles et reconnus scientifiquement.

L’entretien
L'entretien régulier des appareils auditifs est essentiel pour garantir un fonctionnement et un confort optimal, ainsi qu'une meilleure qualité d'écoute


Côté patient
Nettoyer soigneusement les aides auditives à l’aide d’outils de nettoyage fournis par la clinique
Changer les filtres
S’assurer que les piles sont toujours fraîches pour éviter les dysfonctionnements

Entretien 2 fois par an
Vérifier les performances des appareils
Ajuster en fonction de l’évolution des besoins auditifs
Repérer rapidement toute défaillance.

Entretien préventif
Voir les étapes d’entretien en vidéo

La réparation
Le service de réparation est offert à chacune de nos cliniques. Nous effectuons des réparations sur l’ensemble des fabricants.

Changement de porte-pile
Changement d’écouteur
Diminutionde l’effet larsen
Réparationde fissures
Prothèses auditives faiblesou qui ne fonctionnent plus
Au besoin, nous envoyons vos appareils chez le manufacturier. Nous vous aviserons à ce moment des coûts et de la durée.
Nous vous offrons une prothèse auditive de prêt en dépannage.


Foire Aux Questions
Est-ce que je suis sourd? Si vous vous posez la question: est-ce que je suis sourd? Vous avez peut-être une surdité, mais n’êtes assurément pas privé du sens de l’ouïe. Dans le milieu médical, nous utilisons plus fréquemment le terme malentendant pour faire une distinction plus claire entre la surdité complète et une perte d’audition partielle.
Acheter des appareils auditifs en ligne, bonne ou mauvaise idée? Si vous vous posez la question: est-ce que je suis sourd? Vous avez peut-être une surdité, mais n’êtes assurément pas privé du sens de l’ouïe. Dans le milieu médical, nous utilisons plus fréquemment le terme malentendant pour faire une distinction plus claire entre la surdité complète et une perte d’audition partielle.
Quel est le prix des appareils auditifs? Si vous vous posez la question: est-ce que je suis sourd? Vous avez peut-être une surdité, mais n’êtes assurément pas privé du sens de l’ouïe. Dans le milieu médical, nous utilisons plus fréquemment le terme malentendant pour faire une distinction plus claire entre la surdité complète et une perte d’audition partielle.
Commencer à prendre soin de mon audition


Service 2: Pré-post appareillage

Pré/Post Appareillage
C’est le grand jour! L’appareillage est le moment le plus excitant de vos démarches vers une meilleure audition. C’est lors de ce rendez-vous que vous recevrez vos appareils auditifs.

Prendre rendez-vous
Découvrir nos prothèses auditives

Comment se déroule l'appareillage ?
Étape 1 : nous nous assurons que rien n’ait changé depuis la dernière rencontre:
L’audioprothésiste débute par inspecter vos conduits auditifs pour s’assurer que rien n’ait changé depuis la dernière rencontre (irritation, rougeur, etc.).

Il vérifiera que vos appareils auditifs s’insèrent facilement et respectent les critères esthétiques que vous aurez convenus ensemble lors de la rencontre informative.

Étape 2 : vous passerez devant l’analyseur électroacoustique:
Par la suite, vous serez installé devant un analyseur électroacoustique. Cette étape est souvent impressionnante, car cet équipement spécialisé permet de voir en temps réel le son délivré par les appareils auditifs. L’audioprothésiste aura préalablement intégré votre audiogramme (résultat de votre test auditif) dans les paramètres de la machine.

Donc, sans aucune intervention du patient, l’audioprothésiste peut ajuster avec précision le niveau sonore requis. Les sondes placées tout près des tympans permettent un ajustement précis selon une formule prescriptive de gain. L’audioprothésiste s’assure également du niveau sonore maximum des prothèses auditives pour être certain qu’elles n’endommageront pas votre audition en cas d’exposition à des sons très forts.

Étape 3 : nous validons avec vous la force globale du son:
Une fois les ajustements terminés, l’audioprothésiste validera avec vous la force globale du son. Il est tout à fait normal que vous trouviez votre voix différente au début, ou que vous entendiez des sons que vous n’aviez pas entendus depuis longtemps!

Cela prendra quelques jours ou quelques semaines d’adaptation pour retrouver une sonorité naturelle.

Étape 4 : nous vous expliquons l’entretien de base de vos appareils auditifs, leur manipulation et leur fonctionnement: Viennent ensuite les explications d’usage. L’audioprothésiste vous expliquera l’entretien de base de vos appareils auditifs, leur manipulation et leur fonctionnement. Nous gardons les procédures le plus simples possible pour que l’information soit facile à retenir. Nous vous fournissons même un aide-mémoire pour la maison.

Finalement, vous repartirez à la maison pour mettre vos nouvelles technologies d’amplification à l’épreuve!

Rencontre post-appareillage
Cette rencontre fait suite au rendez-vous d’appareillage.


Chez Aures, nous croyons qu’il est très important d’être suivi par le même professionnel que les rencontres précédentes. Vous allez donc rencontrer le même audioprothésiste à chacune de vos rencontres de suivi.


Lors de ce rendez-vous, nous voulons avoir votre impression sur le rendement de vos appareils auditifs dans les environnements sonores réels. Nous voulons voir avec vous ce qui a été facile et ce qui l’était moins. Nous complétons les informations sur l’utilisation et l’entretien de vos prothèses, nous vous expliquons le fonctionnement de vos accessoires.


Les réglages de vos appareils seront peaufinés selon vos commentaires et nous ferons une première vérification du rendement global. En bref, ce rendez-vous donne le pouls de votre appréciation de l’appareillage et des changements concrets qu’il a eu sur votre vie.

Commencer à prendre soin de mon audition


Service 3: Service d’otoscopie non diagnostique
 

Cet examen de l’oreille et du conduit auditif à l’aide d’un otoscope permet de vous référer vers un professionnel de la santé s’il y a suspicion d’une anomalie ou d’un bouchon de cérumen.

Le service d’otoscopie est offert dans nos 3 cliniques; Québec, Beaupré et Baie-St-Paul, au coût de 12$.

L’examen est d’une durée de 10-15 minutes et est totalement sans douleur.

Prendre rendez-vous
Joindre nos audioprothésistes

Vérifiez l'état de votre conduit auditif.
Commencer à prendre soin de mon audition


Service 4: Transfert de dossiers
Si vous aviez l’habitude de consulter une autre clinique d’audioprothèse, nous nous occuperons de communiquer avec celle-ci pour obtenir facilement votre dossier.

Si vos appareils auditifs ont été payés par un organisme gouvernemental (RAMQ, CNESST, etc.), la facturation sera aussi transférée sans problème.

Nous sommes aussi en mesure de distribuer les pièces et services de toutes les marques d’appareils auditifs du marché québécois.

Que ce soit pour faciliter vos déplacements ou pour vous faire profiter de nos services personnalisés, n’hésitez plus et contactez-nous pour pouvoir réserver votre prochain rendez-vous.

Prendre rendez-vous
Joindre nos audioprothésistes

Nous prenons en charge vos transferts de dossier.
Commencer à prendre soin de mon audition


Service 5: Empreintes pour des bouchons sur mesure
Les prises d’empreintes sont nécessaires à la fabrication d’embouts (la partie de l’appareil auditif qui s’insère dans le conduit auditif) ou pour la fabrication de bouchons antibruit sur mesure.

Nous nous faisons un devoir de respecter des mesures d’asepsie (nettoyage et désinfection) reconnues par le milieu et utilisons une technique douce pour éviter tout inconfort.

Nous débutons par vérifier vos conduits auditifs avant d’insérer un otoblock (petite mousse munie d’une corde au centre qui sort de l’oreille) qui empêchera la pâte d’impression de se rendre au tympan.

Après avoir injecté la pâte dans l’oreille, celle-ci durcira en l’espace de quelques minutes.

Prendre rendez-vous
Joindre nos audioprothésistes

Protégez votre audition.
Commencer à prendre soin de mon audition


Service 6: Rencontre sur les appareils auditifs
La rencontre se déroule sous forme d’échanges pour que vous partiez avec l’esprit léger et l’assurance d’avoir été compris. Nous somme là pour vous aider à retrouver le plaisir de bien entendre, vous ne sentirez pas de pression d’achat de notre part.

Prendre rendez-vous
Découvrir nos prothèses auditives
Cette rencontre avec un audioprothésiste vous permettra d’obtenir des réponses sur les prothèses auditives.

Les appareils auditifs n'auront plus de mystère pour vous!
Votre audioprothésiste prendra le temps de démystifier avec vous le vrai du faux de tout ce qui est relié aux appareils auditifs.

Accéder aux informations qu’on ne retrouve pas sur internet: le prix des appareils auditifs
- les différences entre les modèles et les technologies
- l’analyse de vos besoins
- et bien plus encore !

En effet, l’audioprothésiste doit avoir en main votre profil auditif complet afin de vous faire une recommandation adaptée à vos besoins.


Comment se déroule la rencontre informative sur les appareils auditifs?
Étape 1 : nous apprenons à vous connaître; survol de votre style de vie: La rencontre débute par un sourire et un bon café. Nous savons qu’il est possible que ce rendez-vous vous rendre nerveux, mais vous verrez que nous faisons tout en notre possible pour que vous vous sentiez bien.

Nous vous recommandons d’être accompagné pour vous sentir bien entouré. L’implication des proches, peu importe votre âge, aide bien souvent à sécuriser votre choix et aide en plus au processus d’adaptation.

Nous discuterons avec vous pour mieux vous connaître et cerner les situations que vous souhaitez améliorer.
Étape 2 : nous vous expliquons les résultats de votre test d’audition : Nous nous assurons ensuite que vous compreniez bien le test d’audition que vous aurez préalablement passé avec l’audiologiste et répondrons à vos questions.
Étape 3 : nous vous avisons de votre éligibilité à l’aide gouvernementale : Nous vérifions ensemble votre éligibilité aux programmes gouvernementaux que ce soit la RAMQ, CNESST, Anciens Combattants ou les Affaires Autochtones.
Étape 4 : nous vous recommandons 1 ou 2 appareils auditifs ainsi qu’un modèle et un niveau technologique selon vos besoins: Nous faisons la démonstration des modèles de prothèses auditives adaptées à votre situation. Nous discutons ensemble de l’importance que vous accordez à l’esthétique du modèle, des accessoires Bluetooth qui pourraient faciliter l’écoute de la télévision ou du téléphone, de la compatibilité de votre téléphone intelligent, des options de piles rechargeables, etc.

Nous vous expliquerons aussi les limites de l’appareillage, car bien que la technologie soit très performante, vous n’aurez pas d’oreilles bioniques. (mais presque !) Nous souhaitons que vous ayez en main l’information sur les dernières technologies pour que vous puissiez faire un choix éclairé.
Étape 5 : nous vous expliquons le prix de la prothèse et ce qu’il inclus
Commencer à prendre soin de mon audition: Nous terminons en vous offrant notre plan de service, adapté à votre profil en vous expliquant clairement ce qui y est inclus (nos honoraires, la garantie, des accessoires, des piles, etc.). Selon le modèle de prothèses auditives choisi, nous serons en mesure d’effectuer la livraison de 2 à 3 semaines plus tard.


Service 7: Test auditif complet
Un test auditif complet vous permet de savoir si votre audition est normale ou pas. Le test auditif se déroule en 5 étapes et dure de 15 à 45 min selon s’il y a une perte d’audition ou si l’audition est normale. Ne vous inquiétez pas, vous ne ressentirez aucune douleur! Par la suite, l’audiologiste vous donnera l’heure juste sur votre audition et vous recommandera ou non le port de prothèses auditives.

Prendre rendez-vous
En savoir plus﻿ sur Aures

Testez votre audition
Le test auditif
Les services privés d’audiologistes indépendants de la clinique MultiSens sont disponibles à nos cliniques de Québec, Beaupré et Baie-Saint-Paul.

Quand passer un test auditif? Vous faîtes répéter fréquemment, vous augmentez le son de votre télévision, vous n’entendez plus votre manteau froisser lorsque vous l’enfilez: tous ces signes devraient vous orienter rapidement vers un test d’audition.
Quel professionnel consulter? L’audiologiste est le professionnel requis pour faire un test d’audition complet. Bien qu’un ORL ou un audioprothésiste puissent aussi faire des évaluations auditives, l’audiologiste est le mieux placé pour entamer des démarches en lien avec une suspicion de perte de l’ouïe.
Où faire un test auditif? Le test peut se faire en milieu hospitalier où les frais sont couverts par la RAMQ. Il faudra vous procurer une prescription de votre médecin et patienter en moyenne 1 an selon l’établissement.

Il peut aussi se faire en clinique privée où le temps d’attente varie de quelques jours à quelques semaines. Les services privés d’audiologistes indépendants de la clinique MultiSens sont disponibles à nos cliniques, pour constater leur gentillesse et leur douceur, prenez rendez-vous !
À quelle fréquence le test auditif devrait-il être fait? Habituellement, il est recommandé de passer un test d’audition aux 2 à 3 ans à partir de 50 ans ou avant si vous avez des facteurs de risques comme: antécédents familiaux, travail en milieu bruyant, présence d’acouphènes, etc.
Quel est le prix d'un test auditif? Chez Aures, un test d’audition coûtera 95$. Le test d’audition est couvert par la plupart des assurances privées. L’évaluation audiologique répond aux normes exigées pour le réglage d’appareils auditifs et permet d’accéder aux programmes gouvernementaux tels que la RAMQ, CNESST et les Anciens Combattants.


Comment se déroule un test auditif?
Étape 1 : le questionnaire
L’audiologiste commencera par un court questionnaire pour en apprendre davantage sur vous. Par la suite, elle regardera dans vos conduits auditifs à l’aide d’un otoscope (comme chez le médecin) pour s’assurer que rien n’entrave le test d’audition comme un bouchon de cire par exemple.
Étape 2 : l’audiogramme
Vous serez par la suite confortablement installé dans la cabine insonorisée vitrée pour effectuer le test. Le test auditif, aussi appelé audiogramme, est d’une durée approximative de 30 minutes (sa durée varie selon s’il y a une perte d’audition ou non). Vous entendrez une série de sons par des écouteurs et le but sera de déterminer le son le plus faible (décibel) que vous pouvez entendre à différentes fréquences (Hertz) pour chacune de vos oreilles. Il est impossible d’échouer le test, il n’y a pas de bonnes ou de mauvaises réponses!
Étape 3 : décoder la parole
Par la suite, l’audiologiste vous fera répéter une série de mots pour évaluer votre capacité à décoder la parole. Il est surprenant de constater qu’une moins bonne audition peut déformer les mots, même à un niveau sonore confortable! L’audiologiste vous guidera tout au long de l’examen et vous pouvez communiquer en tout temps avec elle, car elle aussi porte des écouteurs pour vous entendre.
Étape 4 : le test d’impédancemétrie
Dans nos cliniques, les audiologistes effectuent aussi de routine un test d’impédancemétrie qui vérifie la flexibilité de votre tympan. Indolore, ce test complète les données de l’évaluation audiologique pour vous donner l’heure juste sur votre audition.
Étape 5 : comprendre les résultats
Une fois le test terminé, l’audiologiste vous donne des explications claires et faciles à comprendre pour que vous sachiez le niveau exact de votre audition et les prochaines démarches à suivre. C’est l’audiologiste qui vous recommandera ou non le port de prothèses auditives.
Le test auditif chez les bébés et les enfants
Pour les enfants, il existe désormais un programme de dépistage néonatal (à la naissance) dans la plupart des hôpitaux québécois.

Si vous remarquez un trouble d’apprentissage du langage, un niveau du volume de la télévision élevé, il serait bon de faire tester votre enfant pour son audition.
Chez Aures nous offrons les tests d’audition à partir de l’âge de 5 ans.

Commencer à prendre soin de mon audition


Service 8: Visite de votre audioprothésiste à domicile
Vous avez des problèmes de mobilité? Cela ne devrait pas vous empêcher de vous faire soigner. Prenez rendez-vous maintenant avec un audioprothésiste à domicile!

Prendre rendez-vous
Contacter nos audioprothésistes


Nos services mobiles
Test auditif et dépistage : Nous proposons des tests auditifs complets et de dépistage pour évaluer votre audition. Nous faisons équipe avec des audiologistes indépendants qui pourront apporter leur équipements pour diagnostiquer toute perte auditive potentielle.
Appareillage auditif: Si un appareillage auditif est nécessaire, nous vous guidons dans le choix de la meilleure solution. Nous offrons une gamme variée de prothèses auditives qui utilise la technologie de pointe et nous vous aidons à sélectionner celle qui convient le mieux à vos besoins. Nous vous accompagneront dans votre réadaptation auditive. Notre objectif est de vous aider à retrouver une audition claire et confortable.
Entretien préventif, réparation et réglages de prothèses : Nous assurons un suivi complet des prothèses auditives de nos patients. De l'entretien préventif régulier aux réparations nécessaires, notre équipe mobile veille à ce que vos appareils fonctionnent toujours à leur meilleur. Nous effectuons également des ajustements pour garantir une qualité optimale de votre audition.
Examen otoscopique non-diagnostic: L'examen otoscopique consiste en une inspection minutieuse de votre conduit auditif à l'aide d'un otoscope. Cela nous permet d'identifier d'éventuels problèmes ou anomalies. Grâce à cet examen, nous pouvons vous référer, le cas échéant, vers un professionnel de la santé qui pourra effectuer le diagnostic et le traitement au besoin.
Prise d’empreinte: La prise d'empreinte est une procédure précise au cours de laquelle nos professionnels de la santé auditive prennent des mesures de votre conduit auditif pour fabriquer sur mesure des prothèses auditives, des embouts ou des bouchons antibruit. Cette étape garantit un ajustement parfait, assurant un confort optimal et une qualité sonore qui répondra à vos besoins auditifs spécifiques.

Visite de votre audioprothésiste à domicile
Nous comprenons qu’il peut être parfois difficile de vous déplacer dans un centre auditif.


Que vous ayez des problèmes d’audition, que vous ayez besoin d’un examen complet de votre audition ou que vous souhaitiez discuter de solutions pour améliorer votre audition, notre audioprothésiste se rendra chez vous pour répondre à vos besoins.


Il n’est plus nécessaire de vous déplacer, de prendre congé ou de vous soucier du transport. Nous sommes là pour vous apporter des soins auditifs de qualité directement à votre porte.


Nos audioprothésistes auront tout l’équipement nécessaire pour bien vous servir et assurer votre bien-être. Toutefois, il faut comprendre que certains services ne peuvent se faire à domicile ou nécessitent des frais supplémentaires en raison de leur complexité et du matériel nécessaire.

Vous avez des problèmes de mobilité?
C'est pourquoi nous avons mis en place ce service pratique qui vous permet de bénéficier des services de nos audioprothésistes dans le confort de votre domicile.

Contactez-nous pour planifier une visite à domicile et pour connaître nos frais de déplacement. (Frais minimum de 35 $)
Commencer à prendre soin de mon audition




Page d'acceuil:
H1: Aures vos audioprothésistes de quartier
Sillery . Beaupré . Baie-St-Paul
 

Tester mon audition
Le test auditif en ligne est une offre sans frais permanente.

Une équipe authentique et honnête

Engagés envers leurs patients

À l’affût des dernières tendances

Une équipe authentique et honnête

Engagés envers leurs patients

À l’affût des dernières tendances

Comptez sur notre expérience en prothèses auditives à Beaupré, Baie-Saint-Paul et Québec.
Vous trouverez en nous les meilleurs conseillers pour choisir les appareils auditifs qui répondront à vos besoins. Faites confiance à notre expérience en matière de prothèses auditives à Beaupré, Baie-Saint-Paul et Québec, pour améliorer votre qualité de vie.

 

Prendre rendez-vous


Nos principaux services
Ajustement et réparation de vos appareils auditifs
Grâce à un examen auditif ou un dépistage, retrouvez le plaisir des bruits familiers et des conversations.

Voir le service
Empreintes pour des bouchons sur mesure
Les prises d’empreintes permettent la fabrication de bouchons antibruit sur mesure.

Voir le service
Test auditif complet
Un test auditif complet vous permet de savoir si votre audition est normale ou pas.

Voir le service
Rencontre sur les appareils auditifs
D’une durée d’environ 45 minutes, cet entretien vous permettra de vous familiariser avec le monde de la correction auditive. 

Voir le service
Service d’otoscopie non diagnostique
Cet examen de l’oreille et du conduit auditif permet de vous référer vers un professionnel de la santé s’il y a suspicion d’une anomalie.

Voir le service
Nos différents modèles d’aides auditives

Contour d’oreille BTE

Demi-conque
Exemple de prothèse auditive très discrète de type mini-contour RIC disponible chez Aures
Mini contour d’oreille RIC / RITE

Pleine conque
Exemple de prothèse auditive invisible IIC disponible chez Aures
Presque invisible Mini-CIC ou ICC
Exemple de prothèse auditive intra-auriculaire CIC très discrète disponible chez Aures
Prothèses intra-auriculaire (CIC)
Découvrir nos modèles d'aides auditives

Pourquoi nous choisir?

Au plus proche de vos besoins : Chez Aures, nous comprenons véritablement les besoins et les préoccupations de nos patients, car deux de nos audioprothésistes portent eux-mêmes des appareils auditifs.
Une équipe authentique : Choisir Aures – Fortin & Gendron audioprothésistes, c’est choisir une équipe de professionnels authentiques, à l’affût des dernières tendances et reconnus dans toute la région de Québec pour leur honnêteté et leur engagement envers leurs patients.
Une approche humaine : Nous sommes fiers de ne pas être une grande bannière. Nous misons sur l'amélioration de chacune de nos cliniques et d’assurer la qualité des services dans chacune de celles-ci.
Des audioprothésistes verts : Notre engagement envers l'environnement se traduit par des pratiques respectueuses de la planète.
Un soutien financier : L'audiologiste déterminera votre éligibilité à différents organismes payeurs lors de votre test d'audition. Les programmes incluent la RAMQ, la CNESST, les Anciens Combattants, les Affaires autochtones et la Fondation des Sourds du Québec. De plus, certaines assurances privées peuvent couvrir une partie des coûts d'achat d'appareils auditifs.

95%*
sont satisfaits de leur expérience avec les appareils auditifs

85%*
ont trouvé l’adaptation à l’appareil auditif facile

4812+
oreilles entendent mieux grâce à Aures

5 kg
de plastique sauvé grâce à la recharge des vaporisateurs nettoyants

*Données issues du portrait des personnes malentendantes au Québec - août 2022 par l’Ordre des audioprothésistes du Québec.
Nos
conseils santé
Votre source d'informations en matière de santé auditive et de solutions auditives.

Découvrir tous nos conseils santés

Audition
 Par Stéphane Fortin
Est-ce que je suis sourd?

Appareils auditifs
 Par Marie-Pier Gendron
Tout ce que vous devez savoir sur les appareils auditifs

Appareils auditifs
 Par Marie-Pier Gendron
Est-ce qu’un amplificateur personnel est aussi efficace qu’une prothèse auditive?

Audition
 Par Thomas Baril
Des applications mobiles à la rescousse de nos oreilles

Appareils auditifs
 Par Marie-Pier Gendron
Est-ce qu’il existe une prothèse auditive invisible?

Audition
 Par Stéphane Fortin
5 choses à savoir pour la pratique du sport avec une perte d’audition

Acouphènes
Appareils auditifs
Quels sont les effets d’un appareil auditif pour le traitement de l’acouphène?

Appareils auditifs
Audition
J’entends un grichement dans mes appareils auditifs

Appareils auditifs
 Par Marie-Pier Gendron
Quel est le prix des appareils auditifs?

Appareils auditifs
J’ai échappé mon aide auditive dans l’eau, que faire?

Acouphènes
 Par Thomas Baril
Au secours, j’ai des acouphènes!

Appareils auditifs
 Par Stéphane Fortin
Ma prothèse auditive ne fonctionne plus

Audition
 Par Marilyn Rancourt Emond
Comment amener un proche malentendant à consulter pour son problème d’audition?

Audition
 Par Marie-Pier Gendron
La différence entre un audioprothésiste, un audiologiste et un ORL

Appareils auditifs
 Par Thomas Baril
Y a-t-il d’autres solutions que les appareils auditifs?

Audition
 Par Stéphane Fortin
Oreille bouchée : comment enlever un bouchon de cire dans l’oreille

Appareils auditifs
 Par Thomas Baril
Acheter des appareils auditifs en ligne, bonne ou mauvaise idée?

Audition
 Par Stéphane Fortin
Est-ce que je suis sourd?

Appareils auditifs
 Par Marie-Pier Gendron
Tout ce que vous devez savoir sur les appareils auditifs

Appareils auditifs
 Par Marie-Pier Gendron
Est-ce qu’un amplificateur personnel est aussi efficace qu’une prothèse auditive?

Audition
 Par Thomas Baril
Des applications mobiles à la rescousse de nos oreilles

Appareils auditifs
 Par Marie-Pier Gendron
Est-ce qu’il existe une prothèse auditive invisible?

Audition
 Par Stéphane Fortin
5 choses à savoir pour la pratique du sport avec une perte d’audition

Acouphènes
Appareils auditifs
Quels sont les effets d’un appareil auditif pour le traitement de l’acouphène?

Appareils auditifs
Audition
J’entends un grichement dans mes appareils auditifs

Appareils auditifs
 Par Marie-Pier Gendron
Quel est le prix des appareils auditifs?

Appareils auditifs
J’ai échappé mon aide auditive dans l’eau, que faire?

Acouphènes
 Par Thomas Baril
Au secours, j’ai des acouphènes!

Appareils auditifs
 Par Stéphane Fortin
Ma prothèse auditive ne fonctionne plus

Audition
 Par Marilyn Rancourt Emond
Comment amener un proche malentendant à consulter pour son problème d’audition?

Audition
 Par Marie-Pier Gendron
La différence entre un audioprothésiste, un audiologiste et un ORL

Appareils auditifs
 Par Thomas Baril
Y a-t-il d’autres solutions que les appareils auditifs?

Audition
 Par Stéphane Fortin
Oreille bouchée : comment enlever un bouchon de cire dans l’oreille

Appareils auditifs
 Par Thomas Baril
Acheter des appareils auditifs en ligne, bonne ou mauvaise idée?
Commencer à prendre soin de mon audition
Prendre rendez-vous en ligne
Test d'audition en ligne

Logo officiel de l'Ordre des audioprothésistes du Québec (OAQ) confirmant l'accréditation du professionnel chez Aures

Clinique Aures - Classée parmi les 3 meilleurs audioprothésistes à Québec par ThreeBestRated
L’évaluation d’un audioprothésiste est requise pour déterminer si les prothèses auditives conviennent aux besoins du patient.
Liens rapides

Prothèses auditives
Boutique
Nous joindre
Blogue
À propos
Abonnez-vous à notre infolettre!

Votre courriel*
exemple@gmail.com

Suivez-nous

Trouvez votre clinique

Québec
1363 Av. Maguire, bureau 202,
Québec QC G1T 1Z2

Beaupré
10974, boulevard Ste-Anne,
bureau 102, Beaupré QC G0A 1E0

Baie Saint-Paul
4, rue du Moulin, bureau 101,
Baie-Saint-Paul QC G3Z 2R8

Politique d’achat en ligne
Politique de confidentialité
Avis médical et Loi sur l’obsoles