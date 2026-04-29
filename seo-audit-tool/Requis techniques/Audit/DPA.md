Sommaire executif
Chute de trafic organique : -46,6% suite a la migration de janvier 2026
Fevrier 2025 : ~784 sessions  vs  Fevrier 2026 : ~419 sessions  |  Point de rupture : 7 janvier 2026
Outils : Screaming Frog, Google Search Console, Semrush, Google Analytics 4, PageSpeed Insights, Wayback Machine, tests HTTP manuels

Questions prealables
	Est-ce intentionnel ? Le client a-t-il volontairement retire la version anglaise lors de la migration de janvier 2026 ?
	Est-ce que les anciens URLs ont ete rediriges ?
	Verification des balises hreflang (ca va dependre de si on garde les pages en anglais ou non ?)


Audit technique
Priorite	Probleme	Solution	Intervenant


=== PRIORITE 1 — CRITIQUES (impact direct sur indexation et trafic) ===


P1	Redirections brisees : beaucoup de 301 qui menent au mauvais endroit ou sont cassees, causant une perte de trafic directe.	"Demander la table des redirections de l'ancien site a l'agence (demande formelle). Obtenir la liste des redirections actives, corriger celles qui pointent au mauvais endroit, et renvoyer la liste mise a jour a l'agence."	Audrey + Agence


P1	Article ""7 sons et bruits de la maison"" est en noindex/nofollow — cet article performait bien avant la migration.	"Changer les balises robots en index, follow sur cette page. Demander une reindexation via GSC une fois corrige."	Developpeur
	https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/7-sons-et-bruits-de-la-maison-a-ne-pas-ignorer


P1	Pages /en/ encore dans le sitemap alors que la version anglaise semble abandonnee — Google continue de les crawler inutilement.	"Rediriger chaque URL /en/ en 301 vers son equivalent /fr/, puis retirer toutes les URLs /en/ du sitemap."	Developpeur
	https://www.groupedpa.com/en/reclamations
	https://www.groupedpa.com/en/blog/train-de-vie/tips-help-new-drivers-get-through-their-first-winter-road
	https://www.groupedpa.com/en/blog/train-de-vie/interview-mario-poirier-a-seasoned-insurance-broker-and-agricultural-specialist
	https://www.groupedpa.com/en/blog/train-de-vie/having-a-smart-home-just-plain-smart
	https://www.groupedpa.com/en/blog/train-de-vie/few-helpful-tips-if-your-vehicle-breaks-down-winter
	https://www.groupedpa.com/en/blog/boite-a-outils/winter-storage-checklist-recreational-vehicles
	https://www.groupedpa.com/en/blog/train-de-vie
	https://www.groupedpa.com/en/blog/boite-a-outils/tips-avoid-winter-slips-and-injuries
	https://www.groupedpa.com/en/blog/boite-a-outils/our-best-tips-find-your-scooter-insurance
	https://www.groupedpa.com/en/blog/boite-a-outils/practical-guide-selling-your-vehicule
	https://www.groupedpa.com/en/blog/boite-a-outils/how-make-a-vehicle-insurance-claim-just-5-minutes
	https://www.groupedpa.com/en/blog/boite-a-outils/how-stay-warm-and-safe-winter
	https://www.groupedpa.com/en/blog/boite-a-outils/how-clean-your-yard-fall-environment-mind
	https://www.groupedpa.com/en/blog/boite-a-outils/everything-you-need-know-about-roommates-and-insurance
	https://www.groupedpa.com/en/blog/boite-a-outils
	https://www.groupedpa.com/en/blog/boite-a-outils/5-steps-evaluate-your-belongings-your-home-insurance
	https://www.groupedpa.com/en/blog/allo-courtier/right-insurance-your-new-swimming-pool-or-hot-tub
	https://www.groupedpa.com/en/blog/allo-courtier/how-much-home-insurance-do-i-need-order-be-well-protected
	https://www.groupedpa.com/en/blog/allo-courtier/everything-you-need-know-about-insuring-atvs
	https://www.groupedpa.com/en/blog/allo-courtier/8-important-fire-safety-tips-your-home-fall
	https://www.groupedpa.com/en/blog/allo-courtier/how-technology-having-impact-your-car-insurance
	https://www.groupedpa.com/en/blog/allo-courtier
	https://www.groupedpa.com/en/amvoqcontest
	https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-your-house-you-shouldnt-ignore
	https://www.groupedpa.com/en/a-propos/nos-bureaux
	https://www.groupedpa.com/en/a-propos/nous-joindre


P1	Sitemap non mis a jour depuis decembre 2025 — contient des pages en 404, noindex, /node/ et /en/.	"Regenerer le sitemap. Retirer les URLs /en/ si la version anglaise est abandonnee. S'assurer qu'aucune URL en noindex ou 404 n'est incluse. Verifier dans GSC > Sitemaps que le sitemap est bien soumis et sans erreurs."	Developpeur


P1	Pages non pertinentes dans le sitemap — pages /node/, pages de remerciement, pages de redirection.	"Retirer ces pages du sitemap et ajouter une balise noindex sur chacune. Si le contenu n'a aucune utilite, envisager une redirection 301 vers une page pertinente."	Developpeur
	https://www.groupedpa.com/fr/node/749
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
	https://www.groupedpa.com/fr/proprietaire


P1	Canonical contradictoire sur la page carrieres — la 301 dit "va la-bas" mais la canonical dit "reviens ici". La page a perdu 100% de ses impressions (685 > 0).	"Corriger la balise canonical de la page de destination pour qu'elle soit self-referencing : <link rel=""canonical"" href=""https://www.groupedpa.com/fr/carrieres/courtierere-assurance-des-particuliers-ventes-academie-intact"" /> Corriger la typo ""courtierere"" dans le slug si ce n'est pas intentionnel. Mettre a jour les hreflang et x-default en consequence. Demander une reindexation via GSC une fois corrige."	Developpeur
	URL source : /fr/carrieres/courtier-assurance-des-particuliers-ventes-0
	URL destination : /fr/carrieres/courtierere-assurance-des-particuliers-ventes-academie-intact


=== PRIORITE 2 — IMPORTANTS (impact sur le positionnement et la qualite) ===


P2	URLs anglaises de l'article 7 sons et bruits en 404 — variantes d'URL generees automatiquement par Drupal.	"Identifier l'URL anglaise qui fonctionne et rediriger les variantes en 404 vers celle-ci (redirection manuelle). Si la version anglaise est abandonnee, rediriger toutes les variantes vers l'equivalent francais."	Developpeur
	https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-your-house-you-shouldnt-ignore
	https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-in-your-house-that-you-shouldnt-ignore	404
	https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-your-house-that-you-shouldnt-ignore


P2	Contenu duplique : deux pages couvrent le meme sujet (dommages par eau en 6 etapes) sans redirection ni canonical entre elles.	"Garder la version blogue (meilleure structure d'URL) et rediriger /fr/dommage-par-eau-en-6-etapes en 301 vers la version blogue."	Developpeur
	/fr/dommage-par-eau-en-6-etapes (landing page standalone)
	/fr/a-propos/blogue/allo-courtier/quoi-faire-en-cas-de-dommages-par-leau-en-6-etapes (article blogue)


P2	H1 manquant sur /fr/a-propos/nos-bureaux — le contenu est en H2/H3 seulement.	"Ajouter un H1 unique avec le mot-cle cible, ex: ""Nos bureaux - DPA Assurances"" ou ""Trouvez votre bureau DPA Assurances""."	Developpeur


