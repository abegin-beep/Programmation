const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Audit SEO — DPA Assurances";

const C = {
  navy:        "1A3A5C",
  navyDark:    "0F2540",
  navyMid:     "1E4976",
  blue:        "2E6BA8",
  blueLight:   "EBF2FA",
  orange:      "E05A2B",
  orangeLight: "FDF0EA",
  green:       "1E7B5A",
  greenLight:  "E6F4EF",
  red:         "C0392B",
  redLight:    "FDECEA",
  yellow:      "F5A623",
  yellowLight: "FEF6E7",
  white:       "FFFFFF",
  offWhite:    "F8FAFB",
  grey:        "64748B",
  greyLight:   "F1F5F9",
  greyBorder:  "DDE4ED",
  text:        "1E293B",
  textMuted:   "64748B",
};

const FT = "Georgia";
const FB = "Calibri";

// ─── Helpers ────────────────────────────────────────────────────────────────

function slideHeader(s, title, subtitle) {
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.78,
    fill: { color: C.navy }, line: { color: C.navy }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.3, h: 0.78,
    fill: { color: C.orange }, line: { color: C.orange }
  });
  s.addText(title, {
    x: 0.5, y: 0.08, w: subtitle ? 6 : 9.3, h: 0.62,
    fontFace: FT, fontSize: 22, bold: true, color: C.white,
    align: "left", valign: "middle", margin: 0
  });
  if (subtitle) {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.5, y: 0.12, w: 2.2, h: 0.54,
      fill: { color: C.orange }, line: { color: C.orange }
    });
    s.addText(subtitle, {
      x: 7.5, y: 0.12, w: 2.2, h: 0.54,
      fontFace: FB, fontSize: 12, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0
    });
  }
}

function statBox(s, x, y, w, h, big, label, bg, fg) {
  s.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h, fill: { color: bg }, line: { color: bg }
  });
  s.addText(big, {
    x, y: y + 0.1, w, h: h * 0.62,
    fontFace: FT, fontSize: 40, bold: true, color: fg,
    align: "center", valign: "middle", margin: 0
  });
  s.addText(label, {
    x, y: y + h * 0.62, w, h: h * 0.38,
    fontFace: FB, fontSize: 10, color: fg,
    align: "center", valign: "top", margin: 0
  });
}

function card(s, x, y, w, h, title, body, titleColor, bg, borderColor) {
  s.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: bg || C.greyLight },
    line: { color: borderColor || C.greyBorder, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x, y, w: w, h: 0.05,
    fill: { color: titleColor || C.navy },
    line: { color: titleColor || C.navy }
  });
  s.addText(title, {
    x: x + 0.12, y: y + 0.1, w: w - 0.24, h: 0.32,
    fontFace: FB, fontSize: 11, bold: true, color: titleColor || C.navy,
    align: "left", margin: 0
  });
  s.addText(body, {
    x: x + 0.12, y: y + 0.42, w: w - 0.24, h: h - 0.5,
    fontFace: FB, fontSize: 10, color: C.text,
    align: "left", valign: "top", margin: 0
  });
}

function tableRows(s, headers, rows, x, y, w, colW, headerBg) {
  const rowH = 0.38;
  const totalCols = headers.length;
  const bg = headerBg || C.navy;

  // Header
  let cx = x;
  headers.forEach((h, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y, w: colW[i], h: rowH,
      fill: { color: bg }, line: { color: bg }
    });
    s.addText(h, {
      x: cx + 0.06, y, w: colW[i] - 0.12, h: rowH,
      fontFace: FB, fontSize: 10, bold: true, color: C.white,
      align: "left", valign: "middle", margin: 0
    });
    cx += colW[i];
  });

  // Rows
  rows.forEach((row, ri) => {
    const ry = y + rowH + ri * rowH;
    let cx2 = x;
    row.forEach((cell, ci) => {
      const cellBg = typeof cell === "object" ? (cell.bg || (ri % 2 === 0 ? C.white : C.greyLight)) : (ri % 2 === 0 ? C.white : C.greyLight);
      const cellText = typeof cell === "object" ? cell.text : cell;
      const cellColor = typeof cell === "object" ? (cell.color || C.text) : C.text;
      const cellBold = typeof cell === "object" ? (cell.bold || false) : false;
      s.addShape(pres.shapes.RECTANGLE, {
        x: cx2, y: ry, w: colW[ci], h: rowH,
        fill: { color: cellBg }, line: { color: C.greyBorder, width: 0.5 }
      });
      s.addText(cellText, {
        x: cx2 + 0.06, y: ry, w: colW[ci] - 0.12, h: rowH,
        fontFace: FB, fontSize: 9.5, color: cellColor, bold: cellBold,
        align: "left", valign: "middle", margin: 0
      });
      cx2 += colW[ci];
    });
  });
}

// ─── SLIDE 1 — Title ────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navyDark };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.orange }, line: { color: C.orange } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.565, w: 10, h: 0.06, fill: { color: C.orange }, line: { color: C.orange } });

  s.addText("AUDIT SEO", {
    x: 0.75, y: 1.35, w: 8.5, h: 0.5,
    fontFace: FB, fontSize: 13, bold: true, color: C.orange,
    align: "left", charSpacing: 8
  });
  s.addText("DPA Assurances", {
    x: 0.75, y: 1.85, w: 8.5, h: 1.5,
    fontFace: FT, fontSize: 54, bold: true, color: C.white, align: "left"
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.75, y: 3.5, w: 2.8, h: 0.05,
    fill: { color: C.orange }, line: { color: C.orange }
  });
  s.addText("Rapport d'audit complet — Avril 2026", {
    x: 0.75, y: 3.65, w: 8.5, h: 0.45,
    fontFace: FB, fontSize: 15, color: "7FAACC", align: "left"
  });
  s.addText("Technique  ·  On-site  ·  Off-site  ·  Opportunités", {
    x: 0.75, y: 4.2, w: 8.5, h: 0.4,
    fontFace: FB, fontSize: 12, color: "4D7FA8", align: "left"
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.15, w: 10, h: 0.415,
    fill: { color: "0A1E35" }, line: { color: "0A1E35" }
  });
  s.addText("Confidentiel — Préparé pour DPA Assurances", {
    x: 0.5, y: 5.18, w: 9, h: 0.35,
    fontFace: FB, fontSize: 10, color: "4D7FA8", align: "left"
  });
}

