Guide de rédaction																									
																									
Légende :																									
En gras : modifications à faire																									
En bleu : commentaire / explication pour le développeur																									
																									
### Méta- titre																									
Appartements neufs à louer à Gatineau (Hull) | TourLiv																									
																									
### Meta description																									
Appartements modernes de 1 à 3 chambres au 202 rue Papineau, Gatineau. Eau chaude, wifi et électroménagers inclus. Visitez TourLiv dans le secteur Hull.																									
																									
																									
																									
																									
1. Hero																									
Bienvenue sur TourLiv																									
H1 : Appartements modernes à louer à Gatineau																									
																									
Sous-titre optimisé :																									
Découvrez l’élégance moderne de nos résidences neuves à Hull, à quelques minutes d’Ottawa.																									
CTA : Contactez-nous																									
																									
																									
																									
2. Aperçu du batiment																									
H2: Appartements de qualité supérieure au coeur de Hull																									
																									
Paragraphe optimise :**																									
TourLiv propose un large choix d'appartements à louer, de 1 à 3 chambres, dans le secteur Hull de Gatineau. Les surfaces sont supérieures aux standards du marché et la multitude de plans différents saura plaire aux familles, aux couples ou aux célibataires. Les cuisines et les salles de bains sont dotées de comptoirs en quartz. Chaque appartement dispose d'un balcon ou d'une terrasse. La construction entièrement en béton assure une insonorisation exceptionnelle.																									
																									
Icones = changer le type de heading :																									
Les 6 icones gardent leur texte et leur visuel. La seule modification est technique : dans Elementor, changer le widget de "Heading" a "Text Editor" ou mettre la balise HTML en `<p>` au lieu de `<h2>`.																									
Textes des icones (garder tels quels sauf ajustements mineurs) :																									
Salle de sport 																									
Eau chaude incluse																									
Wifi inclus																									
Électroménagers inclus																									
Stationnement avec bornes électriques																									
Espaces communs sécurisés																									
																									
																									
																									
3. Équipements																									
H2 : Équipements et commodités																									
Texte d'intro (en dessous du H2)																									
TourLiv offre des espaces communs conçus pour votre confort et votre bien-être, inclus avec chaque appartement à louer.																									
H4 → H3 (changer seulement le niveau, garder le texte) :**																									
H3 : Centre de remise en forme 																									
H3 : Terrasse sur le toit 																									
H3 : Terrasse extérieure																									
																									