P2	Meta descriptions trop courtes sur toutes les pages de services — actuellement 2-3 mots qui repetent le nom du produit (12-25 caracteres au lieu de 120-160).	"Reecrire chaque meta description en 120-160 caracteres avec : le mot-cle cible principal, une proposition de valeur ou un benefice client, un appel a l'action. Pages concernees (38 pages) :
/fr/assurances-personnelles/mon-auto (actuel: ""Assurances Automobile"")
/fr/assurances-personnelles/ma-residence (actuel: ""Assurances Habitation"")
/fr/assurances-personnelles/vehicules-de-loisirs (actuel: ""Vehicules de loisirs"")
/fr/assurances-personnelles/ma-residence/ma-maison (actuel: ""Assurance maison"")
/fr/assurances-personnelles/ma-residence/mon-logement (actuel: ""Assurance logement"")
/fr/assurances-personnelles/ma-residence/travailleur-autonome (actuel: ""Travailleur autonome"")
/fr/assurances-personnelles/ma-residence/proprietaire (actuel: ""Assurance pour Proprietaires"")
/fr/assurances-personnelles/ma-residence/locataire (actuel: ""Assurance pour Locataire"")
/fr/assurances-personnelles/mon-auto/assistance-routiere (actuel: ""Assistance routiere"")
/fr/assurances-personnelles/mon-auto/pardon-des-accidents (actuel: ""Pardon des accidents"")
/fr/assurances-personnelles/vehicules-de-loisirs/ma-moto (actuel: ""Assurance moto"")
/fr/assurances-personnelles/vehicules-de-loisirs/mon-motorise (actuel: ""Assurance motorise"")
/fr/assurances-personnelles/vehicules-de-loisirs/mon-bateau (actuel: ""Assurance bateau"")
/fr/assurances-personnelles/vehicules-de-loisirs/ma-motoneige (actuel: ""Assurance motoneige"")
/fr/assurances-personnelles/ma-residence/assurance-des-frais-juridiques (actuel: ""Assurance pour frais juridiques"")
/fr/assurances-entreprises/assurances-commerciales (actuel: ""Assurance commerciales"")
/fr/assurances-entreprises/produits-specifiques (actuel: ""Produits specifiques"")
/fr/assurances-entreprises/assurances-commerciales/entreprise-agricole (actuel: ""Assurance agricole"")
/fr/assurances-entreprises/assurances-commerciales/entreprises-de-services (actuel: ""Assurance entreprise de services"")
/fr/assurances-entreprises/assurances-commerciales/restauration-et-hotellerie (actuel: ""Assurance restauration et hotellerie"")
/fr/assurances-entreprises/assurances-commerciales/detaillant-grossiste (actuel: ""Assurance detaillants"")
/fr/assurances-entreprises/assurances-commerciales/manufacturiers-industriel (actuel: ""Assurance Manufacturiers"")
/fr/assurances-entreprises/assurances-commerciales/construction-cautionnement (actuel: ""Assurance construction"")
/fr/assurances-entreprises/assurances-commerciales/transport (actuel: ""Assurance transport"")
/fr/assurances-entreprises/produits-specifiques/cautionnement (actuel: ""Assurance cautionnement"")
/fr/assurances-entreprises/produits-specifiques/cybersecurite (actuel: ""Assurance cybersecurite"")
/fr/assurances-entreprises/produits-specifiques/administrateurs-et-dirigeants (actuel: ""Assurance administrateurs et drigigeants"" — contient une faute de frappe)
/fr/assurances-entreprises/produits-specifiques/auto-commerciale (actuel: ""Assurance auto commerciale"")
/fr/assurances-entreprises/produits-specifiques/chantier (actuel: ""Assurance chantier"")
/fr/assurances-entreprises/produits-specifiques/biens-et-resp-civile (actuel: ""Assurance biens et responsabilite civile"")
/fr/reclamations/declarer-un-sinistre (actuel: ""Reclamations"")
/fr/a-propos/nos-bureaux (actuel: ""Nos bureaux"")
/fr/a-propos/notre-histoire (actuel: ""Notre histoire"")
/fr/a-propos/partenaires (actuel: ""Nos partenaires"")
/fr/a-propos/implication-communaute (actuel: ""Implication dans la communaute"")
/fr/reclamations/protegez-vos-biens (actuel: ""Protegez vos biens"")
/fr/a-propos/vision-mission-valeurs (actuel: ""Vision, mission, valeurs"")
/fr/groupe (actuel: ""Assurance de groupes"")"	Audrey


P2	Core Web Vitals echoue sur desktop — CLS de 0,29 (seuil max : 0,1), images sans dimensions, carrousel sans espace reserve.	"Ajouter les attributs width et height sur toutes les images et reserver l'espace du carrousel hero avec min-height ou aspect-ratio CSS pour corriger le CLS. Precharger l'image LCP avec <link rel=""preload""> et optimiser les images (economie ~530 Ko) pour ramener le LCP mobile sous 2,5 s. Supprimer le JavaScript inutilise (~755 Ko) et le CSS inutilise (~195 Ko). Differer les scripts non critiques (2x GTM, cookie consent) et eliminer les ressources bloquant le rendu (~2 560 ms d'economie). Corriger l'animation non composee identifiee par Lighthouse."	Developpeur


=== PRIORITE 3 — MODERES (ameliorations techniques, pas de perte de trafic immediate) ===


P3	PDFs manquants (404) — liens brises vers des PDFs qui existaient avant la migration.	"Verifier si ces PDFs existent encore quelque part (backup pre-migration, ancien serveur). Si oui, les re-uploader aux memes chemins. Si non, retirer les liens vers ces PDFs des pages qui les referencent."	Developpeur
	https://www.groupedpa.com/sites/groupedpa/files/2024-08/FR_OnePager-IntactAssurance-CAT-DommageEau.pdf
	https://www.groupedpa.com/sites/groupedpa/files/2024-02/EN_03-M-186.5_ReglementsConcours_AMVOQ_en.pdf
	https://www.groupedpa.com/sites/groupedpa/files/2024-02/FR_03-M-186.5_ReglementsConcours_AMVOQ.pdf


P3	Images et fichiers manquants (404) — ressources embarquees cassees dans les articles de blogue.	"Retrouver les images/PDFs originaux (backup pre-migration, ancien serveur, Wayback Machine) et les re-uploader aux memes chemins /sites/groupedpa/files/... Si introuvables : retirer les balises <img> cassees ou les remplacer par de nouvelles images. Pour les PDFs : retirer les liens ou creer de nouveaux PDFs equivalents. Ne PAS faire de redirections 301 sur les images/PDFs — ce sont des ressources embarquees, pas des pages indexees."	Developpeur
	https://www.groupedpa.com/sites/assurancia/files/inline-images/Banner_Intact-Insurance-App-768x432.png
	https://www.groupedpa.com/sites/assurancia/files/inline-images/Tech-stack_CC_App_0.png
	https://www.groupedpa.com/sites/essor/files/inline-images/4299_Backyard-Fireplace-GIF_White_v2.gif
	https://www.groupedpa.com/sites/groupedpa/files/2018-12/dpa-liste-a-cocher-vacances.pdf
	https://www.groupedpa.com/sites/groupedpa/files/2018-12/dpa-liste-a-cocher-vr.pdf
	https://www.groupedpa.com/sites/groupedpa/files/2019-09/GroupeDPA-Winter-Checklist-EN.pdf
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/(3343)-Recipes-GIF_DPA_0.gif
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/(4649)%20DPA%20Deer%20Infographic_V3.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/3341_Chritsmas_decoration_DPA_0.gif
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/3342_Christmas-wrapping_DPA_v2.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/3345_Gift-ideas-Banner_DPA_v2.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/3730_claims_infographic_DPA_v1.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/3844_Water-Damage_DPA.jpg
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/4239_Snow_plain_V2.gif
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/4486_RoadsideAssistance_infographic_V2.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/4512_RoadsideAssistance_infographic_ENGLISH_V3.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/AssureursAgricole.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/body-dpa-motoneige-1000x500.jpg
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/body-piscines-1500x1000-A-jpg.jpg
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/chauffage-1.jpg
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/guirlande-lumiere-3-iStock-1140556654-370x100.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/infographie-accident.jpg
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/jean-philip-pinsonneault.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/jeux-enfants-voiture-fille-1500x1000.jpg
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/mario-poirier_article.png
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/renovations-maison-866x755.jpg
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/telephone-bord-de-leau-1500x500.jpg
	https://www.groupedpa.com/sites/groupedpa/files/inline-images/travail-maison-1000x500-body.jpg


P3	Anciennes pages carrieres retournent 403 (acces interdit) — encore accessibles par Google.	"Rediriger chaque URL en 301 vers la page d'accueil carrieres ou vers le poste equivalent actif, si applicable."	Developpeur
	https://www.groupedpa.com/index.php/fr/carrieres/courtierere-en-assurance-de-dommages-des-particuliers-et-entreprises-division-groupe	403
	https://www.groupedpa.com/index.php/fr/carrieres/courtierere-assurance-de-dommages-des-particuliers-module	403
	https://www.groupedpa.com/fr/carrieres/technicienne-comptable-1	403
	https://www.groupedpa.com/fr/concours-partenaire-acry	403
	https://www.groupedpa.com/fr/carrieres/technicienne-comptable-0	403
	https://www.groupedpa.com/fr/carrieres/secretaire-receptionniste-drummondville	403
	https://www.groupedpa.com/fr/carrieres/secretaire-receptionniste-1	403
	https://www.groupedpa.com/fr/carrieres/coutierere-en-assurance-des-particuliers-ventes-et-prospection-100-commissions	403
	https://www.groupedpa.com/fr/carrieres/coutierere-en-assurance-des-particuliers-ventes-100-commissions	403
	https://www.groupedpa.com/fr/carrieres/coutierere-assurance-des-particuliers-ventes-et-prospection-100-commissions	403
	https://www.groupedpa.com/fr/carrieres/courtierere-en-assurance-de-dommages-service-nouveauxelles-diplomees-a-laec-en-assurance	403
	https://www.groupedpa.com/fr/carrieres/courtierere-division-groupe	403
	https://www.groupedpa.com/fr/carrieres/courtierere-assurance-des-particuliers-perso-module	403
	https://www.groupedpa.com/fr/carrieres/courtierere-assurance-des-particuliers-perso	403
	https://www.groupedpa.com/fr/carrieres/courtierere-assurance-des-particuliers-et-entreprises-division-groupe	403
	https://www.groupedpa.com/fr/carrieres/courtierere-assurance-de-dommages-des-particuliers-module	403
	https://www.groupedpa.com/fr/carrieres/courtier-assurance-des-particuliers-module	403
	https://www.groupedpa.com/fr/carrieres/courtier-assurance-des-particuliers-perso	403
	https://www.groupedpa.com/fr/carrieres/conseillerere-marketing-et-communication-remplacement-de-conge-de-maternite-1	403
	https://www.groupedpa.com/fr/carrieres/conseillerere-en-ressources-humaines	403
	https://www.groupedpa.com/fr/carrieres/aspirante-courtierere-en-assurance-des-particuliers	403
	https://www.groupedpa.com/fr/carrieres/aspirante-courtierere-en-assurance-des-particuliers-service	403
	https://www.groupedpa.com/fr/carrieres/aspirante-courtierere-en-assurance-de-dommages-des-particuliers-service	403