// ─── SLIDE 2 — Objectifs et méthodologie ───────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Objectifs et méthodologie");

  s.addText("OBJECTIFS DE L'AUDIT", {
    x: 0.4, y: 0.95, w: 4.3, h: 0.3,
    fontFace: FB, fontSize: 10, bold: true, color: C.orange,
    align: "left", charSpacing: 3
  });

  const objs = [
    ["Diagnostiquer la chute", "Identifier la cause précise de la baisse de -46,6% depuis le 7 janvier 2026"],
    ["Évaluer l'état SEO complet", "Technique, contenu, maillage interne, présence locale et autorité"],
    ["Identifier les opportunités", "Produits absents, requêtes non couvertes, segments concurrentiels"],
    ["Plan d'action priorisé", "Récupérer le trafic perdu et en générer du nouveau"],
  ];
  objs.forEach(([title, body], i) => {
    const yy = 1.35 + i * 0.97;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: yy, w: 4.3, h: 0.86,
      fill: { color: i === 0 ? C.orangeLight : C.greyLight },
      line: { color: i === 0 ? C.orange : C.greyBorder, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: yy, w: 0.06, h: 0.86,
      fill: { color: i === 0 ? C.orange : C.navy }, line: { color: i === 0 ? C.orange : C.navy }
    });
    s.addText(`${i + 1}. ${title}`, {
      x: 0.58, y: yy + 0.08, w: 4.0, h: 0.28,
      fontFace: FB, fontSize: 11, bold: true, color: C.text, align: "left", margin: 0
    });
    s.addText(body, {
      x: 0.58, y: yy + 0.38, w: 4.0, h: 0.42,
      fontFace: FB, fontSize: 9.5, color: C.textMuted, align: "left", margin: 0
    });
  });

  s.addText("CE QUE NOUS ANALYSONS", {
    x: 5.1, y: 0.95, w: 4.5, h: 0.3,
    fontFace: FB, fontSize: 10, bold: true, color: C.blue,
    align: "left", charSpacing: 3
  });

  const analyses = [
    ["Technique",      "Est-ce que Google peut lire et comprendre votre site sans obstacles ?",   C.navy],
    ["On-site",        "Est-ce que chaque page communique clairement sur quoi elle se positionne ?", C.blue],
    ["Off-site",       "Est-ce que d'autres sites de confiance recommandent le vôtre ?",          C.green],
    ["Concurrentiel",  "Comparaison avec La Turquoise, Assurancia, Covalen, Lussier",             C.grey],
  ];
  analyses.forEach(([title, body, color], i) => {
    const yy = 1.35 + i * 0.97;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: yy, w: 4.5, h: 0.86,
      fill: { color: C.greyLight }, line: { color: C.greyBorder, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: yy, w: 0.06, h: 0.86,
      fill: { color: color }, line: { color: color }
    });
    s.addText(title, {
      x: 5.28, y: yy + 0.08, w: 4.2, h: 0.28,
      fontFace: FB, fontSize: 11, bold: true, color: C.text, align: "left", margin: 0
    });
    s.addText(body, {
      x: 5.28, y: yy + 0.38, w: 4.2, h: 0.42,
      fontFace: FB, fontSize: 9.5, color: C.textMuted, align: "left", margin: 0
    });
  });
}

// ─── SLIDE 3 — La chute ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Analyse des résultats");

  // Big stat
  s.addShape(pres.shapes.RECTANGLE, {
    x: 3.2, y: 0.95, w: 3.6, h: 2.5,
    fill: { color: C.redLight }, line: { color: C.red, width: 2 }
  });
  s.addText("-46,6%", {
    x: 3.2, y: 1.0, w: 3.6, h: 1.5,
    fontFace: FT, fontSize: 72, bold: true, color: C.red,
    align: "center", valign: "middle", margin: 0
  });
  s.addText("Entre février 2025 et février 2026", {
    x: 3.2, y: 2.6, w: 3.6, h: 0.55,
    fontFace: FB, fontSize: 11, color: C.red, align: "center", margin: 0
  });

  // Two stat boxes
  statBox(s, 0.4, 1.25, 2.6, 1.55, "~784", "Sessions\nfévrier 2025", C.navy, C.white);
  statBox(s, 7.0, 1.25, 2.6, 1.55, "~419", "Sessions\nfévrier 2026", C.orange, C.white);

  // Key insight box
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.6, w: 9.2, h: 1.65,
    fill: { color: C.yellowLight }, line: { color: C.yellow, width: 1.5 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.6, w: 0.06, h: 1.65,
    fill: { color: C.yellow }, line: { color: C.yellow }
  });
  s.addText("Point de rupture identifié : 7 janvier 2026", {
    x: 0.58, y: 3.68, w: 8.8, h: 0.35,
    fontFace: FB, fontSize: 13, bold: true, color: C.text, align: "left", margin: 0
  });
  s.addText("Cette baisse n'est pas progressive — elle est verticale. Elle correspond exactement à la migration de serveur de janvier 2026. Ce n'est pas un changement d'algorithme Google ni une tendance sectorielle. C'est un événement technique daté et identifiable.", {
    x: 0.58, y: 4.08, w: 8.8, h: 1.1,
    fontFace: FB, fontSize: 11, color: C.text, align: "left", margin: 0
  });
}

// ─── SLIDE 4 — Les 3 causes ─────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Identifier la cause de la baisse", "Migration jan. 2026");

  s.addText("3 problèmes critiques introduits simultanément lors de la migration :", {
    x: 0.4, y: 0.9, w: 9.2, h: 0.38,
    fontFace: FB, fontSize: 12, color: C.text, align: "left"
  });

  const causes = [
    {
      num: "1",
      title: "Redirections brisées",
      body: "Quand une page change d'adresse, Google a besoin d'une \"note de transfert\" (redirection 301). Lors de la migration, ces redirections ont été mal configurées ou absentes.\n\nRésultat : Google a perdu le fil de vos pages et leur autorité accumulée.",
      action: "Obtenir la table de redirections de l'agence, corriger et revalider",
    },
    {
      num: "2",
      title: "Abandon de la version /en/ sans redirections",
      body: "Votre site avait des pages anglaises avec un historique de trafic réel. Elles ont disparu sans redirection, emportant avec elles l'autorité accumulée sur ces URLs.\n\n24+ pages /en/ encore dans le sitemap sans redirection.",
      action: "Rediriger chaque /en/ en 301 vers son équivalent /fr/",
    },
    {
      num: "3",
      title: "Article vedette mis en noindex (bug)",
      body: "L'article \"7 sons et bruits de la maison\" en français a été bloqué à Google par erreur depuis janvier 2025. La version anglaise a continué de vivre — pas la française.\n\nCTR français : 7,6% vs 0,8% pour l'anglais. Les francophones cliquaient 10× plus.",
      action: "Changer noindex → index + réindexation via Google Search Console",
    },
  ];

  causes.forEach((c, i) => {
    const xx = 0.3 + i * 3.25;
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx, y: 1.38, w: 3.1, h: 3.9,
      fill: { color: C.greyLight }, line: { color: C.greyBorder, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx, y: 1.38, w: 3.1, h: 0.55,
      fill: { color: C.red }, line: { color: C.red }
    });
    s.addText(c.num, {
      x: xx + 0.12, y: 1.38, w: 0.45, h: 0.55,
      fontFace: FT, fontSize: 22, bold: true, color: C.white,
      align: "left", valign: "middle", margin: 0
    });
    s.addText(c.title, {
      x: xx + 0.58, y: 1.38, w: 2.4, h: 0.55,
      fontFace: FB, fontSize: 10.5, bold: true, color: C.white,
      align: "left", valign: "middle", margin: 0
    });
    s.addText(c.body, {
      x: xx + 0.12, y: 2.0, w: 2.85, h: 2.3,
      fontFace: FB, fontSize: 9.5, color: C.text,
      align: "left", valign: "top", margin: 0
    });
    // Action box
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx + 0.12, y: 4.45, w: 2.85, h: 0.7,
      fill: { color: C.orangeLight }, line: { color: C.orange, width: 1 }
    });
    s.addText("Action : " + c.action, {
      x: xx + 0.22, y: 4.48, w: 2.65, h: 0.65,
      fontFace: FB, fontSize: 9, color: C.orange, bold: true,
      align: "left", valign: "middle", margin: 0
    });
  });
}