"Alt texts pour les photos du slider :**
Slide 1 : ""Centre de remise en forme — immeuble TourLiv Gatineau""
Slide 2 : ""Terrasse sur le toit avec vue sur Ottawa — TourLiv Hull""
Slide 3 : ""Terrasse exterieure — appartements TourLiv Gatineau"""																									
																									
																									
																									
4. Plans d'appartements																									
H2: Plans d'appartements																									
Texte intro (en dessous du H2)																									
"Explorez nos plans d'étage et trouvez l'appartement idéal parmi nos
3½, 4½ et 5½ au 202, rue Papineau, Gatineau."																									
																									
En ce moment il y a ~100 H3 d'unites : Modification dans Elementor : changer les widgets Heading en widgets Bouton ou en Texte pour retirer les balises H3.																									
																									
																									
																									
5. Notre galerie = reste tel quel																									
																									
																									
																									
6. Lieux																									
H2 optimise : Emplacement — Au coeur de Hull, à  quelques minutes d'Ottawa (remplace les 2 H2 "Lieux" et "Distance") :**																									
																									
"**AJOUTER le texte au-dessus du tableau **
TourLiv est idéalement situé au 202 rue Papineau, dans le secteur
Hull de Gatineau. À quelques pas du Musée canadien de l'histoire et
du parc Jacques-Cartier, l'immeuble offre un accès rapide au
centre-ville d'Ottawa via le transport en commun.
Un emplacement de choix pour les fonctionnaires fédéraux et les
professionnels travaillant à Ottawa."																									
Garder la tableau et la Google Maps																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
7. FAQ : Nouvelle section à créer		**AJOUTER — Schema JSON-LD FAQPage :**																							
**Actuel :**  Cette section n'existe pas.																									
**Implementation dans Elementor :** Utiliser un widget **Accordeon** ou **Toggle** pour que les reponses soient repliables. C'est visuellement propre et ca garde la page legere.		Ajouter ce code dans le `<head>` (via WPCode / Insert Headers and Footers) en plus du schema ApartmentComplex deja prevu :																							
																									
		```html																							
H2 : Questions fréquentes		<script type="application/ld+json">																							
```		{																							
		@context: "https://schema.org",																							
**Questions et reponses (chaque question = H3 dans l'accordeon) :**		@type: "FAQPage",																							
		mainEntity: [																							
**H3 : Quels types d'appartements sont disponibles chez TourLiv?**		{																							
		@type: "Question",																							
TourLiv offre des 3½, 4½ et 5½ dans un immeuble neuf de		name: "Quels types d'appartements sont disponibles chez TourLiv?",																							
9 étages au 202 rue Papineau, dans le secteur Hull de Gatineau.		acceptedAnswer: {																							
Les surfaces sont supérieures aux standards du marché, avec des		@type: "Answer",																							
plans variés pour les familles, les couples et les celibataires.		text: "TourLiv offre des 3½, 4½ et 5½ dans un immeuble neuf de 9 etages au 202 rue Papineau, dans le secteur Hull de Gatineau."																							
		}																							
		},																							
**H3 : Qu'est-ce qui est inclus dans le loyer?**		{																							
		@type: "Question",																							
Chaque appartement inclut l'eau chaude, le wifi haute vitesse et		name: "Qu'est-ce qui est inclus dans le loyer?",																							
les électromenagers neufs (réfrigérateur, cuisinière, lave-vaisselle).		acceptedAnswer: {																							
Tous les appartements disposent d'un balcon ou d'une terrasse et		@type: "Answer",																							
bénéficient d'une construction en béton pour une insonorisation		text: "Chaque appartement inclut l'eau chaude, le wifi haute vitesse et les electromenagers neufs (refrigerateur, cuisiniere, lave-vaisselle). Tous les appartements disposent d'un balcon ou d'une terrasse."																							
exceptionnelle.		}																							
		},																							
		{																							
**H3 : Est-ce que TourLiv est proche d'Ottawa?**		@type: "Question",																							
		name: "Est-ce que TourLiv est proche d'Ottawa?",																							
Oui. L'immeuble est situé dans le secteur Hull de Gatineau, à		acceptedAnswer: {																							
2,3 km du Parlement du Canada et à 400 m du Musée canadien de		@type: "Answer",																							
l'histoire. Le transport en commun (STO, Rapibus) offre un accès		text: "Oui. L'immeuble est situe dans le secteur Hull de Gatineau, a 2,3 km du Parlement du Canada et a 400 m du Musee canadien de l'histoire. Le transport en commun (STO, Rapibus) offre un acces direct au centre-ville d'Ottawa."																							
direct au centre-ville d'Ottawa. C'est un emplacement idéal pour		}																							
les fonctionnaires fédéraux et les professionnels travaillant à Ottawa.		},																							
		{																							
		@type: "Question",																							
**H3 : Est-ce qu'il y a du stationnement?**		name: "Est-ce qu'il y a du stationnement?",																							
		acceptedAnswer: {																							
Oui, TourLiv offre un stationnement intérieur avec bornes de		@type: "Answer",																							
recharge pour véhicules électriques.		text: "Oui, TourLiv offre un stationnement interieur avec bornes de recharge pour vehicules electriques."																							
		}																							
		},																							
**H3 : Comment planifier une visite?**		{																							
		@type: "Question",																							
Contactez-nous par téléphone au (514) 442-3419, par courriel à		name: "Comment planifier une visite?",																							
info@tourliv.ca ou remplissez le formulaire ci-dessous.		acceptedAnswer: {																							
		@type: "Answer",																							
		text: "Contactez-nous par telephone au (514) 442-3419, par courriel a info@tourliv.ca ou via le formulaire sur notre site. "																							
		}																							
		}																							
		]																							
		}																							
		</script>																							
		```																							
																									
																									
																									
																									
8. Contact																									
Appartements à louer à Gatineau																									
H2 : Demander une visite																									
Écrire un courriel à info@Tourliv.ca																									
514-442-3419																									
202 Rue Papineau, Gtaineau, Qc, J8X 1W2, Canada																									
																									
																									
																									
																									
9. Footer																									
Logo TourLiv + Logo Rizzo Capital																									
Liens rapides : changer en texte pas un H2																									
Équipements																									
Plans																									
Galerie																									
Contactez-nous																									
Coordonnées : changer en texte pas un H2																									
Adresse:																									
202 Rue Papineau, Gatineau, QC J8X 1W2, Canada																									
																									
E-mail:																									
info@Tourliv.ca																									
Téléphone:																									
(514) 442-3419																									
© 2025 Tour LIV. Tous droits réservés. : changer en texte pas un H2																									
Retour en haut : changer en texte pas un H2																									
																									
> Le footer ne devrait contenir **aucun H2**. Dans Elementor : remplacer les widgets "Titre" par des widgets "Editeur de texte" pour ces 4 elements.																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									