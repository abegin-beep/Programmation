Audit technique																									
Priorités	Problèmes 	Solutions	Intervenant	Questions du client:																					
	Est-ce intentionnel ? Le client a-t-il volontairement retiré la version anglaise lors de la migration de janvier 2026 ?	oui																							
																									
P1	Redirections brisees : beaucoup de 301 qui menent au mauvais endroit ou sont cassees, causant une perte de trafic directe.	Demander la table des redirections de l'ancien site a l'agence (demande formelle). Obtenir la liste des redirections actives, corriger celles qui pointent au mauvais endroit, et renvoyer la liste mise a jour a l'agence.	Audrey + Agence																						
																									
																									
P1	Article ""7 sons et bruits de la maison"" est en noindex/nofollow — cet article performait bien avant la migration.	Changer les balises robots en index, follow sur cette page : https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/7-sons-et-bruits-de-la-maison-a-ne-pas-ignorer Demander une reindexation via GSC une fois corrige.	Developpeur	"pourquoi cet article amenait beaucoup de trafic ?
La version française fait la même chose mais elle est en noindex depuis janvier 2025 
Cet article performait bien parce qu'il répond à une intention de recherche universelle et émotionnelle = tout propriétaire qui entend un bruit bizarre chez lui cherche une réponse immédiatement. Google a reconnu que votre contenu répondait bien à cette intention, ce qui lui a permis de remonter pour des dizaines de variantes de la même question (vibration, bourdonnement, bruit dans les murs, etc.).