// ─── SLIDE 5 — Répartition du trafic ────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Répartition du trafic organique actuel");

  // Donut chart via big colored blocks
  const chartData = [
    { pct: "62%", label: "Article EN\n\"7 sons et bruits\"", color: C.orange, bg: C.orangeLight },
    { pct: "33%", label: "Trafic de marque\n(DPA, Groupe DPA)", color: C.navy,  bg: C.blueLight },
    { pct: "~1%", label: "Hors-marque\nhors-article",          color: C.green, bg: C.greenLight },
    { pct: "~4%", label: "Autre\n(navigation directe)",        color: C.grey,  bg: C.greyLight },
  ];

  s.addChart(pres.charts.DOUGHNUT, [{
    name: "Trafic",
    labels: ["Article EN 7 sons", "Trafic de marque", "Hors-marque hors-article", "Autre"],
    values: [62, 33, 1, 4],
  }], {
    x: 0.3, y: 0.9, w: 4.5, h: 4.35,
    chartColors: [C.orange, C.navy, C.green, C.grey],
    chartArea: { fill: { color: C.white } },
    showLegend: false,
    showPercent: true,
    dataLabelColor: C.white,
    dataLabelFontSize: 13,
    dataLabelFontBold: true,
    holeSize: 55,
  });

  chartData.forEach((d, i) => {
    const yy = 1.0 + i * 1.07;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.05, y: yy, w: 4.6, h: 0.9,
      fill: { color: d.bg }, line: { color: d.color, width: 1.5 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.05, y: yy, w: 0.06, h: 0.9,
      fill: { color: d.color }, line: { color: d.color }
    });
    s.addText(d.pct, {
      x: 5.2, y: yy + 0.05, w: 1.1, h: 0.8,
      fontFace: FT, fontSize: 28, bold: true, color: d.color,
      align: "left", valign: "middle", margin: 0
    });
    s.addText(d.label, {
      x: 6.3, y: yy + 0.06, w: 3.25, h: 0.78,
      fontFace: FB, fontSize: 10, color: C.text,
      align: "left", valign: "middle", margin: 0
    });
  });
}

// ─── SLIDE 6 — L'article "7 sons" ──────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "L'article \"7 sons et bruits\" : le piège des 62%");

  s.addText("Cet article génère 62% du trafic. C'est trompeur.", {
    x: 0.4, y: 0.9, w: 9.2, h: 0.38,
    fontFace: FT, fontSize: 14, bold: true, color: C.red, align: "left"
  });

  const rows = [
    [
      { text: "Provenance géographique", bold: true, bg: C.greyLight },
      { text: "Seulement 7% du trafic vient du Canada", color: C.red, bold: true },
      { text: "Le reste provient de France, Belgique, Afrique francophone — sans valeur commerciale pour DPA" },
    ],
    [
      { text: "Intention de recherche", bold: true },
      { text: "Quelqu'un entend un bruit dans son plancher", color: C.orange, bold: true },
      { text: "Ce n'est pas quelqu'un qui cherche une assurance. L'intention est informationnelle." },
    ],
    [
      { text: "Lien avec l'assurance", bold: true, bg: C.greyLight },
      { text: "Indirect", color: C.grey },
      { text: "Aucun lien évident entre \"bruit dans la maison\" et \"souscrire une assurance\"" },
    ],
    [
      { text: "Taux de conversion", bold: true },
      { text: "Proche de zéro", color: C.red, bold: true },
      { text: "Ce trafic ne génère pas de soumissions ni de contacts" },
    ],
    [
      { text: "Action prioritaire", bold: true, bg: C.orangeLight },
      { text: "Corriger le noindex FR", color: C.green, bold: true, bg: C.greenLight },
      { text: "La version française (CTR 7,6%) est bloquée depuis jan. 2025 — trafic récupérable immédiatement", bg: C.greenLight },
    ],
  ];

  tableRows(s, ["Critère", "Réalité", "Détail"], rows, 0.4, 1.38, 9.2, [2.5, 2.8, 3.9], C.navy);

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.9, w: 9.2, h: 0.55,
    fill: { color: C.blueLight }, line: { color: C.blue, width: 1 }
  });
  s.addText("Conclusion : dépendre de cet article pour 62% du trafic, c'est construire sur du sable. L'objectif réel est de bâtir du trafic qualifié sur les pages produits.", {
    x: 0.55, y: 4.92, w: 9.0, h: 0.5,
    fontFace: FB, fontSize: 10.5, color: C.navy, italic: true, align: "left", margin: 0
  });
}

