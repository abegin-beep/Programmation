Situation:
																					
	Chute de trafic organique : -46,6%																				
	Fevrier 2025 : ~784 sessions  |  Fevrier 2026 : ~419 sessions																				
	Cause principale identifiee : migration serveur de janvier 2026 — incomplete sur le plan technique																				
																					
																					
	Redirections brisées           → perte immédiate et structurelle																				
	Abandon /en/ sans redirections → perte de pages avec historique																				
	Bugs on-page migration         → affaiblissement des signaux SEO																				
																					
	La priorité absolue reste la table des redirections. C'est le seul élément qui peut expliquer une chute aussi verticale (-46,6% en un point de rupture net au 7 janvier 2026). Les autres problèmes aggravent la situation mais n'en sont pas la cause principale.																					
																					
																					
Audit technique			
Priorités	Problèmes 	Solutions	Intervenant
	Est-ce intentionnel ? Le client a-t-il volontairement retiré la version anglaise lors de la migration de janvier 2026 ?	oui	
			
P1	Redirections brisees : beaucoup de 301 qui menent au mauvais endroit ou sont cassees, causant une perte de trafic directe.	Demander la table des redirections de l'ancien site a l'agence (demande formelle). Obtenir la liste des redirections actives, corriger celles qui pointent au mauvais endroit, et renvoyer la liste mise a jour a l'agence.	Audrey + Agence
			
			
P1	Article ""7 sons et bruits de la maison"" est en noindex/nofollow — cet article performait bien avant la migration.	Changer les balises robots en index, follow sur cette page : https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/7-sons-et-bruits-de-la-maison-a-ne-pas-ignorer Demander une reindexation via GSC une fois corrige.	Developpeur
	https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/7-sons-et-bruits-de-la-maison-a-ne-pas-ignorer		
			
			
P1	Sitemap non mis a jour depuis decembre 2025 — contient des pages en 404, noindex, /node/ et /en/.	Regenerer le sitemap. Retirer les URLs /en/ si la version anglaise est abandonnee. S'assurer qu'aucune URL en noindex ou 404 n'est incluse. Verifier dans GSC > Sitemaps que le sitemap est bien soumis et sans erreurs.	Developpeur
			
			
P1	Pages non pertinentes dans le sitemap — pages /node/, pages de remerciement, pages de redirection.	Retirer ces pages du sitemap et ajouter une balise noindex sur chacune. Si le contenu n'a aucune utilite, envisager une redirection 301 vers une page pertinente.	Developpeur
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
			
			
P1	Canonical contradictoire sur la page carrieres — la 301 dit "va la-bas" mais la canonical dit "reviens ici". La page a perdu 100% de ses impressions (685 > 0).	Corriger la balise canonical de la page de destination pour qu'elle soit self-referencing : <link rel="canonical" href="https://www.groupedpa.com/fr/carrieres/courtierere-assurance-des-particuliers-ventes-academie-intact" /> Corriger la typo "courtierere" dans le slug si ce n'est pas intentionnel. Mettre a jour les hreflang et x-default en consequence. Demander une reindexation via GSC une fois corrige.	Developpeur
	URL source : /fr/carrieres/courtier-assurance-des-particuliers-ventes-0		
	URL destination : /fr/carrieres/courtierere-assurance-des-particuliers-ventes-academie-intact		
			
			
P1	Pages /en/ encore dans le sitemap alors que la version anglaise semble abandonnee — Google continue de les crawler inutilement.	Rediriger chaque URL /en/ en 301 vers son equivalent /fr/, puis retirer toutes les URLs /en/ du sitemap.	Developpeur
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
	https://www.groupedpa.com/en/amvoqcontest 		
	https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-your-house-you-shouldnt-ignore 		
	https://www.groupedpa.com/en/a-propos/nos-bureaux 		
	https://www.groupedpa.com/en/a-propos/nous-joindre 		
			
			
			
P2	URLs anglaises de l'article 7 sons et bruits genere en 404 — variantes d'URL generees automatiquement par Drupal.	Identifier l'URL anglaise qui fonctionne et rediriger les variantes en 404 vers celle-ci (redirection manuelle). Si la version anglaise est abandonnee, rediriger toutes les variantes vers l'equivalent francais.	Developpeur
	https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-your-house-you-shouldnt-ignore		
	https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-in-your-house-that-you-shouldnt-ignore	404	
	https://www.groupedpa.com/en/blog/allo-courtier/7-sounds-and-noises-your-house-that-you-shouldnt-ignore		
			
			
