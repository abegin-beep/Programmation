Voici ce que je dois faire: Rédaction du brief de modifications web
Regrouper toutes les recommandations techniques pour regagner le trafic perdu depuis janvier 2026. Transmettre à Libéo



Redirections brisées
Perte directe de trafic : cause #1 de la chute
Solution : Donner les erreurs 404, redirections a faire...
Article "7 sons FR" en noindex
Article "7 sons FR" bloqué à Google depuis janvier
Solution : Changer le noindex en index + réindexation GSC
Sitemap contenant des URLs brisées depuis la migration
Le sitemap est mis à jour par ajout de contenu, mais jamais nettoyé des pages en 404, /en/ et /node/ datant d'avant la migration y sont toujours présentes.
Solution : Régénérer le sitemap proprement, retirer 404/ noindex/ /en/
Pages /node/ dans le sitemap
Pages techniques sans valeur SEO exposées
Solution : Retirer du sitemap + ajouter noindex
Canonique contradictoire sur /carrieres
La page /fr/carrieres/courtier-assurance-des-particuliers-ventes-0 redirige vers une nouvelle URL, mais la nouvelle URL a une balise canonical qui pointe vers l'ancienne.
Solution : Corriger la balise canonical self-referencing et la typo courtiere
Pages /en/ encore dans le sitemap
Google crawle 24+ pages sans avenir
Solution : Rediriger chaque /en/ en 301 vers son équivalent en /fr/

 H1 manquant sur /nos-bureaux
Signal de pertinence absent pour Google
Solution : Ajouter un H1 : ex. Nos bureaux - DPA Assurances
Élevée
Meta descriptions trop courtes
Les 38 pages de services ont des méta-descriptions de 2 à 3 mots qui répètent le nom du produit.
Solution : Réécrire chaque meta : mot-clé cible + bénéfice client + appel à l'action
Élevée
Core Web Vitals échoué (CLS 0,29 / max 0,1)
Facteur de classement Google raté sur desktop
Solution : Ajouter width/height sur toutes les images. Réserver l'espace du carrousel. Supprimer JS inutilisé (~755 Ko) et CSS inutilisé (~195 Ko). Précharger l'image LCP.
Élevée
Contenu dupliqué (dommage par eau)
Google ne sait pas quelle version valoriser
Solution: Garder la version blogue, rediriger /fr/dommage-par-eau-en-6-etapes en 301 vers l'article
Élevée

 33 images sans texte alternatif
Solution : Ajouter un alt descriptif sur chaque image
17+ pages orphelines dans le sitemap sans lien interne
Solution : Intégrer dans l’architecture du site, rediriger ou supprimer
Données structurées incomplètes (LocalBusiness, FAQPage manquants)
Solution : Ajouter LocalBusiness sur chaque bureau (adresse, téléphone, GPS). Ajouter FAQPage si contenu Q/R existe.
Pages carrières en 403 encore accessibles par Google
Solution : Rediriger en 301 vers la page carrières principale
Images et PDFs brisés post-migration (404-403)
Solution : Retrouver dans les backups ou retirer les références