// ─── SLIDE 7 — Audit technique P1 ──────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Audit technique — Priorités critiques", "P1 — CRITIQUE");

  const rows = [
    [
      { text: "Redirections brisées", bold: true, bg: C.redLight },
      { text: "Cause #1 de la chute. Perte directe et structurelle de trafic.", bg: C.redLight },
      { text: "Obtenir la table de redirections de l'agence, corriger et revalider", bg: C.redLight },
      { text: "Audrey + Agence", bold: true, color: C.red, bg: C.redLight },
    ],
    [
      { text: "Article \"7 sons FR\" en noindex" },
      { text: "Bloqué à Google depuis janvier 2025 — trafic récupérable immédiatement" },
      { text: "Changer noindex → index, follow + réindexation via GSC" },
      { text: "Développeur" },
    ],
    [
      { text: "Sitemap non mis à jour (déc. 2025)", bg: C.greyLight },
      { text: "Contient des pages 404, noindex, /node/ et /en/ — Google indexe des pages mortes", bg: C.greyLight },
      { text: "Régénérer le sitemap, retirer 404 / noindex / /en/", bg: C.greyLight },
      { text: "Développeur", bg: C.greyLight },
    ],
    [
      { text: "Pages /node/ dans le sitemap" },
      { text: "Pages techniques sans valeur SEO (10 pages /node/, pages de remerciement)" },
      { text: "Retirer du sitemap + ajouter noindex sur chacune" },
      { text: "Développeur" },
    ],
    [
      { text: "Canonical contradictoire /carrieres", bg: C.greyLight },
      { text: "La 301 dit \"va là-bas\" mais le canonical dit \"reviens ici\" → 0 impression (-685)", bg: C.greyLight },
      { text: "Corriger le canonical self-referencing + typo \"courtierere\"", bg: C.greyLight },
      { text: "Développeur", bg: C.greyLight },
    ],
    [
      { text: "24+ pages /en/ encore dans le sitemap" },
      { text: "Google crawle des pages sans avenir — gaspillage de crawl budget" },
      { text: "Rediriger chaque /en/ en 301 vers son équivalent /fr/" },
      { text: "Développeur" },
    ],
  ];

  tableRows(s, ["Problème", "Impact", "Solution", "Responsable"], rows,
    0.3, 0.9, 9.4, [2.2, 2.8, 3.0, 1.4], C.red);
}

// ─── SLIDE 8 — Audit technique P2 & P3 ──────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Audit technique — Priorités élevées et à planifier");

  // P2 header
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 0.9, w: 9.4, h: 0.3,
    fill: { color: C.orange }, line: { color: C.orange }
  });
  s.addText("PRIORITÉ 2 — ÉLEVÉE", {
    x: 0.4, y: 0.9, w: 9.2, h: 0.3,
    fontFace: FB, fontSize: 10, bold: true, color: C.white,
    align: "left", valign: "middle", margin: 0
  });

  const p2rows = [
    ["H1 manquant sur /nos-bureaux", "Signal de pertinence absent — aucun H1, contenu en H2/H3 seulement"],
    ["Meta descriptions trop courtes (38 pages)", "\"Assurance automobile\" = 2 mots. Google les réécrit. Aucune différenciation dans les SERP."],
    ["Core Web Vitals échoué (CLS 0,29 / max 0,1)", "Facteur de classement raté. Ajouter width/height sur images, réserver espace carrousel, -755 Ko JS inutilisé."],
    ["Contenu dupliqué (dommage par eau)", "Google ne sait pas quelle version valoriser. Garder version blogue, rediriger l'autre en 301."],
  ];

  p2rows.forEach((row, i) => {
    const yy = 1.25 + i * 0.47;
    const bg = i % 2 === 0 ? C.white : C.greyLight;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: yy, w: 4.2, h: 0.42, fill: { color: bg }, line: { color: C.greyBorder, width: 0.5 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 4.5, y: yy, w: 5.2, h: 0.42, fill: { color: bg }, line: { color: C.greyBorder, width: 0.5 } });
    s.addText(row[0], { x: 0.4, y: yy, w: 4.0, h: 0.42, fontFace: FB, fontSize: 9.5, bold: true, color: C.text, align: "left", valign: "middle", margin: 0 });
    s.addText(row[1], { x: 4.6, y: yy, w: 5.0, h: 0.42, fontFace: FB, fontSize: 9, color: C.textMuted, align: "left", valign: "middle", margin: 0 });
  });

  // P3 header
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 3.17, w: 9.4, h: 0.3,
    fill: { color: C.grey }, line: { color: C.grey }
  });
  s.addText("PRIORITÉ 3 — À PLANIFIER", {
    x: 0.4, y: 3.17, w: 9.2, h: 0.3,
    fontFace: FB, fontSize: 10, bold: true, color: C.white,
    align: "left", valign: "middle", margin: 0
  });

  const p3rows = [
    ["33 images sans texte alternatif", "Ajouter un alt descriptif sur chaque image (logos, icônes, photos)"],
    ["17+ pages orphelines dans le sitemap", "Sans aucun lien interne — intégrer à la navigation ou mettre en noindex"],
    ["Données structurées incomplètes", "Ajouter LocalBusiness sur chaque bureau (adresse, tél, GPS) + FAQPage si Q/R existants"],
    ["Pages carrières en 403 accessibles par Google", "22 URLs — rediriger en 301 vers la page carrières principale"],
    ["Images et PDFs brisés post-migration", "~25 ressources 404 — retrouver dans les backups ou retirer les références"],
  ];

  p3rows.forEach((row, i) => {
    const yy = 3.52 + i * 0.41;
    const bg = i % 2 === 0 ? C.white : C.greyLight;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: yy, w: 4.2, h: 0.36, fill: { color: bg }, line: { color: C.greyBorder, width: 0.5 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 4.5, y: yy, w: 5.2, h: 0.36, fill: { color: bg }, line: { color: C.greyBorder, width: 0.5 } });
    s.addText(row[0], { x: 0.4, y: yy, w: 4.0, h: 0.36, fontFace: FB, fontSize: 9.5, bold: true, color: C.text, align: "left", valign: "middle", margin: 0 });
    s.addText(row[1], { x: 4.6, y: yy, w: 5.0, h: 0.36, fontFace: FB, fontSize: 9, color: C.textMuted, align: "left", valign: "middle", margin: 0 });
  });
}

// ─── SLIDE 9 — Situation actuelle on-site ────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.07, fill: { color: C.orange }, line: { color: C.orange } });

  s.addText("Analyse on-site", {
    x: 0.6, y: 0.5, w: 8.8, h: 0.5,
    fontFace: FB, fontSize: 14, bold: true, color: C.orange,
    align: "left", charSpacing: 4
  });

  s.addText("Votre site est très dépendant\nde votre notoriété de marque.", {
    x: 0.6, y: 1.1, w: 8.8, h: 1.8,
    fontFace: FT, fontSize: 34, bold: true, color: C.white,
    align: "left"
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.0, w: 4.0, h: 0.05,
    fill: { color: C.orange }, line: { color: C.orange }
  });

  s.addText("Les gens qui vous trouvent vous connaissent déjà. Seulement 1% de votre trafic provient de personnes qui ne vous connaissent pas encore.", {
    x: 0.6, y: 3.2, w: 8.8, h: 0.8,
    fontFace: FB, fontSize: 13, color: "A8C4E0", align: "left"
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.15, w: 8.8, h: 1.15,
    fill: { color: C.navyMid }, line: { color: C.navyMid }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.15, w: 0.06, h: 1.15,
    fill: { color: C.green }, line: { color: C.green }
  });
  s.addText("La bonne nouvelle", {
    x: 0.76, y: 4.22, w: 8.5, h: 0.32,
    fontFace: FB, fontSize: 13, bold: true, color: C.green, align: "left", margin: 0
  });
  s.addText("Les produits d'assurance génèrent de nombreuses questions avant qu'un client contacte un courtier. C'est une opportunité précieuse pour générer du trafic qualifié, renforcer votre crédibilité et favoriser les conversions — que le site n'exploite pas encore.", {
    x: 0.76, y: 4.57, w: 8.5, h: 0.68,
    fontFace: FB, fontSize: 11, color: "C5DFF5", align: "left", margin: 0
  });
}