P3	Alt text manquant sur 33 images — logos, icones SVG, thumbnails et headers de blogue.	"Ajouter un attribut alt descriptif sur chaque image. Logos : alt=""Logo DPA Assurances"" / alt=""Logo Intact Assurance"". Icones SVG : alt=""Categorie Allo Courtier"", etc. Images de contenu : decrire le sujet de l'image en lien avec l'article."	Developpeur


P3	Pages orphelines — 17+ pages dans le sitemap mais sans aucun lien interne pointant vers elles.	"Soit integrer ces pages dans la navigation ou le maillage interne du site, soit les retirer du sitemap et les mettre en noindex si elles n'ont pas de valeur SEO."	Developpeur
	/fr/offre-assurance-vehicule-de-loisirs — landing page promo sans lien interne
	/fr/avantage-AAPQ — landing page AAPQ isolee
	/fr/employe — landing page AAPQ isolee
	/fr/proprietaire — landing page AAPQ isolee
	/fr/travailleur-autonome — landing page AAPQ isolee
	/fr/concoursamvoq — page concours sans lien interne
	/fr/dommage-par-eau-en-6-etapes — doublon deja identifie
	/fr/actualites/dpa-assurances-tient-sa-premiere-collecte-de-sang — pas de lien depuis le site
	/fr/actualites/assurances-laplante-michon-inc-se-joint-a-dpa-assurances — pas de lien depuis le site
	/fr/actualites/dpa-assurances-recompense-les-benevoles-de-lacq — pas de lien depuis le site
	/fr/actualites/avis-de-nomination-chez-la-releve-de-dpa — pas de lien depuis le site
	/fr/actualites/7-mesures-pour-utiliser-le-propane-en-toute-securite — pas de lien depuis le site
	/fr/actualites/categorie/... (6 pages de categories d'actualites) — aucun lien interne


P3	Donnees structurees incompletes — seuls InsuranceAgency, Website, BreadcrumbList et Article sont en place.	"Ajouter LocalBusiness sur chaque page de bureau individuel avec adresse, telephone, horaires, coordonnees GPS. Completer le BreadcrumbList pour refleter la hierarchie complete du site. Enrichir l'Organization sur l'accueil avec adresse du siege social, zone desservie, LinkedIn. Ajouter FAQPage si du contenu de type questions/reponses existe sur le site."	Developpeur


P3	Page /fr/assurances-personnelles/ma-residence/travailleur-autonome-0 presente dans le sitemap alors qu'elle ne devrait pas y etre.	"Retirer cette page du sitemap. Si c'est un doublon de /travailleur-autonome, ajouter une redirection 301 ou un noindex."	Developpeur
	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/travailleur-autonome-0


P3	Pages hub manquantes pour assurances personnelles et assurances entreprises — pas de page de section principale.	"Creer ces deux pages hub avec : un contenu optimise presentant chaque categorie de produit, des liens vers toutes les sous-pages existantes, une balise canonical self-referencing. Les integrer dans le menu de navigation principal."	Developpeur + Audrey


=== PRIORITE 4 — RECOMMANDATIONS SUPPLEMENTAIRES (bonnes pratiques, pas urgent) ===


P4	Maillage interne faible — pas de cross-linking entre produits, blogue deconnecte des pages commerciales.	"Ajouter des liens contextuels entre les pages de services connexes (ex: auto > assistance routiere). Lier les articles de blogue pertinents aux pages de services correspondantes. Creer des CTA dans les articles de blogue vers les pages commerciales."	Audrey + Developpeur


P4	/fr/a-propos/notre-equipe retourne un 404 depuis au moins 2022.	"Recreer une page ""Notre equipe"" pour renforcer le E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) du site, particulierement pertinent dans le domaine de l'assurance. Ce n'est pas lie a la migration de janvier 2026."	Developpeur + Client



AUDIT SEO ON-SITE — GROUPE DPA ASSURANCES
Mars 2026 | groupedpa.com/fr | Auditrice : Audrey Begin

1. OPTIMISATION ON-PAGE — Titres, H1/H2, CTAs
1.1 Analyse des balises Title par page
Page
Title actuel
Problème
Title recommandé
/fr
DPA Assurances, votre partenaire courtier en assurances du Québec
Lisible, mais "partenaire" et "votre" prennent de l'espace sur des mots-clés
Courtier en assurances au Québec — Groupe DPA Assurances
/fr/assurances-personnelles/mon-auto
DPA Assurances: Protections Auto - Particuliers
Brand en premier, no geo, "Protections" ≠ terme recherché
Assurance auto Québec — Courtier DPA Assurances
/fr/assurances-personnelles/ma-residence/ma-maison
Ma Maison - Particuliers - DPA Assurances
Terme navigational pur, zéro signal sémantique
Assurance habitation propriétaire Québec — DPA Assurances
/fr/assurances-personnelles/ma-residence/mon-condo
Mon Condo - Particuliers - DPA Assurances
Même problème que ma-maison
Assurance condo Québec — DPA Assurances
/fr/assurances-personnelles/ma-residence/locataire
Assurance locataire - Assurance Habitation - DPA Assurances
✅ Meilleur title de la section résidence — répétition "Assurance Habitation"
Assurance locataire Québec — DPA Assurances
/fr/assurances-personnelles/ma-residence/travailleur-autonome
Travailleur Autonome - Particuliers - DPA Assurances
Critique : le mot "assurance" est absent du title et du H1
Assurance travailleur autonome Québec — DPA Assurances
/fr/assurances-personnelles/vehicules-de-loisirs
Assurance véhicules de loisirs – Particuliers – Groupe DPA
✅ Bon title. H1 sans "assurance"
Conserver. Corriger le H1 seulement
/fr/assurances-entreprises/assurances-commerciales
Assurances commerciales : Entreprises - DPA Assurances
✅ Correct
Conserver
/fr/assurances-entreprises/produits-specifiques/cybersecurite
Assurance Cybersécurité - DPA Assurances
✅ Modèle à reproduire sur tout le site
Conserver
/fr/reclamations/declarer-un-sinistre
Nouvelle demande - Réclamations - DPA Assurances
"Nouvelle demande" = texte d'interface UI, pas un intent de recherche
Déclarer un sinistre — Réclamations — DPA Assurances
/fr/assurances-entreprises/assurances-commerciales/entreprises-de-services
Assurance entreprise de service - DPA Assurances
Singulier/pluriel incohérent vs URL
Assurance entreprises de services Québec — DPA Assurances

Règle transversale identifiée : les pages résidence (ma-maison, mon-condo, travailleur-autonome) suivent un pattern de titre navigational issu du menu de navigation Drupal. C'est une correction de template unique qui corrige toute la section en une opération.

1.2 Analyse des H1 par page
Page
H1 actuel
Diagnostic
H1 recommandé
/fr
Groupe DPA - Votre partenaire en assurances
H1 réel vide (confirmé audit tech + Wayback Machine). H1 affiché = branding sans keyword
Courtier en assurances au Québec — DPA Assurances
/fr/assurances-personnelles/mon-auto
Automobile
Un seul mot. Zéro intention de recherche.
Assurance automobile au Québec
/fr/assurances-personnelles/ma-residence/ma-maison
Ma maison
Navigational pur
Assurance habitation pour propriétaires
/fr/assurances-personnelles/ma-residence/mon-condo
Mon Condo
Idem
Assurance copropriété (condo) au Québec
/fr/assurances-personnelles/ma-residence/locataire
Assurance Habitation pour Locataire
✅ Correct — keyword présent
Conserver
/fr/assurances-personnelles/ma-residence/travailleur-autonome
Travailleur Autonome
"assurance" absent — invisible sémantiquement
Assurance pour travailleur autonome à domicile
/fr/assurances-personnelles/vehicules-de-loisirs
Véhicules de loisirs
"assurance" absent
Assurance véhicules de loisirs au Québec
/fr/assurances-entreprises/assurances-commerciales
Assurances commerciales
✅ Acceptable
Conserver
/fr/assurances-entreprises/produits-specifiques/cybersecurite
Assurance Cybersécurité
✅ Référence du site
Conserver
/fr/reclamations/declarer-un-sinistre
Déclarer un sinistre
✅ Correct
Conserver

Pattern critique : sur les pages produits résidence et auto, les H1 sont des noms de produits marketing (Mon Condo, Ma Maison, Automobile) plutôt que des expressions que les utilisateurs recherchent sur Google. Ce n'est pas une nuance — c'est une perte directe de positionnement sur les requêtes commerciales.

1.3 Structure H2 — qualité de l'architecture sémantique
Pages avec H2 pertinents (signal positif)
/fr/assurances-entreprises/produits-specifiques/cybersecurite → H2 couvrent le problème, les stats, les protections, le contexte réglementaire ✅
/fr/assurances-entreprises/assurances-commerciales/entreprises-de-services → H2 par type de besoin (biens, RC, fraude, cyber) ✅
/fr/assurances-personnelles/ma-residence/ma-maison → H2 bien structurés par bénéfice
Pages avec H2 faibles ou génériques
/fr/assurances-personnelles/mon-auto → H2 "Prix, protection, service : un trio gagnant" = slogan, pas un signal sémantique
/fr/assurances-personnelles/ma-residence/travailleur-autonome → aucun H2 exploitant les questions de recherche réelles
/fr/reclamations/declarer-un-sinistre → H2 répété en double (Intact Assurance apparaît deux fois)
/fr (accueil) → aucun H2 éditorial, que des titres de section marketing
Opportunités immédiates sur les H2 :
Page
H2 à ajouter (basé sur les intentions de recherche)
/fr/assurances-personnelles/mon-auto
Qu'est-ce que couvre l'assurance auto au Québec ? / Comment est calculée votre prime auto ? / Pourquoi passer par un courtier plutôt que votre assureur ?
/fr/assurances-personnelles/ma-residence/ma-maison
Que couvre l'assurance habitation au Québec ? / Comment bien évaluer la valeur de votre maison ? / Dommages par l'eau : êtes-vous bien protégé ?
/fr/assurances-personnelles/ma-residence/travailleur-autonome
Pourquoi votre assurance habitation ne suffit-elle pas ? / Quels équipements sont couverts ? / Limites de revenus et de superficie — suis-je admissible ?


1.4 Analyse des CTAs
Problème transversal : les 3 CTAs principaux sont identiques sur chaque page du site :
Soumission en ligne
Parler à un courtier (1.888.225.6313)
Se connecter / Créer un profil
Ce pattern est fonctionnel mais manque totalement de personnalisation contextuelle. Un utilisateur sur la page Condo voit exactement les mêmes CTAs qu'un utilisateur sur la page Cybersécurité. Aucun CTA ne parle au contexte de la page.
Recommandations par type de page :
Type de page
CTA actuel
CTA recommandé
Pages résidence
Soumission en ligne
Obtenir ma soumission habitation
Page auto
Soumission en ligne
Comparer les assureurs auto
Travailleur autonome
Parler à un courtier
Vérifier si je suis admissible (question d'éligibilité = friction principale)
Réclamations
Faire une réclamation en ligne
✅ Correct — conserver
Articles de blogue
Aucun CTA contextuel
Ajouter CTA thématique lié au sujet de l'article (ex : article sur l'assurance condo → Obtenez une soumission condo)


2. ANALYSE DE CONTENU — Qualité, profondeur, angle éditorial
2.1 Évaluation par page produit
Page auto /fr/assurances-personnelles/mon-auto
Volume de contenu : faible à moyen — la page présente les produits (Pardon des accidents, Assistance routière, FADOQ LibreEspace) mais sans profondeur éditoriale
Angle éditorial : axé sur les caractéristiques produit ("protection bon dossier", "5% de rabais"), pas sur les bénéfices ni les situations de vie de l'utilisateur
Ce qui manque : aucune réponse aux questions de recherche réelles ("c'est quoi la franchise en assurance auto", "comment réduire ma prime", "quelle couverture choisir pour mon véhicule"), pas de FAQ, pas de section "Pourquoi DPA vs mon assureur"
Qualité relative : 4/10
Page ma-maison /fr/assurances-personnelles/ma-residence/ma-maison
Volume de contenu : moyen — mieux structuré que l'auto, mention de garanties spécifiques (2M$, vélos, collections, rénovations)
Angle éditorial : plus proche de la valeur client que l'auto
Ce qui manque : pas d'angle "dommages par eau" développé (alors qu'une page /fr/dommage-par-eau-en-6-etapes existe — lien interne manquant), pas de section sur les inondations/sinistres climatiques (sujet chaud au Québec), aucune FAQ
Qualité relative : 5/10
Page mon-condo /fr/assurances-personnelles/ma-residence/mon-condo
Volume de contenu : moyen — explique bien la distinction syndicat/copropriétaire
Angle éditorial : pédagogique, ce qui est approprié pour un produit peu connu
Ce qui manque : pas de mention des nouvelles réglementations québécoises sur l'assurance condo (Loi 16/141 sur les copropriétés divises — changement majeur de 2020-2022), opportunité éditoriale forte
Qualité relative : 5/10
Page travailleur-autonome /fr/assurances-personnelles/ma-residence/travailleur-autonome
Volume de contenu : faible — la page liste les critères d'admissibilité mais ne développe pas l'argumentaire
Angle éditorial : utilitaire/informatif, sans aspérité commerciale
Ce qui manque : contexte sur la croissance du travail autonome au Québec, réponse aux objections ("ma mise à jour d'assurance habitation ne couvre-t-elle vraiment pas mon bureau ?"), liste des équipements couverts avec exemples concrets, scénarios de sinistres
Point fort caché non exploité : critères d'admissibilité très précis (50% de la superficie, max 2 personnes, max 75 000$/an) — ce niveau de détail est rassurant mais est présenté comme une liste froide, sans accompagnement
Qualité relative : 3/10 — page la plus sous-optimisée du site
Page cybersécurité /fr/assurances-entreprises/produits-specifiques/cybersecurite
Volume de contenu : élevé — stats (1 entreprise sur 5 victime), contexte de risque, types de couvertures, appel à l'action du courtier
Angle éditorial : excellent — pédagogique et alarmiste au bon sens du terme, répond aux vraies questions des PME
Structure H2 : la meilleure du site — chaque section répond à une question implicite
Ce qui manque : exemples chiffrés de sinistres cyber au Québec, FAQ visible, mention LPRPDE/loi 25 (conformité québécoise — sujet ultra-pertinent pour les PME)
Qualité relative : 7/10 — référence interne à reproduire
Page assurances commerciales /fr/assurances-entreprises/assurances-commerciales
Volume de contenu : faible — page hub quasi-vide, 4 lignes de texte, liste de liens vers sous-pages
Ce qui manque : brief éditorial d'introduction qui explique pourquoi l'assurance commerciale est différente de l'assurance personnelle, qui sert de landing page pour les PME cherchant un courtier
Qualité relative : 2/10
Page réclamations /fr/reclamations/declarer-un-sinistre
Volume de contenu : très faible — page utilitaire
Angle éditorial : informatif minimal, listes de numéros d'assureurs
Ce qui manque : guide pas-à-pas pour déclarer un sinistre (quoi préparer, délais, quoi éviter de dire), contenu rassurant post-sinistre — le contexte émotionnel d'un utilisateur en sinistre nécessite du contenu de qualité, pas juste un numéro de téléphone
Qualité relative : 2/10

