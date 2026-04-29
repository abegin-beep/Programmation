Writing Guide — English Version

Legend:
Bold: changes to make
In blue: comment / explanation for the developer



### Meta title
New Apartments for Rent in Gatineau (Hull) | TourLiv

### Meta description
Modern 1 to 3 bedroom apartments at 202 Papineau St, Gatineau. Hot water, wifi and appliances included. Visit TourLiv in Hull, minutes from Ottawa.



1. Hero
Welcome to TourLiv
H1: Modern Apartments for Rent in Gatineau — Hull

Optimized subtitle:
Discover our new rental apartments in Hull, just minutes from downtown Ottawa.
CTA: Contact Us



2. Building Overview
H2: Premium Apartments in the Heart of Hull

Optimized paragraph:
TourLiv offers a wide selection of apartments for rent, from 1 to 3 bedrooms, in the Hull sector of Gatineau. Our units are larger than market standards and the variety of floor plans will appeal to families, couples and singles alike. Kitchens and bathrooms feature quartz countertops. Every apartment includes a balcony or terrace. The full concrete construction ensures exceptional soundproofing.

Icons = change heading type:
The 6 icons keep their text and visuals. The only change is technical: in Elementor, change the widget from "Heading" to "Text Editor" or set the HTML tag to `<p>` instead of `<h2>`.
Icon texts:
Fitness Centre
Hot Water Included
Wifi Included
Appliances Included
Parking with EV Charging Stations
Secure Common Areas



3. Amenities
H2: Amenities and Inclusions
Intro text (below the H2)
TourLiv offers common spaces designed for your comfort and well-being, included with every rental apartment.
H4 → H3 (change only the level, keep the text):
H3: Fitness Centre
H3: Rooftop Terrace
H3: Outdoor Terrace

Alt texts for slider photos:
Slide 1: "Fitness centre — TourLiv apartment building Gatineau"
Slide 2: "Rooftop terrace with view of Ottawa — TourLiv Hull"
Slide 3: "Outdoor terrace — TourLiv apartments Gatineau"



4. Floor Plans
H2: Floor Plans — 1, 2 and 3 Bedroom Apartments Available
Intro text (below the H2)
Explore our floor plans and find the perfect apartment among our 1, 2 and 3 bedroom units at 202 Papineau St, Gatineau.

Currently there are ~100 H3 unit headings: Elementor change: switch Heading widgets to Button or Text widgets to remove the H3 tags.



5. Gallery = keep as is



6. Location
Optimized H2: Location — In the Heart of Hull, Minutes from Ottawa (replaces the 2 H2s "Places" and "Distance")

ADD text above the table:
TourLiv is ideally located at 202 Papineau St, in the Hull sector of Gatineau. Steps away from the Canadian Museum of History and Jacques-Cartier Park, the building offers quick access to downtown Ottawa via public transit.
A prime location for federal government employees and professionals working in Ottawa.
Keep the table and Google Maps



7. FAQ: New section to create		ADD — FAQPage JSON-LD Schema:
Current: This section does not exist.
Implementation in Elementor: Use an Accordion or Toggle widget so answers are collapsible. Clean visual, keeps the page light.		Add this code in the `<head>` (via WPCode / Insert Headers and Footers) in addition to the ApartmentComplex schema already planned:

		```html
H2: Frequently Asked Questions		<script type="application/ld+json">
```		{
		@context: "https://schema.org",
Questions and answers (each question = H3 in the accordion):		@type: "FAQPage",
		mainEntity: [
H3: What types of apartments are available at TourLiv?		{
		@type: "Question",
TourLiv offers 1, 2 and 3 bedroom apartments in a new		name: "What types of apartments are available at TourLiv?",
9-storey building at 202 Papineau St, in the Hull sector		acceptedAnswer: {
of Gatineau. Our units are larger than market standards,		@type: "Answer",
with varied floor plans for families, couples and singles.		text: "TourLiv offers 1, 2 and 3 bedroom apartments in a new 9-storey building at 202 Papineau St, in the Hull sector of Gatineau."
		}
		},
H3: What is included in the rent?		{
		@type: "Question",
Every apartment includes hot water, high-speed wifi and		name: "What is included in the rent?",
new appliances (refrigerator, stove, dishwasher).		acceptedAnswer: {
All apartments have a balcony or terrace and benefit		@type: "Answer",
from concrete construction for exceptional soundproofing.		text: "Every apartment includes hot water, high-speed wifi and new appliances (refrigerator, stove, dishwasher). All apartments have a balcony or terrace."
		}
		},
H3: Is TourLiv close to Ottawa?		{
		@type: "Question",
Yes. The building is located in the Hull sector of Gatineau,		name: "Is TourLiv close to Ottawa?",
2.3 km from Parliament Hill and 400 m from the Canadian		acceptedAnswer: {
Museum of History. Public transit (STO, Rapibus) provides		@type: "Answer",
direct access to downtown Ottawa. An ideal location for		text: "Yes. The building is located in the Hull sector of Gatineau, 2.3 km from Parliament Hill and 400 m from the Canadian Museum of History. Public transit (STO, Rapibus) provides direct access to downtown Ottawa."
federal government employees and professionals working		}
in Ottawa.		},
		{
		@type: "Question",
H3: Is there parking available?		name: "Is there parking available?",
		acceptedAnswer: {
Yes, TourLiv offers indoor parking with electric vehicle		@type: "Answer",
charging stations.		text: "Yes, TourLiv offers indoor parking with electric vehicle charging stations."
		}
		},
H3: How can I schedule a visit?		{
		@type: "Question",
Contact us by phone at (514) 442-3419, by email at		name: "How can I schedule a visit?",
info@tourliv.ca or fill out the form below.		acceptedAnswer: {
		@type: "Answer",
		text: "Contact us by phone at (514) 442-3419, by email at info@tourliv.ca or via the form on our website."
		}
		}
		]
		}
		</script>
		```



8. Contact
Apartments for Rent in Gatineau
H2: Schedule a Visit
Send an email to info@Tourliv.ca
514-442-3419
202 Papineau St, Gatineau, QC, J8X 1W2, Canada



9. Footer
TourLiv logo + Rizzo Capital logo
Quick Links: change to text, not an H2
Amenities
Plans
Gallery
Contact Us
Contact Info: change to text, not an H2
Address:
202 Papineau St, Gatineau, QC J8X 1W2, Canada

Email:
info@Tourliv.ca
Phone:
(514) 442-3419
(c) 2025 Tour LIV. All rights reserved.: change to text, not an H2
Back to top: change to text, not an H2

> The footer should contain no H2 tags. In Elementor: replace "Title" widgets with "Text Editor" widgets for these 4 elements.