// ─── SLIDE 10 — Comment les utilisateurs cherchent ──────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Comment les utilisateurs recherchent vos produits");

  s.addText("Analyse des volumes de recherche mensuels au Québec — questions liées aux produits que vous vendez", {
    x: 0.4, y: 0.9, w: 9.2, h: 0.38,
    fontFace: FB, fontSize: 11, color: C.textMuted, align: "left"
  });

  const categories = [
    { vol: "2 600", label: "Assurance automobile", example: "\"est-ce obligatoire d'avoir une assurance auto ?\"", color: C.orange, bg: C.orangeLight },
    { vol: "2 100", label: "Assurance habitation", example: "\"combien coûte une assurance habitation ?\"", color: C.navy, bg: C.blueLight },
    { vol: "150",   label: "Assurance entreprise", example: "\"combien coûte une assurance entreprise ?\"", color: C.green, bg: C.greenLight },
  ];

  categories.forEach((c, i) => {
    const xx = 0.4 + i * 3.15;
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx, y: 1.42, w: 2.95, h: 3.78,
      fill: { color: c.bg }, line: { color: c.color, width: 1.5 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx, y: 1.42, w: 2.95, h: 0.07,
      fill: { color: c.color }, line: { color: c.color }
    });
    s.addText(c.vol, {
      x: xx, y: 1.52, w: 2.95, h: 1.3,
      fontFace: FT, fontSize: 54, bold: true, color: c.color,
      align: "center", valign: "middle", margin: 0
    });
    s.addText("recherches / mois", {
      x: xx, y: 2.82, w: 2.95, h: 0.35,
      fontFace: FB, fontSize: 10, color: c.color, align: "center", margin: 0
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx + 0.15, y: 3.22, w: 2.65, h: 0.04,
      fill: { color: c.color }, line: { color: c.color }
    });
    s.addText(c.label, {
      x: xx, y: 3.32, w: 2.95, h: 0.45,
      fontFace: FB, fontSize: 13, bold: true, color: C.text, align: "center", margin: 0
    });
    s.addText("Ex : " + c.example, {
      x: xx + 0.1, y: 3.85, w: 2.75, h: 1.2,
      fontFace: FB, fontSize: 10, color: C.textMuted, italic: true,
      align: "center", valign: "top", margin: 0
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 5.26, w: 9.2, h: 0.25,
    fill: { color: C.greyLight }, line: { color: C.greyBorder }
  });
  s.addText("Source : analyse de mots-clés basée sur les produits DPA + analyse concurrentielle (La Turquoise, Assurancia, Covalen, Lussier)", {
    x: 0.5, y: 5.27, w: 9.0, h: 0.23,
    fontFace: FB, fontSize: 8.5, color: C.textMuted, italic: true, align: "left", margin: 0
  });
}

// ─── SLIDE 11 — Le vrai problème des pages ───────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Le vrai problème des pages actuelles");

  s.addText("Ces pages ne sont pas des pages de contenu — ce sont des pages de navigation déguisées. Elles disent \"voici notre soumission\" mais ne répondent à aucune question que le client se pose avant d'agir. Google positionne les pages qui répondent aux intentions de recherche.", {
    x: 0.4, y: 0.9, w: 9.2, h: 0.72,
    fontFace: FB, fontSize: 11, color: C.text, align: "left"
  });

  tableRows(s,
    ["Élément", "Situation actuelle", "Cible recommandée", "Écart"],
    [
      [
        { text: "Mots par page produit", bold: true },
        { text: "150 – 400 mots", color: C.red, bold: true },
        { text: "1 500 – 2 000 mots", color: C.green, bold: true },
        { text: "×5 à ×10", color: C.red, bold: true },
      ],
      [
        { text: "Sections FAQ", bold: true, bg: C.greyLight },
        { text: "0 page sur 20", color: C.red, bold: true, bg: C.greyLight },
        { text: "Toutes les pages", color: C.green, bg: C.greyLight },
        { text: "20 pages à créer", color: C.orange, bg: C.greyLight },
      ],
      [
        { text: "Glossaire assurance" },
        { text: "0 page sur 20", color: C.red, bold: true },
        { text: "Pages auto, habitation", color: C.green },
        { text: "À créer", color: C.orange },
      ],
      [
        { text: "Articles liés sur les pages", bold: true, bg: C.greyLight },
        { text: "0 page sur 20", color: C.red, bold: true, bg: C.greyLight },
        { text: "Toutes les pages", color: C.green, bg: C.greyLight },
        { text: "0% fait", color: C.red, bg: C.greyLight },
      ],
      [
        { text: "H2 orientés questions" },
        { text: "Aucun sur /mon-auto ni /ma-maison", color: C.red },
        { text: "5-8 H2 par page produit", color: C.green },
        { text: "Pages invisibles sur longue traîne", color: C.red },
      ],
    ],
    0.4, 1.7, 9.2, [2.5, 2.1, 2.1, 2.5], C.navy
  );

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.65, w: 9.2, h: 0.7,
    fill: { color: C.greenLight }, line: { color: C.green, width: 1.5 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.65, w: 0.06, h: 0.7,
    fill: { color: C.green }, line: { color: C.green }
  });
  s.addText("Modèle à suivre — /cybersecurite", {
    x: 0.56, y: 4.68, w: 9.0, h: 0.28,
    fontFace: FB, fontSize: 11, bold: true, color: C.green, align: "left", margin: 0
  });
  s.addText("C'est la page la mieux structurée du site : H2 par besoin client, contenu dense avec stats, CTA intégré naturellement. Ce standard doit s'appliquer en priorité à /mon-auto et /ma-maison.", {
    x: 0.56, y: 4.97, w: 9.0, h: 0.35,
    fontFace: FB, fontSize: 10, color: C.text, align: "left", margin: 0
  });
}

