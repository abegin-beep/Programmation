J'ai dis au client qu'il restait ces quelques points techniques à compléter :

CRITICAL :

<html lang> still set to en-US on the French page = change to fr-CA
robots.txt missing sitemap reference = add Sitemap: https://tourliv.ca/sitemap_index.xml
Hidden English H2s still in French page source = Apartments, Residence Features, Kitchen Features, Bath Features = remove or translate
Section with ID 8205dff = contains the H2 "Apartments" and Lorem Ipsum text. It is hidden on all devices but still visible in page source. Delete this entire container section in Elementor, it serves no purpose and is hurting SEO.

IMPORTANT :

~103 <h3> tags on unit numbers (Unité 101, 102…) = change to Button or Text widgets in Elementor
Footer headings (Liens rapides, Coordonnées, © 2025, Retour en haut) still <h2> = change to <p> or <span>
og:locale on FR page still en_US = should be fr_CA (should auto-fix after point #1)
og:type on EN page is article = should be website
ApartmentComplex and FAQPage JSON-LD schemas not added = code is in the brief
EN page H1 missing = Hull at the end