2.2 Contenu du blogue — qualité éditoriale
Article top-trafic EN : 7 sounds and noises in your house (/en/blog/...)
Contenu de qualité, bien structuré, format listicle avec valeur pratique
Problème confirmé : meta description en français sur une page anglaise — signal de confusion linguistique pour Google
Pas de lien interne vers une page produit habitation ou réclamation — opportunité de conversion manquée
Article 7 raisons de faire affaire avec un courtier (2020)
Bon article pilier mais daté (mai 2020) — le secteur des assurances au Québec a évolué
Opportunité de mise à jour éditoriale : ajouter des stats 2024-2025, intégrer les enjeux climatiques, les cyberrisques, l'assurance auto électrique
Aucun lien interne vers les pages produits correspondantes
Pattern général du blogue :
Articles souvent bien rédigés mais en silo — ils n'alimentent pas le maillage interne vers les pages produits commerciales
Absence de CTAs contextuels dans le corps des articles
Plusieurs articles datés de 2020-2021 sans mise à jour signalée

3. MAILLAGE INTERNE — Structure et siloing thématique
3.1 Architecture actuelle
/fr (accueil)
├── /assurances-personnelles/           ← 404 (hub manquant — critique)
│   ├── /mon-auto
│   │   ├── /assistance-routiere
│   │   └── /pardon-des-accidents
│   ├── /ma-residence/                  ← existe mais pas dans nav principale
│   │   ├── /ma-maison
│   │   ├── /mon-condo
│   │   ├── /locataire
│   │   ├── /proprietaire
│   │   ├── /travailleur-autonome       ← boucle canonique (audit tech)
│   │   └── /mon-logement
│   └── /vehicules-de-loisirs
│       ├── /ma-moto
│       ├── /mon-vtt
│       ├── /ma-motoneige
│       ├── /mon-bateau
│       └── /mon-motorise
├── /assurances-entreprises/            ← 404 (hub manquant — critique)
│   ├── /assurances-commerciales
│   │   ├── /entreprises-de-services
│   │   ├── /restauration-et-hotellerie
│   │   ├── /detaillant-grossiste
│   │   ├── /manufacturiers-industriel
│   │   ├── /transport
│   │   ├── /construction-cautionnement
│   │   ├── /ti-ing-logiciel
│   │   └── /entreprise-agricole
│   └── /produits-specifiques
│       ├── /cybersecurite
│       ├── /administrateurs-et-dirigeants
│       ├── /chantier
│       ├── /cautionnement
│       ├── /auto-commerciale
│       └── /biens-et-resp-civile
└── /a-propos/blogue/                   ← silo blog isolé du reste
3.2 Problèmes de maillage identifiés
Problème #1 — Les deux hubs principaux sont en 404 /fr/assurances-personnelles et /fr/assurances-entreprises retournent 404. Ces pages jouent un rôle double : recevoir le jus de lien descendant de l'accueil ET le redistribuer vers les sous-pages. Leur absence casse le siloing thématique et affaiblit l'autorité de toutes les pages produits.
Problème #2 — Le blogue est un silo mort Aucun article de blogue analysé ne contient de lien interne vers une page produit contextuelle. Ce contenu génère du trafic organique (l'article "7 sons" était la page #1 du site) mais ne convertit pas et ne transfère aucune autorité vers les pages commerciales. Exemples d'opportunités manquées :
Article
Page produit à lier
7 sons de la maison à ne pas ignorer
/ma-maison, /reclamations/declarer-un-sinistre
7 raisons de faire affaire avec un courtier
/nous-joindre, /assurances-personnelles/mon-auto
Assurance motoneige/quad : ce qu'il faut savoir
/vehicules-de-loisirs/ma-motoneige, /vehicules-de-loisirs/mon-vtt
Comment protéger vos biens des inondations
/ma-maison, /dommage-par-eau-en-6-etapes
Comment savoir si votre entreprise à domicile est couverte
/ma-residence/travailleur-autonome