// ─── SLIDE 12 — Plan d'action — Contenu des pages services ──────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Plan d'action — Contenu des pages services", "ON-SITE");

  // 4 priority action groups
  const groups = [
    {
      prio: "CRITIQUE",
      color: C.red,
      bg: C.redLight,
      items: [
        "H1 de la page d'accueil : vide (bug template) → rédiger un H1 avec le mot-clé principal",
        "H1 de /mon-auto et /ma-maison : \"Automobile\" / \"Ma maison\" → réécrire avec mots-clés (ex: \"Assurance auto au Québec\")",
      ]
    },
    {
      prio: "ÉLEVÉE — Contenu",
      color: C.orange,
      bg: C.orangeLight,
      items: [
        "/travailleur-autonome : page la plus sous-optimisée — aucun H2 orienté questions, contenu insuffisant",
        "/assurances-commerciales : quasi-vide — impossible de se positionner sur \"assurance entreprise Québec\"",
        "Ajouter FAQ structurées (+ Schema FAQPage) sur /mon-auto, /ma-maison, /condo pour les featured snippets",
        "H2 orientés questions sur /mon-auto et /ma-maison — les pages sont invisibles sur la longue traîne",
      ]
    },
    {
      prio: "ÉLEVÉE — Maillage interne",
      color: C.navy,
      bg: C.blueLight,
      items: [
        "Lien bidirectionnel /ma-maison ↔ /mon-auto (combo auto+habitation = produit clé, lien évident inexistant)",
        "CTAs personnalisés par page : remplacer \"Obtenir une soumission\" générique par un message contextuel",
        "Articles de blogue sans liens vers pages produits → ajouter 1-2 liens contextuels par article",
        "/dommage-par-eau : page orpheline, non liée depuis /ma-maison ni /mon-condo",
      ]
    },
    {
      prio: "STRATÉGIE — Nouvelles pages",
      color: C.green,
      bg: C.greenLight,
      items: [
        "Page pilier \"Pourquoi choisir un courtier\" : transformer l'article de 2020 en landing page /fr/pourquoi-un-courtier",
        "Pages locales par ville : DPA est 1er GMB à St-Hyacinthe et Drummondville — aucune page \"assurance auto Saint-Hyacinthe\"",
        "Page cybersécurité : enrichir avec Loi 25 / LPRPDE (la page la mieux structurée du site, à renforcer)",
        "Page condo : mentionner les changements Loi 16/141 (syndicats de copropriété)",
      ]
    },
  ];

  const colWidth = 4.55;
  groups.forEach((g, i) => {
    const xx = 0.25 + (i % 2) * 4.75;
    const yy = 0.9 + Math.floor(i / 2) * 2.38;
    const h = 2.2;

    s.addShape(pres.shapes.RECTANGLE, {
      x: xx, y: yy, w: colWidth, h,
      fill: { color: g.bg }, line: { color: g.color, width: 1 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx, y: yy, w: colWidth, h: 0.35,
      fill: { color: g.color }, line: { color: g.color }
    });
    s.addText(g.prio, {
      x: xx + 0.1, y: yy, w: colWidth - 0.2, h: 0.35,
      fontFace: FB, fontSize: 10, bold: true, color: C.white,
      align: "left", valign: "middle", margin: 0
    });
    g.items.forEach((item, j) => {
      s.addText([
        { text: "▸ ", options: { bold: true } },
        { text: item },
      ], {
        x: xx + 0.1, y: yy + 0.38 + j * 0.44, w: colWidth - 0.2, h: 0.42,
        fontFace: FB, fontSize: 9.5, color: C.text,
        align: "left", valign: "top", margin: 0
      });
    });
  });
}

// ─── SLIDE 13 — Opportunités personnelles ────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Opportunités on-site — Produits particuliers");

  tableRows(s,
    ["Produit", "Présent chez la concurrence", "Volume", "Action recommandée"],
    [
      [
        { text: "Assurance véhicule électrique", bold: true, bg: C.orangeLight },
        { text: "Belairdirect, Assur360", bg: C.orangeLight },
        { text: "Forte croissance", color: C.orange, bold: true, bg: C.orangeLight },
        { text: "Créer /vehicule-electrique — marché en forte croissance, concurrence faible chez les courtiers", bg: C.orangeLight },
      ],
      [
        { text: "Assurance haute valeur", bold: true },
        { text: "Chubb, Lussier" },
        { text: "Faible–moyen" },
        { text: "Page /particuliers/haute-valeur existe déjà — mais invisible : aucun lien interne vers elle" },
      ],
      [
        { text: "Assurance animaux de compagnie", bold: true, bg: C.greyLight },
        { text: "CAA-Québec, Sonnet, Trupanion", bg: C.greyLight },
        { text: "500–1 500/mois", color: C.green, bg: C.greyLight },
        { text: "Valider si DPA distribue ce produit — fort potentiel si oui", bg: C.greyLight },
      ],
      [
        { text: "Assurance voyage", bold: true },
        { text: "La Turquoise, CAA-Québec" },
        { text: "Élevé (saisonnier)", color: C.green, bold: true },
        { text: "Valider si DPA distribue — fort volume saisonnier (jan-fév, juil-août)" },
      ],
      [
        { text: "Assurance chalet", bold: true, bg: C.greyLight },
        { text: "Usage commun Mauricie, Estrie", bg: C.greyLight },
        { text: "200–400/mois", bg: C.greyLight },
        { text: "Valider clientèle existante — cohérent avec la géographie DPA (Mauricie, Montérégie)", bg: C.greyLight },
      ],
    ],
    0.3, 0.9, 9.4, [2.1, 2.1, 1.5, 3.7], C.navy
  );

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 4.88, w: 9.4, h: 0.55,
    fill: { color: C.blueLight }, line: { color: C.blue, width: 1 }
  });
  s.addText("Priorité immédiate : la page /haute-valeur existe mais est complètement isolée. Ajouter des liens internes coûte 0 effort et peut générer des conversions dès cette semaine.", {
    x: 0.45, y: 4.9, w: 9.1, h: 0.5,
    fontFace: FB, fontSize: 10.5, color: C.navy, align: "left", margin: 0
  });
}

