import type { Area, Faq, Service, ServiceSlug, SoilFactor } from "@/lib/types";

/*
 * Service × area content engine for the 104 combo pages.
 *
 * Thin/duplicate content is avoided by composing each page from:
 *   1. a rotated opening template (selected by a deterministic hash of the
 *      two slugs — same inputs always produce the same page),
 *   2. "why this matters here": the service's own note for EACH soil factor
 *      the area actually has, plus the service's climate note tied to the
 *      area's elevation and microclimate,
 *   3. a jurisdiction-specific permitting note joined with the service's
 *      permitting note,
 *   4. a combo-specific FAQ set.
 * No randomness anywhere.
 */

export const SOIL_LABELS: Record<SoilFactor, string> = {
  caliche: "Caliche hardpan",
  "expansive-clay": "Expansive clay",
  "collapsible-soil": "Collapsible soil",
  "river-alluvium": "Rio Grande valley alluvium",
  "foothill-granitic": "Foothill decomposed granite",
};

const SOIL_PHRASES: Record<SoilFactor, string> = {
  caliche: "caliche layers",
  "expansive-clay": "pockets of expansive clay",
  "collapsible-soil": "collapse-prone sands and silts",
  "river-alluvium": "river-deposited sandy and silty loams",
  "foothill-granitic": "decomposed granite and cobble from the Sandia foothills",
};

/**
 * Singular noun for "a ___ project" / "every ___ job" slots, where plural
 * service names ("retaining walls") would read badly. Typed by ServiceSlug so
 * a new service can't be added without one.
 */
export const PROJECT_NOUN: Record<ServiceSlug, string> = {
  "concrete-driveways": "driveway",
  "private-road-construction": "private road",
  "concrete-leveling": "concrete leveling",
  "concrete-parking-lots": "parking lot",
  "concrete-repair": "concrete repair",
  "concrete-sidewalks": "walkway",
  "concrete-flooring": "concrete floor",
  "foundation-installation": "foundation",
  "concrete-maintenance": "concrete maintenance",
  "retaining-walls": "retaining wall",
  "slab-foundations": "slab foundation",
  "stamped-concrete": "stamped concrete",
  "structural-concrete": "structural concrete",
};