CRITIQUE	Structure produits	/fr/assurances/particuliers	404	Inconnu	/fr/assurances-personnelles	Hub assurances personnelles — indexé avant migration, aucune redirection
CRITIQUE	Structure produits	/fr/assurances/particuliers/automobile	404	Inconnu	/fr/assurances-personnelles/mon-auto	Page produit auto — ancienne URL indexée par Google
CRITIQUE	Structure produits	/fr/assurances/particuliers/habitation	404	Inconnu	/fr/assurances-personnelles/ma-residence	Page produit habitation — ancienne URL indexée par Google
CRITIQUE	Structure produits	/fr/assurances/entreprises	404	Inconnu	/fr/assurances-entreprises/assurances-commerciales	Hub assurances entreprises — aucune redirection
CRITIQUE	Structure produits	/fr/assurances/entreprises/biens-et-responsabilite-civile	404	Inconnu	/fr/assurances-entreprises/produits-specifiques/biens-et-resp-civile	Page produit entreprise sans redirection
CRITIQUE	Structure produits	/fr/assurances/entreprises/vehicules-commerciaux	404	Inconnu	/fr/assurances-entreprises/produits-specifiques/auto-commerciale	Page produit entreprise sans redirection
CRITIQUE	Structure produits	/fr/entreprises/biens-et-responsabilite-civile	404	Inconnu	/fr/assurances-entreprises/produits-specifiques/biens-et-resp-civile	Variante d'ancienne URL — sans redirection
CRITIQUE	Pages /en/ mal redirigées	/en	301 → /fr (homepage)	193	/fr	Toutes les pages /en/* redirigent vers homepage — perte d'autorité. Remplacer par des redirections page-à-page
CRITIQUE	Pages /en/ mal redirigées	/en?page=1	301 → /fr (homepage)	6	/fr	Redirection catch-all — autorité de pagination perdue
CRITIQUE	Pages /en/ mal redirigées	/en?page=2	301 → /fr (homepage)	5	/fr	Redirection catch-all — autorité de pagination perdue
CRITIQUE	Pages /en/ mal redirigées	/en?page=3	301 → /fr (homepage)	3	/fr	Redirection catch-all — autorité de pagination perdue
CRITIQUE	Pages /en/ mal redirigées	/en?page=4	301 → /fr (homepage)	1	/fr	Redirection catch-all — autorité de pagination perdue
CRITIQUE	Pages /en/ mal redirigées	/en/about-us/our-offices/monteregie/st-hyacinthe-dpa-assurances-siege-social	404	Inconnu	/fr/a-propos/nos-bureaux/monteregie	Page bureau anglaise non redirigée vers l'équivalent FR
CRITIQUE	Pages /en/ mal redirigées	/en/about-us/our-team	404	Inconnu	/fr/a-propos/nos-bureaux	Page équipe EN non redirigée
CRITIQUE	Pages /en/ mal redirigées	/en/insurance/business	404	Inconnu	/fr/assurances-entreprises/assurances-commerciales	Hub assurances entreprises EN non redirigé
CRITIQUE	Pages /en/ mal redirigées	/en/three-monteregie-producers-who-delight-our-tastebuds	301 → URL EN inexistante	0	/fr/a-propos/blogue/train-de-vie/3-producteurs-de-la-monteregie-a-decouvrir	Chaîne de redirection brisée — doit pointer vers FR
CRITIQUE	Pages 403 accessibles	/fr/node/779	403	158	/fr	PRIORITÉ ABSOLUE — 158 liens entrants actifs, Google crawle activement
CRITIQUE	Pages 403 accessibles	/en/node/38	403	2	/fr	Page technique EN accessible par Google
CRITIQUE	Pages carrières 403	/index.php/fr/carrieres/courtierere-en-assurance-de-dommages-des-particuliers-et-entreprises-division-groupe	403	Inconnu	/fr/carrieres	Ancienne URL Drupal avec /index.php/ — doit être redirigée
CRITIQUE	Pages carrières 403	/index.php/fr/carrieres/courtierere-assurance-de-dommages-des-particuliers-module	403	Inconnu	/fr/carrieres	Ancienne URL Drupal avec /index.php/ — doit être redirigée

HAUTE	Pages carrières 403	/fr/carrieres/technicienne-comptable-1	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/technicienne-comptable-0	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/secretaire-receptionniste-drummondville	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/secretaire-receptionniste-1	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/coutierere-en-assurance-des-particuliers-ventes-et-prospection-100-commissions	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/coutierere-en-assurance-des-particuliers-ventes-100-commissions	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/coutierere-assurance-des-particuliers-ventes-et-prospection-100-commissions	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/courtierere-en-assurance-de-dommages-service-nouveauxelles-diplomees-a-laec-en-assurance	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/courtierere-division-groupe	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/courtierere-assurance-des-particuliers-perso-module	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/courtierere-assurance-des-particuliers-perso	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/courtierere-assurance-des-particuliers-et-entreprises-division-groupe	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/courtierere-assurance-de-dommages-des-particuliers-module	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/courtier-assurance-des-particuliers-module	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/courtier-assurance-des-particuliers-perso	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/conseillerere-marketing-et-communication-remplacement-de-conge-de-maternite-1	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/conseillerere-en-ressources-humaines	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/aspirante-courtierere-en-assurance-des-particuliers	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/aspirante-courtierere-en-assurance-des-particuliers-service	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/carrieres/aspirante-courtierere-en-assurance-de-dommages-des-particuliers-service	403	Inconnu	/fr/carrieres	Poste expiré accessible par Google
HAUTE	Pages carrières 403	/fr/concours-partenaire-acry	403	Inconnu	/fr	Page concours expirée encore accessible par Google
HAUTE	Blogue	/fr/blogue/allo-courtier/6-bonnes-habitudes-a-adopter-au-volant-0	404	Inconnu	/fr/a-propos/blogue/allo-courtier	Article sous ancienne structure /blogue/ sans redirection
HAUTE	Blogue	/fr/blogue/train-de-vie/hybride-ou-electrique-comment-prendre-un-virage-vert-et-habile-0	404	Inconnu	/fr/a-propos/blogue/train-de-vie	Article sous ancienne structure /blogue/ sans redirection
HAUTE	Navigation	/fr/partenaires-	404	Inconnu	/fr/a-propos/partenaires	URL cassée avec tiret final — ancienne page partenaires
HAUTE	Bureau	/fr/a-propos/nos-bureaux/estrie/dpa-assurances-a-roxton-pond	404	Inconnu	/fr/a-propos/nos-bureaux	Page bureau Roxton Pond non migrée
HAUTE	Navigation	/insurances/	404	Inconnu	/fr/assurances-personnelles	Ancienne URL anglaise du hub assurances — aucune redirection
HAUTE	Navigation	/media/	404	Inconnu	/fr	Ancienne URL de médiathèque Drupal non redirigée


"enlever ces pages du sitemap : identification des pages qui sont dans le sitemap et que je ne veux pas:
"
https://www.groupedpa.com/fr/node/749
https://www.groupedpa.com/fr/proprietaire
https://www.groupedpa.com/fr/node/747
https://www.groupedpa.com/fr/node/744
https://www.groupedpa.com/fr/node/631
https://www.groupedpa.com/fr/node/721
https://www.groupedpa.com/fr/node/553
https://www.groupedpa.com/fr/node/584
https://www.groupedpa.com/fr/node/583
https://www.groupedpa.com/fr/node/551
https://www.groupedpa.com/fr/node/582
https://www.groupedpa.com/fr/carriere/merci

voici https://www.groupedpa.com/sitemap.xml
https://www.groupedpa.com/fr 2026-04-20T15:41:25-04:00 daily 1.0 https://www.groupedpa.com/fr/actualites/dpa-assurances-tient-sa-premiere-collecte-de-sang 2017-12-20T16:12:25-05:00 0.5 https://www.groupedpa.com/fr/actualites/assurances-laplante-michon-inc-se-joint-a-dpa-assurances 2018-01-03T17:51:37-05:00 0.5 https://www.groupedpa.com/fr/actualites/dpa-assurances-recompense-les-benevoles-de-lacq 2018-01-18T10:28:34-05:00 0.5 https://www.groupedpa.com/fr/actualites/avis-de-nomination-chez-la-releve-de-dpa 2018-05-31T13:42:55-04:00 0.5 https://www.groupedpa.com/fr/actualites/7-mesures-pour-utiliser-le-propane-en-toute-securite 2018-06-28T09:29:44-04:00 0.5 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/les-mythes-a-propos-de-lassurance 2025-07-24T14:02:12-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/aide-memoire-pour-bien-preparer-votre-maison-avant-vos-vacances 2025-07-24T14:02:29-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/4-jeux-pour-amuser-les-enfants-en-voiture 2025-07-24T14:02:44-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/winter-storage-checklist-recreational-vehicles 2025-07-24T14:02:59-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/aide-memoire-pour-bien-remiser-les-vehicules-de-loisirs-pour-lhiver 2025-07-24T14:02:59-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/4-bonnes-raisons-de-telecharger-lapplication-intact-assurance 2025-07-24T14:03:15-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/comment-faire-des-renovations-rentables-sur-sa-maison 2025-07-24T14:03:45-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/accrochages-et-petits-accidents-quoi-faire 2025-07-24T14:04:01-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/notre-relation-amourhaine-avec-notre-telephone 2025-07-24T14:04:16-04:00 0.8 https://www.groupedpa.com/en/blog/train-de-vie/having-a-smart-home-just-plain-smart 2025-07-24T14:04:32-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/une-maison-connectee-cest-intelligent 2025-07-24T14:04:32-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/comment-votre-prime-dassurance-auto-est-elle-calculee 2025-07-24T14:05:03-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/comment-votre-prime-dassurance-habitation-est-elle-calculee 2025-07-24T14:05:24-04:00 0.8 https://www.groupedpa.com/en/subletting-what-you-need-to-know 2025-07-24T14:05:55-04:00 0.8 https://www.groupedpa.com/fr/blogue/allo-courtier/la-sous-location-comment-sy-retrouver 2025-07-24T14:05:55-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/etes-vous-certain-davoir-tout-mentionne-a-votre-courtier 2025-07-24T14:06:11-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/une-collision-avec-votre-vehicule-responsable-non-responsable 2025-07-24T14:06:29-04:00 0.8 https://www.groupedpa.com/en/blog/allo-courtier/everything-you-need-know-about-insuring-atvs 2025-07-24T14:06:44-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/assurance-motoneige-quad-ce-quil-faut-savoir 2025-07-24T14:06:44-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/5-conseils-a-suivre-avant-dentreprendre-votre-projet-de-terrasse 2025-07-24T14:07:43-04:00 0.8 https://www.groupedpa.com/en/blog/allo-courtier/how-technology-having-impact-your-car-insurance 2025-07-24T14:08:12-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/comment-levolution-de-la-technologie-influence-lassurance-auto 2025-07-24T14:08:12-04:00 0.8 https://www.groupedpa.com/fr/blogue/allo-courtier/etes-vous-bien-protege-en-cas-de-catastrophe-naturelle 2025-07-24T14:08:28-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/partager-vos-photos-de-voyage-sur-les-reseaux-sociaux-ou-pas 2025-07-24T14:08:41-04:00 0.8 https://www.groupedpa.com/fr/blogue/allo-courtier/6-bonnes-habitudes-a-adopter-au-volant 2025-07-24T14:08:54-04:00 0.8 https://www.groupedpa.com/en/blog/allo-courtier/how-much-home-insurance-do-i-need-order-be-well-protected 2025-07-24T14:09:08-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/pour-combien-dois-je-massurer-pour-etre-bien-protege 2025-07-24T14:09:08-04:00 0.8 https://www.groupedpa.com/en/blog/train-de-vie/interview-mario-poirier-a-seasoned-insurance-broker-and-agricultural-specialist 2025-07-24T14:09:22-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/entrevue-avec-mario-poirier-courtier 2025-07-24T14:09:22-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/how-make-a-vehicle-insurance-claim-just-5-minutes 2025-07-24T14:10:14-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/comment-faire-une-reclamation-auto-en-5-minutes 2025-07-24T14:10:14-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/comment-savoir-si-votre-entreprise-a-la-maison-est-couverte 2025-07-24T14:10:27-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/comment-proteger-vos-biens-des-inondations 2025-07-24T14:10:40-04:00 0.8 https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-your-house-you-shouldnt-ignore 2026-04-22T14:08:17-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/7-sons-et-bruits-de-la-maison-a-ne-pas-ignorer 2026-04-22T14:08:17-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/7-raisons-de-faire-affaire-avec-un-courtier-dassurance 2025-07-24T14:11:06-04:00 0.8 https://www.groupedpa.com/en/blog/allo-courtier/8-important-fire-safety-tips-your-home-fall 2025-07-24T14:11:18-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/comment-prevenir-les-incendies-a-la-maison-en-hiver 2025-07-24T14:11:18-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/comment-proteger-sa-propriete-des-vents-violents 2025-07-24T14:11:44-04:00 0.8 https://www.groupedpa.com/en/blog/allo-courtier/right-insurance-your-new-swimming-pool-or-hot-tub 2025-07-24T14:11:57-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/comment-bien-assurer-votre-nouvelle-piscine-ou-votre-nouveau-spa 2025-07-24T14:11:57-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/7-questions-a-se-poser-avant-dacheter-une-motoneige 2025-07-24T14:12:10-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/chevreuil-sur-la-route-quoi-faire-pour-eviter-une-collision 2025-07-24T14:13:58-04:00 0.8 https://www.groupedpa.com/en/blog/train-de-vie/tips-help-new-drivers-get-through-their-first-winter-road 2025-07-24T14:16:23-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/nouveaux-conducteurs-voici-nos-5-conseils-pratiques-pour-conduire-en 2025-07-24T14:16:23-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/les-meilleurs-relais-de-motoneige-au-quebec 2025-07-24T14:16:35-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/activites-familiales-a-faire-au-chalet-pendant-lhiver 2025-07-24T14:16:48-04:00 0.8 https://www.groupedpa.com/en/blog/train-de-vie/few-helpful-tips-if-your-vehicle-breaks-down-winter 2025-07-24T14:17:01-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/etapes-a-suivre-suite-a-un-incident-avec-votre-voiture-en-hiver 2025-07-24T14:17:01-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/everything-you-need-know-about-roommates-and-insurance 2025-07-24T14:17:49-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/tout-ce-que-vous-devez-savoir-sur-la-colocation-et-lassurance 2025-07-24T14:17:49-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/5-steps-evaluate-your-belongings-your-home-insurance 2025-07-24T14:18:02-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/cinq-etapes-pour-evaluer-vos-biens 2025-07-24T14:18:02-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/practical-guide-selling-your-vehicule 2025-07-24T14:18:16-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/guide-pratique-pour-la-vente-de-votre-vehicule 2025-07-24T14:18:16-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/our-best-tips-find-your-scooter-insurance 2025-07-24T14:18:28-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/nos-meilleurs-conseils-pour-choisir-votre-assurance-scooter 2025-07-24T14:18:28-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/how-clean-your-yard-fall-environment-mind 2025-07-24T14:18:41-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/comment-nettoyer-votre-cour-de-facon-ecoresponsable-cet-automne 2025-07-24T14:18:41-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/tips-avoid-winter-slips-and-injuries 2025-07-24T14:19:24-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/conseils-pour-eviter-les-chutes-et-les-blessures-durant-lhiver 2025-07-24T14:19:24-04:00 0.8 https://www.groupedpa.com/en/blog/boite-a-outils/how-stay-warm-and-safe-winter 2025-07-24T14:19:41-04:00 0.8 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/comment-passer-lhiver-au-chaud-en-toute-securite 2025-07-24T14:19:41-04:00 0.8 https://www.groupedpa.com/en/reclamations 2025-11-17T11:59:36-05:00 0.7 https://www.groupedpa.com/fr/reclamations/declarer-un-sinistre 2025-11-17T11:59:36-05:00 0.7 https://www.groupedpa.com/fr/carrieres/courtierere-assurance-des-particuliers-ventes-academie-intact 2026-04-17T10:30:08-04:00 0.5 https://www.groupedpa.com/fr/carrieres/candidature-spontanee 2026-03-02T10:38:46-05:00 0.5 https://www.groupedpa.com/fr/a-propos/nos-bureaux/monteregie/bureau-de-dpa-assurances-a-drummondville 2024-06-10T15:21:50-04:00 0.5 https://www.groupedpa.com/fr/a-propos/nos-bureaux/monteregie/bureau-de-dpa-assurances-a-brossard 2026-03-16T14:25:35-04:00 0.5 https://www.groupedpa.com/fr/a-propos/nos-bureaux/monteregie/siege-social-de-dpa-assurances-a-saint-hyacinthe 2025-07-09T16:34:42-04:00 0.5 https://www.groupedpa.com/en/a-propos/nos-bureaux 2025-07-09T12:02:40-04:00 0.6 https://www.groupedpa.com/fr/a-propos/nos-bureaux 2025-07-09T12:02:40-04:00 0.6 https://www.groupedpa.com/en/a-propos/nous-joindre 2025-07-09T11:55:12-04:00 0.6 https://www.groupedpa.com/fr/a-propos/nous-joindre 2025-07-09T11:55:12-04:00 0.6 https://www.groupedpa.com/fr/politique-de-confidentialite-et-avis-legaux 2023-01-18T12:44:05-05:00 0.6 https://www.groupedpa.com/fr/reclamations/protegez-vos-biens 2025-01-16T10:45:29-05:00 0.6 https://www.groupedpa.com/fr/a-propos/partenaires 2026-01-20T12:26:07-05:00 0.6 https://www.groupedpa.com/fr/carriere/merci 2019-08-13T16:15:31-04:00 0.6 https://www.groupedpa.com/fr/a-propos/politique-de-traitement-des-plaintes 2025-07-31T15:24:29-04:00 0.6 https://www.groupedpa.com/fr/a-propos/implication-communaute 2025-01-16T11:09:52-05:00 0.6 https://www.groupedpa.com/fr/node/744 2025-12-08T09:42:40-05:00 0.6 https://www.groupedpa.com/fr/node/747 2025-12-17T15:05:40-05:00 0.6 https://www.groupedpa.com/fr/node/749 2025-12-17T14:55:37-05:00 0.6 https://www.groupedpa.com/fr/a-propos/notre-histoire 2025-09-17T11:36:51-04:00 0.8 https://www.groupedpa.com/fr/a-propos/vision-mission-valeurs 2025-01-16T11:07:40-05:00 0.8 https://www.groupedpa.com/fr/rendez-vous-en-succursale 2022-11-18T14:18:58-05:00 0.8 https://www.groupedpa.com/fr/dommage-par-eau-en-6-etapes 2024-08-19T09:35:17-04:00 0.8 https://www.groupedpa.com/fr/assurances-personnelles/vehicules-de-loisirs 2025-01-16T09:52:11-05:00 0.9 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/entreprise-agricole 2025-10-21T14:38:50-04:00 0.9 https://www.groupedpa.com/fr/groupe 2025-07-09T17:04:35-04:00 0.9 https://www.groupedpa.com/fr/assurances-entreprises/produits-specifiques/cautionnement 2025-01-16T10:36:17-05:00 0.9 https://www.groupedpa.com/fr/particuliers/haute-valeur 2025-07-09T16:25:30-04:00 0.9 https://www.groupedpa.com/fr/assurances-personnelles/mon-auto 2025-01-16T09:38:39-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence 2025-01-16T09:43:29-05:00 0.5 https://www.groupedpa.com/fr/node/551 2021-08-30T12:06:27-04:00 0.5 https://www.groupedpa.com/fr/node/553 2021-08-31T13:35:31-04:00 0.5 https://www.groupedpa.com/fr/node/582 2026-04-08T14:07:26-04:00 0.5 https://www.groupedpa.com/fr/node/583 2026-04-07T10:02:02-04:00 0.5 https://www.groupedpa.com/fr/node/584 2025-05-08T10:28:43-04:00 0.5 https://www.groupedpa.com/fr/entreprises/cybersecurite-aappq 2024-09-12T13:38:13-04:00 0.5 https://www.groupedpa.com/fr/node/631 2023-04-24T10:46:51-04:00 0.5 https://www.groupedpa.com/en/amvoqcontest 2024-02-27T15:30:18-05:00 0.5 https://www.groupedpa.com/fr/concoursamvoq 2024-02-27T15:30:18-05:00 0.5 https://www.groupedpa.com/fr/RMPQ 2025-01-27T16:48:29-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/entreprises-de-services 2025-05-08T10:27:47-04:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/restauration-et-hotellerie 2025-01-16T10:24:21-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/produits-specifiques/administrateurs-et-dirigeants 2025-01-16T10:29:36-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/produits-specifiques/chantier 2025-01-16T10:37:37-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/detaillant-grossiste 2025-05-08T10:26:44-04:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/manufacturiers-industriel 2025-01-16T10:16:55-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/produits-specifiques/cybersecurite 2025-01-16T10:34:48-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/produits-specifiques/auto-commerciale 2025-05-08T09:57:18-04:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/ti-ing-logiciel 2025-01-16T10:18:22-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/transport 2025-01-16T10:21:13-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/produits-specifiques/biens-et-resp-civile 2026-03-25T10:52:25-04:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/construction-cautionnement 2025-01-16T10:15:14-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/vehicules-de-loisirs/mon-vtt 2025-01-16T10:05:33-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/vehicules-de-loisirs/ma-moto 2025-01-16T10:01:45-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/vehicules-de-loisirs/mon-motorise 2025-01-16T10:10:41-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/vehicules-de-loisirs/mon-bateau 2026-04-20T11:33:58-04:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/vehicules-de-loisirs/ma-motoneige 2025-01-16T10:03:56-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/ma-maison 2025-01-16T09:45:08-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/mon-condo 2025-01-16T09:46:53-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/travailleur-autonome 2025-01-16T09:50:37-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/mon-logement 2025-01-16T09:48:43-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/mon-auto/assistance-routiere 2025-01-16T09:40:20-05:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/mon-auto/pardon-des-accidents 2025-01-16T09:41:50-05:00 0.5 https://www.groupedpa.com/fr/avantage-AAPQ 2025-04-16T15:11:45-04:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/produits-specifiques 2025-01-16T10:32:31-05:00 0.5 https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales 2026-03-25T09:57:35-04:00 0.5 https://www.groupedpa.com/fr/node/721 2024-10-02T13:52:18-04:00 0.5 https://www.groupedpa.com/fr/assurance-habitation-pm 2026-04-22T10:07:36-04:00 0.5 https://www.groupedpa.com/fr/assurance-vehicule-loisirs-pm 2026-04-22T10:04:43-04:00 0.5 https://www.groupedpa.com/fr/assurance-auto-pm 2026-04-22T10:03:51-04:00 0.5 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/proprietaire 2021-02-15T14:14:58-05:00 0.8 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/travailleur-autonome-0 2021-02-15T14:22:03-05:00 0.8 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/locataire 2021-02-15T14:11:35-05:00 0.8 https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/assurance-des-frais-juridiques 2021-02-10T10:19:28-05:00 0.8 https://www.groupedpa.com/fr/proprietaire 2024-08-29T15:52:23-04:00 0.8 https://www.groupedpa.com/fr/employe 2024-08-29T15:52:05-04:00 0.8 https://www.groupedpa.com/fr/travailleur-autonome 2024-08-29T15:54:59-04:00 0.8 https://www.groupedpa.com/en/blog/allo-courtier 2019-08-05T15:26:05-04:00 0.5 https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier 2019-08-05T15:26:05-04:00 0.5 https://www.groupedpa.com/en/blog/boite-a-outils 2019-08-05T15:26:54-04:00 0.5 https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils 2019-08-05T15:26:54-04:00 0.5 https://www.groupedpa.com/en/blog/train-de-vie 2019-08-05T15:22:29-04:00 0.5 https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie 2019-08-05T15:22:29-04:00 0.5


robots.txt:
#
# robots.txt
#
# This file is to prevent the crawling and indexing of certain parts
# of your site by web crawlers and spiders run by sites like Yahoo!
# and Google. By telling these "robots" where not to go on your site,
# you save bandwidth and server resources.
#
# This file will be ignored unless it is at the root of your host:
# Used:    http://example.com/robots.txt
# Ignored: http://example.com/site/robots.txt
#
# For more information about the robots.txt standard, see:
# http://www.robotstxt.org/robotstxt.html
Sitemap: https://www.groupedpa.com/sitemap.xml
User-agent: *
Crawl-delay: 5
# CSS, JS, Images
Allow: /core/*.css$
Allow: /core/*.css?
Allow: /core/*.js$
Allow: /core/*.js?
Allow: /core/*.gif
Allow: /core/*.jpg
Allow: /core/*.jpeg
Allow: /core/*.png
Allow: /core/*.svg
Allow: /profiles/*.css$
Allow: /profiles/*.css?
Allow: /profiles/*.js$
Allow: /profiles/*.js?
Allow: /profiles/*.gif
Allow: /profiles/*.jpg
Allow: /profiles/*.jpeg
Allow: /profiles/*.png
Allow: /profiles/*.svg
# Directories
Disallow: /core/
Disallow: /profiles/
# Files
Disallow: /README.txt
Disallow: /web.config
Disallow: /README.md
Disallow: /composer/Metapackage/README.txt
Disallow: /composer/Plugin/ProjectMessage/README.md
Disallow: /composer/Plugin/Scaffold/README.md
Disallow: /composer/Plugin/VendorHardening/README.txt
Disallow: /composer/Template/README.txt
Disallow: /modules/README.txt
Disallow: /sites/README.txt
Disallow: /themes/README.txt
# Paths (clean URLs)
Disallow: /admin/
Disallow: /comment/reply/
Disallow: /filter/tips
Disallow: /node/add/
Disallow: /search/
Disallow: /user/register
Disallow: /user/password
Disallow: /user/login
Disallow: /user/logout
Disallow: /media/oembed
Disallow: /*/media/oembed
# Paths (no clean URLs)
Disallow: /index.php/admin/
Disallow: /index.php/comment/reply/
Disallow: /index.php/filter/tips
Disallow: /index.php/node/add/
Disallow: /index.php/search/
Disallow: /index.php/user/password
Disallow: /index.php/user/register
Disallow: /index.php/user/login
Disallow: /index.php/user/logout
Disallow: /index.php/media/oembed
Disallow: /index.php/*/media/oembed


				
voici la liste avec les alt text manquant:				
https://www.groupedpa.com/themes/custom/intact/assets/src/images/logos/logo-intact-white-fr.png	image/png	22020	78	Indexable
https://www.groupedpa.com/themes/custom/groupedpa/assets/src/images/logos/logo-white-fr.png	image/png	16414	78	Indexable
https://www.groupedpa.com/sites/default/files/2018-12/boiteaoutils.svg	image/svg+xml	0	256	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/2024-08/iStock-506694993.jpg.webp?itok=KnmY286m	image/webp	43576	5	Indexable
https://www.groupedpa.com/sites/default/files/2018-12/allocourtier.svg	image/svg+xml	0	223	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2022-09/blogue-virage-economiemaison-1400x500.png.webp?itok=zRY0-be4	image/webp	40136	3	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2022-09/blogue-virage-securiteenfantvoiture-1400x500_v2.jpg.webp?itok=elEOWrxg	image/webp	68744	5	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2023-02/panne-voiture-1400x500.jpg.webp?itok=FNZrX-Al	image/webp	42184	26	Indexable
https://www.groupedpa.com/themes/custom/intact/assets/src/images/logos/logo-intact-white-en.png	image/png	19417	6	Indexable
https://www.groupedpa.com/themes/custom/groupedpa/assets/src/images/logos/logo-white-en.png	image/png	16414	6	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2025-09/190429_VALTECH_INTACT_ILLUSTRATION_NewElements_House_500x312.png.webp?itok=SoOc1v68	image/webp	8294	2	Indexable
https://www.groupedpa.com/sites/default/files/2018-12/traindevie.svg	image/svg+xml	0	171	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2023-02/190429_VALTECH_INTACT_ILLUSTRATION_NewElements_House_500x312_0.png.webp?itok=mRrf3IyH	image/webp	8294	1	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2022-09/blogue-virage-conduitepluie-1400x500.jpg.webp?itok=I67xyD7e	image/webp	72914	5	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2022-09/blogue-virage-empreintecarbone-1400x500.jpg.webp?itok=8vzkDT1y	image/webp	76510	3	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/blog/2024-01/2-Cinq_etapes.jpg.webp?itok=lfvUarkJ	image/webp	8360	2	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2021-09/cta-claim_FR_0.png.webp?itok=2mlv1QIA	image/webp	4110	1	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2022-09/cta-claim_FR.png.webp?itok=DWPXp8aS	image/webp	4110	2	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2023-02/cta-claim_FR.png.webp?itok=lBbyrmaO	image/webp	4110	2	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2021-02/190429_VALTECH_INTACT_ILLUSTRATION_NewElements_House_500x312_1.png.webp?itok=cIRSu3ve	image/webp	8294	3	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2022-04/190429_VALTECH_INTACT_ILLUSTRATION_NewElements_House_500x312_0.png.webp?itok=YQIkKG93	image/webp	8294	5	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2024-01/1-Assurance_Colocation.jpg.webp?itok=K9orU78o	image/webp	56678	3	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2020-03/3790_HeaderBlogPost_DPA_V4B.png.webp?itok=E0g12FxZ	image/webp	47964	7	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2020-03/entreprise-1400x500.png.webp?itok=zBoE9uqM	image/webp	63784	4	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2021-12/House_500x312.png.webp?itok=oNUfHNsM	image/webp	8294	2	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2022-04/190409_VALTECH_INTACT_ILLUSTRATION_Car_500x312_v2.png.webp?itok=1TJ_Ow09	image/webp	10130	2	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2019-04/dpa_producteurs_fraises_1400x500.jpg.webp?itok=PbW4RKtA	image/webp	136594	5	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2021-12/Car_500x312.png.webp?itok=DlJPEiI9	image/webp	10130	2	Indexable
https://www.groupedpa.com/sites/default/files/styles/1400x500/public/blog/2019-06/dpa-terrasse-1400x500.png.webp?itok=1v97Yjdo	image/webp	167648	4	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2023-02/cta-claim_EN.png.webp?itok=FYf4cQiE	image/webp	3774	2	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2020-03/Magasin_v2_INTACT_ILLUSTRATION_500x312.png.webp?itok=Q0j_LjTY	image/webp	3284	1	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2021-09/cta-claim_EN.png.webp?itok=pU6B2X8A	image/webp	3774	1	Indexable
https://www.groupedpa.com/sites/default/files/styles/blog_post_265_165/public/2019-06/190429_VALTECH_INTACT_ILLUSTRATION_NewElements_House_500x312_1.png.webp?itok=NAbLiByu	image/webp	2784	1	Indexable
				
				
				
				
voici les pages orphelines: https://www.groupedpa.com/fr/node/584	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/offre-assurance-vehicule-de-loisirs	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/583	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/582	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/749	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/747	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/744	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/en/amvoqcontest	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/concoursamvoq	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/631	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/travailleur-autonome	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/dommage-par-eau-en-6-etapes	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/groupe-dpa	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/assurances-laplante-michon-inc-se-joint-a-dpa-assurances	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/laplante-michon-inc	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/employe	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/prevention	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/7-mesures-pour-utiliser-le-propane-en-toute-securite	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/propane	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/assurance-habitation	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/553	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/avantage-AAPQ	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/551	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/proprietaire	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/evenement	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/dpa-assurances-tient-sa-premiere-collecte-de-sang	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/chiropraticiens-du-quebec	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/implication-sociale	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/dpa-assurances-recompense-les-benevoles-de-lacq	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/node/721	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/categorie/nomination	text/html; charset=UTF-8	200	OK	Indexable
https://www.groupedpa.com/fr/actualites/avis-de-nomination-chez-la-releve-de-dpa	text/html; charset=UTF-8	200	OK	Indexable
				
				
				
				
				
				
				
				
				