// ─── SLIDE 14 — Opportunités entreprise ──────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Opportunités on-site — Produits entreprises");

  tableRows(s,
    ["Produit / Page à créer", "Contexte concurrentiel", "Cible client", "Action"],
    [
      [
        { text: "Erreurs & omissions /\nResponsabilité professionnelle", bold: true, bg: C.orangeLight },
        { text: "Présent chez 3 concurrents sur 4", color: C.red, bold: true, bg: C.orangeLight },
        { text: "Consultants, comptables, ingénieurs, architectes, conseillers TI", bg: C.orangeLight },
        { text: "Créer /assurances-entreprises/produits-specifiques/erreurs-et-omissions", bg: C.orangeLight },
      ],
      [
        { text: "Page hub Travailleurs autonomes", bold: true },
        { text: "La page habitation existante répond à la mauvaise intention" },
        { text: "Toute personne qui travaille de la maison ou facture des services" },
        { text: "Créer /travailleurs-autonomes comme page hub regroupant tous leurs besoins professionnels" },
      ],
      [
        { text: "Page hub PME", bold: true, bg: C.greyLight },
        { text: "Covalen et Lussier captent le trafic non-spécifique avec une page \"Assurance PME\"", bg: C.greyLight },
        { text: "Propriétaires de PME cherchant une couverture complète avant de segmenter", bg: C.greyLight },
        { text: "Créer /assurances-entreprises/pme — page d'entrée avant orientation vers secteur spécifique", bg: C.greyLight },
      ],
    ],
    0.3, 0.9, 9.4, [2.2, 2.3, 2.2, 2.7], C.navy
  );

  // Context note
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 3.62, w: 9.4, h: 1.75,
    fill: { color: C.greyLight }, line: { color: C.greyBorder, width: 1 }
  });
  s.addText("Contexte : le segment entreprises est sous-exploité", {
    x: 0.45, y: 3.7, w: 9.1, h: 0.32,
    fontFace: FB, fontSize: 12, bold: true, color: C.navy, align: "left", margin: 0
  });

  const notes = [
    ["Volume recherche \"assurance entreprise\"", "150 recherches/mois — faible mais qualité de lead élevée", C.navy],
    ["Secteurs couverts mais non mis en avant", "Transport, construction, restauration, manufacturiers — pages existantes mais non trouvables", C.orange],
    ["Pages produits spécifiques trop courtes", "Cybersécurité est le seul exemple à suivre — les autres sont quasi-vides", C.red],
  ];

  notes.forEach(([k, v, c], i) => {
    const yy = 4.08 + i * 0.4;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: yy + 0.04, w: 0.06, h: 0.32,
      fill: { color: c }, line: { color: c }
    });
    s.addText(k + " : ", {
      x: 0.55, y: yy, w: 3.4, h: 0.38,
      fontFace: FB, fontSize: 10, bold: true, color: C.text, align: "left", margin: 0
    });
    s.addText(v, {
      x: 3.95, y: yy, w: 5.65, h: 0.38,
      fontFace: FB, fontSize: 10, color: C.textMuted, align: "left", margin: 0
    });
  });
}

// ─── SLIDE 15 — Audit off-site ────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Analyse off-site — Autorité et backlinks");

  // DA score
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 0.9, w: 2.2, h: 2.2,
    fill: { color: C.orangeLight }, line: { color: C.orange, width: 2 }
  });
  s.addText("21", {
    x: 0.3, y: 0.95, w: 2.2, h: 1.2,
    fontFace: FT, fontSize: 64, bold: true, color: C.orange,
    align: "center", valign: "middle", margin: 0
  });
  s.addText("DA SEMrush / 100", {
    x: 0.3, y: 2.15, w: 2.2, h: 0.55,
    fontFace: FB, fontSize: 10, color: C.orange, align: "center", margin: 0
  });
  s.addText("Faible pour une entreprise\navec 35 000 clients et 80 ans d'histoire", {
    x: 0.3, y: 2.75, w: 2.2, h: 0.55,
    fontFace: FB, fontSize: 9, color: C.textMuted, italic: true, align: "center", margin: 0
  });

  statBox(s, 2.7, 0.9, 2.2, 1.35, "238", "Domaines référents\n(majorité nofollow)", C.blueLight, C.navy);
  statBox(s, 2.7, 2.35, 2.2, 1.0, "10–15", "Liens de qualité réels\n(DA 20+)", C.greyLight, C.text);

  // Backlinks quality table
  s.addText("Liens de qualité (DA 20+) — ce qui compte vraiment :", {
    x: 5.1, y: 0.9, w: 4.6, h: 0.3,
    fontFace: FB, fontSize: 10, bold: true, color: C.text, align: "left"
  });

  tableRows(s,
    ["Domaine", "DA", "Qualité"],
    [
      ["santemonteregie.qc.ca", "47", { text: "Bon — lien éditorial régional", color: C.green }],
      ["grenier.qc.ca", "38", { text: "Bon — média québécois", color: C.green, bg: C.greyLight }],
      ["cegepmontpetit.ca", "37", "Bon — institution"],
      ["eebeauce.com", "28", { text: "Bon — média régional", color: C.green, bg: C.greyLight }],
      ["arpac.org", "27", "Bon — association"],
      ["ccid.qc.ca", "24", { text: "Bon — chambre de commerce", color: C.green, bg: C.greyLight }],
    ],
    5.1, 1.25, 4.6, [2.5, 0.7, 1.4], C.navy
  );

  // Recommendations
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 3.48, w: 9.4, h: 1.9,
    fill: { color: C.greyLight }, line: { color: C.greyBorder, width: 1 }
  });
  s.addText("Recommandations prioritaires off-site", {
    x: 0.45, y: 3.55, w: 9.1, h: 0.3,
    fontFace: FB, fontSize: 11, bold: true, color: C.navy, align: "left", margin: 0
  });

  const recs = [
    ["P1", "Créer la fiche GMB pour Roxton Pond (acquisition récente sans fiche)", C.red],
    ["P1", "Optimiser la fiche Brossard : actuellement en 8e position (photos, description, posts réguliers)", C.red],
    ["P2", "Stratégie d'acquisition de liens — associations professionnelles, médias régionaux, partenaires", C.orange],
    ["P2", "Campagne de collecte d'avis Google à Drummondville (53 avis seulement vs 426 à St-Hyacinthe)", C.orange],
    ["P3", "Désavouer les liens de scraping B2B (clodura, success.ai, salezshark)", C.grey],
  ];

  recs.forEach(([prio, text, color], i) => {
    const yy = 3.9 + i * 0.27;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: yy + 0.04, w: 0.52, h: 0.22,
      fill: { color }, line: { color }
    });
    s.addText(prio, {
      x: 0.4, y: yy + 0.04, w: 0.52, h: 0.22,
      fontFace: FB, fontSize: 8.5, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0
    });
    s.addText(text, {
      x: 1.0, y: yy, w: 8.6, h: 0.28,
      fontFace: FB, fontSize: 9.5, color: C.text, align: "left", margin: 0
    });
  });
}