/** FNV-1a 32-bit — tiny, stable, deterministic. */
export function stableHash(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function listJoin(items: string[]): string {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Grammatical "who governs permits here" phrase for mid-sentence use. */
export function authorityPhrase(a: Area): string {
  switch (a.jurisdiction.type) {
    case "municipality":
      return `the ${a.jurisdiction.authority}`;
    case "mixed":
      return `either the City of Albuquerque or unincorporated ${a.jurisdiction.county}, depending on the address`;
    case "city-neighborhood":
      return "the City of Albuquerque";
  }
}

export function soilPhrase(area: Area): string {
  return listJoin(area.soilFactors.map((f) => SOIL_PHRASES[f]));
}

type Opener = (s: Service, a: Area, landmark: string) => string;

const OPENERS: Opener[] = [
  (s, a) =>
    `In ${a.inPhrase}, ${PROJECT_NOUN[s.slug]} work has to be built for the ground it actually sits on. Here that usually means ${soilPhrase(a)}, at elevations of ${a.elevation} — conditions that shape everything from excavation and base preparation to how the concrete is finished and cured.`,
  (s, a) =>
    `In ${a.inPhrase}, ${PROJECT_NOUN[s.slug]} projects typically serve ${a.propertyTypes}. Each of those comes with its own expectations for appearance, load and drainage, and each sits on ${soilPhrase(a)} that need to be handled before the first truck arrives.`,
  (s, a) =>
    `Planning ${s.lowerName} in ${a.inPhrase}? Start with what's underneath it. The soils here run to ${soilPhrase(a)}, and the way a crew prepares that subgrade does more to decide how the finished work holds up than almost any choice you'll make about finish or color.`,
  (s, a) =>
    `Because ${a.inPhrase} falls under ${authorityPhrase(a)}, a ${PROJECT_NOUN[s.slug]} project here starts with knowing which approvals apply to your specific property — and then with a site plan that respects ${soilPhrase(a)} and the high-desert weather.`,
  (s, a, landmark) =>
    `From ${landmark} outward, ${a.inPhrase} combines ${a.propertyTypes} with ground conditions that reward careful planning. For ${s.lowerName}, that means designing around ${soilPhrase(a)} rather than hoping the subgrade cooperates.`,
  (s, a) =>
    `With elevations of ${a.elevation}, ${a.inPhrase} gets intense sun, wide day-to-night temperature swings and short, heavy monsoon storms. Add ${soilPhrase(a)}, and a ${PROJECT_NOUN[s.slug]} project becomes one where preparation and curing matter as much as the pour itself.`,
];

const SCHEDULE_NOTES = [
  "Spring and fall offer the most forgiving pour windows; summer pours are typically scheduled for early morning to stay ahead of heat and afternoon wind, and winter work needs cold-weather protection on freezing nights.",
  "Monsoon season (roughly July through September) can interrupt excavation and pour days with afternoon storms, so summer schedules usually build in weather flexibility and favor early starts.",
  "Winter work is possible on many projects, but freezing nights call for blankets, heated water or accelerators and a longer wait before the concrete is exposed to deicing or heavy loads.",
];

export type ComboContent = {
  hash: number;
  intro: string[];
  soilPoints: { factor: SoilFactor; label: string; text: string }[];
  climate: string;
  permitting: string[];
  faqs: Faq[];
};

function jurisdictionLead(a: Area): string {
  switch (a.jurisdiction.type) {
    case "municipality":
      return `Work in ${a.inPhrase} is permitted through ${authorityPhrase(a)}, which sets its own process separate from neighboring jurisdictions.`;
    case "mixed":
      return `${cap(a.inPhrase)} is a mix of jurisdictions — depending on the exact address, a property may fall under the City of Albuquerque or unincorporated ${a.jurisdiction.county}, so the first step is confirming which one governs your parcel.`;
    case "city-neighborhood":
      return `${cap(a.inPhrase)} is generally within City of Albuquerque limits, so city permitting applies; many properties here also require homeowners' association design review before exterior work begins.`;
  }
}

export function buildCombo(s: Service, a: Area): ComboContent {
  const hash = stableHash(`${s.slug}::${a.slug}`);
  const landmark = a.landmarks[hash % a.landmarks.length];
  const opener = OPENERS[hash % OPENERS.length](s, a, landmark);
  const second = `${s.tagline} ${s.timeline}`;

  const soilPoints = a.soilFactors.map((factor) => ({
    factor,
    label: SOIL_LABELS[factor],
    text: s.soilNotes[factor],
  }));

  const climate = `${s.climateNote} In ${a.inPhrase}, at elevations of ${a.elevation}, we plan pour timing, finishing and curing around those conditions on every ${PROJECT_NOUN[s.slug]} job.`;

  const permitting = [jurisdictionLead(a), s.permitNote];

  const rotatedFaq = s.faqs[(hash >>> 3) % s.faqs.length];
  const faqs: Faq[] = [
    {
      question: `Do I need a permit for ${s.lowerName} in ${a.inPhrase}?`,
      answer: `${jurisdictionLead(a)} ${s.permitNote} We confirm the requirements for your address during the estimate rather than guessing.`,
    },
    {
      question: `How do ${a.inPhrase} soils affect ${s.lowerName}?`,
      answer: soilPoints.map((p) => `${p.label}: ${p.text}`).join(" "),
    },
    {
      question: `How long does a ${PROJECT_NOUN[s.slug]} project take in ${a.inPhrase}?`,
      answer: `${s.timeline} ${SCHEDULE_NOTES[hash % SCHEDULE_NOTES.length]}`,
    },
    rotatedFaq,
  ];

  return { hash, intro: [opener, second], soilPoints, climate, permitting, faqs };
}

/** Combo <title>/<h1>. The Albuquerque combo says "City of Albuquerque" so it never duplicates the service hub title. */
export function comboTitle(service: Service, area: Area): string {
  return area.slug === "albuquerque"
    ? `${service.name} in the City of Albuquerque, NM`
    : `${service.name} in ${area.geoLabel}`;
}