Problème #3 — Les pages produits ne se lient pas entre elles La page /mon-auto ne mentionne pas l'assurance Synchro qui combine auto + habitation, sans lien vers /ma-maison. La page /ma-maison mentionne Synchro mais sans lien vers /mon-auto. Ce maillage croisé est une évidence sémantique et commerciale non exploitée.
Problème #4 — La page /dommage-par-eau-en-6-etapes est orpheline Cette page est dans le sitemap mais n'est liée depuis aucune page produit résidence analysée. Une page de ce type devrait être liée systématiquement depuis /ma-maison, /mon-condo, et idéalement depuis les articles de blogue sur les inondations.
Problème #5 — Les pages sous-bureaux ne remontent pas vers /nos-bureaux Les 4 pages individuelles des succursales (Roxton Pond, Saint-Hyacinthe, Drummondville, Brossard) existent mais ne forment pas un silo local cohérent.
3.3 Plan de maillage recommandé
Niveau 1 — À faire en priorité (impact immédiat)
Créer les pages hub /assurances-personnelles et /assurances-entreprises (déjà en Action 4 de l'audit tech) avec des liens vers toutes leurs sous-pages
Ajouter systématiquement dans chaque article de blogue un CTA contextuel + 1-2 liens internes vers la page produit la plus pertinente
Niveau 2 — Maillage croisé produits
/mon-auto ↔ /ma-maison via la section Synchro (lien bidirectionnel)
/ma-maison → /dommage-par-eau-en-6-etapes (lien éditorial dans la section eau)
/travailleur-autonome → /assurances-entreprises/assurances-commerciales/entreprises-de-services (pour les cas dépassant les critères d'admissibilité résidentielle)
/vehicules-de-loisirs → chaque sous-page véhicule (déjà partiellement fait, à vérifier)
Niveau 3 — Renforcement du silo local
/nos-bureaux → liens vers chaque page de succursale
Chaque page succursale → retour vers /nos-bureaux + lien vers /nous-joindre

4. ANALYSE SÉMANTIQUE — Couverture des intentions de recherche
4.1 Intentions non couvertes par les pages existantes
Secteur assurances personnelles
Requête probable
Volume est.
Page existante
Couverture actuelle
courtier assurance Québec
Élevé
/fr
Faible — H1 générique
assurance auto Québec
Élevé
/mon-auto
Faible — H1 = "Automobile"
meilleure assurance auto Québec
Élevé
Aucune
❌ Gap total
assurance habitation Québec prix
Élevé
/ma-maison
Faible
assurance condo Québec
Moyen
/mon-condo
Moyen
assurance locataire Québec
Moyen
/locataire
✅ Correct
assurance travailleur autonome Québec
Moyen
/travailleur-autonome
Faible — "assurance" absent du title/H1
assurance moto Québec
Moyen
/vehicules-de-loisirs/ma-moto
À vérifier
assurance motoneige Québec
Moyen
/vehicules-de-loisirs/ma-motoneige
À vérifier
courtier assurance Saint-Hyacinthe
Local
/nos-bureaux
Faible — pas de Schema
courtier assurance Drummondville
Local
Page succursale
À vérifier

Secteur assurances entreprises
Requête probable
Volume est.
Page existante
Couverture actuelle
assurance entreprise Québec
Élevé
/assurances-commerciales
Faible — page hub vide
assurance cybersécurité PME Québec
Moyen
/cybersecurite
✅ Bon
assurance responsabilité professionnelle
Moyen
/entreprises-de-services
Moyen
assurance construction Québec
Moyen
/construction-cautionnement
Non analysé
assurance restaurant Québec
Faible-Moyen
/restauration-et-hotellerie
Non analysé

4.2 Gaps de contenu prioritaires
Gap #1 — Page "Pourquoi choisir un courtier" (requête pilier) La requête "courtier d'assurance vs assureur direct" ou "pourquoi choisir un courtier" est une intention de recherche transversale à tout le site. L'article de blogue "7 raisons de faire affaire avec un courtier" existe mais :
Il date de 2020
Il n'est pas lié depuis la page d'accueil
Il n'est pas en position de landing page
Recommandation : transformer cet article en page pilier rafraîchie ou créer une page dédiée /fr/pourquoi-un-courtier
Gap #2 — Contenu local par ville/région DPA a des bureaux à Saint-Hyacinthe, Drummondville, Brossard et Roxton Pond. Aucune page produit ne cible géographiquement ces marchés. Les requêtes "assurance auto Saint-Hyacinthe", "courtier assurance Drummondville" etc. sont atteignables avec des pages locales dédiées ou des mentions géographiques dans les pages existantes.
Gap #3 — Contenu sur les sinistres climatiques (sujet d'actualité au Québec) Le Québec a connu des événements climatiques importants (inondations, verglas, tornades). La concurrence couvre ces sujets avec du contenu sur "suis-je couvert en cas d'inondation", "assurance dommages par eau", "que faire après un sinistre climatique". DPA a une page /dommage-par-eau-en-6-etapes orpheline mais aucune stratégie de contenu autour du risque climatique.
Gap #4 — Comparaison d'assureurs (contenu transactionnel) Des pages de type "Intact vs Promutuel" ou "comment comparer ses assurances" génèrent du trafic en milieu d'entonnoir pour les courtiers. DPA mentionne ses 5 assureurs partenaires mais ne crée aucun contenu comparatif — une opportunité de se positionner comme autorité objective.
Gap #5 — Assurance véhicule électrique Le marché québécois des VE explose (incitatifs gouvernementaux, Roulez Vert). Aucune page ou article sur "assurance voiture électrique Québec" n'existe sur le site. C'est un gap sémantique avec une demande croissante et une concurrence encore faible au niveau des courtiers.

5. RÉCAPITULATIF — 22 recommandations on-site
#
Recommandation
Catégorie
Priorité
Effort
1
Corriger le H1 réel de la page d'accueil (vide — bug template)
On-page
Critique
Faible
2
Réécrire les H1 des pages produits résidence et auto (termes navigationnels → keywords)
On-page
Élevée
Faible (template)
3
Réécrire les balises Title des pages résidence (pattern navigational → keyword + geo)
On-page
Élevée
Faible (template)
4
Ajouter "assurance" au title et H1 de /travailleur-autonome
On-page
Élevée
Très faible
5
Corriger le title de /reclamations/declarer-un-sinistre ("Nouvelle demande" → titre éditorial)
On-page
Élevée
Très faible
6
Corriger la meta description EN de l'article "7 sounds" (en français sur page anglaise)
Métadonnées
Élevée
Très faible
7
Enrichir le contenu de la page /travailleur-autonome — page la plus sous-optimisée
Contenu
Élevée
Moyen
8
Ajouter FAQ structurée sur les pages auto, maison, condo
Contenu + Schema
Élevée
Moyen
9
Enrichir la page hub /assurances-commerciales (actuellement quasi-vide)
Contenu
Élevée
Moyen
10
Ajouter des H2 orientés questions de recherche sur les pages auto et ma-maison
On-page
Élevée
Faible
11
Personnaliser les CTAs par contexte de page (soumission générique → soumission spécifique)
CTA
Élevée
Moyen
12
Ajouter 1-2 liens internes contextuels dans chaque article de blogue vers les pages produits
Maillage interne
Élevée
Faible (éditorial)
13
Lier /ma-maison ↔ /mon-auto via la section Synchro (maillage croisé)
Maillage interne
Élevée
Très faible
14
Lier /ma-maison et /mon-condo → /dommage-par-eau-en-6-etapes
Maillage interne
Élevée
Très faible
15
Lier /travailleur-autonome → /assurances-commerciales/entreprises-de-services
Maillage interne
Moyenne
Très faible
16
Créer ou remettre à jour l'article pilier "Pourquoi choisir un courtier" (2020 → 2026)
Contenu
Moyenne
Moyen
17
Ajouter contenu géographique sur les pages produits ou créer des landing pages locales (Saint-Hyacinthe, Drummondville, Brossard)
Contenu local
Moyenne
Élevé
18
Créer du contenu sur les sinistres climatiques et inondations (sujet d'actualité Québec)
Gap contenu
Moyenne
Moyen
19
Ajouter du contenu sur la loi 25 / LPRPDE sur la page cybersécurité
Contenu
Moyenne
Faible
20
Mentionner les changements réglementaires sur la copropriété (Loi 16/141) sur la page condo
Contenu
Moyenne
Faible
21
Créer une page ou un article sur l'assurance véhicule électrique au Québec
Gap contenu
Basse
Moyen
22
Ajouter des CTAs contextuels dans le corps des articles de blogue (pas seulement en sidebar)
CTA
Basse
Faible


Note finale : la page /cybersecurite est la référence on-site du site — structure H2 par besoin, contenu dense avec stats, périmètre de couverture clair, CTA intégré naturellement. C'est le modèle de rédaction à appliquer à l'ensemble des pages produits, en priorité les pages résidence et auto qui concentrent le plus de trafic potentiel perdu.

Veux-tu que je développe un ou plusieurs des points en profondeur — par exemple les nouvelles balises Title/H1 recommandées sous forme de tableau Excel exportable, ou un brief de réécriture pour la page travailleur autonome ?
Ce que ça change pour l'audit on-site
Ces observations complètent et renforcent deux points déjà soulevés :
Gap identifié
Source
Absence de page auto + habitation
Gestionnaire campagne ✅ + Search terms ✅ + Mon analyse (Synchro non exploité) ✅
Syndicat de copropriété
Gestionnaire campagne ✅ + Search terms (faible) ✅
Pages commerciales par niche spécifique
Gestionnaire campagne ✅ — à valider en organique













































J'ai toutes les données. Je compile le gap analysis complet maintenant.

ANALYSE DES GAPS DE CONTENU — GROUPE DPA VS CONCURRENTS
Concurrents analysés : Fort Assurances · ESSOR Assurances · Assurancia · AssurExperts · Intergroupe**

1. GAPS ASSURANCES PERSONNELLES
1.1 Pages produits présentes chez les concurrents, absentes chez DPA
Page / Niche
Fort
ESSOR
Assurancia
Intergroupe
DPA
Priorité
Auto + Habitation combinée (page dédiée bundle)
✅
✅
✅
✅
❌
🔴 Haute
Résidence secondaire / chalet
✅
—
—
—
❌
🔴 Haute
Immeuble à revenus / proprio non occupant
—
✅
✅
—
❌
🔴 Haute
Assurance maison de haute valeur (page active)
✅
—
✅
—
⚠️ URL morte
🔴 Haute
Véhicule antique / de collection
—
—
✅
—
❌
🟡 Moyenne
Véhicule non standard / dossier difficile
—
—
✅
—
❌
🟡 Moyenne
Assurance voyage
✅
—
—
—
❌
🟡 Moyenne
Maison mobile / centenaire
—
—
✅
—
❌
🟡 Moyenne
Protection d'identité
—
—
✅
—
❌
🟡 Moyenne
Garantie juridique / frais juridiques
—
—
✅
—
✅ (existe)
⚠️ Vérifier
Assurance vélo
✅ (blogue)
—
—
—
❌
🟢 Faible
Assurance voyage
✅
—
—
—
❌
🟡 Moyenne

Observations clés :
Bundle auto+habitation : les 4 concurrents ont une page dédiée. DPA mentionne l'offre Synchro en passant sur deux pages séparées. C'est le gap commercial le plus coûteux — validé par les search terms et observé par le gestionnaire de campagne.


Résidence secondaire / chalet : Fort Assurances a même un article de blogue "7 questions-réponses sur l'assurance chalet" en plus de la page produit. Les search terms montrent "assurance chalet" et "assurance chalet locatif" — requêtes non couvertes par DPA.


Immeuble à revenus : Assurancia et ESSOR couvrent les propriétaires qui louent leur bien. DPA a une page /proprietaire dans le sitemap mais elle n'est pas analysée et son positionnement est incertain. Les search terms montrent "assurance propriétaire non occupant" et "assurance habitation commerciale".


Haute valeur : DPA avait une page /fr/particuliers/haute-valeur — encore live selon l'audit technique mais sur l'ancienne URL, orpheline et non migrée. Fort et Assurancia ont toutes deux une page active et bien positionnée sur ce segment premium.



2. GAPS ASSURANCES ENTREPRISES
2.1 Niches présentes chez les concurrents, absentes chez DPA
Page / Niche
Fort
ESSOR
Assurancia
DPA
Priorité
Syndicat de copropriété (page dédiée)
✅
—
✅
❌
🔴 Haute
Travailleur autonome commercial (RC, erreurs/omissions, perte exploit.)
✅
—
—
❌
🔴 Haute
Immeuble à revenus / immobilier
✅
✅
✅
❌
🔴 Haute
Responsabilité professionnelle (page dédiée)
✅
✅
✅
❌
🔴 Haute
Régimes collectifs / avantages sociaux
✅
✅
✅
❌
🔴 Haute
Garage automobile
✅
—
—
❌
🟡 Moyenne
Commerce de détail / détaillant
✅
—
✅
✅
⚠️ DPA a la page
Assurance taxi / véhicule de transport
—
—
—
❌
🟡 Moyenne
Esthétique / soins personnels
—
—
—
❌
🟡 Moyenne
Remorquage
—
✅
—
❌
🟡 Moyenne
Société privée d'investissement
✅
—
—
❌
🟢 Faible
Aviation
✅
—
—
❌
🟢 Faible

Observations clés :
Syndicat de copropriété : Fort Assurances a une page dédiée très complète — H2 par type de couverture (RC syndicat, RC administrateurs, biens du syndicat, inondations, tremblement de terre). C'est un produit entièrement différent de l'assurance condo individuelle. Les search terms confirment la demande : "assurances syndicat copropriété", "assurance condo syndicat", "fonds d'auto assurance condo". C'est le gap commercial le plus qualifié côté entreprises.


Travailleur autonome commercial vs résidentiel : DPA a une page résidence pour travailleur autonome à domicile (max 75K$/an, max 50% superficie). Fort Assurances a une page travailleur autonome commercial distincte — responsabilité civile, responsabilité professionnelle, perte d'exploitation, véhicules commerciaux. Ce sont deux produits différents ciblant deux segments différents. DPA ne couvre que l'un des deux.


Responsabilité professionnelle : Absente de DPA. Fort Assurances en a fait une niche — avec même un programme exclusif pour l'Ordre des psychologues du Québec (OPQ). ESSOR et Assurancia la couvrent aussi. C'est une requête à fort panier moyen ("assurance responsabilité professionnelle Québec").


Régimes collectifs / avantages sociaux : Fort, ESSOR et Assurancia offrent tous des assurances collectives et régimes de retraite. DPA n'a aucune offre visible dans ce segment. C'est une décision stratégique, mais si DPA sert des PME, la question "offrez-vous des assurances collectives ?" se pose — et si la réponse est non, une page d'explication ou de redirection partenaire serait utile.


Immeuble à revenus : Les trois concurrents principaux couvrent cette niche (propriétaire qui loue maison, condo, triplex, immeuble multi). DPA a une page /proprietaire dans le sitemap mais son contenu et son positionnement sont non confirmés. Les search terms montrent "assurance triplex prix", "assurance multi logement", "assurance propriétaire non occupant".



3. GAPS CONTENU ÉDITORIAL / BLOGUE
3.1 Sujets couverts par la concurrence, absents du blogue DPA
Sujet éditorial
Fort
ESSOR
Assurancia
DPA
Potentiel SEO
Assurance chalet / résidence secondaire
✅ (article + page)
—
—
❌
🔴 Fort
Loi 16/141 — assurance copropriété au Québec
—
—
—
❌
🔴 Fort
Assurance véhicule électrique / hybride
—
—
—
❌
🔴 Fort (croissant)
Assurance avec dossier difficile / résilié
—
—
✅
❌
🔴 Fort (search terms)
Comparatif assureurs auto Québec
—
—
—
❌
🔴 Fort
Loi 25 / protection des données PME
—
—
—
❌
🟡 Moyen
Assurance vélo
✅
—
—
❌
🟡 Moyen
Assurance uber / covoiturage
—
—
—
❌
🟡 Moyen (search terms)
Sinistres climatiques — suis-je couvert ?
—
—
—
Partiel
🟡 Moyen
Assurance maison centenaire / ancienne
—
—
—
❌
🟡 Moyen (search terms)
Guide achat première maison + assurance
—
—
—
❌
🟡 Moyen
Assurance maison mobile Québec
—
—
—
❌
🟡 Moyen (search terms)

Observations clés :
Assurance avec dossier difficile : Assurancia a du contenu et des pages produits pour "assurance en difficulté". Les search terms DPA montrent "assurance auto mauvais dossier", "assurance auto qui accepte tout le monde", "assurance auto avec dossier criminel", "assurance pour personne non assurable", "assurance auto mauvais payeur", "assurance habitation cas difficile", "assurance habitation avec dossier criminel". C'est un volume significatif de requêtes transactionnelles que DPA n'adresse nulle part sur son site.


Assurance chalet / résidence secondaire : Fort Assurances a à la fois une page produit ET un article de blogue "7 questions-réponses sur l'assurance chalet". DPA n'a rien. Les search terms montrent "assurance chalet" et "assurance chalet locatif". C'est un produit naturellement complémentaire à l'assurance maison — opportunité de maillage interne forte.


Assurance véhicule électrique : Aucun concurrent ne couvre encore ce sujet sérieusement — c'est une fenêtre d'opportunité pour DPA d'être le premier courtier québécois bien positionné sur "assurance voiture électrique Québec", "assurance Tesla Québec", etc. Le volume est encore modeste mais croît avec les incitatifs gouvernementaux.


Comparatif assureurs : Les sites de comparaison (Panda7, SoumissionsAssurances, hellosafe) captent une partie du trafic informatif haut de funnel. DPA, en tant que courtier avec 5+ assureurs, est légitime pour produire du contenu comparatif neutre — ce que les assureurs directs ne peuvent pas faire.



4. GAPS PAGES LOCALES / RÉGIONALES
Type de contenu local
Fort
ESSOR
Assurancia
AssurExperts
DPA
Pages succursales avec contenu SEO
—
✅
✅
✅
⚠️ Minimal
Pages par région géographique
—
—
—
✅ (17 régions)
❌
Mots-clés géo dans les titres de pages produits
—
✅
✅
✅
❌

AssurExperts a des pages par territoire (Montréal, Québec, Laurentides, Estrie, Montérégie…). ESSOR a 25+ succursales avec pages dédiées. DPA a 4 bureaux mais leurs pages sont quasi-vides en contenu SEO — et aucune page produit ne cible géographiquement la Montérégie ou l'Estrie.
Les search terms montrent des requêtes géo-ciblées actives : "assurance auto Drummondville", "assurance auto Saint-Hyacinthe", "assurance habitation estrie", "assurance habitation longueuil" — requêtes où DPA devrait naturellement dominer localement.

5. SYNTHÈSE PRIORISÉE — 18 gaps à adresser
#
Gap
Impact commercial
Validé par search terms
Effort
1
Page dédiée auto + habitation (bundle Synchro)
🔴 Très élevé
✅ Oui — fort volume
Faible
2
Assurance syndicat de copropriété
🔴 Élevé
✅ Oui
Moyen
3
Travailleur autonome commercial (RC, resp. prof., perte exploit.)
🔴 Élevé
Partiel
Moyen
4
Immeuble à revenus / propriétaire non occupant
🔴 Élevé
✅ Oui
Moyen
5
Responsabilité professionnelle (page dédiée)
🔴 Élevé
À valider Semrush
Moyen
6
Assurance dossier difficile (auto + habitation)
🔴 Élevé
✅ Oui — fort volume
Moyen
7
Résidence secondaire / chalet
🟡 Moyen-élevé
✅ Partiel
Faible
8
Haute valeur (migrer/réactiver la page existante)
🟡 Moyen-élevé
—
Très faible
9
Pages locales optimisées par ville (Drummondville, St-Hyacinthe, Brossard)
🟡 Moyen
✅ Oui
Moyen
10
Assurance véhicule électrique (contenu pionnier)
🟡 Moyen
✅ Partiel
Faible
11
Contenus comparatifs assureurs (positionnement courtier neutre)
🟡 Moyen
✅ Oui
Moyen
12
Guide assurance chalet / résidence secondaire (blogue)
🟡 Moyen
✅ Partiel
Faible
13
Assurance taxi / Uber (niche commerciale)
🟡 Moyen
✅ Oui
Faible
14
Loi 16/141 — impact sur assurance condo et syndicats
🟡 Moyen
À valider
Faible
15
Loi 25 / données personnelles PME
🟡 Moyen
À valider
Faible
16
Régimes collectifs / avantages sociaux
🟡 Moyen
—
Élevé
17
Assurance maison centenaire / maison mobile
🟢 Faible-moyen
✅ Partiel
Faible
18
Assurance esthétique / salon
🟢 Faible
Non confirmé
Faible


Bottom line : les concurrents couvrent en moyenne 40 à 60 % de niches supplémentaires vs DPA, principalement dans trois zones : le bundle auto+habitation, les segments commerciaux spécialisés (syndicat condo, responsabilité pro, immeuble à revenus), et les dossiers difficiles. Ces trois zones concentrent aussi les requêtes les plus transactionnelles des search terms.
Veux-tu qu'on priorise ensemble lesquels intégrer dans le plan de contenu trimestriel, ou on passe directement à la production des briefs de rédaction pour les gaps #1, #2 et #6 ?
Sources:
ESSOR Assurances
Fort Assurances
AssurExperts
Assurancia
Intergroupe Assurances








Ces données changent beaucoup de choses. Je vais les analyser en profondeur.

ANALYSE GSC — INSIGHTS CLÉS POUR L'AUDIT ON-SITE

1. LA RÉVÉLATION PRINCIPALE — Répartition réelle du trafic
Avant tout, voici la réalité du trafic organique de DPA en chiffres bruts :
Source de trafic
Clics
% du total estimé
Article EN "7 sounds" (/en/blog/...)
4 396
~52%
Requêtes de marque (dpa assurance, dpa...)
~2 400
~28%
Toutes les pages produits commerciales FR
~200
~2%
Reste (bureaux, carrière, histoire, blogue)
~1 400
~18%

La conclusion est brutale : les pages produits qui génèrent le chiffre d'affaires de DPA représentent environ 2% du trafic organique total. Le site vit quasi-exclusivement sur un article informatif anglophone sans intention d'achat et sur des recherches de marque.

2. L'ARTICLE "7 SOUNDS" — Trafic massif, valeur commerciale nulle
Métrique
Valeur
Interprétation
Impressions
485 490
Portée mondiale
Clics
4 396
0,91% CTR
CTR attendu à position 3,8
~8–12%
Le CTR réel est 10x trop bas
Requêtes générées
100% informationnelles
Aucune intention d'assurance

Pourquoi le CTR est-il à 0,91% à position 3,8 ? Les requêtes qui font ranker cet article ("vibrating humming noise in house", "buzzing noise in wall", "noises in walls at night") sont ultra-informationnelles. Google affiche des Featured Snippets, des People Also Ask, des images — les résultats organiques sont noyés. Et surtout, le trafic généré vient de 15+ pays différents (néerlandais, russe, espagnol, polonais, allemand, indonésien) — ce n'est pas un public québécois cherchant une assurance.
Ce que ça change pour l'audit on-site :
L'article "7 sons de la maison" EN est la vraie page #1 du site — mais elle ne convertit probablement jamais
La chute de -57% post-migration sur cette page explique une grande partie de la chute de trafic global, mais c'est du trafic non commercial perdu
Ajouter un CTA contextuel dans cet article (ex: "Votre maison fait des bruits inquiétants? Votre assurance habitation vous couvre-t-elle?") est la seule manière d'extraire de la valeur commerciale de ces 485K impressions

3. PAGES PRODUITS — Invisibilité organique confirmée et chiffrée
Page produit
Clics
Impressions
Position
CTR
Diagnostic
/fr/assurances-personnelles/mon-auto
9
4 642
6,38
0,19%
🔴 Catastrophique
/fr/assurances-personnelles/vehicules-de-loisirs
5
2 348
37,51
0,21%
🔴 Page 4
/fr/assurances-personnelles/vehicules-de-loisirs/ma-motoneige
16
2 610
24,81
0,61%
🔴 Page 2+
/fr/assurances-entreprises/assurances-commerciales/entreprise-agricole
16
5 638
10,29
0,28%
🟡 Position 10, CTR catastrophique
/fr/assurances-entreprises/produits-specifiques/cautionnement
19
3 736
18,88
0,51%
🔴 Page 2
/fr/assurances-entreprises/assurances-commerciales/ti-ing-logiciel
9
3 342
8,85
0,27%
🟡 Position 9, CTR catastrophique
/fr/assurances-personnelles/mon-auto/assistance-routiere
25
6 733
15,15
0,37%
🟡 Page 2
/fr/assurances-entreprises/produits-specifiques/cybersecurite
3
2 062
16,54
0,15%
🔴 Page 2
/fr/assurances-personnelles/ma-residence/ma-maison
0
160
20,02
0%
🔴 Invisible
/fr/assurances-personnelles/ma-residence/mon-condo
0
193
15,40
0%
🔴 Invisible
/fr/assurances-personnelles/ma-residence/travailleur-autonome
0
800
19,56
0%
🔴 Invisible
/fr/assurances-entreprises/assurances-commerciales (hub)
0
365
28,86
0%
🔴 Invisible

Ce que ça dit : aucune page produit commerciale ne génère un trafic organique significatif. La migration a détruit le positionnement acquis, et les nouvelles URLs n'ont pas encore récupéré l'autorité.

4. ANCIENNES URLs — Encore mieux rankées que les nouvelles
C'est la preuve directe de l'impact de la migration :
Ancienne URL (pré-migration)
Clics
Impressions
Position
/fr/particuliers/habitation/assurance-des-frais-juridiques
38
2 925
13,19
/fr/offre-assurance-auto
40
13 557
10,48
/fr/particuliers/habitation/proprietaire
10
6 426
15,60
/fr/particuliers/haute-valeur
8
1 388
13,94
/fr/particuliers/habitation/travailleur-autonome
2
1 239
22,13

Plusieurs anciennes URLs rankent encore mieux que leurs équivalents post-migration. L'autorité SEO est restée sur les anciennes URLs faute de redirections 301 — exactement ce que l'audit technique a documenté. C'est la confirmation chiffrée que les redirections manquantes coûtent des clics aujourd'hui.

5. QUICK WINS — Pages en position 6–15 avec CTR catastrophique
Ces pages ont du positionnement mais ne convertissent pas en clics. Une réécriture du title + meta description peut générer des gains immédiats sans changer le contenu :
Requête / Page
Impressions
Position
CTR actuel
CTR attendu
Clics manquants
assurance auto drummondville → /fr/offre-assurance-auto ou bureau
792
9,33
0%
~3%
~24 clics/mois
assurance entreprise longueuil
1 309
5,64
0%
~6%
~79 clics/mois
assurance entreprise saint-hubert
1 253
5,24
0%
~6%
~75 clics/mois
assurance sinistre drummondville
2 258
7,04
0%
~3%
~68 clics/mois
assurance sinistre saint-hyacinthe
955
1,95
0%
~18%
~172 clics/mois
/fr/assurances-entreprises/assurances-commerciales/entreprise-agricole
5 638
10,29
0,28%
~2%
~85 clics/mois
/fr/assurances-entreprises/assurances-commerciales/ti-ing-logiciel
3 342
8,85
0,27%
~3%
~72 clics/mois
/fr/assurances-personnelles/mon-auto/assistance-routiere
6 733
15,15
0,37%
~1%
~42 clics/mois

⚠️ Cas particulier — "assurance sinistre saint-hyacinthe" : position 1,95 avec 955 impressions et 0 clic. Une page ranke quasiment en #1 sur cette requête mais ne génère aucun clic. Deux hypothèses : la page qui ranke est en 404/redirect post-migration (ancienne URL), ou le title affiché dans Google est le title UI "Nouvelle demande" confirmé dans l'audit technique — ce qui explique pourquoi personne ne clique.

6. REQUÊTES COMMERCIALES AVEC IMPRESSIONS — Aucune page optimisée
Ces requêtes prouvent l'existence d'une demande organique que DPA ne capte pas :
Requête
Impressions
Position actuelle
Page DPA
Verdict
assurance travailleur autonome
524
22,94
/ma-residence/travailleur-autonome
Page existe, invisible (0 clics)
assurance pour travailleur autonome
446
23,93
idem
Idem
assurance responsabilité professionnelle travailleur autonome
127
24,57
Aucune
❌ Gap confirmé
assurance cybersécurité
570
20,80
/cybersecurite
Page existe, invisible
assurance cyberrisque
98
89,30
Idem
Page 9
assurance moto
545
24,98
/ma-moto
Page 2-3
assurance quad
251
19,73
/mon-vtt
Page 2
courtier assurance auto
287
31,41
/mon-auto
Page 3-4
courtier assurance habitation
332
34,66
/ma-maison
Page 3-4
assurance habitation drummondville
268
29,88
Aucune page locale
❌ Gap local
assurance habitation longueuil
380
17,83
Aucune page locale
❌ Gap local
assurance habitation saint-hyacinthe
348
31,68
Aucune page locale
❌ Gap local
assurance entreprise longueuil
1 309
5,64
Aucune page locale
❌ Gap local majeur
assurance auto drummondville
792
9,33
Aucune page locale
❌ Gap local
assurance hôtellerie
394
17,77
/restauration-et-hotellerie
Page 2
assistance routière
744
29,89
/assistance-routiere
Page 3
courtier assurance
619
29,68
/fr
Page 3
courtier en assurance
130
39,60
/fr
Page 4
courtier assurance auto et habitation
48
30,46
Aucune page dédiée
❌ Gap bundle confirmé


7. CE QUE LES DONNÉES GSC CHANGENT DANS L'AUDIT
Confirmations chiffrées de l'audit on-site
Observation audit
Confirmation GSC
Pages produits avec H1/Title faibles
Confirmé — CTR 0,19–0,28% sur des positions 6–10
Migration a détruit le positionnement
Confirmé — anciennes URLs rankent encore mieux
Page travailleur-autonome sous-optimisée
Confirmé — 800 impressions, 0 clic, position 19
Gap auto+habitation
Confirmé — 0 page, requête visible
Gap pages locales
Confirmé — Drummondville, Longueuil, Saint-Hyacinthe ont du volume

Nouveaux insights apportés par le GSC
La vraie cause de la chute de trafic : perte de l'article EN (-57%) + quasi-absence de trafic sur les pages produits. La migration a cassé un site qui ne générait déjà presque pas de trafic commercial.


L'article "7 sounds" est un actif piégé : 485K impressions d'un public non-commercial international. Il faut décider si on cherche à le monétiser (CTA habitation?) ou si on accepte qu'il soit un actif de notoriété sans ROI direct.


"assurance sinistre [ville]" est le gap local le plus urgent : Position 1,95 sur "assurance sinistre saint-hyacinthe" avec 955 impressions et 0 clic — c'est du trafic hautement qualifié (personne en sinistre) qui arrive sur une page cassée. C'est de la conversion perdue aujourd'hui.


La page /fr/assurances-entreprises/assurances-commerciales/entreprise-agricole est la meilleure page produit avec 16 clics et 5,638 impressions — c'est cohérent avec l'ADN historique de DPA (fondé en 1948 sur l'assurance agricole).



Veux-tu qu'on priorise maintenant un plan d'action on-site consolidé qui intègre l'audit technique + l'audit on-site + les données GSC en une seule liste d'actions classées par impact ROI ?