// ─── SLIDE 16 — Google Business Profile ──────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  slideHeader(s, "Google Business Profile — État des fiches");

  tableRows(s,
    ["Succursale", "Position", "Note", "Avis", "Statut & Action"],
    [
      [
        { text: "Saint-Hyacinthe", bold: true, bg: C.greenLight },
        { text: "1er", color: C.green, bold: true, bg: C.greenLight },
        { text: "4,8 ★", color: C.green, bg: C.greenLight },
        { text: "426", color: C.green, bg: C.greenLight },
        { text: "Modèle à suivre — conserver le rythme de collecte d'avis", color: C.green, bg: C.greenLight },
      ],
      [
        { text: "Drummondville", bold: true },
        { text: "1er", color: C.green, bold: true },
        { text: "4,8 ★", color: C.green },
        { text: "53" },
        { text: "Bonne note, peu d'avis — lancer une campagne de collecte (53 vs 426)", color: C.orange },
      ],
      [
        { text: "Brossard", bold: true, bg: C.yellowLight },
        { text: "8e", color: C.red, bold: true, bg: C.yellowLight },
        { text: "4,7 ★", bg: C.yellowLight },
        { text: "246", bg: C.yellowLight },
        { text: "Position insuffisante — optimiser : photos, posts, mots-clés dans description", color: C.orange, bg: C.yellowLight },
      ],
      [
        { text: "Roxton Pond", bold: true, bg: C.redLight },
        { text: "—", bg: C.redLight },
        { text: "—", bg: C.redLight },
        { text: "—", bg: C.redLight },
        { text: "AUCUNE FICHE — acquisition récente, opportunité manquée à corriger en priorité", color: C.red, bold: true, bg: C.redLight },
      ],
    ],
    0.3, 0.9, 9.4, [1.8, 1.1, 0.9, 0.8, 4.8], C.navy
  );

  // SEO local context
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 3.48, w: 9.4, h: 1.85,
    fill: { color: C.greyLight }, line: { color: C.greyBorder, width: 1 }
  });
  s.addText("Contexte SEO local", {
    x: 0.45, y: 3.55, w: 9.1, h: 0.3,
    fontFace: FB, fontSize: 11, bold: true, color: C.navy, align: "left", margin: 0
  });
  s.addText([
    { text: "Les volumes de recherche locaux sont faibles : ", options: { color: C.text } },
    { text: "les utilisateurs qui cherchent un courtier en assurance ne privilégient pas spécialement de solutions locales. ", options: { color: C.text } },
    { text: "Le potentiel d'attirer du trafic via le SEO local reste limité. ", options: { color: C.textMuted, italic: true } },
  ], {
    x: 0.45, y: 3.9, w: 9.1, h: 0.45,
    fontFace: FB, fontSize: 10.5, align: "left", margin: 0
  });
  s.addText([
    { text: "Néanmoins : ", options: { bold: true, color: C.text } },
    { text: "dans la plupart des villes, La Turquoise apparaît déjà dans les 3 premiers résultats. Les notes des fiches sont à 4+ étoiles — la réputation de DPA est solide. L'enjeu principal est la fiche manquante de Roxton Pond et la position de Brossard.", options: { color: C.text } },
  ], {
    x: 0.45, y: 4.4, w: 9.1, h: 0.85,
    fontFace: FB, fontSize: 10.5, align: "left", margin: 0
  });
}

// ─── SLIDE 17 — Conclusion / Prochaines étapes ──────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navyDark };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.orange }, line: { color: C.orange } });

  s.addText("Prochaines étapes recommandées", {
    x: 0.6, y: 0.4, w: 8.8, h: 0.55,
    fontFace: FT, fontSize: 26, bold: true, color: C.white, align: "left"
  });

  const steps = [
    {
      phase: "Semaine 1–2",
      color: C.red,
      items: [
        "Demander la table de redirections complète à l'agence",
        "Corriger le noindex de l'article 7 sons FR + réindexation GSC",
        "Régénérer le sitemap (retirer 404, noindex, /en/)",
        "Créer la fiche GMB pour Roxton Pond",
      ]
    },
    {
      phase: "Semaine 3–4",
      color: C.orange,
      items: [
        "Réécrire les H1 de /accueil, /mon-auto, /ma-maison",
        "Réécrire les meta descriptions (38 pages — gabarit fourni)",
        "Corriger les Core Web Vitals (CLS, images sans dimensions)",
        "Rediriger les pages /en/ en 301 vers les équivalents /fr/",
      ]
    },
    {
      phase: "Mois 2–3",
      color: C.green,
      items: [
        "Enrichir /mon-auto et /ma-maison (1 500+ mots, H2 questions, FAQ Schema)",
        "Enrichir /travailleur-autonome et /assurances-commerciales",
        "Créer /erreurs-et-omissions et /assurances-entreprises/pme",
        "Lancer la collecte d'avis GMB à Drummondville + optimiser Brossard",
      ]
    },
  ];

  steps.forEach((step, i) => {
    const xx = 0.35 + i * 3.2;
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx, y: 1.08, w: 3.0, h: 3.95,
      fill: { color: C.navyMid }, line: { color: step.color, width: 1.5 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: xx, y: 1.08, w: 3.0, h: 0.4,
      fill: { color: step.color }, line: { color: step.color }
    });
    s.addText(step.phase, {
      x: xx + 0.1, y: 1.08, w: 2.8, h: 0.4,
      fontFace: FB, fontSize: 12, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0
    });
    step.items.forEach((item, j) => {
      s.addText([
        { text: "▸ ", options: { bold: true, color: step.color } },
        { text: item, options: { color: "C5DFF5" } },
      ], {
        x: xx + 0.12, y: 1.55 + j * 0.84, w: 2.75, h: 0.78,
        fontFace: FB, fontSize: 10,
        align: "left", valign: "top", margin: 0
      });
    });
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.35, y: 5.15, w: 9.3, h: 0.38,
    fill: { color: "0A1E35" }, line: { color: "0A1E35" }
  });
  s.addText("DPA Assurances — Audit SEO Avril 2026 — Confidentiel", {
    x: 0.5, y: 5.18, w: 9.0, h: 0.32,
    fontFace: FB, fontSize: 10, color: "4D7FA8", align: "center", margin: 0
  });
}

// ─── Write file ─────────────────────────────────────────────────────────────
pres.writeFile({ fileName: "C:/Programmation/seo-audit-tool/Audit-DPA/Audit-SEO-DPA-Assurances.pptx" })
  .then(() => console.log("✅ Présentation générée : Audit-SEO-DPA-Assurances.pptx"))
  .catch(e => console.error("❌ Erreur :", e));