P2	Contenu duplique : deux pages couvrent le meme sujet (dommages par eau en 6 etapes) sans redirection ni canonical entre elles.	Garder la version blogue (meilleure structure d'URL) et rediriger /fr/dommage-par-eau-en-6-etapes en 301 vers la version blogue.	Developpeur
	/fr/dommage-par-eau-en-6-etapes (landing page standalone)		
	/fr/a-propos/blogue/allo-courtier/quoi-faire-en-cas-de-dommages-par-leau-en-6-etapes (article blogue)		
			
			
P2	H1 manquant sur /fr/a-propos/nos-bureaux — le contenu est en H2/H3 seulement.	Ajouter un H1 unique avec le mot-cle cible, ex: "Nos bureaux - DPA Assurances" ou "Trouvez votre bureau DPA Assurances".	Developpeur
			
			
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
			
			
P2	Core Web Vitals echoue sur desktop — CLS de 0,29 (seuil max : 0,1), images sans dimensions, carrousel sans espace reserve.	Ajouter les attributs width et height sur toutes les images et reserver l'espace du carrousel hero avec min-height ou aspect-ratio CSS pour corriger le CLS. Precharger l'image LCP avec <link rel="preload"> et optimiser les images (economie ~530 Ko) pour ramener le LCP mobile sous 2,5 s. Supprimer le JavaScript inutilise (~755 Ko) et le CSS inutilise (~195 Ko). Differer les scripts non critiques (2x GTM, cookie consent) et eliminer les ressources bloquant le rendu (~2 560 ms d'economie). Corriger l'animation non composee identifiee par Lighthouse.	Developpeur
			
			
			
P3	Page /fr/assurances-personnelles/ma-residence/travailleur-autonome-0 presente dans le sitemap alors qu'elle ne devrait pas y etre.	Retirer cette page du sitemap. Si c'est un doublon de /travailleur-autonome, ajouter une redirection 301 ou un noindex.	Developpeur
	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/travailleur-autonome-0		
			
P3	Images et fichiers manquants (404) — ressources embarquees cassees dans les articles de blogue.	Retrouver les images/PDFs originaux (backup pre-migration, ancien serveur, Wayback Machine) et les re-uploader aux memes chemins /sites/groupedpa/files/... Si introuvables : retirer les balises <img> cassees ou les remplacer par de nouvelles images. Pour les PDFs : retirer les liens ou creer de nouveaux PDFs equivalents. Ne PAS faire de redirections 301 sur les images/PDFs — ce sont des ressources embarquees, pas des pages indexees.	Developpeur
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
			
			
P3	Anciennes pages carrieres retournent 403 (acces interdit) — encore accessibles par Google.	Rediriger chaque URL en 301 vers la page d'accueil carrieres ou vers le poste equivalent actif, si applicable.	Developpeur
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
			
			
P3	Donnees structurees incompletes — seuls InsuranceAgency, Website, BreadcrumbList et Article sont en place.	Ajouter LocalBusiness sur chaque page de bureau individuel avec adresse, telephone, horaires, coordonnees GPS. Completer le BreadcrumbList pour refleter la hierarchie complete du site. Enrichir l'Organization sur l'accueil avec adresse du siege social, zone desservie, LinkedIn. Ajouter FAQPage si du contenu de type questions/reponses existe sur le site.	Developpeur
			
			
P3	Alt text manquant sur 33 images — logos, icones SVG, thumbnails et headers de blogue.	Ajouter un attribut alt descriptif sur chaque image. Logos : alt="Logo DPA Assurances" / alt="Logo Intact Assurance". Icones SVG : alt="Categorie Allo Courtier", etc. Images de contenu : decrire le sujet de l'image en lien avec l'article.	Developpeur
			
			
P3	Pages orphelines — 17+ pages dans le sitemap mais sans aucun lien interne pointant vers elles.	Soit integrer ces pages dans la navigation ou le maillage interne du site, soit les retirer du sitemap et les mettre en noindex si elles n'ont pas de valeur SEO.	Developpeur
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
			
			
P3	Pages hub manquantes pour assurances personnelles et assurances entreprises — pas de page de section principale.	Creer ces deux pages hub avec : un contenu optimise presentant chaque categorie de produit, des liens vers toutes les sous-pages existantes, une balise canonical self-referencing. Les integrer dans le menu de navigation principal.	Developpeur + Audrey
			
			
P3	PDFs manquants (404) — liens brises vers des PDFs qui existaient avant la migration.	Verifier si ces PDFs existent encore quelque part (backup pre-migration, ancien serveur). Si oui, les re-uploader aux memes chemins. Si non, retirer les liens vers ces PDFs des pages qui les referencent.	Developpeur
	https://www.groupedpa.com/sites/groupedpa/files/2024-08/FR_OnePager-IntactAssurance-CAT-DommageEau.pdf		
	https://www.groupedpa.com/sites/groupedpa/files/2024-02/EN_03-M-186.5_ReglementsConcours_AMVOQ_en.pdf		
	https://www.groupedpa.com/sites/groupedpa/files/2024-02/FR_03-M-186.5_ReglementsConcours_AMVOQ.pdf		
			
			
			
			
			
P4	Maillage interne faible — pas de cross-linking entre produits, blogue deconnecte des pages commerciales.	Ajouter des liens contextuels entre les pages de services connexes (ex: auto > assistance routiere). Lier les articles de blogue pertinents aux pages de services correspondantes. Creer des CTA dans les articles de blogue vers les pages commerciales.	Audrey + Developpeur
			
			
P4	/fr/a-propos/notre-equipe retourne un 404 depuis au moins 2022.	Recreer une page "Notre equipe" pour renforcer le E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) du site, particulierement pertinent dans le domaine de l'assurance. Ce n'est pas lie a la migration de janvier 2026.	Developpeur + Client
			
			


On-site :				
	État des lieux — Trafic organique actuel			
	Catégorie	%		
	Article EN "7 sounds"	~62%	https://docs.google.com/presentation/d/1YE6UHoreAMkb3kvswJ-pi3aI7PH-fFzD9cI27YMk7mE/edit?slide=id.g2d37bb38149_0_24#slide=id.g2d37bb38149_0_24	
	Trafic marque (dpa, groupe dpa...)	~33%		
	Hors-marque hors-article	~1%		
	Total estimé	100%		
				
	"Votre site est très dépendant de votre notoriété de marque — les gens qui vous trouvent vous connaissent déjà. Vous n'avez qu'un seul article qui génère du trafic organique significatif, uniquement dans sa version anglaise, et la version française est invisible sur Google depuis janvier 2025 en raison d'une erreur technique. Seulement 1% de votre trafic provient de personnes qui ne vous connaissent pas encore.

Les produits d'assurance suscitent de nombreuses questions avant même qu'un client contacte un courtier. C'est une opportunité précieuse pour générer du trafic qualifié, renforcer votre crédibilité et favoriser les conversions."			
				
Priorités	Problèmes 	Solutions	Intervenant	
	PRIORITÉ CRITIQUE			
1	#1 — Corriger le noindex de l'article FR "7 sons et bruits de la maison"	Action : Changer noindex → index, follow + reindexation via GSC	Développeur	
	La version française est bloquée depuis janvier 2025 (migration). La version EN génère 62% du trafic du site — la version FR avait un CTR de 7,6% vs 0,8% pour l'EN, les francophones cliquaient 10× plus. C'est du trafic récupérable immédiatement.			
				
				
1	#2 — H1 de la page d'accueil : vide (bug template)	Rédiger un H1 pour l'accueil	Audrey	
	Le signal de pertinence le plus important pour Google est absent.			
				
				
	PRIORITÉ ÉLEVÉE — On-page & Métadonnées			
	#3 — H1 des pages produits résidence et auto : termes navigationnels			
	Les H1 disent "Automobile", "Ma maison" — Google ne comprend pas sur quels mots-clés les positionner.	Rédiger H1	Audrey	
				
				
	#4 — Balises Title des pages résidence : format navigational			
	Réécrire selon le modèle : Assurance [produit] au Québec | DPA Assurances			
				
	Effort : Faible (template)			
	#5 — Page /travailleur-autonome : "assurance" absent du Title et H1			
				
	Effort : Très faible			
	#6 — Page /reclamations/declarer-un-sinistre : Title = "Nouvelle demande"			
	Titre de formulaire interne visible dans les SERP.			
				
	Effort : Très faible			
	#7 — Meta description EN de l'article "7 sounds" : rédigée en français			
				
				
	PRIORITÉ ÉLEVÉE — Contenu			
	#8 — Page /travailleur-autonome : contenu insuffisant			
	Page la plus sous-optimisée — pas de H2 orientés questions, contenu pauvre.			
				
	Effort : Moyen			
	#9 — FAQ structurée sur les pages auto, maison, condo			
	Ajouter contenu FAQ + Schema FAQPage pour viser les featured snippets sur des requêtes à fort volume.			
				
	Effort : Moyen			
	#10 — Page hub /assurances-commerciales : quasi-vide			
	Ne peut pas être positionnée sur "assurance entreprise Québec" sans contenu.			
				
	Effort : Moyen			
	#11 — H2 orientés questions de recherche sur /mon-auto et /ma-maison			
	Aucun H2 ne correspond à ce que les gens cherchent réellement — pages invisibles sur la longue traîne.			
				
	Effort : Faible			
				
	PRIORITÉ ÉLEVÉE — Maillage interne			
	#12 — CTAs génériques sur toutes les pages			
	Chaque page dit "Obtenir une soumission" — personnaliser par contexte augmente les conversions.			
				
	Effort : Moyen			
	#13 — Articles de blogue sans liens vers les pages produits			
	Le jus SEO des articles ne transite jamais vers les pages commerciales. Ajouter 1-2 liens contextuels par article.			
				
	Effort : Faible (éditorial)			
	#14 — /ma-maison ↔ /mon-auto : maillage Synchro inexistant			
	La combo auto+habitation est un produit clé — lien bidirectionnel évident non exploité.			
				
	Effort : Très faible			
	#15 — /dommage-par-eau-en-6-etapes : page orpheline			
	N'est liée depuis aucune page produit résidence — doit l'être depuis /ma-maison et /mon-condo.			
				
	Effort : Très faible			
				
	PRIORITÉ MOYENNE — Stratégie de contenu			
	Le trafic hors-marque représente 1% du total. Les recommandations suivantes visent à changer cette réalité.			
				
	#16 — /travailleur-autonome → /entreprises-de-services : lien manquant			
				
	Effort : Très faible			
	#17 — Créer une page pilier "Pourquoi choisir un courtier" (article de 2020 à refaire)			
	Requête transversale à tout le site — transformer en landing page dédiée /fr/pourquoi-un-courtier.			
				
	Effort : Moyen			
	#18 — Aucune page locale par ville			
	DPA est 1er sur GMB à Saint-Hyacinthe et Drummondville mais zéro page ciblant "assurance auto Saint-Hyacinthe", "courtier Drummondville" etc.			
				
	Effort : Élevé			
	#19 — Aucun contenu sur les sinistres climatiques			
	Sujet d'actualité au Québec (inondations, verglas). La page /dommage-par-eau-en-6-etapes est orpheline — aucune stratégie autour du risque climatique.			
				
	Effort : Moyen			
	#20 — Page cybersécurité : ajouter contenu Loi 25 / LPRPDE			
	Renforcer la page la mieux structurée du site avec un sujet d'actualité légale.			
				
	Effort : Faible			
	#21 — Page condo : mentionner les changements Loi 16/141 (syndicats copropriété)			
	Sujet réglementaire directement lié aux besoins des copropriétaires québécois.			
				
	Effort : Faible			
				
	PRIORITÉ BASSE			
	#22 — Aucune page sur l'assurance véhicule électrique			
	Marché en forte croissance au Québec, concurrence encore faible chez les courtiers — gap sémantique à saisir rapidement.			
				
	Effort : Moyen			
	#23 — CTAs dans le corps des articles absents			
	Les CTAs sont uniquement en sidebar — les intégrer dans le corps du texte augmente les conversions.			
				
	Effort : Faible			
	Référence à retenir			
	La page /cybersecurite est le modèle à suivre : H2 par besoin client, contenu dense avec stats, CTA intégré naturellement. Ce standard doit s'appliquer à /mon-auto et /ma-maison en priorité — ce sont les pages avec le plus grand potentiel de trafic perdu.			


Off-site:
	Dans la quasi-totalité des cas, les volumes de recherche sont très faible.														
															
	Cela indique que les utilisateurs qui recherchent un courtier en assurance ne privilégient pas spécialement de solutions locales.														
															
	Dans la plupart des villes, les fiches de La Turquoise apparaissent déjà parmis les 3 premiers résultats.														
															
	Les notes des fiches sont presque toutes à 4+ étoiles, il y a donc peu de risque que les cabinets ne soient pas considérés par les utilisateurs lorsqu’ils les comparent avec la concurrence.														
															
	→ La conclusion de cette analyse est que le potentiel d’attirer plus de trafic grâce au SEO local est plutôt limité.														
															
	Le volume de recherche lié aux questions autour de l’assurance habitation au Québec est de 2100 recherches par mois. Exemple : combien coûte une assurance habitation.														
															
	Le volume de recherche lié aux questions autour de l’assurance auto au Québec est de 2600 recherches par mois. Exemple : est-ce obligatoire d'avoir une assurance auto ?														
															
	Le volume de recherche lié aux questions autour de l’assurance entreprise au Québec est de 110 recherches par mois. Exemple : combien coûte une assurance entreprise ?														
															
	Même si cela prendrait un peu de plus temps pour valider, nous somme optimistes sur le fait que nous pouvons améliorer le trafic et les soumissions organiques avec un travail de SEO on-site (contenus des pages de services) et off-site du site (réputation en ligne, backlinks).														
															
	Pareil pour la mise en place d’une stratégie de contenu blogue. Nous sommes optimistes sur le fait que ça puisse vous amener du trafic et des soumissions.														
															
	GMB		Position												
	Brossard	courtier assurance brossard	8eme	4,7 étoiles et 246 avis											
	Saint-Hyacinthe	courtier assurance saint-hyacinthe	1er	4,8 etoiles et 426 avis											
	Roxton Pond	PAS DE FICHE = perte d'opportunité													
	Drummondville	courtier assurance drummondville	1er	4,8 etoiles et 53 avis											
															
															
															
	Audit Off-Site — Groupe DPA (données réelles Semrush)														
	Autorité de domaine														
	DA Semrush : 21 — modeste pour une entreprise avec 35 000 clients et 80+ ans d'histoire														
															
	Profil de backlinks — 238 domaines référents														
	Liens de qualité (DA 20+) — ce qui compte vraiment :														
															
	Domaine	DA	Industrie	Qualité											
	yahoo.com	100	Médias	Faible (annuaire automatique)											
	santemonteregie.qc.ca	47	Santé	Bon — lien éditorial régional											
	grenier.qc.ca	38	Marketing/pub	Bon — média québécois											
	cegepmontpetit.ca	37	Éducation	Bon — institution											
	threebestrated.ca	29	TI	Moyen											
	eebeauce.com	28	Médias	Bon — média régional											
	arpac.org	27	Automobile	Bon — association											
	aappq.qc.ca	26	Architecture	Bon — association pro											
	ccid.qc.ca	24	Commerce	Bon — chambre de commerce											
															
	Google Business Profile — tes données														
	Succursale	Position	Étoiles	Avis											
	Saint-Hyacinthe	1er	4,8 ★	426 avis											
	Drummondville	1er	4,8 ★	53 avis											
	Brossard	8e	4,7 ★	246 avis											
	Roxton Pond	PAS DE FICHE	—	—											
	Points forts : Saint-Hyacinthe domine localement, bonne réputation globale.														
															
	Problèmes :														
															
	Roxton Pond sans fiche = opportunité manquée (acquisition récente)														
	Brossard en 8e position — à optimiser														
	Drummondville : seulement 53 avis malgré une bonne note														
	Résumé off-site														
	DA	21/100 — faible													
	Domaines référents	238 — mais majorité nofollow ou scraping													
	Liens de qualité réels	~10–15 domaines pertinents													
	GBP	Fort à Saint-Hyacinthe, lacune à Roxton Pond													
	Liens éditoriaux manquants	Aucun lien sur mots-clés commerciaux													
	Recommandations prioritaires														
	Priorité	Action													
	P1	Créer la fiche GMB pour Roxton Pond													
	P1	Optimiser la fiche Brossard (photos, description, posts)													
	P2	Stratégie d'acquisition de liens — associations pro, médias régionaux													
	P2	Campagne de collecte d'avis Google à Drummondville													
	P3	Désavouer les liens de scraping B2B (clodura, success.ai, salezshark)													
															
															
															
															
Audit SEO

Objectifs et méthodologie  

Objectifs de l’audit :
Diagnostiquer la chute de trafic enregistrée depuis janvier 2026 et en identifier la cause précise
Évaluer l'état SEO complet du site : technique, contenu, maillage interne, présence locale et autorité
Identifier les opportunités manquées : produits absents, requêtes non couvertes, segments concurrentiels
Définir un plan d'action priorisé pour récupérer le trafic perdu et en générer du nouveau
Les éléments que nous allons analyser : 
Technique : Est-ce que Google peut lire et comprendre votre site sans obstacles ?
On-site : Est-ce que chaque page communique clairement sur quoi elle se positionne ?
Off-site : Est-ce que d'autres sites de confiance recommandent le vôtre ?
Concurrentiel : Comparaison des catalogues de produits avec La Turquoise, Assurancia, Covalen, Lussier


Analyse des résultats

-46,6%

Entre février 2025 et février 2026

En février 2025 : environ 784 sessions
En février 2026 : environ 419 sessions
Cette baisse n'est pas progressive, elle est verticale, à partir du 7 janvier 2026, ce qui correspond exactement à la migration de serveur.


Identifier d'où vient la baisse de  trafic

Sans surprise, la cause principale est la migration de serveur de janvier 2026.
3 problèmes critiques ont été introduits simultanément :
1. Redirections brisées
Quand une page change d'adresse sur Internet, il faut laisser une "note de transfert" (redirection 301) pour que Google continue de trouver le contenu. Lors de la migration, ces notes ont été mal configurées ou absentes donc Google a perdu le fil de vos pages.
2. Abandon de la version anglaise /en/ sans redirections
Votre site avait des pages en anglais avec un historique de trafic. Elles ont disparu sans redirection, emportant avec elles l'autorité accumulée.
3. Article vedette mis en noindex (bug de migration)
L'article "7 sons et bruits de la maison" en français a été bloqué à Google par erreur depuis janvier 2025. La version anglaise a continué de vivre, pas la française.


Article EN "7 sons et bruits"
XXX

62%

33%


Trafic de marque
(DPA, groupe DPA)

Hors-marque, hors-article
XXX

1%

Le problème de l'article "7 sons et bruits"

L'article génère 62% du trafic. C'est trompeur.



  
Réalité
Provenance
Seulement 7% du trafic est au Canada
Intention
Quelqu'un entend un bruit dans son plancher
Lien avec l’assurance
Pas direct
Taux de conversion
Proche de zéro


Anlyse du seo technique:
Priorité 1
 Actions principales 
Descriptions et détails
Priorité
Redirections brisées
Perte directe de trafic : cause #1 de la chute
Solution : Obtenir la table de redirections de l'agence, corriger et revalider
Critique
Article "7 sons FR" en noindex
Article "7 sons FR" bloqué à Google depuis janvier
Solution : Changer le noindex en index + réindexation GSC
Critique
Sitemap non mis à jour depuis décembre 2025
Google indexe des pages mortes et ignore les bonnes
Solution : Régénérer le sitemap, retirer 404/ noindex/ /en/
Critique
Pages /node/ dans le sitemap
Pages techniques sans valeur SEO exposées
Solution : Retirer du sitemap + ajouter noindex
Critique
Canonical contradictoire sur /carrieres
La page /fr/carrieres/courtier-assurance-des-particuliers-ventes-0 redirige vers une nouvelle URL, mais la nouvelle URL a une balise canonical qui pointe vers l'ancienne.
Solution : Corriger la balise canonical self-referencing et la typo courtiere
Critique
Pages /en/ encore dans le sitemap
Google crawle 24+ pages sans avenir
Solution : Rediriger chaque /en/ en 301 vers son équivalent en /fr/
Critique
Priorité 2
 Actions principales 
Descriptions et détails
Priorité
H1 manquant sur /nos-bureaux
Signal de pertinence absent pour Google
Solution : Ajouter un H1 : ex. Nos bureaux - DPA Assurances
Élevée
Meta descriptions trop courtes
Assurance automobile n’est pas une méta-description, c’est un nom de produit
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
 Actions principales 
Descriptions et détails
Priorité
33 images sans texte alternatif
Solution : Ajouter un alt descriptif sur chaque image
À planifier
17+ pages orphelines dans le sitemap sans lien interne
Solution : Intégrer dans la navigation ou mettre
À planifier
Données structurées incomplètes (LocalBusiness, FAQPage manquants)
Solution : Ajouter LocalBusiness sur chaque bureau (adresse, téléphone, GPS). Ajouter FAQPage si contenu Q/R existe.
À planifier
Pages carrières en 403 encore accessibles par Google
Solution : Rediriger en 301 vers la page carrières principale
À planifier
Images et PDFs brisés post-migration
Solution : Retrouver dans les backups ou retirer les références
À planifier


Obtenir plus de trafic organique:
Situation actuelle

Votre site est très dépendant de votre notoriété de marque, les gens qui vous trouvent vous connaissent déjà. Vous n'avez qu'un seul article qui génère du trafic organique significatif.
La bonne nouvelle : les produits d'assurance génèrent beaucoup de questions avant qu'un client contacte un courtier. C'est une opportunité précieuse que le site n'exploite pas encore.

Comment les utilisateurs recherchent vos produits ?


Pour identifier les thématiques de recherches les plus couramment recherchées, nous avons effectué une recherche de mots clés. Cette recherche se base sur les produits que vous vendez, mais également sur une analyse concurrentielle approfondie de concurrents que nous avons pu observer sur le web.

 Catégorie 
Volume de recherche mensuel
Exemple de requête
Assurance habitation
2 100
"combien coûte une assurance habitation"
Assurance auto
2 600
"est-ce obligatoire d'avoir une assurance auto"
Assurance entreprise
150
"combien coûte une assurance entreprise"

Le vrai problème des pages actuelles

Ces pages ne sont pas des pages de contenu, ce sont des pages de navigation déguisées. Elles disent "voici notre soumission" mais ne répondent à aucune des questions que le client se pose avant de demander une soumission.
Google positionne les pages qui répondent aux intentions de recherche. Ces pages n'en répondent aucune..



  
Situation actuelle
Cible
Mots par page produit
150-400 mots
1500 - 2000 mots
Sections FAQ
0 page sur 20
Toutes les pages
Glossaire
0 page sur 20
Pages auto, habitation…
Étude de cas
0 page sur 20
Pages auto, habitation…
Articles liés
0 page sur 20
Toutes les pages

Analyse du on -site
Opportunités - personnel
 Produits 
Présent chez
Volume
Action
Assurance véhicule électrique
Belairdirect, Assur360
Croissance
Créer /vehicule-electrique
Assurance haute valeur
Chubb, Lussier
Faible-moyen
Page existe déjà /particuliers/haute-valeur invisible, aucun lien interne
Assurance animaux de compagnie
CAA-Québec, Sonnet, Trupanion
500-1500/mois
Valider si DPA distribue ce produit
Assurance voyage
La Turquoise, CAA-Québec
Élevé (saisonnier)
Valider si DPA distribue ce produit
Assurance chalet 
Usage commun Mauricie, Estrie
200-400/mois
Valider clientèle existante


Opportunités - entreprise
 Produits 
Descriptions et détails
Cible
Action
Erreurs & omissions / Responsabilité professionnelle
Présent chez 3 concurrents sur 4.
Consultants, comptables, ingénieurs, architectes, conseillers TI, toute personne qui donne des conseils professionnels facturés.
Créer /assurances-entreprises/produits-specifiques/erreurs-et-omissions
Travailleurs autonomes
La page habitation existante répond à la mauvaise intention. Il faut une page hub qui regroupe tous les besoins professionnels.
 
Créer /travailleurs-autonomes comme page hub
Page PME
Covalen et Lussier ont une page "Assurance PME" qui capte le trafic non-spécifique avant d'orienter vers le bon secteur.
 
Créer /assurances-entreprises/pme

Analyse du off-site
  Indicateur
Valeur
Lecture
DA (SEMrush)
21/100
Faible pour 80 ans d’histoire et 35k clients
Domaines référents
238
Majorité nofollow
Liens de qualité réels
10-15
Très peu pour le secteur

 Succursale
Position
Note
Avis
Saint-Hyacinthe
1er
4,8 ★
426
Drummondville
1er
4,8 ★
53
Brossard
8e
4,7 ★
246
Roxton Pond
N/A
N/A
N/A


Actions:
 Actions principales 
Descriptions et détails
Priorité
Créer la fiche GMB pour Roxton
Signal de pertinence absent pour Google
Critique
Optimiser la fiche Brossard
Photos, descriptions, avis pour remonter du 8e au top 3
Élevée
Campagne de collecte d’avis à Drummondville
53 avis c’est peu on veut maintenir la première position
Élevée
Stratégie de liens
Associations, professionnelles, médias régionaux, chambres de commerce
Élevée