Le problème, c'est qu'en janvier 2025, lors de la migration du site, une balise technique (noindex) a été ajoutée par erreur sur la version française : ce qui a demandé à Google de ne plus afficher cette page dans ses résultats. Le trafic s'est arrêté du jour au lendemain. C'est une correction simple à faire côté développeur."""																					
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
																									
																									
																									
	Voici l'audit seo que je présente au client:
   Objectifs et méthodologie  

Objectifs de l’audit :
Diagnostiquer la chute de trafic enregistrée depuis le début 2026 et en identifier la cause précise
Évaluer l'état SEO complet du site 
Identifier les opportunités manquées 
Définir un plan d'action priorisé pour récupérer le trafic perdu et en générer du nouveau
Les éléments que nous allons analyser : 
Technique : Est-ce que Google peut lire et comprendre votre site sans obstacles ?
On-site : Est-ce que chaque page communique clairement sur quoi elle se positionne ?
Off-site : Est-ce que d'autres sites de confiance recommandent le vôtre ?
Concurrentiel : Comparaison des catalogues de produits avec Assurancia, Covalen, Lussier

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

62%

33%


Trafic de marque
(DPA, groupe DPA)

Hors-marque, hors-article

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
																					
	Analyse du SEO technique

02
																					Priorité 1
 Action principale
Description
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
Canonique contradictoire sur /carrieres
La page /fr/carrieres/courtier-assurance-des-particuliers-ventes-0 redirige vers une nouvelle URL, mais la nouvelle URL a une balise canonical qui pointe vers l'ancienne.
Solution : Corriger la balise canonical self-referencing et la typo courtiere
Critique
Pages /en/ encore dans le sitemap
Google crawle 24+ pages sans avenir
Solution : Rediriger chaque /en/ en 301 vers son équivalent en /fr/
Critique
			
	Priorité 2
 Action principale
Description
Priorité
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
																				Priorité 3
 Action principale 
Description 
Priorité
33 images sans texte alternatif
Solution : Ajouter un alt descriptif sur chaque image
À planifier
17+ pages orphelines dans le sitemap sans lien interne
Solution : Intégrer dans l’architecture du site, rediriger ou supprimer
À planifier
Données structurées incomplètes (LocalBusiness, FAQPage manquants)
Solution : Ajouter LocalBusiness sur chaque bureau (adresse, téléphone, GPS). Ajouter FAQPage si contenu Q/R existe.
À planifier
Pages carrières en 403 encore accessibles par Google
Solution : Rediriger en 301 vers la page carrières principale
À planifier
Images et PDFs brisés post-migration (404-403)
Solution : Retrouver dans les backups ou retirer les références
À planifier


    Analyse du SEO On-site
			Situation actuelle

Votre site est très dépendant de votre notoriété de marque, les gens qui vous trouvent vous connaissent déjà. Vous n'avez qu'un seul article qui génère du trafic organique significatif.
La bonne nouvelle : c'est aussi la plus grande opportunité. Les produits d'assurance génèrent des milliers de questions avant qu'un client contacte un courtier. Ces questions sont posées chaque mois sur Google. Le site n'y répond pas encore.
Audit des contenus
Pourquoi elles ne se positionnent pas ?

Quatre pages ont été analysées en détail : `/mon-auto`, `/ma-maison`, `/entreprise-agricole`, et `/biens-et-resp-civile`. Le diagnostic est le même pour toutes.
Chaque page de service partage les mêmes faiblesses structurelles :
Un H1 qui est un label de catégorie, pas un mot-clé ciblé
Un contenu orienté vente (caractéristiques, CTA soumission) qui suppose que l'utilisateur est déjà convaincu
Aucune section qui répond aux questions posées avant l'achat (coût, couverture, obligations légales)
Des H2 qui sont des slogans, pas des signaux thématiques
Un volume de contenu insuffisant (200 à 400 mots) pour concurrencer sur des requêtes à volume
Résultat : Google ne peut pas différencier ces pages les unes des autres, et elles n'apparaissent pas pour les requêtes des gens qui ne connaissent pas encore DPA. Ces pages ne répondent à aucune intention de recherche, elles attendent que l'utilisateur soit déjà convaincu pour lui demander une soumission.

Assurance automobile

Situation actuelle :
| H1 | « Automobile » | Terme navigationnel. Aucun mot-clé ciblé. |
| Meta title | « DPA Assurances: Protections Auto - Particuliers » | La marque en premier, pas le mot-clé |
| H2 principaux | « Débutez votre soumission », « Prix, protection, service : un trio gagnant », « Pour l'accès à des programmes de qualité » | 100% marketing. Aucun H2 ne correspond à une recherche réelle. |
| Contenu utile | ~400 mots hors navigation | Insuffisant |
Ce que les utilisateurs cherchent et que cette page ne couvre pas :
- « est-ce obligatoire d'avoir une assurance auto au Québec » → absent
- « combien coûte une assurance auto au Québec » → absent (aucun facteur explicatif)
- « assurance auto tous risques vs responsabilité civile » → absent
- « que couvre l'assurance auto de base »  → absent
- « comment est calculée ma prime d'assurance auto » → absent
Volume de recherche mensuel estimé (Québec) : 2 600 requêtes/mois pour les questions liées à l'assurance automobile.
Explications

Cinq problèmes traversent les pages de produits du site :
H1 navigationnels, pas de mots-clés ciblés
Contenu orienté vente donc aucune question d'intention adressée
Structure H2 marketing, pas thématique
Aucun contenu informatif (FAQ, guide, explication) pour capter les recherches pré-achat
Aucun maillage interne entre produits connexes

Recommandation

Chaque page doit d'abord répondre, ensuite convaincre. Dans cet ordre.
Un utilisateur qui trouve une réponse claire et experte à sa question associe cette expertise à DPA et est plus enclin à demander une soumission.
Structure recommandée pour chaque page de service :
H1 orienté selon la recherche de mots-clés
Réponse à l’intention principale
Ce qui est couvert / exclu
Facteurs qui influencent le prix
Pourquoi un courtier plutôt qu’un assureur direct
Pourquoi DPA spécifiquement
FAQ (5-7 questions réelles)
CTA soumission


Stratégie de blogue
L’intérêt d’une bonne stratégie de blogue

Les articles de blogue représentent une réelle opportunité pour vous de générer du trafic et de convertir les visiteurs en client :
Attirer et convertir : les articles de blogue captent un large trafic grâce aux recherches sur les assurances et redirigent vers les produits les plus pertinents. Chaque mois, des milliers de recherches sur les produits d’assurance sont effectuées.


Présence à chaque étape du parcours d’achat : articles de blogue (découverte) + pages catégories (considération) + pages produits (conversion) assurent une visibilité à chaque étape du parcours client. 


Maximiser votre visibilité dans les outils IA : un contenu de qualité augmente les chances d’être référencé par les outils d’IA (Google SGE, ChatGPT) pour des requêtes conversationnelles. 


Aligné avec les priorités SEO de Google : le blogue soutient l’expertise et la fiabilité de la marque, des critères essentiels pour Google dans le domaine de la santé. Google vous récompensera alors en accordant une meilleure visibilité pour vos produits.

L’état actuel du blogue

Le problème de l’article-miroir
Le blogue de DPA a créé, sans le vouloir, une situation paradoxale : l'article le plus populaire (`7 sons et bruits`) génère 62% du trafic organique du site, mais ce trafic est géographiquement hors-cible, intentionnellement hors-sujet, et génère zéro conversion.
Ce n'est pas une réussite SEO  c'est un miroir déformant. Un blogue performant pour une firme de courtage n'est pas un blogue de lifestyle généraliste. C'est un blogue qui génère des soumissions.
Le filtre à appliquer pour chaque nouvel article
Avant de publier, deux questions :
Cette requête est-elle posée par quelqu'un qui pourrait devenir un client DPA ?
Cet article pointe-t-il vers une page de service avec un CTA clair ?
Si la réponse à l'une de ces deux questions est non, l'article ne devrait pas être priorisé.

Comment utiliser votre blogue efficacement ?

La structure la plus efficace pour un blogue SEO dans le secteur de l'assurance est le modèle pilier-cluster :
- Une page pilier couvre un sujet en profondeur (guide complet)
- Des articles cluster traitent des sous-questions spécifiques et pointent vers la page pilier
- La page pilier pointe vers les articles cluster
Opportunités produits
Opportunités - particuliers
 Produit
Présent chez
Volume
Action
Assurance véhicule électrique
Belairdirect, Assur360
Croissance
Opportunités à valider 
Assurance animaux de compagnie
CAA-Québec, Sonnet, Trupanion
500-1500/mois
Opportunités à valider 
Assurance voyage
La Turquoise, CAA-Québec
Élevé (saisonnier)
Opportunités à valider 
Assurance chalet 
Usage commun Mauricie, Estrie
200-400/mois
Opportunités à valider 

Opportunités - entreprises
 Produit
Description
Cible
Action
Erreurs & omissions / Responsabilité professionnelle
Présent chez 3 concurrents sur 4.
Consultants, comptables, ingénieurs, architectes, conseillers TI, toute personne qui donne des conseils professionnels facturés.
Créer /assurances-entreprises/produits-specifiques/erreurs-et-omissions
Travailleurs autonomes
La page habitation existante répond à la mauvaise intention. Il faut une page hub qui regroupe tous les besoins professionnels.
Personnes qui travaillent de la maison et facturent des services
Créer /assurances-entreprises/travailleurs-autonomes comme page hub
PME
Covalen et Lussier ont une page "Assurance PME" qui capte le trafic non-spécifique avant d'orienter vers le bon secteur.
Propriétaires de PME qui cherchent une couverture globale
Créer /assurances-entreprises/pme

Analyse du SEO Off-site

04



 Indicateur
Valeur
Lecture
DA (SEMrush)
21/100
Faible pour 80 ans d'histoire et 35 000 clients
Domaines référents
238
Majorité nofollow ou générés automatiquement
Liens de qualité réels
10-15
Très peu pour un acteur établi du secteur :
- santemonteregie.qc.ca (DA 43)
- cegepmontpetit.ca (DA 34)
- grenier.qc.ca (DA 38)
- eebeauce.qc.ca (DA 28)
- aapppq.ca (DA 26)
Fiches Google Business Profile




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
Aucune
N/A
N/A
Recommandations off-site
 Action principale
Description
Priorité
Créer la fiche GMB pour Roxton Pond
Signal de pertinence absent pour Google
Élevé
Optimiser la fiche Brossard
Photos, descriptions, avis pour remonter du 8e au top 3
Élevé
Campagne de collecte d’avis à Drummondville
53 avis c’est peu on veut maintenir la première position
Moyenne
Stratégie de liens
Stratégie d'acquisition de liens : associations, professionnelles, médias régionaux, chambres de commerce
Moyenne


Recommandations 
& Plan d’action

05
Phase 1
Recommandations
(Phase 1: site actuel)
 Action principale 
Description
Impact attendu
Priorité
Hamak rédige le brief de modifications web
Libelo fournit le plan de redirections mis en place en janvier et effectue les corrections techniques.
 
Essentiel
Libelo corriger les redirections brisées
Identifier les URLs sources et leurs équivalents actuels. Corriger les redirections mal configurées ou absentes.
Récupération significative du trafic perdu depuis janvier 2026
Critique
Libelo réactiver l'article « 7 sons FR »
Changer la balise noindex en index, follow sur la version française de l'article blogue
Récupération du trafic francophone
Critique
Libelo régénére le sitemap XML
Retirer du sitemap toutes les URLs en 404, en noindex, les pages /node/, les pages /en/ et les pages de remerciement
Amélioration du crawl budget. Google indexe les bonnes pages
Critique
Libelo redirige les 24+ pages /en/ en 301
Rediriger chaque URL /en/ vers son équivalent /fr/.. Retirer toutes les URLs /en/ du sitemap
Consolidation de l'autorité accumulée sur les pages anglaises
Critique
Libelo corrige la canonical sur /carrieres
La page de destination d'une redirection 301 pointe son canonical vers l'ancienne URL
Récupération des 685 impressions perdues à zéro depuis la migration
Critique


Recommandations
(Phase 1: site actuel)
 Action principale
Description
Impact attendu
Priorité
Libelo retire les pages /node/ et techniques du sitemap
Ajouter noindex sur les 10 pages /node/ et la page /carrieres/merci. Les retirer du sitemap.
Qualité du crawl améliorée
Élevée
Libelo corrige les Core Web Vitals
Ajouter width et height sur toutes les images. Réserver l'espace du carrousel hero avec min-height
Facteur de classement Google + expérience utilisateur amélioré
Élevée
Libelo résoud le contenu dupliqué
Rediriger /fr/dommage-par-eau-en-6-etapes en 301 vers /quoi-faire-en-cas-de-dommages-par-leau-en-6-etapes
L'autorité de la page landing se consolide dans l'article blogue.
Élevée
Libelo résoud les pages carrières en 403
Rediriger les URLs de carrières (403) en 301 vers page carrières principale ou vers le poste actif équivalent
Fin de l'exposition de pages d'erreur à Google
Moyenne
Libelo corrige les ~25 images et PDFs brisés post-migration
Retrouver les ressources 404 dans les backups pre-migration. Re-uploader aux mêmes chemins.
Expérience utilisateur améliorée dans le blogue. Fin des ressources cassées visibles.
Moyenne


Recommandations
(Phase 1: site actuel)
 Action principale 
Description
Impact attendu
Priorité
Hamak optimise la fiche GMB de Brossard
Ajouter des photos récentes, rédiger une description avec mots-clés locaux…
Amélioration de la position actuelle (8e) vers le top 3 local
Moyenne
Hamak crée la fiche GMB de Roxton Pond
Créer et compléter la fiche Google Business Profile pour le bureau de Roxton Pond
Visibilité locale pour une succursale actuellement invisible
Moyenne
Hamak/DPA lancent une campagne d'avis Google pour Drummondville
Programme de collecte d'avis auprès des clients actuels du bureau de Drummondville. 
Renforcement de la crédibilité locale. Amélioration du classement GMB à Drummondville.
Moyenne


Phase 2
Recommandations
(Phase 2: refonte du site)
 Action principale 
Description
Impact attendu
Priorité
Hamak effectue une recherche de mots-clés
Identifier les mots-clés cibles pour chaque page de service : H1, H2, H3 et questions FAQ. Base de tout le travail de rédaction Phase 2
Fondation du positionnement organique sans ça, les H1/H2/FAQ sont écrits à l'aveugle
Critique
Hamak réécrit les H1 de toutes les pages de services
Remplacer les H1 navigationnels (« Automobile », « Ma maison ») par des H1 orientés mots-clés
Condition nécessaire au positionnement organique
Critique
Hamak enrichit les pages de services en profondeur
Passer de 150-400 mots à 1 500-2 000 mots structurés par page. Chaque page répond aux questions que l'utilisateur se pose avant de demander une soumission
Positionnement sur requêtes à volume
Critique
Hamak ajoute des sections FAQ avec schéma FAQPage
Intégrer une section FAQ structurée sur chaque page de service (minimum 5 Q/R)
Éligibilité aux featured snippets Google. Réponse directe aux intentions de recherche
Critique
Hamak met en place la stratégie de contenu blogue
Organiser le blogue en 4 clusters : auto, habitation, entreprise, courtier. Publier minimum 2 articles/mois
Génération progressive de trafic hors marque.
Critique

Recommandations
(Phase 2: refonte du site)
 Action principale
Description
Impact attendu
Priorité
Hamak construit un maillage interne structuré
Chaque page produit pointe vers les pages connexes dans le corps du texte
Transfert d'autorité entre pages. Amélioration du classement des pages commerciales
Critique
Hamak crée les pages produits manquantes
Pages prioritaires à créer : erreurs-et-omissions, pme travailleurs-autonomes, véhicule-électrique
Couverture des gaps produits vs concurrents. Captation de trafic sur des requêtes sans concurrence
Élevée
Hamak crée les données structurées.
Libelo intègre.
Configurer LocalBusiness, Organization, FAQPage
Éligibilité aux rich results Google. Amélioration du SEO local
Élevée
Hamak recrée la page /notre-equipe
Page avec photos terrain (pas portraits de bureau), noms, titres et expertises des courtiers. 
Signal E-E-A-T fort
Élevée
Hamak rédige un H1 à la page d'accueil
La page d'accueil n'a pas de H1. Rédiger un H1 avec le mot-clé principal de l'accueil
Signal de pertinence rétabli sur la page la plus visitée du site
Élevée

Recommandations
(Phase 2: refonte du site)
 Action principale
Description
Impact attendu
Priorité
Hamak rédige les méta-descriptions
Réécrire les méta-descriptions de toutes les pages de services
Amélioration du taux de clic dans les SERP
Élevée
Hamak met en place un stratégie d'acquisition de liens (off-site)
Identifier 20 cibles de liens : associations professionnelles régionales, médias économiques, partenaires agricoles
Amélioration progressive de l'autorité de domaine
Moyenne
Hamak configure les balises title selon le modèle
Format cible pour toutes les pages produits : « Assurance [produit] au Québec | DPA Assurances ». Le mot-clé cible en premier, la marque en suffixe
Amélioration du taux de clic et du positionnement sur les mots-clés produits.
Moyenne
Hamak intégre les pages orphelines dans la navigation
Lors de la refonte, mapper les 17+ pages actuellement orphelines (sans lien interne). Les intégrer dans la navigation ou le maillage. Supprimer ou rediriger celles sans valeur.
Consolidation de l'autorité du site. Fin des pages invisibles à Google malgré leur présence dans le sitemap.
Moyenne

Plan d'action — Libelo

1: À faire en premier
Fournir le plan de redirections de la migration de janvier 2026
Transmettre à Hamak la table complète des redirections mises en place lors de la migration de serveur en janvier 2026, afin d'identifier les URLs sources manquantes ou mal configurées.
2: Sur réception du brief Hamak — avant 1er mai
Effectuer toutes les recommandations du brief technique d'Hamak
Corriger les redirections brisées · Réactiver l'article "7 sons FR" (noindex → index) · Régénérer le sitemap XML · Rediriger les 24+ pages /en/ en 301 vers leurs équivalents /fr/ · Corriger la balise canonical contradictoire sur /carrieres · Retirer les pages /node/ et techniques du sitemap · Corriger les Core Web Vitals (images, carrousel, JS/CSS inutilisés) · Résoudre le contenu dupliqué (dommage par eau) · Résoudre les pages carrières en 403 · Corriger les ~25 images et PDFs brisés post-migration
3 Phase 2 — refonte du site
Intégrer toutes les optimisations SEO dans la refonte
Sur la base des livrables Hamak : intégrer les H1, H2, H3 optimisés · Configurer les balises meta titre et meta description · Intégrer les pages de contenu enrichies (1 500-2 000 mots par page de service) · Intégrer les sections FAQ avec schéma FAQPage · Construire le maillage interne structuré entre les pages · Configurer les données structurées (LocalBusiness, Organization, FAQPage) · Intégrer les pages produits manquantes (erreurs & omissions, PME, travailleurs autonomes, véhicule électrique)

Plan d'action — Hamak

1: Avril (avant 1er mai)
Rédaction du brief de modifications web
Regrouper toutes les recommandations techniques pour regagner le trafic perdu depuis janvier 2026. Transmettre à Libelo.
2: Mai
Optimisation des fiches Google Business Profile
Créer la fiche GMB de Roxton Pond · Optimiser la fiche de Brossard (photos, description, mots-clés locaux) · Lancer la campagne de collecte d'avis pour Drummondville
3: Phase 2
Recherche de mots-clés + guides de rédaction de la page d'accueil et des pages de services
Identifier les mots-clés cibles pour chaque page (H1, H2, H3, FAQ). Rédiger la page d'accueil et toutes les pages de services (1 500-2 000 mots structurés par page).
4: Phase 2
Rédaction des FAQs
Rédiger les sections FAQ pour chaque page de service (minimum 5 Q/R par page), optimisées pour les featured snippets Google.
5: Phase 2
Structure du maillage interne
Définir et documenter les liens internes entre toutes les pages de services, articles de blogue et pages produits. Livré sous forme de plan de maillage pour Libelo.




Plan d'action — Hamak

6: Phase 2
Rédaction des données structurées + optimisation page Notre équipe
Rédiger les schémas LocalBusiness, Organization et FAQPage pour chaque page concernée · Rédiger la page /notre-equipe avec photos terrain, noms, titres et expertises des courtiers (signal E-E-A-T).
7: Phase 2
Stratégie d'acquisition de liens (off-site)
Identifier 20-30 cibles de liens : associations professionnelles régionales, médias économiques québécois, partenaires agricoles, chambres de commerce.
8: Phase 2
Calendrier éditorial du blogue
Élaborer le calendrier éditorial organisé en 4 clusters (auto, habitation, entreprise, agricole). Définir les sujets, mots-clés cibles et CTAs pour chaque article.
En continu - Ongoing
Publication de 2 articles par mois sur le blogue
Rédaction et publication régulière selon le calendrier éditorial. Chaque article suit le filtre : intention commerciale québécoise + CTA vers une page de service.



codes_de_réponse_redirection_(3xx)																			Adresse	URL de redirection	Type de contenu	Code HTTP	Statut	Indexabilité	Statut d'indexabilité	Liens entrants	Temps de réponse	Type de redirection
https://www.groupedpa.com/	https://www.groupedpa.com/fr	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	0	0,048	Redirection HTTP
https://apps.intact.ca/wq/?language=FR&province=QC&f=h&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	https://webquote.app.intact.ca/?language=FR&province=QC&f=h&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	text/html	301	Moved Permanently	Non indexable	Redirigé	58	0,075	Redirection HTTP
https://apps.intact.ca/wq/?language=FR&province=QC&f=ch&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	https://webquote.app.intact.ca/?language=FR&province=QC&f=ch&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	text/html	301	Moved Permanently	Non indexable	Redirigé	25	0,079	Redirection HTTP
https://apps.intact.ca/wq/?language=FR&province=QC&f=c&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	https://webquote.app.intact.ca/?language=FR&province=QC&f=c&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	text/html	301	Moved Permanently	Non indexable	Redirigé	44	0,087	Redirection HTTP
https://www.groupedpa.com/fr/blogue	https://www.groupedpa.com/fr/a-propos/blogue	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	158	0,047	Redirection HTTP
https://g.page/r/CZNa_xCGiJ0DEBM/review	https://g.page/r/CZNa_xCGiJ0DEBM/review/	application/binary	302	Found	Non indexable	Redirigé	208	0,049	Redirection HTTP
https://www.st-hyacinthe.ca/loisirs-et-culture/installations-recreatives/bibliotheques	https://www.st-hyacinthe.ca/index	text/html; charset=UTF-8	302	Found	Non indexable	Redirigé	1	0,029	Redirection HTTP
https://www.sosviolenceconjugale.ca/	https://sosviolenceconjugale.ca/	text/html	301	Moved Permanently	Non indexable	Redirigé	1	0,128	Redirection HTTP
https://www.grandgalop.ca/	https://grandgalop.ca/	text/html; charset=UTF-8	301	Moved Permanently	Non indexable	Redirigé	1	0,94	Redirection HTTP
https://www.repit-intermede.com/	https://repit-intermede.com/	text/html	301	Moved Permanently	Non indexable	Redirigé	1	0,174	Redirection HTTP
https://apps.intact.ca/wq/quote/home/1/type?language=FR&province=QC&f=h&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	https://webquote.app.intact.ca/quote/home/1/type?language=FR&province=QC&f=h&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	text/html	301	Moved Permanently	Non indexable	Redirigé	8	0,076	Redirection HTTP
https://apps.intact.ca/wq/quote/car/1/info?language=FR&province=QC&f=ch&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	https://webquote.app.intact.ca/quote/car/1/info?language=FR&province=QC&f=ch&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	text/html	301	Moved Permanently	Non indexable	Redirigé	9	0,069	Redirection HTTP
https://www.groupedpa.com/fr/reclamations	https://www.groupedpa.com/fr/reclamations/declarer-un-sinistre	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	5	0,096	Redirection HTTP
https://www.groupedpa.com/en	https://www.groupedpa.com/fr	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	193	0,109	Redirection HTTP
https://www.groupedpa.com/fr/carrieres/courtier-assurance-des-particuliers-ventes-0	https://www.groupedpa.com/fr/carrieres/courtierere-assurance-des-particuliers-ventes-academie-intact	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	0	0,082	Redirection HTTP
https://www.groupedpa.com/fr/a-propos/nos-bureaux/monteregie/bureau-de-dpa-assurances-a-longueuil	https://www.groupedpa.com/fr/a-propos/nos-bureaux/monteregie/bureau-de-dpa-assurances-a-brossard	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	1	0,046	Redirection HTTP
https://saaq.gouv.qc.ca/immatriculation/remiser-deremiser-mettre-rancart/remisage/	https://validate.perfdrive.com/14b7cd854382893c3913787e756b7a52/?ssa=8149ef9f-e298-4cda-b894-d040200fd0be&ssb=46769275339&ssc=https%3A%2F%2Fsaaq.gouv.qc.ca%2Fimmatriculation%2Fremiser-deremiser-mettre-rancart%2Fremisage%2F&ssi=fdb409b7-co3r-4fd0-96da-53950150d008&ssk=botmanager_support@radware.com&ssm=94431659243295165102392562939846&ssn=c6fd767c515ee1d017da68fbcac903a7217fb418c187-8c80-4162-a91372&sso=72230458-ab2b0ac3d296cfababc641385e7c80ed3dc0feb1caf88a90&ssp=02957408661776728572177678071837846&ssq=14371009242334418065792423407337820704522&ssr=MTg0LjE2My45Ny4xMDU=&sst=Screaming%20Frog%20SEO%20Spider/23.3&ssu=&ssv=&ssw=&ssx=eyJyZCI6ImdvdXYucWMuY2EiLCJfX3V6bWYiOiI3ZjkwMDBiNDE4YzE4Ny04YzgwLTQxNjItYTQ1OC1hYjJiMGFjM2QyOTYxLTE3NzY3OTI0MjMzOTAwLTAwMzE3MDZkZmI3ZGFkZmU5MWIxMCIsInV6bXgiOiI3ZjkwMDBjNzU1ZGE4Zi0wY2EwLTQ4NDEtYjAwZC1jMTdjNGZlYjMxYWQxLTE3NzY3OTI0MjMzOTAwLWRkZWZmYzEyYTAxMDkzNzExMCJ9	text/html	302	Moved Temporarily	Non indexable	Redirigé	1	0,037	Redirection HTTP
https://www.canadapost.ca/cpc/fr/personal/receiving/manage-mail/mail-forwarding.page	https://www.canadapost-postescanada.ca/cpc/fr/personal/receiving/manage-mail/mail-forwarding.page		302	Moved Permanently	Non indexable	Redirigé	1	0,018	Redirection HTTP
https://www.lapresse.ca/actualites/environnement/201912/24/01-5254882-les-inondations-evenement-climatique-de-2019.php	https://www.lapresse.ca/actualites/environnement/2019-12-24/les-inondations-evenement-climatique-de-2019	text/html; charset=UTF-8	301	Moved Permanently	Non indexable	Redirigé	1	0,049	Redirection HTTP
https://blog.intact.ca/fr/habitation/prime-assurance-habitation	https://www.intact.ca/fr/habitation/prime-assurance-habitation	text/html	302	Found	Non indexable	Redirigé	1	0,064	Redirection HTTP
https://geoegl.msp.gouv.qc.ca/adnv2/	https://vigilance.geo.msp.gouv.qc.ca/	text/html	301	Moved Permanently	Non indexable	Redirigé	1	0,1	Redirection HTTP
https://www.caaquebec.com/fr/auto/conseils/capsules-conseils/conseil/show/sujet/les-orignaux-sur-la-route-cest-frappant/	https://www.caaquebec.com/fr/conseils	text/plain	301	Moved Permanently	Non indexable	Redirigé	1	0,139	Redirection HTTP
https://www.groupedpa.com/en?page=1	https://www.groupedpa.com/fr	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	6	0,178	Redirection HTTP
http://legisquebec.gouv.qc.ca/fr/showdoc/cr/S-3.1.02,%20r.%201	https://legisquebec.gouv.qc.ca/fr/showdoc/cr/S-3.1.02,%20r.%201	text/html	301	Moved Permanently	Non indexable	Redirigé	1	0,046	Redirection HTTP
https://apps.apple.com/ca/app/apple-store/id1363223619?l=fr	https://apps.apple.com/ca/app/intact-assurance-appli-mobile/id1363223619?l=fr-CA		301	Moved Permanently	Non indexable	Redirigé	1	0,146	Redirection HTTP
https://www.canadapost.ca/cpc/fr/personal/receiving/manage-mail/hold-mail.page	https://www.canadapost-postescanada.ca/cpc/fr/personal/receiving/manage-mail/hold-mail.page		302	Moved Permanently	Non indexable	Redirigé	1	0,066	Redirection HTTP
https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/grands-changements-affectants-assurances	https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/grands-changements-affectant-assurances	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	0	0,099	Redirection HTTP
https://www.securitepublique.gouv.qc.ca/securite-incendie/prevenir-incendie/conseils-prevention/temps-fetes.html	http://www.quebec.ca/securite-situations-urgence/securite-incendie	text/html; charset=UTF-8	303	See Other	Non indexable	Redirigé	1	0,128	Redirection HTTP
https://www.securitepublique.gouv.qc.ca/securite-incendie/prevenir-incendie/conseils-prevention/temps-fetes/decorations-lumineuses.html	http://www.quebec.ca/securite-situations-urgence/securite-incendie	text/html; charset=UTF-8	303	See Other	Non indexable	Redirigé	1	0,102	Redirection HTTP
http://www.chad.ca/fr/membres/pratique-professionnelle/industrie-enjeux-et-specialites/catastrophes-naturelles-et-environnement/423/les-tremblements-de-terre-au-quebec	https://chad.ca/fr/membres/pratique-professionnelle/industrie-enjeux-et-specialites/catastrophes-naturelles-et-environnement/423/les-tremblements-de-terre-au-quebec	text/html	301	Moved Permanently	Non indexable	Redirigé	1	0,133	Redirection HTTP
http://www.chad.ca/fr/consommateurs/bien-sassurer/349/sans-risque-pas-dassurance-de-dommages	https://chad.ca/fr/consommateurs/bien-sassurer/349/sans-risque-pas-dassurance-de-dommages	text/html	301	Moved Permanently	Non indexable	Redirigé	1	0,212	Redirection HTTP
https://www.illumi.com/	https://illumi.com/	text/html; charset=UTF-8	301	Moved Permanently	Non indexable	Redirigé	2	1,638	Redirection HTTP
https://gaa.qc.ca/fr/convention-d-indemnisation-directe/en-bref/	https://gaa.qc.ca/fr/convention-dindemnisation-directe/en-bref/		301	Moved Permanently	Non indexable	Redirigé	1	0,027	Redirection HTTP
http://www.chad.ca/fr/consommateurs/bien-sassurer/automobile/254/accident-automobile-et-responsabilite-a-qui-la-faute	https://chad.ca/fr/consommateurs/bien-sassurer/automobile/254/accident-automobile-et-responsabilite-a-qui-la-faute	text/html	301	Moved Permanently	Non indexable	Redirigé	1	0,265	Redirection HTTP
https://apps.intactinsurance.com/rqq/?language=FR&province=QC&origin=WEBBK&sub_broker=2894	https://apps.intactinsurance.com/waa/WAA/webseal.do?TAM_OP=error&ERROR_CODE=0x38cf04d7&URL=%2Frqq%2F%3Flanguage%3DFR%26province%3DQC%26origin%3DWEBBK%26sub_broker%3D2894	text/html	302	Moved Temporarily	Non indexable	Redirigé	3	0,11	Redirection HTTP
https://www.groupedpa.com/fr/blogue/allo-courtier/etes-vous-certain-davoir-tout-mentionne-a-votre-courtier	https://www.groupedpa.com/fr/a-propos/blogue/allo-courtier/etes-vous-certain-davoir-tout-mentionne-a-votre-courtier	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	1	0,147	Redirection HTTP
http://www.fqcq.qc.ca/lois-et-securite/assurance-incluse-au-droit-dacces/	https://www.fqcq.qc.ca/lois-et-securite/assurance-incluse-au-droit-dacces/	text/html	301	Moved Permanently	Non indexable	Redirigé	1	0,061	Redirection HTTP
https://saaq.gouv.qc.ca/accident-route/regime-public-assurance-automobile/pas-couvert/	https://validate.perfdrive.com/14b7cd854382893c3913787e756b7a52/?ssa=3d91c52d-d2d7-47bd-b70d-da94ee71d8d3&ssb=60858250680&ssc=https%3A%2F%2Fsaaq.gouv.qc.ca%2Faccident-route%2Fregime-public-assurance-automobile%2Fpas-couvert%2F&ssi=2e4b945a-co3r-4565-9b68-19d9dee0db0e&ssk=botmanager_support@radware.com&ssm=90472835221252733103662600392402&ssn=8be06c37f4c5b0f9c88fedb4f7f96a5f6176855c03cd-a986-4912-b19e52&sso=4b9985e1-325005ba115977fb11af75a639a167daacc4cc81bbb7c05f&ssp=91847025841776789102177677785030460&ssq=39963739243794372595292437237195879022658&ssr=MTg0LjE2My45Ny4xMDU=&sst=Screaming%20Frog%20SEO%20Spider/23.3&ssu=&ssv=&ssw=&ssx=eyJyZCI6ImdvdXYucWMuY2EiLCJfX3V6bWYiOiI3ZjkwMDA4NTVjMDNjZC1hOTg2LTQ5MTItYjVlMS0zMjUwMDViYTExNTkxLTE3NzY3OTI0MzczNjQwLTAwM2ZjZjFkMjEyYTExZmY1NTkxMCIsInV6bXgiOiI3ZjkwMDA5MWMwYTFjNi0zMzQ5LTRjNGEtYjRlMC0wMmZmNjY2NGYzYjYxLTE3NzY3OTI0MzczNjQwLWE2ZWY2NTBjNzNhYjQzYTAxMCJ9	text/html	302	Moved Temporarily	Non indexable	Redirigé	1	0,096	Redirection HTTP
https://saaq.gouv.qc.ca/securite-routiere/moyens-deplacement/motoneige/ce-que-dit-la-loi/	https://validate.perfdrive.com/14b7cd854382893c3913787e756b7a52/?ssa=bdba11a7-0b71-44b1-9368-f8f2dc5303c1&ssb=60858250680&ssc=https%3A%2F%2Fsaaq.gouv.qc.ca%2Fsecurite-routiere%2Fmoyens-deplacement%2Fmotoneige%2Fce-que-dit-la-loi%2F&ssi=9d32dd43-co3r-47f2-8c0a-6201c81bf5f2&ssk=botmanager_support@radware.com&ssm=90472835221252733103662600392402&ssn=8be06c37838521f8e91abc31b9146a5f617642bf5643-e3c1-4654-a19e52&sso=4b998db8-fdc267d74cf477fb11afe12edd04962d3a807785bbb7c05f&ssp=91847025841776789102177677785030460&ssq=39963739243794372595292437237195879022658&ssr=MTg0LjE2My45Ny4xMDU=&sst=Screaming%20Frog%20SEO%20Spider/23.3&ssu=&ssv=&ssw=&ssx=eyJyZCI6ImdvdXYucWMuY2EiLCJfX3V6bWYiOiI3ZjkwMDA0MmJmNTY0My1lM2MxLTQ2NTQtYWRiOC1mZGMyNjdkNzRjZjQxLTE3NzY3OTI0Mzc0MzQwLTAwMzkwYTFiOGM0NDYyZDQ1ZjAxMCIsInV6bXgiOiI3ZjkwMDA1ZjZhMzQ0Yi1lNjM2LTQ1NzAtODUzZi0wZDBmOGMzYTVhYjkxLTE3NzY3OTI0Mzc0MzQwLWM0Zjg4YzhiZDc5OGU3M2UxMCJ9	text/html	302	Moved Temporarily	Non indexable	Redirigé	1	0,101	Redirection HTTP
http://infoassurance.ca/fr/assurance-auto/s-assurer/moto.aspx	https://infoassurance.ca/fr/assurance-auto/s-assurer/moto.aspx		301	Moved Permanently	Non indexable	Redirigé	1	0,025	Redirection HTTP
https://fcmq.qc.ca/fr/droits-acces/assurances/	https://fcmq.qc.ca/droit-dacces/assurance	text/html; charset=iso-8859-1	301	Moved Permanently	Non indexable	Redirigé	1	0,048	Redirection HTTP
https://www.groupedpa.com/fr/assurances/particuliers/vehicules-de-loisirs	https://www.groupedpa.com/fr/assurances-personnelles/vehicules-de-loisirs	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	4	0,11	Redirection HTTP
http://dopamine.fr/effet-de-la-dopamine/	https://dopamine.fr/effet-de-la-dopamine/	text/html; charset=UTF-8	301	Moved Permanently	Non indexable	Redirigé	2	0,468	Redirection HTTP
https://www.groupedpa.com/en?page=2	https://www.groupedpa.com/fr	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	5	0,191	Redirection HTTP
https://apps.intactinsurance.com/rqq/?language=EN&province=QC&origin=WEBBK&sub_broker=2894	https://apps.intactinsurance.com/waa/WAA/webseal.do?TAM_OP=error&ERROR_CODE=0x38cf04d7&URL=%2Frqq%2F%3Flanguage%3DEN%26province%3DQC%26origin%3DWEBBK%26sub_broker%3D2894	text/html	302	Moved Temporarily	Non indexable	Redirigé	2	0,131	Redirection HTTP
https://apps.intactinsurance.com/rqq/?language=EN&province=QC&organization_source=TARGETMARKETWIVA2006&origin=WEBBK&sub_broker=2894	https://apps.intactinsurance.com/waa/WAA/webseal.do?TAM_OP=error&ERROR_CODE=0x38cf04d7&URL=%2Frqq%2F%3Flanguage%3DEN%26province%3DQC%26organization_source%3DTARGETMARKETWIVA2006%26origin%3DWEBBK%26sub_broker%3D2894	text/html	302	Moved Temporarily	Non indexable	Redirigé	16	0,133	Redirection HTTP
https://apps.intactinsurance.com/qc/quick-quote/desktop/index.html?lang=EN&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	https://apps.intactinsurance.com/waa/WAA/webseal.do?TAM_OP=error&ERROR_CODE=0x38cf04d7&URL=%2Fqc%2Fquick-quote%2Fdesktop%2Findex.html%3Flang%3DEN%26origin%3DWEBBK%26sub_broker%3D2894%26organization_source%3DTARGETMARKETWIVA2006	text/html	302	Moved Temporarily	Non indexable	Redirigé	12	0,127	Redirection HTTP
https://apps.intactinsurance.com/qc/quick-quote/desktop/index.html?lang=FR&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA1169	https://apps.intactinsurance.com/waa/WAA/webseal.do?TAM_OP=error&ERROR_CODE=0x38cf04d7&URL=%2Fqc%2Fquick-quote%2Fdesktop%2Findex.html%3Flang%3DFR%26origin%3DWEBBK%26sub_broker%3D2894%26organization_source%3DTARGETMARKETWIVA1169	text/html	302	Moved Temporarily	Non indexable	Redirigé	1	0,112	Redirection HTTP
https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/3-producteurs-de-la-monteregie-qui-ravissent-nos-papilles	https://www.groupedpa.com/fr/a-propos/blogue/train-de-vie/3-producteurs-de-la-monteregie-a-decouvrir	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	0	0,092	Redirection HTTP
https://www.fkaiser.com/product/le-douanier/	https://www.fkaiser.com/fromages/le-douanier/	text/html; charset=iso-8859-1	301	Moved Permanently	Non indexable	Redirigé	1	0,164	Redirection HTTP
https://www.groupedpa.com/en?page=3	https://www.groupedpa.com/fr	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	3	0,375	Redirection HTTP
http://www.labranche.ca/la-cabane-a-pommes/	http://labranche.ca/la-cabane-a-pommes/	text/html; charset=UTF-8	301	Moved Permanently	Non indexable	Redirigé	1	0,266	Redirection HTTP
https://www.labranche.ca/	https://labranche.ca/	text/html; charset=UTF-8	301	Moved Permanently	Non indexable	Redirigé	1	0,407	Redirection HTTP
https://www.fkaiser.com/en/boutique/	https://www.fkaiser.com/en/the-boutique/	text/html; charset=iso-8859-1	301	Moved Permanently	Non indexable	Redirigé	1	0,145	Redirection HTTP
https://www.groupedpa.com/en/three-monteregie-producers-who-delight-our-tastebuds	https://www.groupedpa.com/en/blog/train-de-vie/3-monteregie-producers-discover	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	0	0,208	Redirection HTTP
https://apps.intact.ca/wq/?language=EN&province=QC&f=c&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	https://webquote.app.intact.ca/?language=EN&province=QC&f=c&origin=WEBBK&sub_broker=2894&organization_source=TARGETMARKETWIVA2006	text/html	301	Moved Permanently	Non indexable	Redirigé	2	0,072	Redirection HTTP
https://www.labranche.ca/en/	https://labranche.ca/en/	text/html; charset=UTF-8	301	Moved Permanently	Non indexable	Redirigé	1	0,393	Redirection HTTP
https://www.labranche.ca/en/apple-picking/	https://labranche.ca/en/cabane-a-pommes/	text/html; charset=UTF-8	301	Moved Permanently	Non indexable	Redirigé	1	0,2	Redirection HTTP
https://infoassurance.ca/en/auto-insurance/insurance/motorcycle.aspx	https://infoassurance.ca/en/understanding-auto-insurance/insure-your-car/motorcycles-and-other-types-of-vehicle/		301	Moved Permanently	Non indexable	Redirigé	1	0,169	Redirection HTTP
https://fcmq.qc.ca/en/trail-permit/insurance/	https://www.fcmq.qc.ca/en/trail-permit/insurance/	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	1	0,261	Redirection HTTP
https://saaq.gouv.qc.ca/en/road-safety/modes-transportation/snowmobile/what-the-law-says/	https://validate.perfdrive.com/14b7cd854382893c3913787e756b7a52/?ssa=231b9408-8230-46cf-9f99-9255e49ad9f9&ssb=91176241287&ssc=https%3A%2F%2Fsaaq.gouv.qc.ca%2Fen%2Froad-safety%2Fmodes-transportation%2Fsnowmobile%2Fwhat-the-law-says%2F&ssi=ddd04413-co3r-4c5d-954b-9b0d0a185d8f&ssk=botmanager_support@radware.com&ssm=98554622505184967109009657977213&ssn=68535346eb38d742e9bc7b770d74ff7e2afb9c6c733a-a489-4395-8b30af&sso=eb773027-4cc8376015cd371603384bf8754e1cb6e2f158dd0a4eccb9&ssp=09307380411776785709177678250562968&ssq=11509929244715592911992447490611253633981&ssr=MTg0LjE2My45Ny4xMDU=&sst=Screaming%20Frog%20SEO%20Spider/23.3&ssu=&ssv=&ssw=&ssx=eyJfX3V6bWYiOiI3ZjkwMDA5YzZjNzMzYS1hNDg5LTQzOTUtODAyNy00Y2M4Mzc2MDE1Y2QxLTE3NzY3OTI0NDcxNTQwLTAwM2NjOTI3ODgwODZiNWJhYmMxMCIsInV6bXgiOiI3ZjkwMDA2ZTMwMjlmMC04MzZlLTQ0N2QtYmZhNi1hYWMzMTU2MGM5M2UxLTE3NzY3OTI0NDcxNTQwLWU3NGVlM2NmNWU2YTgzYWUxMCIsInJkIjoiZ291di5xYy5jYSJ9	text/html	302	Moved Temporarily	Non indexable	Redirigé	1	0,194	Redirection HTTP
https://saaq.gouv.qc.ca/en/traffic-accident/public-automobile-insurance-plan/not-covered/	https://validate.perfdrive.com/14b7cd854382893c3913787e756b7a52/?ssa=a049b720-fc01-4116-80c0-c0ee1ecd1b80&ssb=91176241287&ssc=https%3A%2F%2Fsaaq.gouv.qc.ca%2Fen%2Ftraffic-accident%2Fpublic-automobile-insurance-plan%2Fnot-covered%2F&ssi=6b9726ed-co3r-4d5c-ab37-bcca86025a0e&ssk=botmanager_support@radware.com&ssm=98554622505184967109009657977213&ssn=68535346e23deea9dc46c625197fff7e2afbfd44aea7-55f0-446d-ab30af&sso=eb773f3c-f1d79833264637160338e622617ca39c4a1e89940a4eccb9&ssp=09307380411776785709177678250562968&ssq=11509929244715592911992447490611253633981&ssr=MTg0LjE2My45Ny4xMDU=&sst=Screaming%20Frog%20SEO%20Spider/23.3&ssu=&ssv=&ssw=&ssx=eyJfX3V6bWYiOiI3ZjkwMDBmZDQ0YWVhNy01NWYwLTQ0NmQtYWYzYy1mMWQ3OTgzMzI2NDYxLTE3NzY3OTI0NDcxNTcwLTAwMzZjMDgyYmE4NmMzZWQyZjAxMCIsInV6bXgiOiI3ZjkwMDAzMTRjNTBiNi05MjNmLTQ0YzUtOWEwMS0yYmU3ZTEyZGZkYTgxLTE3NzY3OTI0NDcxNTcwLWY2N2ExNjIyNGRiOGQxMjgxMCIsInJkIjoiZ291di5xYy5jYSJ9	text/html	302	Moved Temporarily	Non indexable	Redirigé	1	0,189	Redirection HTTP
https://apps.apple.com/ca/app/apple-store/id1363223619?l=en	https://apps.apple.com/ca/app/intact-insurance-mobile-app/id1363223619		301	Moved Permanently	Non indexable	Redirigé	1	0,207	Redirection HTTP
https://courtika.com/sites/courtika/files/inline-images/infographie-anglais-réclamation_0.png	https://www.courtika.com/sites/courtika/files/inline-images/infographie-anglais-réclamation_0.png	text/html	301	Moved Permanently	Non indexable	Redirigé	0	0,068	Redirection HTTP
https://www.groupedpa.com/en?page=4	https://www.groupedpa.com/fr	text/html; charset=utf-8	301	Moved Permanently	Non indexable	Redirigé	1	0,176	Redirection HTTP
https://saaq.gouv.qc.ca/en/vehicle-registration/storage-licensing-for-road-use-or-discarding/storage/	https://validate.perfdrive.com/14b7cd854382893c3913787e756b7a52/?ssa=6c45c28f-f42f-4617-8636-7d42f02f698c&ssb=53643214496&ssc=https%3A%2F%2Fsaaq.gouv.qc.ca%2Fen%2Fvehicle-registration%2Fstorage-licensing-for-road-use-or-discarding%2Fstorage%2F&ssi=15c01f68-co3r-423e-aef7-026bb9aa7b5c&ssk=botmanager_support@radware.com&ssm=72944021675209914105814040995628&ssn=257e091d67cb3b9f3f88b5d01457b7def8e2f9722381-be7f-41c6-97cb70&sso=c76ff509-170a257fb75ddf6b2b8bf3516da9693d51cdb2c7cf97097f&ssp=56040192621776702679177671980077625&ssq=88898899244861679079892448593974224529755&ssr=MTg0LjE2My45Ny4xMDU=&sst=Screaming%20Frog%20SEO%20Spider/23.3&ssu=&ssv=&ssw=&ssx=eyJyZCI6ImdvdXYucWMuY2EiLCJfX3V6bWYiOiI3ZjkwMDBmOTcyMjM4MS1iZTdmLTQxYzYtOTUwOS0xNzBhMjU3ZmI3NWQxLTE3NzY3OTI0NDg2MTIwLTAwMzQ1OGFkOWRhODYxMzYyNjQxMCIsInV6bXgiOiI3ZjkwMDA2YzE2YTY5Ny00NDM3LTQwMjktODAwNC1hOTFjYmUxMzIxM2QxLTE3NzY3OTI0NDg2MTIwLWVlOGVhOTAzMWUzNTE4OWUxMCJ9	text/html	302	Moved Temporarily	Non indexable	Redirigé	1	0,27	Redirection HTTP
https://infoassurance.ca/en/home-insurance/insurance/factors-price-of-premium.aspx	https://infoassurance.ca/en/understanding-home-insurance/insure-your-home/factors-that-affect-your-premium/		301	Moved Permanently	Non indexable	Redirigé	1	0,023	Redirection HTTP


codes_de_réponse_erreur_du_client_http_(4xx)
Adresse	URL de redirection	Type de contenu	Code HTTP	Statut	Indexabilité	Statut d'indexabilité	Liens entrants	Temps de réponse	Type de redirection
https://www.intact.ca/etc.clientlibs/intact/clientlibs/branch/resources/index.html?b=i_brokers_login_website_c002_fr&prov=QC&lang=FR&pop=1&organization_source=TARGETMARKETWIVA2006		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	423	0,047	
https://www.groupedpa.com/fr/node/779		text/html; charset=UTF-8	403	Forbidden	Non indexable	Erreur client 	158	0,522	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/jean-philip-pinsonneault.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,082	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/AssureursAgricole.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,127	
https://wwf.ca/fr/biopolis-projects/branche/		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	1	0,315	
https://www.intact.ca/blog/fr/comment-levolution-de-la-technologie-influence-lassurance-auto.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,042	
https://www.intact.ca/qc/fr/assurance-particuliers/vehicule/auto/ma-conduite.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	3	0,055	
https://www.intact.ca/fr/blogue/comment-preparer-votre-vehicule-pour-lhiver		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,049	
https://www.intact.ca/fr/assurance-particuliers/services-en-ligne/ma-conduite		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,051	
https://www.intact.ca/fr/assurance-particuliers/services-en-ligne/guide-utilisation/assistance-collision		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,082	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/4486_RoadsideAssistance_infographic_V2.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,137	
https://www.intact.ca/fr/assurance-particuliers/services-en-ligne		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,051	
https://www.groupedpa.com/sites/groupedpa/files/2018-12/dpa-liste-a-cocher-vr.pdf		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	1	0,493	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/infographie-accident.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,136	
https://www.groupedpa.com/sites/essor/files/inline-images/4299_Backyard-Fireplace-GIF_White_v2.gif		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,123	
https://www.groupedpa.com/sites/assurancia/files/inline-images/Banner_Intact-Insurance-App-768x432.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,146	
https://www.intact.ca/qc/fr/foire-aux-questions.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	2	0,047	
https://www.intact.ca/blog/fr/4-bonnes-raisons-de-telecharger-lapplication-intact-assurance.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,054	
https://www.groupedpa.com/sites/assurancia/files/inline-images/Tech-stack_CC_App_0.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,132	
https://www.intact.ca/blog/fr/inondations-comment-endiguer-les-dommages.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,043	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/3844_Water-Damage_DPA.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,072	
https://www.canada.ca/fr/environnement-changement-climatique/services/eau-apercu/volume/inondations/centres-prevision-crues.html		text/html;charset=utf-8	404	Not Found	Non indexable	Erreur client 	1	0,111	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/chauffage-1.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,115	
https://www.intact.ca/fr/assurance-particuliers/vehicule/assistance-routiere		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	2	0,056	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/(4649)%20DPA%20Deer%20Infographic_V3.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,128	
https://www.securitepublique.gouv.qc.ca/fileadmin/Documents/securite_incendie/statistiques/statistiques-incendies-2015.pdf		text/html	404	Not Found	Non indexable	Erreur client 	2	0,103	
https://chaudiereappalaches.com/fr/voyage-quebec/la-beauce/saint-theophile/club-motoneigistes-liniere-marlow/club-de-motoneige/301-club-motoneigistes-liniere-marlow-saint-theophile-armstrong/		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	1	0,065	
https://www.intact.ca/fr/blogue/motoneige-ou-quad-les-protections-essentielles-au-quebec		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,051	
https://www.intact.ca/blog/fr/une-maison-connectee-c-est-intelligent.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,046	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/body-piscines-1500x1000-A-jpg.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,112	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/3730_claims_infographic_DPA_v1.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,13	
https://www.intact.ca/qc/fr/espace-client.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	2	0,062	
https://www.intact.ca/fr/blogue/la-securite-sous-zero-sept-articles-a-conserver-dans-votre-voiture-cet-hiver		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,045	
https://infoassurance.ca/fr/blogue/Prevention-habitation/proteger-exterieur.aspx			404	Not Found	Non indexable	Erreur client 	1	0,019	
https://www.groupedpa.com/sites/groupedpa/files/2018-12/dpa-liste-a-cocher-vacances.pdf		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	1	0,29	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/renovations-maison-866x755.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,083	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/guirlande-lumiere-3-iStock-1140556654-370x100.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,138	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/3345_Gift-ideas-Banner_DPA_v2.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,116	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/3342_Christmas-wrapping_DPA_v2.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,129	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/3341_Chritsmas_decoration_DPA_0.gif		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,131	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/(3343)-Recipes-GIF_DPA_0.gif		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,116	
https://infoassurance.ca/getattachment/88722d0b-20a7-49d2-8805-917758591776/Tout-connaitre-sur-l-assurance-et-les-dommages-cau.aspx			404	Not Found	Non indexable	Erreur client 	1	0,021	
https://infoassurance.ca/fr/blogue/Saviez-vous-que-auto/qui-determine-responsabilite-accident.aspx			404	Not Found	Non indexable	Erreur client 	1	0,025	
https://infoassurance.ca/fr/blogue/Saviez-vous-que-auto/responsabilite-accident.aspx			404	Not Found	Non indexable	Erreur client 	1	0,053	
https://gaa.qc.ca/fr/statistiques/criteres-de-tarification/		text/html; charset=utf-8	404	Not Found	Non indexable	Erreur client 	1	0,032	
https://www.intact.ca/qc/fr/services-en-ligne.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	3	0,053	
https://www.intact.ca/		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,07	
https://www.intact.ca/blog/fr/partager-vos-photos-de-voyage-sur-les-reseaux-sociaux-ou-pas.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,055	
https://gaa.qc.ca/statistiques/cout-de-l-assurance-auto/comparaison-entre-les-provinces/		text/html; charset=utf-8	404	Not Found	Non indexable	Erreur client 	1	0,079	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/body-dpa-motoneige-1000x500.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,083	
https://www.essor.ca/sites/essor/files/inline-images/4107_Snow_Plain.gif		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,085	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/travail-maison-1000x500-body.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,143	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/telephone-bord-de-leau-1500x500.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,126	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/jeux-enfants-voiture-fille-1500x1000.jpg		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,118	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/mario-poirier_article.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,142	
https://www.intact.ca/blog/fr/calcul-prime-assurance-automobile.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,044	
https://www.intact.ca/blog/fr/votre-assurance-habitation-couvre-t-elle-votre-entreprise-a-domicile.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,044	
https://www.intact.ca/blog/fr/6-bonnes-habitudes-a-adopter-au-volant.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,051	
https://www.intact.ca/en/blog/how-to-get-your-car-ready-for-winter		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,127	
https://www.intact.ca/blog/en/having-a-smart-home-is-just-plain-smart.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,047	
https://www.intact.ca/etc.clientlibs/intact/clientlibs/branch/resources/index.html?b=i_brokers_login_website_c002_en&prov=QC&lang=EN&pop=1&organization_source=TARGETMARKETWIVA2006		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	3	0,124	
https://www.intact.ca/qc/en/online-services.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,043	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/4239_Snow_plain_V2.gif		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,196	
https://www.intact.ca/qc/en/client-centre.html		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,047	
https://www.intact.ca/en/personal-insurance/online-services		text/html; charset=UTF-8	405	Not Allowed	Non indexable	Erreur client 	1	0,063	
https://www.groupedpa.com/sites/groupedpa/files/inline-images/4512_RoadsideAssistance_infographic_ENGLISH_V3.png		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	0	0,216	
https://www.groupedpa.com/en/node/38		text/html; charset=UTF-8	403	Forbidden	Non indexable	Erreur client 	2	0,238	
https://www.groupedpa.com/sites/groupedpa/files/2019-09/GroupeDPA-Winter-Checklist-EN.pdf		text/html; charset=UTF-8	404	Not Found	Non indexable	Erreur client 	2	0,451																										
																									
crawl de l'ancien site 
liste 4XX
Type de contenu	Adresse	Code HTTP	URL de redirection	Statut	Indexabilité	Statut d'indexabilité
text/html; charset=UTF-8	https://www.groupedpa.com/-72.499586	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/-73.421221	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/-72.65463	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/-72.98013	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/10	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/17,%2077,%2098,%201	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/45.460477	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/45.47435	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/45.63689	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/assets/vendor/domready/ready.min.js?v=1.0.8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/assets/vendor/jquery-once/jquery.once.min.js?v=2.2.0	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/assets/vendor/jquery-form/jquery.form.min.js?v=3.51	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/45.884166	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/ajax-progress.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/align.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/autocomplete-loading.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/container-inline.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/clearfix.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/details.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/fieldgroup.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/hidden.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/js.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/item-list.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/nowrap.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/position-container.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/progress.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/reset-appearance.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/resize.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/sticky-header.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/system-status-report-counters.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/system-status-counter.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/tabledrag.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/system-status-report-general-info.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/tablesort.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/system/components/tree-child.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/css/views/views.module.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/images/core/loading-small.gif	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/images/core/throbber-active.gif	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/images/core/icons/000000/move.svg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/images/core/icons/787878/move.svg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/images/core/icons/787878/twistie-down.svg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/images/core/tree-bottom.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/images/core/icons/787878/twistie-up.svg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/core/themes/stable/images/core/tree.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/about-us/our-offices/monteregie/st-hyacinthe-dpa-assurances-siege-social	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/about-us/our-team	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/-72.499586	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/-72.65463	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/-72.98013	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/-73.421221	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/45.460477	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/45.47435	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/45.63689	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/45.884166	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/blog/boite-a-outils/info@groupedpa.com	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/insurance/business	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/-72.65463	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/-72.98013	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/-73.421221	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/45.460477	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/45.47435	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/45.63689	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/-72.499586	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/-72.65463	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/-72.98013	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/-73.421221	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/45.460477	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/0.2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/45.47435	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/45.63689	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/45.884166	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/-72.499586	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/-72.65463	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/-72.98013	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/-73.421221	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/45.460477	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/45.47435	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/45.63689	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/45.884166	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/info@groupedpa.com	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/geometry.fill	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/geometry.stroke	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/info@groupedpa.com	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/labels.text.fill	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/landscape.man_made	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/landscape.natural	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/landscape.natural.terrain	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/nos-bureaux/estrie/dpa-assurances-a-roxton-pond	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/notre-equipe	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/road.arterial	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/road.highway	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/road.local	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/-72.499586	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/-72.65463	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/-72.98013	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/-73.421221	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/45.47435	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/45.63689	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/45.460477	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/45.884166	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-entreprises/assurances-commerciales/info@groupedpa.com	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/-72.499586	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/-72.65463	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/-72.98013	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/-73.421221	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/17,%2077,%2098,%200.8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/2,%2036,%2047,%200.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/45.460477	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/45.47435	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/45.63689	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/info@groupedpa.com	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/45.884166	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/-72.499586	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/-72.65463	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/-72.98013	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/-73.421221	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/17,%2077,%2098,%200.8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/2,%2036,%2047,%200.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/45.460477	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/45.47435	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/45.63689	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/info@groupedpa.com	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances-personnelles/ma-residence/45.884166	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances/entreprises	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances/entreprises/biens-et-responsabilite-civile	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances/entreprises/vehicules-commerciaux	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances/particuliers	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances/particuliers/automobile	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/assurances/particuliers/habitation	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/blogue/allo-courtier/6-bonnes-habitudes-a-adopter-au-volant-0	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/blogue/train-de-vie/hybride-ou-electrique-comment-prendre-un-virage-vert-et-habile-0	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/entreprises/biens-et-responsabilite-civile	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/info@groupedpa.com	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/node/585	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/partenaires-	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/sites/groupedpa/files/css/css_LZscufG6GBxRP51Z68rdcHJH15QwXYG1pd4tMgm6QHE.css?delta=0&language=en&theme=groupedpa&include=eJxlj0EOgzAMBD-UkidFJnGD2zhGsYH29w1IPQAXSztajdaJkjAFqoa5gZFUn25oeKmTNSjxXLDipj4XGaE8OleJBCUwJoJQqL7V39FgEzI6_aoh-xEUXddDtL8oql5IV-cmy4xpBh8XNeGwt26wFzcclQz75Kc0PiarjwWI9fCI5ILBIPtsfI6Qr3mAF3zcSvubxx1Y0lLQVYSGamFsUOPkz_EHuwKAOw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/sites/groupedpa/files/js/js_1QNGmJCWut_MGkQSd4DvokHChflmcREC0pNmG1zkLEQ.js?scope=footer&delta=2&language=fr&theme=groupedpa&include=eJxtkFGOwyAMRC9E4EjIAZe6xTjCTrN7-yWJ-tFmf5DmaTR6OFMWpkjNsHQwkhbyBfmHOnlFJV4qNtw0lCoz1GlwlURQI2MmiJXaU8MVebsjo9NfNeQwg6Ib85DsPZRUv8iYLl3WBfMCIa1qwnFvXeAobjgrGQ7lm3Q-lDWkCsR67IiUitGghGL8GaF8Zw8P-PnvWzcZghuqMPokvEjDZu5F-z2O17PkteKJdhlqu5WmLrWelelNp5O6htBRLc4dWrqHz_gHEaOiMg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/info@groupedpa.com	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/insurances/	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/media/	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/modules/custom/cookies_acceptance/js/cookies_acceptance.js?v=1.0.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/modules/custom/cookies_acceptance/js/cookies_acceptance.settings.js?v=1.x	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2017-09/branche-sur-humain.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2018-03/thumb_groupedpa.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2017-11/bg-transp_1.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2017-08/bg-find-our-branches.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2020-06/assurance-auto.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2020-07/membres-fadoq_0.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2020-07/mon-auto-privilege.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2018-12/allocourtier.svg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2018-12/boiteaoutils.svg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2018-12/dpa-liste-a-cocher-vr.pdf	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2018-12/dpa-liste-a-cocher-vacances.pdf	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2021-10/94-taux-satisfaction.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2021-07/virage-claim_FR.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2021-11/nj-dpa.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2022-12/Banniere-Booking-DPA.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2023-06/groupedpa-carriere.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-03/500x500_petit.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-03/500x500_petit_0.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-03/500x500_petit_1.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-03/500x500_petit_2.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-03/500x500_petit_3.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-04/iStock-1208085348.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-04/iStock-1249978425.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-04/iStock-1409730612.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-02/EN_03-M-186.5_ReglementsConcours_AMVOQ_en.pdf	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-04/iStock-1432249453.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-04/iStock-1445691726%20(1)%20(1).jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-06/iStock-1331285518_2.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-06/iStock-1353947009_1.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-06/iStock-1411449203.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-04/iStock-1414263405%20(1)_0.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-08/Logo%20DPA_Assurances_1.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-08/assurance-locataire-hero.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-08/assurance-proprietaire-hero.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-08/FR_OnePager-IntactAssurance-CAT-DommageEau.pdf	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-10/iStock-1700208682.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-08/fadoq.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/blog/2024-04/1-VenteVéhicule-Cabinet.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/blog/2024-08/Untitled%20design%20(36).png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/blog/2024-08/iStock-1296161113.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2025-01/Règlement%20concours%20Groupe_Gagnez%20jusqu%27à%201500%24%20avec%20Intact%20Assurance_2025.pdf	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_2Y1ah2iMvsGw4cP_TbSMzyL-Mu5jjL65J12Q3eWnSIA.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_3mVlqdmHfocMqp9O7CP22oixRr_MkeXK-1UpkJo4QiY.css?delta=0&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rBGOKTba9fUmkqkq2P5bmaTQaT6YsTJGaYRlgJC3kE_JXdXKPStwrNjw0lCob1I_FVRJBjYyZIFZqNw1n5G1HRqffashhA0W34iHZb1BSfSMrugyZHXOHkKaacHy4TnAZD9yUDFfliwx-VtaQKhDrM0ekVIwGJRTjVwnlXXu4wtd_b11kFTxQhdEn4S4NmzkTqbGgxc8phuFVug4D1oh915DH7FD9H_Gz9blV0h2zawgD1eI2oKU9vEp3p8foz-tZ8qz4A9WhrPw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_3mVlqdmHfocMqp9O7CP22oixRr_MkeXK-1UpkJo4QiY.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_3mVlqdmHfocMqp9O7CP22oixRr_MkeXK-1UpkJo4QiY.css?delta=0&language=fr&theme=groupedpa&include=eJxtkFGOwyAMRC9E4EjIAZe6xTjCTrN7-yWJ-tFmf5DmaTR6OFMWpkjNsHQwkhbyBfmHOnlFJV4qNtw0lCoz1GlwlURQI2MmiJXaU8MVebsjo9NfNeQwg6Ib85DsPZRUv8iYLl3WBfMCIa1qwnFvXeAobjgrGQ7lm3Q-lDWkCsR67IiUitGghGL8GaF8Zw8P-PnvWzcZghuqMPokvEjDZu5F-z2O17PkteKJdhlqu5WmLrWelelNp5O6htBRLc4dWrqHz_gHEaOiMg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_3mVlqdmHfocMqp9O7CP22oixRr_MkeXK-1UpkJo4QiY.css?delta=0&language=fr&theme=groupedpa&include=eJxtkWFuwyAMhS-UwpGQAZe4xRhhSNbbj0Sbpjb7g_Q-zOPZjhSFyVHpmBp0kmLjBZmHLrI5Ja4ZC-5qUxYP-Ta5SiDIjjESuEzlqfaKTF-RcdGXdmTrQXGZ9hD6r1FQ_SDTOjUZFWMFG4Z2YXdUXeAs3NErdZyR79L4jKw2ZCDW00ckZXQdkk2d3yWkT23gAV__tXWXGXBHFUYThKsULH2p0GCOqa5qYxsVsvkjZpQ6fCZdMS4zj-rLFolzEMO72iSO0J1i2yigPb69zYsffgQvCA21O9-ghNW-y2WjYxPnaXi-yfgNMYC02A	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_3mVlqdmHfocMqp9O7CP22oixRr_MkeXK-1UpkJo4QiY.css?delta=0&language=fr&theme=groupedpa&include=eJxtkNEOwjAIRX-otp_UsJZVtJSlMKd_b13ig5svJPeEnFzIlIUpUjMsHYykhXxC_qZOHlGJl4oNNw2lygT1MrhKIqiRMRPESu2u4Yy8XZHR6UsNOUyg6IYekn1FSfVAhrp0WRfMC4S0qgnHz9YJjsUNJyXDUXmWzntlDakCse4ekVIxGpRQjH8jlGP2cIPnv7NmGQU3VGH0SXiRhs3cgz7_2KdnyWtF1xA6qsWpQ0vX8Bvfo5qQmQ	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_3mVlqdmHfocMqp9O7CP22oixRr_MkeXK-1UpkJo4QiY.css?delta=0&language=fr&theme=groupedpa&include=eJyFU0FywyAM_JADhz6IkUHBJIAoEk77-4KTTpM4mV6AXSR5tcIuOErBhCzoK0igrN2OUieeaDUcUomY8cLaR5ohHjrPZANEk9AFMDHkM-s9pWTBhFMvCVZ-ky3zE9PL-UqtoCugbWOhZEbUjuyBF5w5CHaZR6ppk8naRgiJtzpEPqIR8NpLeoTgn7GCE3y9auVIXeAFmRIqS6lQxixTgQrdmrKwdrUViOqPUS2XNsfAC7qp62H-1pkcDsFDqb7taiwvScVtTkEMZbvPwtiNzKIcCoTIimH9P0jI9253Ydem22xKJdesGMa6Bot343hXOSEzeJwsVdTjpdTcXTh9Nqzf184sFLEL6BkYp4o3aNYPfQ_efsAuaM8zfeFewzaHMfu3yVS25_D2nvvBysvWhyeHfnHjhwcZoSKLmStku-hHOK1h_A_bqlLPifgDNYBMGA	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/2024-06/iStock-1180177282.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_4GrD3R6gtCXGsweOgdZexAGcBfNQw17uiALU0h3AEAg.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_3mVlqdmHfocMqp9O7CP22oixRr_MkeXK-1UpkJo4QiY.css?delta=0&language=fr&theme=groupedpa&include=eJyFUu1yAyEIfKGrPpLDKfFMVKxgPt6-6iTTJpdM_6isC-4iLjhKwYQs6CtIoKzdDlJHXuhsOKQSMeOFtY-0QvzqOJMNEE1CF8DEkE-s95CSDRMuvSRYeSRb5hekl_OVWkFXQNvGQskM1g7sxAuuHAS7zAPVNGWythFC4lmHyEc0Al57Sc8h-NdYwRGu76wcqAu8IFNCZSkVyphl6c8w33Qmh0tGqMhi1grZbvo5XM5hdGuuKpFrERdL07MRotgV_42WAhV6z8vG2tVWIKpfRLVc2hoDb-iG-2Fb33c1lreg4ramIIayxR0BY_-VLMqhQIisGM7_k4R8b92ONjv4KTchM_jhvaIeg1Vz93b8blhv77U_MrkfrHy8thva00pX5B1lftcYkY_JVObU_ABvaC2V	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_3yUQqmW57s9KpnfhF1CtcK0ZgDHhngb9vYADv29gtdY.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_5czdN_t5_bS3CuVLYfZmGwuSYa1_Upc8gX9sSE6uGeU.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_8f_urlwO-YwfnhpYpK-RNqsna2EBBDcMw5mdDgcsOyg.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_6MfXxGcqPwqFuemFpS1Err0CEpsS1MZy1m-y-dW9rKU.css?delta=2&language=fr&theme=groupedpa&include=eJyFUltywyAMvJADR2JkUDAJIIpEHrcvuMm0iZ3pD7YW7c6uhAuOUjAhC_oKEihrt4HUiSe6GA6pRMx4Ze0jzRAPHWeyAaJJ6AKYGPKZ9RZSsmDCqUuClSfZMr8hXc5XagVdAW0bCyUzujZgb7zizEGw2zxSTatN1jZCSLzqEPmIRsBrL-m1BP9eKzjBbS_KkbrBKzIlVJZSoYxZpgIV-mjKwtrVViCqX0S1XNocAy_opu6H-a4zORyGh1P9-Kpx7IKK25yCGMp2y8LYB5lFORQIkRXD5f8mId_Tbtp-QrfZlEquWTGM9RIs_lnHJ-WEzOBxslRRj5dSc5_C6athve8nezLtgvY80w234uuAx1I_kqmse_54z_3Hym6mEfbQLx74CJcRKrKYuUK2i34tp0sYD309VeqciN9Wfj2N	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_8cCxy-I1hVRN4ZxQHZCz033493eSeHyn4dMhfzoojh4.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_DMTPV6eSGJEjoJ1YdFDQzHDHYiYh3FnbSXHwSLGdxFI.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_6DgpvUrCbDA-aFV2mnOnyQcFQVwWGeRyg6pMmb6WHMw.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_DMTPV6eSGJEjoJ1YdFDQzHDHYiYh3FnbSXHwSLGdxFI.css?delta=2&language=fr&theme=groupedpa&include=eJyFU0FywyAM_JADhz6IkUHBJIAoEk77-4KTTpM4mV6AXSR5tcIuOErBhCzoK0igrN2OUieeaDUcUomY8cLaR5ohHjrPZANEk9AFMDHkM-s9pWTBhFMvCVZ-ky3zE9PL-UqtoCugbWOhZEbUjuyBF5w5CHaZR6ppk8naRgiJtzpEPqIR8NpLeoTgn7GCE3y9auVIXeAFmRIqS6lQxixTgQrdmrKwdrUViOqPUS2XNsfAC7qp62H-1pkcDsFDqb7taiwvScVtTkEMZbvPwtiNzKIcCoTIimH9P0jI9253Ydem22xKJdesGMa6Bot343hXOSEzeJwsVdTjpdTcXTh9Nqzf184sFLEL6BkYp4o3aNYPfQ_efsAuaM8zfeFewzaHMfu3yVS25_D2nvvBysvWhyeHfnHjhwcZoSKLmStku-hHOK1h_A_bqlLPifgDNYBMGA	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_HUqmX-0nIYAheZM1h4rCRNG8u-3QSTM9WO8QvjpT7sU.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_Gq9rxAjVDpNWHs3HQyNepOn78s16Ck24_Ia84CKxKAo.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_JVEHRB-hfHD2Tq1Kpu87kvg46qbruWAZyrUd8AzTolI.css?delta=0&language=fr&theme=groupedpa&include=eJxtjksWwjAIAC8Uw5H6KME2CiEvEKu397fUzSzmzWIIe9COsKJzIhsMZcyOkvGC97QNm51LR6DpYbqQe6otkAI2sRXl9DZuVFEW5VJxkdquDmd7VQe7KWcy7da4xb_wV-XYWTn5w4P1O3arfDh8mNXKFH4C0oRH2w	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_JVEHRB-hfHD2Tq1Kpu87kvg46qbruWAZyrUd8AzTolI.css?delta=0&language=fr&theme=groupedpa&include=eJxtj0sOwjAMRC8UkiNVrmOagB1bcULh9vyEWMBmFk_zRhoEG1ggreAUUDul3KcBRzjBNWxdp1E2SDh9qCzoHmobgCNtrCvw4UkMOmwdrPjH_pI4m82VqxfKwRUr8CKUKyxc29nTUR9zO7kKRVQxbdTGv-IviqOQUPCbD5L3g0ul3dMro2ieTHepmlgP	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_LZscufG6GBxRP51Z68rdcHJH15QwXYG1pd4tMgm6QHE.css?delta=0&language=en&theme=groupedpa&include=eJxlj0EOgzAMBD-UkidFJnGD2zhGsYH29w1IPQAXSztajdaJkjAFqoa5gZFUn25oeKmTNSjxXLDipj4XGaE8OleJBCUwJoJQqL7V39FgEzI6_aoh-xEUXddDtL8oql5IV-cmy4xpBh8XNeGwt26wFzcclQz75Kc0PiarjwWI9fCI5ILBIPtsfI6Qr3mAF3zcSvubxx1Y0lLQVYSGamFsUOPkz_EHuwKAOw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_MYUOT3EFm9JqptAFVkY-4JgzSQdRRGZC0uWDZNUGNoI.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_Mox5c4GEyYUHmdyvPGpE6VeolK1lRx-So2hhtQS_tsc.css?delta=6&language=fr&theme=groupedpa&include=eJxtj0sOwjAMRC8UkiNVrmOagB1bcULh9vyEWMBmFk_zRhoEG1ggreAUUDul3KcBRzjBNWxdp1E2SDh9qCzoHmobgCNtrCvw4UkMOmwdrPjH_pI4m82VqxfKwRUr8CKUKyxc29nTUR9zO7kKRVQxbdTGv-IviqOQUPCbD5L3g0ul3dMro2ieTHepmlgP	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_PXa1ng4TLFumAxhDjEgzcx2LvHpGf72-omOLhEMacdk.css?delta=2&language=fr&theme=groupedpa&include=eJxtj0sOwjAMRC8UkiNVrmOagB1bcULh9vyEWMBmFk_zRhoEG1ggreAUUDul3KcBRzjBNWxdp1E2SDh9qCzoHmobgCNtrCvw4UkMOmwdrPjH_pI4m82VqxfKwRUr8CKUKyxc29nTUR9zO7kKRVQxbdTGv-IviqOQUPCbD5L3g0ul3dMro2ieTHepmlgP	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_Mox5c4GEyYUHmdyvPGpE6VeolK1lRx-So2hhtQS_tsc.css?delta=6&language=fr&theme=groupedpa&include=eJxtjksWwjAIAC8Uw5H6KME2CiEvEKu397fUzSzmzWIIe9COsKJzIhsMZcyOkvGC97QNm51LR6DpYbqQe6otkAI2sRXl9DZuVFEW5VJxkdquDmd7VQe7KWcy7da4xb_wV-XYWTn5w4P1O3arfDh8mNXKFH4C0oRH2w	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_Phn0aNW7gjjG7ldDDzJtJlTrAH3Q4Fc8Ucy9R8V9rAs.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_QD4eKML3BT7FwG8Jy26TeeVmENyze4XyQTCV_WkrLf0.css?delta=2&language=fr&theme=groupedpa&include=eJxtkWFuwyAMhS-UwpGQAZe4xRhhSNbbj0Sbpjb7g_Q-zOPZjhSFyVHpmBp0kmLjBZmHLrI5Ja4ZC-5qUxYP-Ta5SiDIjjESuEzlqfaKTF-RcdGXdmTrQXGZ9hD6r1FQ_SDTOjUZFWMFG4Z2YXdUXeAs3NErdZyR79L4jKw2ZCDW00ckZXQdkk2d3yWkT23gAV__tXWXGXBHFUYThKsULH2p0GCOqa5qYxsVsvkjZpQ6fCZdMS4zj-rLFolzEMO72iSO0J1i2yigPb69zYsffgQvCA21O9-ghNW-y2WjYxPnaXi-yfgNMYC02A	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_QD4eKML3BT7FwG8Jy26TeeVmENyze4XyQTCV_WkrLf0.css?delta=2&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rBGOKTba9fUmkqkq2P5bmaTQaT6YsTJGaYRlgJC3kE_JXdXKPStwrNjw0lCob1I_FVRJBjYyZIFZqNw1n5G1HRqffashhA0W34iHZb1BSfSMrugyZHXOHkKaacHy4TnAZD9yUDFfliwx-VtaQKhDrM0ekVIwGJRTjVwnlXXu4wtd_b11kFTxQhdEn4S4NmzkTqbGgxc8phuFVug4D1oh915DH7FD9H_Gz9blV0h2zawgD1eI2oKU9vEp3p8foz-tZ8qz4A9WhrPw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_VN6wS2ildC4eP13j8-mndKRqYbvMTRycaQcHZ6mIs20.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_QTlErUFthbyotesoNQ2rJGR3Vw_PJlDt09LyetMHl4A.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_VN6wS2ildC4eP13j8-mndKRqYbvMTRycaQcHZ6mIs20.css?delta=6&language=fr&theme=groupedpa&include=eJyFU0FywyAM_JADhz6IkUHBJIAoEk77-4KTTpM4mV6AXSR5tcIuOErBhCzoK0igrN2OUieeaDUcUomY8cLaR5ohHjrPZANEk9AFMDHkM-s9pWTBhFMvCVZ-ky3zE9PL-UqtoCugbWOhZEbUjuyBF5w5CHaZR6ppk8naRgiJtzpEPqIR8NpLeoTgn7GCE3y9auVIXeAFmRIqS6lQxixTgQrdmrKwdrUViOqPUS2XNsfAC7qp62H-1pkcDsFDqb7taiwvScVtTkEMZbvPwtiNzKIcCoTIimH9P0jI9253Ydem22xKJdesGMa6Bot343hXOSEzeJwsVdTjpdTcXTh9Nqzf184sFLEL6BkYp4o3aNYPfQ_efsAuaM8zfeFewzaHMfu3yVS25_D2nvvBysvWhyeHfnHjhwcZoSKLmStku-hHOK1h_A_bqlLPifgDNYBMGA	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_eUNml7MskjLSruAWe9dTu4BeunPPH6m7ZbVwLb0zeyo.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_XxGwWvEhsK39a3_Rr073LJLuLIXr60OHNbQmkiZfMlM.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_dpJmNbN9MkILTFkDWkLPwRUz5xChmFm-FH3G_qTD-zU.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_gfknrWk_NfSnoJvy_zNveIf7h3GOWfUEU4hoSXz5qj8.css?delta=2&language=fr&theme=groupedpa&include=eJxtjksWwjAIAC8Uw5H6KME2CiEvEKu397fUzSzmzWIIe9COsKJzIhsMZcyOkvGC97QNm51LR6DpYbqQe6otkAI2sRXl9DZuVFEW5VJxkdquDmd7VQe7KWcy7da4xb_wV-XYWTn5w4P1O3arfDh8mNXKFH4C0oRH2w	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kCIJPXEGt_DriLidM1hqqW4DCQyWJRhFm6qDYuteHXg.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_hFDc_UwpDKhuNCISU1mEkctQnd38W2md-JEFMGjdiso.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kH46jbXPnGbmZbqifFQobsmRCnwj7d5ZsJySArugr_s.css?delta=5&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rBGOKTba9fUmkqkq2P5bmaTQaT6YsTJGaYRlgJC3kE_JXdXKPStwrNjw0lCob1I_FVRJBjYyZIFZqNw1n5G1HRqffashhA0W34iHZb1BSfSMrugyZHXOHkKaacHy4TnAZD9yUDFfliwx-VtaQKhDrM0ekVIwGJRTjVwnlXXu4wtd_b11kFTxQhdEn4S4NmzkTqbGgxc8phuFVug4D1oh915DH7FD9H_Gz9blV0h2zawgD1eI2oKU9vEp3p8foz-tZ8qz4A9WhrPw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kH46jbXPnGbmZbqifFQobsmRCnwj7d5ZsJySArugr_s.css?delta=5&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rFGOETba9fclKVZVsfyzN02g0nkxZmCI1wzLASFrIF-Tv6uQRlbhXbHhoKFU2qB-LqySCGhkzQazUPjVckbcdGZ1-qyGHDRTdiodkv0FJ9Y2s6DJkdswdQppqwvHpusBlPHBTMlyVbzL4rKwhVSDWM0ekVIwGJRTjVwnlXXu4w9d_b91kFTxQhdEn4S4Nm7kOA9ZMfdeQx-xQ_R_xs_W5VdIds2sIA9XiNqClPbxK96DnrOf1LHlW_AEit6DN	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kH46jbXPnGbmZbqifFQobsmRCnwj7d5ZsJySArugr_s.css?delta=3&language=en&theme=groupedpa&include=eJxlj0EOgzAMBD-UkidFJnGD2zhGsYH29w1IPQAXSztajdaJkjAFqoa5gZFUn25oeKmTNSjxXLDipj4XGaE8OleJBCUwJoJQqL7V39FgEzI6_aoh-xEUXddDtL8oql5IV-cmy4xpBh8XNeGwt26wFzcclQz75Kc0PiarjwWI9fCI5ILBIPtsfI6Qr3mAF3zcSvubxx1Y0lLQVYSGamFsUOPkz_EHuwKAOw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kH46jbXPnGbmZbqifFQobsmRCnwj7d5ZsJySArugr_s.css?delta=5&language=fr&theme=groupedpa&include=eJxtkFGOwyAMRC9E4EjIAZe6xTjCTrN7-yWJ-tFmf5DmaTR6OFMWpkjNsHQwkhbyBfmHOnlFJV4qNtw0lCoz1GlwlURQI2MmiJXaU8MVebsjo9NfNeQwg6Ib85DsPZRUv8iYLl3WBfMCIa1qwnFvXeAobjgrGQ7lm3Q-lDWkCsR67IiUitGghGL8GaF8Zw8P-PnvWzcZghuqMPokvEjDZu5F-z2O17PkteKJdhlqu5WmLrWelelNp5O6htBRLc4dWrqHz_gHEaOiMg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kH46jbXPnGbmZbqifFQobsmRCnwj7d5ZsJySArugr_s.css?delta=5&language=fr&theme=groupedpa&include=eJxtkNEOwjAIRX-otp_UsJZVtJSlMKd_b13ig5svJPeEnFzIlIUpUjMsHYykhXxC_qZOHlGJl4oNNw2lygT1MrhKIqiRMRPESu2u4Yy8XZHR6UsNOUyg6IYekn1FSfVAhrp0WRfMC4S0qgnHz9YJjsUNJyXDUXmWzntlDakCse4ekVIxGpRQjH8jlGP2cIPnv7NmGQU3VGH0SXiRhs3cgz7_2KdnyWtF1xA6qsWpQ0vX8Bvfo5qQmQ	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kH46jbXPnGbmZbqifFQobsmRCnwj7d5ZsJySArugr_s.css?delta=6&language=fr&theme=groupedpa&include=eJxtkWFuwyAMhS-UwpGQAZe4xRhhSNbbj0Sbpjb7g_Q-zOPZjhSFyVHpmBp0kmLjBZmHLrI5Ja4ZC-5qUxYP-Ta5SiDIjjESuEzlqfaKTF-RcdGXdmTrQXGZ9hD6r1FQ_SDTOjUZFWMFG4Z2YXdUXeAs3NErdZyR79L4jKw2ZCDW00ckZXQdkk2d3yWkT23gAV__tXWXGXBHFUYThKsULH2p0GCOqa5qYxsVsvkjZpQ6fCZdMS4zj-rLFolzEMO72iSO0J1i2yigPb69zYsffgQvCA21O9-ghNW-y2WjYxPnaXi-yfgNMYC02A	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kH46jbXPnGbmZbqifFQobsmRCnwj7d5ZsJySArugr_s.css?delta=6&language=fr&theme=groupedpa&include=eJxtkFFuwzAMQy_kxUcyFJtx1VlWECnNevu5AfbRZj8C-EBQlAoXFU7cHXUjZ-2xXNB0t6CPZCxrQ8dhsTadqX0NbpqZWhIUptS4f1u8oslvEAR7mkPiTIYw4in7X1A2-yAjum66rygrxbybq6SX6wKH8cBs7BiVF93krGwxN2KxM0e1NiSnGqvLu6T6qSe6089_Zy06Ch4wFUxZZdWO7uHBr3-ccxIte0MYm82esWtB6KAN5mneqOdbfJehQpvms3DSZeGM8dor-wUV7KUo	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kH46jbXPnGbmZbqifFQobsmRCnwj7d5ZsJySArugr_s.css?delta=6&language=fr&theme=groupedpa&include=eJyFUu1yAyEIfKGrPpLDKfFMVKxgPt6-6iTTJpdM_6isC-4iLjhKwYQs6CtIoKzdDlJHXuhsOKQSMeOFtY-0QvzqOJMNEE1CF8DEkE-s95CSDRMuvSRYeSRb5hekl_OVWkFXQNvGQskM1g7sxAuuHAS7zAPVNGWythFC4lmHyEc0Al57Sc8h-NdYwRGu76wcqAu8IFNCZSkVyphl6c8w33Qmh0tGqMhi1grZbvo5XM5hdGuuKpFrERdL07MRotgV_42WAhV6z8vG2tVWIKpfRLVc2hoDb-iG-2Fb33c1lreg4ramIIayxR0BY_-VLMqhQIisGM7_k4R8b92ONjv4KTchM_jhvaIeg1Vz93b8blhv77U_MrkfrHy8thva00pX5B1lftcYkY_JVObU_ABvaC2V	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_nLWULmlXTepDZGGwkoo0qap92wzgRaMUvqoZWsJYYf8.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kmqlOIFWWsHug76wp-2FhHHrfJ__JrKV5tNMoDn4uOs.css?delta=3&language=fr&theme=groupedpa&include=eJxtj0sOwjAMRC8UkiNVrmOagB1bcULh9vyEWMBmFk_zRhoEG1ggreAUUDul3KcBRzjBNWxdp1E2SDh9qCzoHmobgCNtrCvw4UkMOmwdrPjH_pI4m82VqxfKwRUr8CKUKyxc29nTUR9zO7kKRVQxbdTGv-IviqOQUPCbD5L3g0ul3dMro2ieTHepmlgP	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kmqlOIFWWsHug76wp-2FhHHrfJ__JrKV5tNMoDn4uOs.css?delta=3&language=fr&theme=groupedpa&include=eJxtjksWwjAIAC8Uw5H6KME2CiEvEKu397fUzSzmzWIIe9COsKJzIhsMZcyOkvGC97QNm51LR6DpYbqQe6otkAI2sRXl9DZuVFEW5VJxkdquDmd7VQe7KWcy7da4xb_wV-XYWTn5w4P1O3arfDh8mNXKFH4C0oRH2w	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_nsahL1cXUiwHgm35mb82Szi809UJPvP9MsrS7eHeypE.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_kzNV99yxX7GE5XZlOUkK4VPmc3uov8vWoK7D0kYuvKY.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_sxI08jBm7TfsW0jXG_q5btk9A6qloUHr_HpX46b7y1Y.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_rHTsmWuuePi23exV-QOPbdG3OP5Vaa13LRLaYR_CarM.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_wIRuY3xL_ymYDT3JAzoUg4lQzfStQI4nimaPxgqMCJU.css?delta=2&language=fr&theme=groupedpa&include=eJxtkFGOwyAMRC9E4EjIAZe6xTjCTrN7-yWJ-tFmf5DmaTR6OFMWpkjNsHQwkhbyBfmHOnlFJV4qNtw0lCoz1GlwlURQI2MmiJXaU8MVebsjo9NfNeQwg6Ib85DsPZRUv8iYLl3WBfMCIa1qwnFvXeAobjgrGQ7lm3Q-lDWkCsR67IiUitGghGL8GaF8Zw8P-PnvWzcZghuqMPokvEjDZu5F-z2O17PkteKJdhlqu5WmLrWelelNp5O6htBRLc4dWrqHz_gHEaOiMg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_vR9eBGU5ehLfVmGrCiaqd9oBiyRlK-R_rQf-sCXxJ-Y.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_wIRuY3xL_ymYDT3JAzoUg4lQzfStQI4nimaPxgqMCJU.css?delta=2&language=fr&theme=groupedpa&include=eJxtkNEOwjAIRX-otp_UsJZVtJSlMKd_b13ig5svJPeEnFzIlIUpUjMsHYykhXxC_qZOHlGJl4oNNw2lygT1MrhKIqiRMRPESu2u4Yy8XZHR6UsNOUyg6IYekn1FSfVAhrp0WRfMC4S0qgnHz9YJjsUNJyXDUXmWzntlDakCse4ekVIxGpRQjH8jlGP2cIPnv7NmGQU3VGH0SXiRhs3cgz7_2KdnyWtF1xA6qsWpQ0vX8Bvfo5qQmQ	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_x-a1NIrHPlpuyUIshwM-52HJGZHqG2dGCXT_T5k9W84.css	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_x-a1NIrHPlpuyUIshwM-52HJGZHqG2dGCXT_T5k9W84.css?delta=3&language=fr&theme=groupedpa&include=eJxtkFFuwzAMQy_kxUcyFJtx1VlWECnNevu5AfbRZj8C-EBQlAoXFU7cHXUjZ-2xXNB0t6CPZCxrQ8dhsTadqX0NbpqZWhIUptS4f1u8oslvEAR7mkPiTIYw4in7X1A2-yAjum66rygrxbybq6SX6wKH8cBs7BiVF93krGwxN2KxM0e1NiSnGqvLu6T6qSe6089_Zy06Ch4wFUxZZdWO7uHBr3-ccxIte0MYm82esWtB6KAN5mneqOdbfJehQpvms3DSZeGM8dor-wUV7KUo	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/inline-images/Assureurs%20(1).png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_x-a1NIrHPlpuyUIshwM-52HJGZHqG2dGCXT_T5k9W84.css?delta=3&language=fr&theme=groupedpa&include=eJyFUltywyAMvJADR2JkUDAJIIpEHrcvuMm0iZ3pD7YW7c6uhAuOUjAhC_oKEihrt4HUiSe6GA6pRMx4Ze0jzRAPHWeyAaJJ6AKYGPKZ9RZSsmDCqUuClSfZMr8hXc5XagVdAW0bCyUzujZgb7zizEGw2zxSTatN1jZCSLzqEPmIRsBrL-m1BP9eKzjBbS_KkbrBKzIlVJZSoYxZpgIV-mjKwtrVViCqX0S1XNocAy_opu6H-a4zORyGh1P9-Kpx7IKK25yCGMp2y8LYB5lFORQIkRXD5f8mId_Tbtp-QrfZlEquWTGM9RIs_lnHJ-WEzOBxslRRj5dSc5_C6athve8nezLtgvY80w234uuAx1I_kqmse_54z_3Hym6mEfbQLx74CJcRKrKYuUK2i34tp0sYD309VeqciN9Wfj2N	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/css/css_x-a1NIrHPlpuyUIshwM-52HJGZHqG2dGCXT_T5k9W84.css?delta=3&language=fr&theme=groupedpa&include=eJyFU0FywyAM_JADhz6IkUHBJIAoEk77-4KTTpM4mV6AXSR5tcIuOErBhCzoK0igrN2OUieeaDUcUomY8cLaR5ohHjrPZANEk9AFMDHkM-s9pWTBhFMvCVZ-ky3zE9PL-UqtoCugbWOhZEbUjuyBF5w5CHaZR6ppk8naRgiJtzpEPqIR8NpLeoTgn7GCE3y9auVIXeAFmRIqS6lQxixTgQrdmrKwdrUViOqPUS2XNsfAC7qp62H-1pkcDsFDqb7taiwvScVtTkEMZbvPwtiNzKIcCoTIimH9P0jI9253Ydem22xKJdesGMa6Bot343hXOSEzeJwsVdTjpdTcXTh9Nqzf184sFLEL6BkYp4o3aNYPfQ_efsAuaM8zfeFewzaHMfu3yVS25_D2nvvBysvWhyeHfnHjhwcZoSKLmStku-hHOK1h_A_bqlLPifgDNYBMGA	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/inline-images/partenaire-1.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/inline-images/partenaire-2.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_4ikDkzi0tRFZHrRyLbPUsbul5lQzrt3XvTlXen-NWa8.js?scope=footer&delta=5&language=fr&theme=groupedpa&include=eJxtkNEOgzAIRX-ok4d9UIOIXU1bHFTd_n7VJ932QnIOubkBEmWIpbIWTN30XFjf3Sia3RAHydHvu6BYoxT4Vd1kLrAkoQO9jGMkNvjjXBAJiX3FAKGNb-5wwtdVZhdUlpmHGYEWq5J962v1SBVCkh7TrYnCqGzV94qFHnBFJ6u3mOfEhTc7pZQJ50oP9OsdzuA27i1WbnfujziOMKCEMVsLfgD4aXeM	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_1QNGmJCWut_MGkQSd4DvokHChflmcREC0pNmG1zkLEQ.js?scope=footer&delta=2&language=fr&theme=groupedpa&include=eJxtkFGOwyAMRC9E4EjIAZe6xTjCTrN7-yWJ-tFmf5DmaTR6OFMWpkjNsHQwkhbyBfmHOnlFJV4qNtw0lCoz1GlwlURQI2MmiJXaU8MVebsjo9NfNeQwg6Ib85DsPZRUv8iYLl3WBfMCIa1qwnFvXeAobjgrGQ7lm3Q-lDWkCsR67IiUitGghGL8GaF8Zw8P-PnvWzcZghuqMPokvEjDZu5F-z2O17PkteKJdhlqu5WmLrWelelNp5O6htBRLc4dWrqHz_gHEaOiMg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_-eJII8Pbm7i63suA3btXvBWQDaVAJvy-FP_LtHPpmHg.js?scope=footer&delta=2&language=fr&theme=groupedpa&include=eJyFUu1yAyEIfKGrPpLDKfFMVKxgPt6-6iTTJpdM_6isC-4iLjhKwYQs6CtIoKzdDlJHXuhsOKQSMeOFtY-0QvzqOJMNEE1CF8DEkE-s95CSDRMuvSRYeSRb5hekl_OVWkFXQNvGQskM1g7sxAuuHAS7zAPVNGWythFC4lmHyEc0Al57Sc8h-NdYwRGu76wcqAu8IFNCZSkVyphl6c8w33Qmh0tGqMhi1grZbvo5XM5hdGuuKpFrERdL07MRotgV_42WAhV6z8vG2tVWIKpfRLVc2hoDb-iG-2Fb33c1lreg4ramIIayxR0BY_-VLMqhQIisGM7_k4R8b92ONjv4KTchM_jhvaIeg1Vz93b8blhv77U_MrkfrHy8thva00pX5B1lftcYkY_JVObU_ABvaC2V	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_B0iV30t4U7t5GfUquQiJf9D_2J31Ss9FER02zXwkkiA.js?scope=footer&delta=2&language=en&theme=groupedpa&include=eJxlj0EOgzAMBD-UkidFJnGD2zhGsYH29w1IPQAXSztajdaJkjAFqoa5gZFUn25oeKmTNSjxXLDipj4XGaE8OleJBCUwJoJQqL7V39FgEzI6_aoh-xEUXddDtL8oql5IV-cmy4xpBh8XNeGwt26wFzcclQz75Kc0PiarjwWI9fCI5ILBIPtsfI6Qr3mAF3zcSvubxx1Y0lLQVYSGamFsUOPkz_EHuwKAOw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_B0iV30t4U7t5GfUquQiJf9D_2J31Ss9FER02zXwkkiA.js?scope=footer&delta=2&language=en&theme=groupedpa&include=eJxlkFFuAyEMBS9E4UjIgMs6tTHCkLS3L1mpqpL9sfRGTyPbhYoKRWoT64BJ2kK5IH8zp_doJJ2x4cNCZU3AH5ubZgKOgoUgMrUvC1fk54GCzn5sooQEhm7rIc8_UTZ7I1tdh66OpUPIy6ZKfLYucBcfmIwm7pU_dci5soXMQGKnR7Uyxgk11CmvEep79nCDb9dhwL6-HxbKWB3Y_xO_Wl-JyQ4sriEMtBnTgJaP8BrdnZ7fOqcXLYvxF5rkkG8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_B0iV30t4U7t5GfUquQiJf9D_2J31Ss9FER02zXwkkiA.js?scope=footer&delta=2&language=fr&theme=groupedpa&include=eJxtkNEOwjAIRX-otp_UsJZVtJSlMKd_b13ig5svJPeEnFzIlIUpUjMsHYykhXxC_qZOHlGJl4oNNw2lygT1MrhKIqiRMRPESu2u4Yy8XZHR6UsNOUyg6IYekn1FSfVAhrp0WRfMC4S0qgnHz9YJjsUNJyXDUXmWzntlDakCse4ekVIxGpRQjH8jlGP2cIPnv7NmGQU3VGH0SXiRhs3cgz7_2KdnyWtF1xA6qsWpQ0vX8Bvfo5qQmQ	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_B0iV30t4U7t5GfUquQiJf9D_2J31Ss9FER02zXwkkiA.js?scope=footer&delta=2&language=fr&theme=groupedpa&include=eJxtkFFuwzAMQy_kxUcyFJtx1VlWECnNevu5AfbRZj8C-EBQlAoXFU7cHXUjZ-2xXNB0t6CPZCxrQ8dhsTadqX0NbpqZWhIUptS4f1u8oslvEAR7mkPiTIYw4in7X1A2-yAjum66rygrxbybq6SX6wKH8cBs7BiVF93krGwxN2KxM0e1NiSnGqvLu6T6qSe6089_Zy06Ch4wFUxZZdWO7uHBr3-ccxIte0MYm82esWtB6KAN5mneqOdbfJehQpvms3DSZeGM8dor-wUV7KUo	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_Ffq7dZnxh2NA9kcV6JA9NKYxWNShQCBKo9D9_yU21js.js?scope=footer&delta=3&language=fr&theme=groupedpa&include=eJxtkNEOgzAIRX-ok4d9UIOIXU1bHFTd_n7VJ932QnIOubkBEmWIpbIWTN30XFjf3Sia3RAHydHvu6BYoxT4Vd1kLrAkoQO9jGMkNvjjXBAJiX3FAKGNb-5wwtdVZhdUlpmHGYEWq5J962v1SBVCkh7TrYnCqGzV94qFHnBFJ6u3mOfEhTc7pZQJ50oP9OsdzuA27i1WbnfujziOMKCEMVsLfgD4aXeM	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_JSZfZw7eDm3f0mILJMijfcPq2bKKMn7u2gLLsoV16fw.js?scope=header&delta=0&language=en&theme=groupedpa&include=eJxlkFFuAyEMBS9E4UjIgMs6tTHCkLS3L1mpqpL9sfRGTyPbhYoKRWoT64BJ2kK5IH8zp_doJJ2x4cNCZU3AH5ubZgKOgoUgMrUvC1fk54GCzn5sooQEhm7rIc8_UTZ7I1tdh66OpUPIy6ZKfLYucBcfmIwm7pU_dci5soXMQGKnR7Uyxgk11CmvEep79nCDb9dhwL6-HxbKWB3Y_xO_Wl-JyQ4sriEMtBnTgJaP8BrdnZ7fOqcXLYvxF5rkkG8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_JSZfZw7eDm3f0mILJMijfcPq2bKKMn7u2gLLsoV16fw.js?scope=header&delta=0&language=en&theme=groupedpa&include=eJxlj0EOgzAMBD-UkidFJnGD2zhGsYH29w1IPQAXSztajdaJkjAFqoa5gZFUn25oeKmTNSjxXLDipj4XGaE8OleJBCUwJoJQqL7V39FgEzI6_aoh-xEUXddDtL8oql5IV-cmy4xpBh8XNeGwt26wFzcclQz75Kc0PiarjwWI9fCI5ILBIPtsfI6Qr3mAF3zcSvubxx1Y0lLQVYSGamFsUOPkz_EHuwKAOw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=en&theme=groupedpa&include=eJxlkFFuAyEMBS9E4UjIgMs6tTHCkLS3L1mpqpL9sfRGTyPbhYoKRWoT64BJ2kK5IH8zp_doJJ2x4cNCZU3AH5ubZgKOgoUgMrUvC1fk54GCzn5sooQEhm7rIc8_UTZ7I1tdh66OpUPIy6ZKfLYucBcfmIwm7pU_dci5soXMQGKnR7Uyxgk11CmvEep79nCDb9dhwL6-HxbKWB3Y_xO_Wl-JyQ4sriEMtBnTgJaP8BrdnZ7fOqcXLYvxF5rkkG8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=en&theme=groupedpa&include=eJxlj0EOgzAMBD-UkidFJnGD2zhGsYH29w1IPQAXSztajdaJkjAFqoa5gZFUn25oeKmTNSjxXLDipj4XGaE8OleJBCUwJoJQqL7V39FgEzI6_aoh-xEUXddDtL8oql5IV-cmy4xpBh8XNeGwt26wFzcclQz75Kc0PiarjwWI9fCI5ILBIPtsfI6Qr3mAF3zcSvubxx1Y0lLQVYSGamFsUOPkz_EHuwKAOw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rBGOKTba9fUmkqkq2P5bmaTQaT6YsTJGaYRlgJC3kE_JXdXKPStwrNjw0lCob1I_FVRJBjYyZIFZqNw1n5G1HRqffashhA0W34iHZb1BSfSMrugyZHXOHkKaacHy4TnAZD9yUDFfliwx-VtaQKhDrM0ekVIwGJRTjVwnlXXu4wtd_b11kFTxQhdEn4S4NmzkTqbGgxc8phuFVug4D1oh915DH7FD9H_Gz9blV0h2zawgD1eI2oKU9vEp3p8foz-tZ8qz4A9WhrPw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=fr&theme=groupedpa&include=eJxtkFFuwzAMQy_kxUcyFJtx1VlWECnNevu5AfbRZj8C-EBQlAoXFU7cHXUjZ-2xXNB0t6CPZCxrQ8dhsTadqX0NbpqZWhIUptS4f1u8oslvEAR7mkPiTIYw4in7X1A2-yAjum66rygrxbybq6SX6wKH8cBs7BiVF93krGwxN2KxM0e1NiSnGqvLu6T6qSe6089_Zy06Ch4wFUxZZdWO7uHBr3-ccxIte0MYm82esWtB6KAN5mneqOdbfJehQpvms3DSZeGM8dor-wUV7KUo	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rFGOETba9fclKVZVsfyzN02g0nkxZmCI1wzLASFrIF-Tv6uQRlbhXbHhoKFU2qB-LqySCGhkzQazUPjVckbcdGZ1-qyGHDRTdiodkv0FJ9Y2s6DJkdswdQppqwvHpusBlPHBTMlyVbzL4rKwhVSDWM0ekVIwGJRTjVwnlXXu4w9d_b91kFTxQhdEn4S4Nm7kOA9ZMfdeQx-xQ_R_xs_W5VdIds2sIA9XiNqClPbxK96DnrOf1LHlW_AEit6DN	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=fr&theme=groupedpa&include=eJxtkFGOwyAMRC9E4EjIAZe6xTjCTrN7-yWJ-tFmf5DmaTR6OFMWpkjNsHQwkhbyBfmHOnlFJV4qNtw0lCoz1GlwlURQI2MmiJXaU8MVebsjo9NfNeQwg6Ib85DsPZRUv8iYLl3WBfMCIa1qwnFvXeAobjgrGQ7lm3Q-lDWkCsR67IiUitGghGL8GaF8Zw8P-PnvWzcZghuqMPokvEjDZu5F-z2O17PkteKJdhlqu5WmLrWelelNp5O6htBRLc4dWrqHz_gHEaOiMg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=fr&theme=groupedpa&include=eJxtkNEOwjAIRX-otp_UsJZVtJSlMKd_b13ig5svJPeEnFzIlIUpUjMsHYykhXxC_qZOHlGJl4oNNw2lygT1MrhKIqiRMRPESu2u4Yy8XZHR6UsNOUyg6IYekn1FSfVAhrp0WRfMC4S0qgnHz9YJjsUNJyXDUXmWzntlDakCse4ekVIxGpRQjH8jlGP2cIPnv7NmGQU3VGH0SXiRhs3cgz7_2KdnyWtF1xA6qsWpQ0vX8Bvfo5qQmQ	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=fr&theme=groupedpa&include=eJxtkWFuwyAMhS-UwpGQAZe4xRhhSNbbj0Sbpjb7g_Q-zOPZjhSFyVHpmBp0kmLjBZmHLrI5Ja4ZC-5qUxYP-Ta5SiDIjjESuEzlqfaKTF-RcdGXdmTrQXGZ9hD6r1FQ_SDTOjUZFWMFG4Z2YXdUXeAs3NErdZyR79L4jKw2ZCDW00ckZXQdkk2d3yWkT23gAV__tXWXGXBHFUYThKsULH2p0GCOqa5qYxsVsvkjZpQ6fCZdMS4zj-rLFolzEMO72iSO0J1i2yigPb69zYsffgQvCA21O9-ghNW-y2WjYxPnaXi-yfgNMYC02A	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_W7K0wo0RAS8AoYgumUz6cpxbNvSKO0adsTCPxjaHTFw.js?scope=footer&delta=4&language=fr&theme=groupedpa&include=eJxtkFFuwzAMQy_kxUcyFJtx1VlWECnNevu5AfbRZj8C-EBQlAoXFU7cHXUjZ-2xXNB0t6CPZCxrQ8dhsTadqX0NbpqZWhIUptS4f1u8oslvEAR7mkPiTIYw4in7X1A2-yAjum66rygrxbybq6SX6wKH8cBs7BiVF93krGwxN2KxM0e1NiSnGqvLu6T6qSe6089_Zy06Ch4wFUxZZdWO7uHBr3-ccxIte0MYm82esWtB6KAN5mneqOdbfJehQpvms3DSZeGM8dor-wUV7KUo	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_T14PCMEwysfL2k4RndH276foXbXwjHfKSzq_KZMsRhE.js?scope=footer&delta=2&language=fr&theme=groupedpa&include=eJyFUltywyAMvJADR2JkUDAJIIpEHrcvuMm0iZ3pD7YW7c6uhAuOUjAhC_oKEihrt4HUiSe6GA6pRMx4Ze0jzRAPHWeyAaJJ6AKYGPKZ9RZSsmDCqUuClSfZMr8hXc5XagVdAW0bCyUzujZgb7zizEGw2zxSTatN1jZCSLzqEPmIRsBrL-m1BP9eKzjBbS_KkbrBKzIlVJZSoYxZpgIV-mjKwtrVViCqX0S1XNocAy_opu6H-a4zORyGh1P9-Kpx7IKK25yCGMp2y8LYB5lFORQIkRXD5f8mId_Tbtp-QrfZlEquWTGM9RIs_lnHJ-WEzOBxslRRj5dSc5_C6athve8nezLtgvY80w234uuAx1I_kqmse_54z_3Hym6mEfbQLx74CJcRKrKYuUK2i34tp0sYD309VeqciN9Wfj2N	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=0&language=fr&theme=groupedpa&include=eJyFUu1yAyEIfKGrPpLDKfFMVKxgPt6-6iTTJpdM_6isC-4iLjhKwYQs6CtIoKzdDlJHXuhsOKQSMeOFtY-0QvzqOJMNEE1CF8DEkE-s95CSDRMuvSRYeSRb5hekl_OVWkFXQNvGQskM1g7sxAuuHAS7zAPVNGWythFC4lmHyEc0Al57Sc8h-NdYwRGu76wcqAu8IFNCZSkVyphl6c8w33Qmh0tGqMhi1grZbvo5XM5hdGuuKpFrERdL07MRotgV_42WAhV6z8vG2tVWIKpfRLVc2hoDb-iG-2Fb33c1lreg4ramIIayxR0BY_-VLMqhQIisGM7_k4R8b92ONjv4KTchM_jhvaIeg1Vz93b8blhv77U_MrkfrHy8thva00pX5B1lftcYkY_JVObU_ABvaC2V	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_RrtRfb7O4tyq20I8HAh5ugARNRT7U38c1nq-UEnasWg.js?scope=footer&delta=1&language=fr&theme=groupedpa&include=eJyFU0FywyAM_JADhz6IkUHBJIAoEk77-4KTTpM4mV6AXSR5tcIuOErBhCzoK0igrN2OUieeaDUcUomY8cLaR5ohHjrPZANEk9AFMDHkM-s9pWTBhFMvCVZ-ky3zE9PL-UqtoCugbWOhZEbUjuyBF5w5CHaZR6ppk8naRgiJtzpEPqIR8NpLeoTgn7GCE3y9auVIXeAFmRIqS6lQxixTgQrdmrKwdrUViOqPUS2XNsfAC7qp62H-1pkcDsFDqb7taiwvScVtTkEMZbvPwtiNzKIcCoTIimH9P0jI9253Ydem22xKJdesGMa6Bot343hXOSEzeJwsVdTjpdTcXTh9Nqzf184sFLEL6BkYp4o3aNYPfQ_efsAuaM8zfeFewzaHMfu3yVS25_D2nvvBysvWhyeHfnHjhwcZoSKLmStku-hHOK1h_A_bqlLPifgDNYBMGA	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_aIAvGq7eNRsGvZlIgU2j3YMRdbhKl3QZJBjyUxNabBE.js?scope=footer&delta=1&language=fr&theme=groupedpa&include=eJxtkNEOgzAIRX-ok4d9UIOIXU1bHFTd_n7VJ932QnIOubkBEmWIpbIWTN30XFjf3Sia3RAHydHvu6BYoxT4Vd1kLrAkoQO9jGMkNvjjXBAJiX3FAKGNb-5wwtdVZhdUlpmHGYEWq5J962v1SBVCkh7TrYnCqGzV94qFHnBFJ6u3mOfEhTc7pZQJ50oP9OsdzuA27i1WbnfujziOMKCEMVsLfgD4aXeM	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_mCt4So2uTek6No4h97_wkg6IGgpUbg-smpy4rcd2i4k.js?scope=footer&delta=3&language=fr&theme=groupedpa&include=eJxlj0EOwyAMBD9E8aEPQg5xKRFgYkzS_r6kp6S9WJpdeaXxLASxKEnBZJe1k7ztgyWbOc6cozu6IKiRC_xHdmkmMIdETjFAGOeXLS74uobZBOFeaa4Ivjfl7MbOmEWvEBJPmG4jKIRCTd0kWPwTrmh4cy3mmqjQ3k5fQh6r-ie67Q5nMMqcXCB1a2cluKLZaWpRadgd-l-7Bj5hzG3MfgAAt3O8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_iSylPn089sIhpVyug30CEoKtZ_nGxo2gJ37vGZa-pqU.js?scope=footer&delta=2&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rBGOKTba9fUmkqkq2P5bmaTQaT6YsTJGaYRlgJC3kE_JXdXKPStwrNjw0lCob1I_FVRJBjYyZIFZqNw1n5G1HRqffashhA0W34iHZb1BSfSMrugyZHXOHkKaacHy4TnAZD9yUDFfliwx-VtaQKhDrM0ekVIwGJRTjVwnlXXu4wtd_b11kFTxQhdEn4S4NmzkTqbGgxc8phuFVug4D1oh915DH7FD9H_Gz9blV0h2zawgD1eI2oKU9vEp3p8foz-tZ8qz4A9WhrPw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_nAwz2YEaAxbDFWsmJiG8wnCN-YCyxn4aqvHFn9VBUEQ.js?scope=footer&delta=1&language=fr&theme=groupedpa&include=eJxlj0EOwyAMBD9E8aEPQg5xKRFgYkzS_r6kp6S9WJpdeaXxLASxKEnBZJe1k7ztgyWbOc6cozu6IKiRC_xHdmkmMIdETjFAGOeXLS74uobZBOFeaa4Ivjfl7MbOmEWvEBJPmG4jKIRCTd0kWPwTrmh4cy3mmqjQ3k5fQh6r-ie67Q5nMMqcXCB1a2cluKLZaWpRadgd-l-7Bj5hzG3MfgAAt3O8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_riWD4rTjAv4Wxz33OU1VESZ-2UgNU7nMabkZp9UfBG4.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJxlj0EOwyAMBD9E8aEPQg5xKRFgYkzS_r6kp6S9WJpdeaXxLASxKEnBZJe1k7ztgyWbOc6cozu6IKiRC_xHdmkmMIdETjFAGOeXLS74uobZBOFeaa4Ivjfl7MbOmEWvEBJPmG4jKIRCTd0kWPwTrmh4cy3mmqjQ3k5fQh6r-ie67Q5nMMqcXCB1a2cluKLZaWpRadgd-l-7Bj5hzG3MfgAAt3O8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_riWD4rTjAv4Wxz33OU1VESZ-2UgNU7nMabkZp9UfBG4.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJxtkNEOgzAIRX-ok4d9UIOIXU1bHFTd_n7VJ932QnIOubkBEmWIpbIWTN30XFjf3Sia3RAHydHvu6BYoxT4Vd1kLrAkoQO9jGMkNvjjXBAJiX3FAKGNb-5wwtdVZhdUlpmHGYEWq5J962v1SBVCkh7TrYnCqGzV94qFHnBFJ6u3mOfEhTc7pZQJ50oP9OsdzuA27i1WbnfujziOMKCEMVsLfgD4aXeM	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yH4hqIyHkVZ5Z9hO4Tj0Vr7cgVmg0PQTn3ACanjMMU0.js?scope=footer&delta=3&language=fr&theme=groupedpa&include=eJyFU0FywyAM_JADhz6IkUHBJIAoEk77-4KTTpM4mV6AXSR5tcIuOErBhCzoK0igrN2OUieeaDUcUomY8cLaR5ohHjrPZANEk9AFMDHkM-s9pWTBhFMvCVZ-ky3zE9PL-UqtoCugbWOhZEbUjuyBF5w5CHaZR6ppk8naRgiJtzpEPqIR8NpLeoTgn7GCE3y9auVIXeAFmRIqS6lQxixTgQrdmrKwdrUViOqPUS2XNsfAC7qp62H-1pkcDsFDqb7taiwvScVtTkEMZbvPwtiNzKIcCoTIimH9P0jI9253Ydem22xKJdesGMa6Bot343hXOSEzeJwsVdTjpdTcXTh9Nqzf184sFLEL6BkYp4o3aNYPfQ_efsAuaM8zfeFewzaHMfu3yVS25_D2nvvBysvWhyeHfnHjhwcZoSKLmStku-hHOK1h_A_bqlLPifgDNYBMGA	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yH4hqIyHkVZ5Z9hO4Tj0Vr7cgVmg0PQTn3ACanjMMU0.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rBGOKTba9fUmkqkq2P5bmaTQaT6YsTJGaYRlgJC3kE_JXdXKPStwrNjw0lCob1I_FVRJBjYyZIFZqNw1n5G1HRqffashhA0W34iHZb1BSfSMrugyZHXOHkKaacHy4TnAZD9yUDFfliwx-VtaQKhDrM0ekVIwGJRTjVwnlXXu4wtd_b11kFTxQhdEn4S4NmzkTqbGgxc8phuFVug4D1oh915DH7FD9H_Gz9blV0h2zawgD1eI2oKU9vEp3p8foz-tZ8qz4A9WhrPw	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJxtkFFuAyEMRC9E4UjICw7rFGOETba9fclKVZVsfyzN02g0nkxZmCI1wzLASFrIF-Tv6uQRlbhXbHhoKFU2qB-LqySCGhkzQazUPjVckbcdGZ1-qyGHDRTdiodkv0FJ9Y2s6DJkdswdQppqwvHpusBlPHBTMlyVbzL4rKwhVSDWM0ekVIwGJRTjVwnlXXu4w9d_b91kFTxQhdEn4S4Nm7kOA9ZMfdeQx-xQ_R_xs_W5VdIds2sIA9XiNqClPbxK96DnrOf1LHlW_AEit6DN	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJxtkFFuwzAMQy_kxUcyFJtx1VlWECnNevu5AfbRZj8C-EBQlAoXFU7cHXUjZ-2xXNB0t6CPZCxrQ8dhsTadqX0NbpqZWhIUptS4f1u8oslvEAR7mkPiTIYw4in7X1A2-yAjum66rygrxbybq6SX6wKH8cBs7BiVF93krGwxN2KxM0e1NiSnGqvLu6T6qSe6089_Zy06Ch4wFUxZZdWO7uHBr3-ccxIte0MYm82esWtB6KAN5mneqOdbfJehQpvms3DSZeGM8dor-wUV7KUo	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJxtkWFuwyAMhS-UwpGQAZe4xRhhSNbbj0Sbpjb7g_Q-zOPZjhSFyVHpmBp0kmLjBZmHLrI5Ja4ZC-5qUxYP-Ta5SiDIjjESuEzlqfaKTF-RcdGXdmTrQXGZ9hD6r1FQ_SDTOjUZFWMFG4Z2YXdUXeAs3NErdZyR79L4jKw2ZCDW00ckZXQdkk2d3yWkT23gAV__tXWXGXBHFUYThKsULH2p0GCOqa5qYxsVsvkjZpQ6fCZdMS4zj-rLFolzEMO72iSO0J1i2yigPb69zYsffgQvCA21O9-ghNW-y2WjYxPnaXi-yfgNMYC02A	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJxtkNEOwjAIRX-otp_UsJZVtJSlMKd_b13ig5svJPeEnFzIlIUpUjMsHYykhXxC_qZOHlGJl4oNNw2lygT1MrhKIqiRMRPESu2u4Yy8XZHR6UsNOUyg6IYekn1FSfVAhrp0WRfMC4S0qgnHz9YJjsUNJyXDUXmWzntlDakCse4ekVIxGpRQjH8jlGP2cIPnv7NmGQU3VGH0SXiRhs3cgz7_2KdnyWtF1xA6qsWpQ0vX8Bvfo5qQmQ	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJxtkFGOwyAMRC9E4EjIAZe6xTjCTrN7-yWJ-tFmf5DmaTR6OFMWpkjNsHQwkhbyBfmHOnlFJV4qNtw0lCoz1GlwlURQI2MmiJXaU8MVebsjo9NfNeQwg6Ib85DsPZRUv8iYLl3WBfMCIa1qwnFvXeAobjgrGQ7lm3Q-lDWkCsR67IiUitGghGL8GaF8Zw8P-PnvWzcZghuqMPokvEjDZu5F-z2O17PkteKJdhlqu5WmLrWelelNp5O6htBRLc4dWrqHz_gHEaOiMg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJyFUu1yAyEIfKGrPpLDKfFMVKxgPt6-6iTTJpdM_6isC-4iLjhKwYQs6CtIoKzdDlJHXuhsOKQSMeOFtY-0QvzqOJMNEE1CF8DEkE-s95CSDRMuvSRYeSRb5hekl_OVWkFXQNvGQskM1g7sxAuuHAS7zAPVNGWythFC4lmHyEc0Al57Sc8h-NdYwRGu76wcqAu8IFNCZSkVyphl6c8w33Qmh0tGqMhi1grZbvo5XM5hdGuuKpFrERdL07MRotgV_42WAhV6z8vG2tVWIKpfRLVc2hoDb-iG-2Fb33c1lreg4ramIIayxR0BY_-VLMqhQIisGM7_k4R8b92ONjv4KTchM_jhvaIeg1Vz93b8blhv77U_MrkfrHy8thva00pX5B1lftcYkY_JVObU_ABvaC2V	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_2wiOLDdJN3fTBAcipHy_8KNGt9bRokV5WBI0_X_duek.vsmCDf7OQ3xVdCWdY2OQioQNjq1c7W8__zVbXxrxAMs.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_1woVuTYaOTc9db19BvtYERQ-r3zrWbaX8Iy9t_Z2qoM.nnBqb3vFUd32JsFc12wcJRwACYcbaXfKsLO_JTkcvZo.js?v=4.2.0	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_4XxVVW5R5bcOIwa8ncokEr27NxDWvx0Hikt8sRB-J0U.nypyGiPTj6Y8noLxpxsZ1r7i4Am20wRfDwrKdZQDn1s.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_4SB-P4kqA9WDNAdYraPu8upWBFcC9Bo5dN4dewLcY3w.7jm-KcsZ3l6hhew89PzZTBXxjM26JJastijqRf9R-a0.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/js_yU0MTdfnNNsIdkgpyun5D7Vg-6pSD7AckNwns2kooBs.js?scope=header&delta=0&language=fr&theme=groupedpa&include=eJyFU0FywyAM_JADhz6IkUHBJIAoEk77-4KTTpM4mV6AXSR5tcIuOErBhCzoK0igrN2OUieeaDUcUomY8cLaR5ohHjrPZANEk9AFMDHkM-s9pWTBhFMvCVZ-ky3zE9PL-UqtoCugbWOhZEbUjuyBF5w5CHaZR6ppk8naRgiJtzpEPqIR8NpLeoTgn7GCE3y9auVIXeAFmRIqS6lQxixTgQrdmrKwdrUViOqPUS2XNsfAC7qp62H-1pkcDsFDqb7taiwvScVtTkEMZbvPwtiNzKIcCoTIimH9P0jI9253Ydem22xKJdesGMa6Bot343hXOSEzeJwsVdTjpdTcXTh9Nqzf184sFLEL6BkYp4o3aNYPfQ_efsAuaM8zfeFewzaHMfu3yVS25_D2nvvBysvWhyeHfnHjhwcZoSKLmStku-hHOK1h_A_bqlLPifgDNYBMGA	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_4XxVVW5R5bcOIwa8ncokEr27NxDWvx0Hikt8sRB-J0U.nypyGiPTj6Y8noLxpxsZ1r7i4Am20wRfDwrKdZQDn1s.js?v=8.9.2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_2wiOLDdJN3fTBAcipHy_8KNGt9bRokV5WBI0_X_duek.vsmCDf7OQ3xVdCWdY2OQioQNjq1c7W8__zVbXxrxAMs.js?v=1.x	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_54apoD1TmygwkyR5yuOKpr4r01TsTp6VOfohfP7rnA0.29wUqqoUwCP5OrMMM1ndhB03hjk8OhputCBDUfnMJ8w.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_4XxVVW5R5bcOIwa8ncokEr27NxDWvx0Hikt8sRB-J0U.nypyGiPTj6Y8noLxpxsZ1r7i4Am20wRfDwrKdZQDn1s.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_5lyEgtuYzFbknt789sXbvgY6WOEBhn68zCRaGR5wIJc.-wAhIhsm9eN2Tlo_obJEKsf18El6LHPJiTEPXZjmQ2o.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_8Sbk5ENJXWdlUyQ6LKkwF1mA8vWSAML09cJDOSzU8mk.AFR0dK21KueMjq3QT5qlYcYwo72x5zfz-ZoGIHq3kpw.js?v=1.5.1	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_9f22eyLUfO4OlcI3SfXFZLRyS0TVMBAZiW3EECeVeI8.X8erjspBSXZcQr9NJOPQvNS_Vk6-DEfHOnlXrR_zFzc.js?s70d8c	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_9f22eyLUfO4OlcI3SfXFZLRyS0TVMBAZiW3EECeVeI8.X8erjspBSXZcQr9NJOPQvNS_Vk6-DEfHOnlXrR_zFzc.js?s7f0jz	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_A7gHA2QrewvOIEgS4SG3goDtUVdqeKRU7jEygruAKRg.HYjcnbD2aSr9MVFGc0pMnRQZ32sVjg0xgNtjGp7FTws.js?s70d8c	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_A7gHA2QrewvOIEgS4SG3goDtUVdqeKRU7jEygruAKRg.HYjcnbD2aSr9MVFGc0pMnRQZ32sVjg0xgNtjGp7FTws.js?s7f0jz	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_A7gHA2QrewvOIEgS4SG3goDtUVdqeKRU7jEygruAKRg.ioqYWxC_wXEJXmuT9aVBZzsMb8zeEM5desAWSIPO0F8.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_A7gHA2QrewvOIEgS4SG3goDtUVdqeKRU7jEygruAKRg.ioqYWxC_wXEJXmuT9aVBZzsMb8zeEM5desAWSIPO0F8.js?rc31vs	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_AfTiY-Uy3AtCiqPGXPig9v_P_e596rKHqNTpY1ZGuI4.si_Rnsn9YzmlszT_vg_6R9iW7tgtpG5DL2S0UeiAP4k.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_A7gHA2QrewvOIEgS4SG3goDtUVdqeKRU7jEygruAKRg.ioqYWxC_wXEJXmuT9aVBZzsMb8zeEM5desAWSIPO0F8.js?rizdsg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_AfTiY-Uy3AtCiqPGXPig9v_P_e596rKHqNTpY1ZGuI4.si_Rnsn9YzmlszT_vg_6R9iW7tgtpG5DL2S0UeiAP4k.js?rizdsg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_AfTiY-Uy3AtCiqPGXPig9v_P_e596rKHqNTpY1ZGuI4.si_Rnsn9YzmlszT_vg_6R9iW7tgtpG5DL2S0UeiAP4k.js?rc31vs	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_HUpcuWgtltnvzZqlrvB1GpqoJIxfOxuQRdw1R0RH11E.qMhpe-6S8VwsJ9YO7DjftqMp-GpcIBYE3SvAE-kGDNw.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_Hpe5jrMuKXrV4HSTMApXJsNBxraAgcHUrTjxkwWKqy8.nGssJ1ZoeTPPBTGvdQXvMiVFKvoKgGh_DlwioZbKeHM.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_Hpe5jrMuKXrV4HSTMApXJsNBxraAgcHUrTjxkwWKqy8.nGssJ1ZoeTPPBTGvdQXvMiVFKvoKgGh_DlwioZbKeHM.js?v=8.9.2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_Hpe5jrMuKXrV4HSTMApXJsNBxraAgcHUrTjxkwWKqy8.nGssJ1ZoeTPPBTGvdQXvMiVFKvoKgGh_DlwioZbKeHM.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_KRjtvzl6UujB23-j_sF6dqOcbqg2z8ej98A8RU9bGsg.uxvhogoBdWm3GZVP2svj0f7cEACEGPheQgCoo8rta9M.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_KRjtvzl6UujB23-j_sF6dqOcbqg2z8ej98A8RU9bGsg.ExySngyrpPMaNIW_Z4eByiiZN7uRWx5uVlBIQwyhH08.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_KRjtvzl6UujB23-j_sF6dqOcbqg2z8ej98A8RU9bGsg.uxvhogoBdWm3GZVP2svj0f7cEACEGPheQgCoo8rta9M.js?v=8.9.2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_PT3-QdWS7VpUzacPg6ST6Bb0YaFMTUOEHfqijeUML1w.TAszOBscz7XX1WF5sj5r1bjdMnBNShv6p1WfSDo_vyg.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_PT3-QdWS7VpUzacPg6ST6Bb0YaFMTUOEHfqijeUML1w.h-WAruDYQ5VGbYcyQWFOpBHIBsmNIEdwC8koBEQUe6E.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_PT3-QdWS7VpUzacPg6ST6Bb0YaFMTUOEHfqijeUML1w.h-WAruDYQ5VGbYcyQWFOpBHIBsmNIEdwC8koBEQUe6E.js?v=8.9.2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_QORJnkqmeqVgw8YsWeyWtT6v_UcWtYXJwxLLVylXVvk.0XaB2GCmq8uek4D01B9hgvCmDdGRvkOf8-S19CIxJkM.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_RpLV1j1SEgkAOBNxIxvzKXRlefOlhPa03lpGt46bJEg.W75D72kICfFg-08wN2QOM-WauTH1bgGTVCyUNrcqeqs.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_V1oRQ-kJlXBZaEklOtPUe_1t8-l0RS94HJ3gsqxKikc.GzdfX5LxywvGultB7Oy3k9l_K-UPSutomTWb4sDvPOU.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_QORJnkqmeqVgw8YsWeyWtT6v_UcWtYXJwxLLVylXVvk.0XaB2GCmq8uek4D01B9hgvCmDdGRvkOf8-S19CIxJkM.js?v=1.0.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_54apoD1TmygwkyR5yuOKpr4r01TsTp6VOfohfP7rnA0.29wUqqoUwCP5OrMMM1ndhB03hjk8OhputCBDUfnMJ8w.js?rizdsg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_V1oRQ-kJlXBZaEklOtPUe_1t8-l0RS94HJ3gsqxKikc.U6WkJsfOTuvRWm1h_rg6fG-ikwouLRkBuo0fYNDmA7o.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_V1oRQ-kJlXBZaEklOtPUe_1t8-l0RS94HJ3gsqxKikc.U6WkJsfOTuvRWm1h_rg6fG-ikwouLRkBuo0fYNDmA7o.js?v=8.9.2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_a0jm3VdmdpN11V3PY9tIdAn3QqbFdUo-fcBcThQZrr0.yWF2oQ8PIHROwJHwL2QcOI0uMBSi3q-yKKQuB85EhoE.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_WmhavmnC0K35xZ9vLX51qtRqFT74puvZXIMWnNUYpbM.KBsJd4BsJZlR1sykyhEB3r6KbUBF1UvYBEBSPAzdNsI.js?v=5.3.3	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_a5UiM5riCCx8GQk4IPly81KWzPcsHnVhzndmZfqUaTw.JLX6Ey0OXlmf8oVmGe2r1IrUccq2s59zO_7I465YyQc.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_a5UiM5riCCx8GQk4IPly81KWzPcsHnVhzndmZfqUaTw.JLX6Ey0OXlmf8oVmGe2r1IrUccq2s59zO_7I465YyQc.js?v=2.2.3	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_a5UiM5riCCx8GQk4IPly81KWzPcsHnVhzndmZfqUaTw.JLX6Ey0OXlmf8oVmGe2r1IrUccq2s59zO_7I465YyQc.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_auGPmS4cF9TsbGXFseYml5QbO8vj66-oK7c2Mf0ZoIw.MVynKrSKxdbOKiKjFuD4csN5HlOvZY8lDZ89zKm62u0.js?s70d8c	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_auGPmS4cF9TsbGXFseYml5QbO8vj66-oK7c2Mf0ZoIw.MVynKrSKxdbOKiKjFuD4csN5HlOvZY8lDZ89zKm62u0.js?s7f0jz	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_dHny-amWPLMeggFZO0q9qztnliwo_qRE1s-q_BE-jjU.3Jy_GbSLrg0o9y5Z5n1uw0qxZECH7C6OQpVBgNFYa0g.js?v=3.7.3	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_dxIVcwvQ00owLGoUGPTfRYXU-T5rnj8Xi0cXfb3Kn58.9_aliU8dGd2tb6OSsuzixeV4y_faTqgFtohetphbbj0.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_dxIVcwvQ00owLGoUGPTfRYXU-T5rnj8Xi0cXfb3Kn58.9_aliU8dGd2tb6OSsuzixeV4y_faTqgFtohetphbbj0.js?v=3.5.1	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_gYYvSttxk79-EyFetO0gfxMVq_VuU1dz1C7V5eAeANI.eT4f_JOvcaTla5DqT9QhN1MlSLOVjdwWz4FVvzTfXmo.js?rc31vs	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_gYYvSttxk79-EyFetO0gfxMVq_VuU1dz1C7V5eAeANI.eT4f_JOvcaTla5DqT9QhN1MlSLOVjdwWz4FVvzTfXmo.js?s70d8c	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_gYYvSttxk79-EyFetO0gfxMVq_VuU1dz1C7V5eAeANI.eT4f_JOvcaTla5DqT9QhN1MlSLOVjdwWz4FVvzTfXmo.js?s7f0jz	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_gricEdMqg3CUTrgVmBbMvOLIfVPUmtiuZo5O4aG-RPI.kuCfa0Nl8cqPnvCoMlhLIZ3lxwiqyYKfYzJcFl_Ockc.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_lw_btcAManHmkQZ2mwEpsp1uL0QqkYwC2Ri5m0iPRq0.3Y5jNKFF01TTyVsRZbhgBV3HIY6Z_DdTWxtOnRlARDw.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_kKeQAzce3XoKsrYpYGtiYHBTJl1Nty2gplIH32qvFKQ.T69XwY5zLqL1SLkBOrOXXy-lIIoiHghcUFk_Y-2nQ6g.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_lw_btcAManHmkQZ2mwEpsp1uL0QqkYwC2Ri5m0iPRq0.3Y5jNKFF01TTyVsRZbhgBV3HIY6Z_DdTWxtOnRlARDw.js?v=8.9.2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_lw_btcAManHmkQZ2mwEpsp1uL0QqkYwC2Ri5m0iPRq0.3Y5jNKFF01TTyVsRZbhgBV3HIY6Z_DdTWxtOnRlARDw.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_m1euKWqlAcB32-0VB-knUuV25wbUWC4Ddys5oIZ-8Rg.RMcHg-GMEzBVa2jsSNP9CqQc43J9nuJgVtjAB5R_-lI.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_mFzUkjUxStqgHC8aG7xRbdL6fE1PCi6EiNgqsEIWhqc.AmJrN5cIvjCXoflH196uJrGsXtsbQ_h9Bbde81TlOtY.js?s70d8c	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_mG9Novafs4shjQCvsjDT57iw6KqBSH6_VcThC2xe9sA.N9-hbk-QM7Svdmr_9iqCC7dSgPyIkMyUWCLKiuUJ3j8.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_mFzUkjUxStqgHC8aG7xRbdL6fE1PCi6EiNgqsEIWhqc.AmJrN5cIvjCXoflH196uJrGsXtsbQ_h9Bbde81TlOtY.js?s7f0jz	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_mG9Novafs4shjQCvsjDT57iw6KqBSH6_VcThC2xe9sA.N9-hbk-QM7Svdmr_9iqCC7dSgPyIkMyUWCLKiuUJ3j8.js?v=8.9.2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_owkOoJZeILUNIYL2msDME7z632XZ_GeHpxYExB2hsaM.5PH1X5FxI1kHmCqoxdMwF_8J5_b3xEn4tfboATm1IOk.js?s70d8c	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_owkOoJZeILUNIYL2msDME7z632XZ_GeHpxYExB2hsaM.5PH1X5FxI1kHmCqoxdMwF_8J5_b3xEn4tfboATm1IOk.js?s7f0jz	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_ozhefMuyc6pMMH0PXaOPeZfrBA27HKhwXqiCVZ6lxvo.stTssAJ_Yn4HwB4RE-JX2POE_lUuHXWD04K10PX0NuM.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_spuSOw4GUoe_v9G0xcXTAPWTxyL9gWXenTooQczUqDM.Xxrdry6fWSKu1j2ALyuK_gHFQ-2Bp76ZrR6f3QXI47Y.js?v=4.2.8	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_w0iO3No0CsyHgJmryEbhwpkh5zx6m6dhvawBt4ufwyA.HRN_m4FplP890kDvBJQuv0fEgTHDKwrMZA2zBldV1JY.js?v=1.0.1	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_wtJSImQ8pFM6pg-FBGbMafc3QuyNiwpKfGZtNQjebpM.y6bj5qKLZSqFrLUFTuoywq12m3DWbK9cS14TOBhr0vA.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_dxIVcwvQ00owLGoUGPTfRYXU-T5rnj8Xi0cXfb3Kn58.pvPw-upLPUjgMXY0G-8O0xUf-_Im1MZjXxxgOcBQBXU.js?v=3.6.3	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_gYYvSttxk79-EyFetO0gfxMVq_VuU1dz1C7V5eAeANI.eT4f_JOvcaTla5DqT9QhN1MlSLOVjdwWz4FVvzTfXmo.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_z3zw0MjIjGT5ptAZFWs1L3eT3GQzwct8T8iaJ2rJ_B8.pY08YOjYAqE1xvznEx0mrfjdbTrAxUpQzL2mf77XxkM.js?v=9.5.9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_zooHWvePXYRsHZhQmdlsgGWgHrCRrJF-mHpLTj3JEew.Xs8vTYPmJg2r1uxI522N3rzPlWVj80ByIhv5YNO4wlU.js	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_zooHWvePXYRsHZhQmdlsgGWgHrCRrJF-mHpLTj3JEew.Xs8vTYPmJg2r1uxI522N3rzPlWVj80ByIhv5YNO4wlU.js?rc31vs	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_zooHWvePXYRsHZhQmdlsgGWgHrCRrJF-mHpLTj3JEew.Xs8vTYPmJg2r1uxI522N3rzPlWVj80ByIhv5YNO4wlU.js?rizdsg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_zooHWvePXYRsHZhQmdlsgGWgHrCRrJF-mHpLTj3JEew.Xs8vTYPmJg2r1uxI522N3rzPlWVj80ByIhv5YNO4wlU.js?s70d8c	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/js/optimized/js_zooHWvePXYRsHZhQmdlsgGWgHrCRrJF-mHpLTj3JEew.Xs8vTYPmJg2r1uxI522N3rzPlWVj80ByIhv5YNO4wlU.js?s7f0jz	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/languages/fr_ljVCpZkynXu7D0iH8gwB2wmLo1vysUIxbueEQxiwfuQ.js?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/logo-DPA.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/2024-08/iStock-506694993.jpg?itok=jt9P-K3I	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/themes/custom/intact/assets/dist/fonts/icomoon-travel-touchscreen/icomoon.jc7t3i	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/favicon.ico	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/src/images/logos/logo-white-fr.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/js/app.min.js?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/themes/custom/intact/assets/dist/fonts/icomoon-shops-and-trucks/icomoon.jc7t3i	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/images/white-triangle.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/images/slider-bot-arrow.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/images/picto-warning.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/images/img-info.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/themes/custom/intact/assets/dist/fonts/icomoon-car/icomoon.jc7t3i	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/images/bottom-arrow.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/noway/noway-bold-webfont.woff2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/images/Rolling.svg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/glyphicons-halflings-regular/glyphicons-halflings-regular.woff2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/noway/noway-bold-webfont.woff	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/glyphicons-halflings-regular/glyphicons-halflings-regular.woff	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/glyphicons-halflings-regular/glyphicons-halflings-regular.ttf	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/glyphicons-halflings-regular/glyphicons-halflings-regular.svg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/glyphicons-halflings-regular/glyphicons-halflings-regular.eot	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/dm-serif-text/dmserifdisplay-regular-webfont.woff2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/css/owl.video.play.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/fonts/dm-serif-text/dmserifdisplay-regular-webfont.woff	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/themes/custom/groupedpa/assets/dist/css/app.min.css?pdxk0s	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2025-03/DPA2025_HERO_1920x600_MOTO_v2.png?itok=GgTf56D4	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2025-03/DPA2025_HERO_1920x600_FERME_v2.png?itok=gZP8hzuu	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2025-03/DPA2025_HERO_1920x600_MAISON_v2.png?itok=6jxlqkjP	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2025-03/DPA2025_HERO_1920x600_ENTREPRISE_v2.png?itok=SK0eMUuV	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2025-03/DPA2025_HERO_1920x600_AUTO_v2%20(1).png?itok=f3K1d2kj	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2023-04/DPA-Hero-1920x600-Entreprise-2x.png?itok=l1m7rcod	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2023-04/DPA-Hero-1920x600-Moto-A-2x.png?itok=QccU6ebd	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2023-04/DPA-Hero-1920x600-Habitation-2x.png?itok=Cx8CmlFv	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2023-04/DPA-Hero-1920x600-Auto-2x.png?itok=ZlXt7cjY	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w720/public/2023-04/DPA-Hero-1920x600-Agricole-2x.png?itok=nvQwk3Zk	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2025-03/DPA2025_HEROMOBILE_1920x800_MOTO.png?itok=2fA7VmvC	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2025-03/DPA2025_HEROMOBILE_1920x800_MAISON.png?itok=3VOECfxv	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2025-03/DPA2025_HEROMOBILE_1920x800_FERME.png?itok=Xoac4IN-	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2025-03/DPA2025_HEROMOBILE_1920x800_ENTREPRISE.png?itok=5ksGoNog	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2025-03/DPA2025_HEROMOBILE_1920x800_AUTO.png?itok=Pc_kOuHU	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2023-05/DPA-Hero-1920x800-Moto-Mai-2x.png?itok=GqaJLgXF	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2023-05/DPA-Hero-1920x800-Habitation-Mai-2x.png?itok=JmwdD4YK	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2023-05/DPA-Hero-1920x800-Entreprise-Mai-2x_1.png?itok=ONgUzq-7	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2023-05/DPA-Hero-1920x800-Auto-Mai-2x_1.png?itok=lxmU_okW	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w410/public/2023-05/DPA-Hero-1920x800-Agricole-Mai-2x.png?itok=KzwTsH6f	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2025-03/DPA2025_HERO_1920x600_MOTO_v2.png?itok=7hyt1Q7P	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2025-03/DPA2025_HERO_1920x600_FERME_v2.png?itok=Ols72h_4	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2025-03/DPA2025_HERO_1920x600_ENTREPRISE_v2.png?itok=NClWf5bE	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2025-03/DPA2025_HERO_1920x600_MAISON_v2.png?itok=j0NdN8Ee	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2025-03/DPA2025_HERO_1920x600_AUTO_v2%20(1).png?itok=xLCVx5ji	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2023-04/DPA-Hero-1920x600-Moto-A-2x.png?itok=4lWo7F8n	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2023-04/DPA-Hero-1920x600-Habitation-2x.png?itok=abOvOc_R	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2023-04/DPA-Hero-1920x600-Auto-2x.png?itok=vNrkOVsl	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2023-04/DPA-Hero-1920x600-Entreprise-2x.png?itok=47b0UYCk	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/w1920/public/2023-04/DPA-Hero-1920x600-Agricole-2x.png?itok=7hYtl4KY	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2024-07/Couverture%20agricole.png?itok=j5ASq_GN	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2022-04/assurance-responsabilite.jpg?itok=r62z2pEm	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2020-06/assurance-habitation%20(1).jpg?itok=4fjvNqPA	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2020-06/assurance-habitation%20(1).jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2020-06/assurance-auto.jpg?itok=eY43nKPT	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2020-06/assurance-auto.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2017-11/assurance-vr.jpg?itok=zUu31MnU	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2017-11/assurance-vr.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2017-11/assurance-flotte.jpg?itok=KGrsrtLn	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2017-11/assurance-flotte.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2017-11/assurance-agricole.jpg?itok=TbDcr1GI	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2017-09/assurance-habitation.jpg?itok=hwkCfGl9	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_product_home_590_740/public/2017-09/assurance-auto.jpg?itok=K7Z_8-wC	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_200_100/public/2025-06/Logo_Intact_FR.png?itok=6r1Sy5QM	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_200_100/public/2025-06/Logo_Intact_FR.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_200_100/public/2017-09/logo-intact-footer.png?itok=MKkj22Gv	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail_200_100/public/2017-09/logo-intact-footer.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/thumbnail/public/2018-03/thumb_groupedpa.jpg?itok=xmlE46J1	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/square_image_400_400/public/2025-08/int-contest2025-website-virage-qr-desktop-1080x1080-fr.png?itok=nbTTUIXg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/square_image_400_400/public/2024-08/assurance-proprietaire-4.jpg?itok=UjiPH_QG	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/square_image_400_400/public/2024-08/assurance-proprietaire-3.jpg?itok=MQ3CSBVR	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/square_image_400_400/public/2024-08/assurance-proprietaire-2.jpg?itok=_zWWmjnE	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/square_image_400_400/public/2024-08/assurance-proprietaire-1.jpg?itok=CKWgUur4	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/square_image_400_400/public/2024-08/assurance-locataire-1.jpg?itok=eiLl4C57	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/square_image_400_400/public/2023-06/Soutenir_cause.png?itok=5hjuQAAo	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/broker_photo_home_440_565/public/2022-03/michelle-genereux.png?itok=y4hgNCSa	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/broker_photo_home_440_565/public/2022-03/michelle-genereux.png	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/broker_photo_home_440_565/public/2018-02/alexandre-desy-2.png?itok=pSoks3N2	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/blog_post_580_362/public/blog/2022-09/blogue-virage-empreintecarbone-1400x500.jpg?itok=mxA4aeMm	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/blog_post_580_362/public/blog/2025-02/chauffage-1400x500.jpg?itok=NNyornLz	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/blog_post_580_362/public/blog/2022-09/blogue-virage-empreintecarbone-1400x500.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/blog_post_580_362/public/blog/2022-04/responsabilité-civile-1400x500-banner.jpg?itok=yZtaY5iT	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/blog_post_580_362/public/blog/2022-04/responsabilité-civile-1400x500-banner.jpg	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/blog_post_265_165/public/2024-08/Untitled%20design%20(36).png?itok=4hSPtu3A	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/blog_post_265_165/public/2024-08/Blog%201200X675.png?itok=wKHsnqLx	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/blog_post_265_165/public/2024-04/1-VenteVéhicule-Cabinet.jpg?itok=aFYU9H_E	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2025-02/eviter-les-chutes-hiver-1400x500.jpg?itok=wqCZ7Csx	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2025-02/chauffage-1400x500.jpg?itok=ms6u_UCy	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2024-08/Untitled%20design%20(36).png?itok=AfDsB3aa	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2024-08/iStock-1296161113.jpg?itok=zuE0LL_M	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2024-05/AdobeStock_750561878_1.jpeg?itok=jea29wiq	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2024-02/iStock-1355162946_2.jpg?itok=sJ6rzEg5	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2024-04/1-VenteVéhicule-Cabinet.jpg?itok=mfDT6pQj	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2024-01/1-Assurance_Colocation.jpg?itok=pZPsCyyE	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2023-08/panne-de-sourant.jpg?itok=YozFVszZ	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/sites/groupedpa/files/styles/1400x500/public/blog/2022-09/blogue-virage-economiemaison-1400x500.png?itok=tyMWTp-E	404		Not Found	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/38	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/109	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/111	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/110	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/45	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/49	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/51	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/54	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/654	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/689	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/681	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/7	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/680	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/en/node/81	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/a-propos/blogue/boite-a-outils/comment-economiser-25-sur-votre-prime-dassurance-auto	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/agente-de-service-a-la-clientele-0	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/aspirante-courtierere-en-assurance-de-dommages-des-particuliers-service	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/aspirante-courtierere-en-assurance-des-particuliers-service	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/charge-de-comptes-assurance-des-entreprises	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/conseillerere-en-technologies-de-linformation	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/courtier-assurance-des-particuliers-perso	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/courtier-assurance-des-particuliers-section-service	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/courtierere-assurance-de-dommages-des-particuliers-module	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/courtierere-assurance-des-particuliers-et-entreprises-division-groupe	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/courtierere-en-assurance-de-dommages-des-particuliers-et-entreprises-division-groupe	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/courtierere-en-assurance-de-dommages-service-nouveauxelles-diplomees-a-laec-en-assurance	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/coutierere-en-assurance-des-particuliers-ventes-et-prospection-100-commissions	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/coutierere-assurance-des-particuliers-ventes-et-prospection-100-commissions	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/employee-au-service-a-la-clientele-et-soutien-administratif	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/employee-au-service-a-la-clientele-et-soutien-administratif-0	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/carrieres/secretaire-receptionniste-2	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/concours-partenaire-acry	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/entreprises/biens-et-responsabilite-civile-des-entreprises	403		Forbidden	Non indexable	Erreur client 
text/html; charset=UTF-8	https://www.groupedpa.com/fr/entreprises/vehicules-commerciaux	403		Forbidden	Non indexable	Erreur client 
text/html; charset=utf-8	https://www.groupedpa.com/frrobots.txt	403		Forbidden	Non indexable	Erreur client 																								
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
							