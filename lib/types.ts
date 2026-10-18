/**
 * Shared content types. Every cross-reference between services, areas, posts
 * and portfolio projects is by slug — never by array index. Resolve slugs with
 * the helpers in `lib/lookup.ts`.
 */

export type ServiceSlug =
  | "concrete-driveways"
  | "private-road-construction"
  | "concrete-leveling"
  | "concrete-parking-lots"
  | "concrete-repair"
  | "concrete-sidewalks"
  | "concrete-flooring"
  | "foundation-installation"
  | "concrete-maintenance"
  | "retaining-walls"
  | "slab-foundations"
  | "stamped-concrete"
  | "structural-concrete";

export type AreaSlug =
  | "albuquerque"
  | "rio-rancho"
  | "corrales"
  | "north-valley"
  | "tanoan"
  | "paradise-hills"
  | "los-ranchos-de-albuquerque"
  | "albuquerque-acres";

/**
 * Soil/site conditions that recur across the Albuquerque metro. Each area
 * declares which apply to it; each service explains how each one affects that
 * service. The combo-page engine joins the two, so "why this matters here"
 * copy is grounded in the specific area's real ground conditions.
 */
export type SoilFactor =
  /** Calcium-carbonate hardpan common on mesas and terraces. */
  | "caliche"
  /** Clay-rich soils that swell when wet and shrink when dry. */
  | "expansive-clay"
  /** Low-density, dry sandy/silty soils that can settle suddenly when wetted (hydrocollapse). */
  | "collapsible-soil"
  /** Rio Grande valley floor alluvium: sandy/silty loams, shallower groundwater, irrigation ditches. */
  | "river-alluvium"
  /** Sandia foothill alluvial fans: decomposed granite, gravel, cobbles, slopes and arroyo runoff. */
  | "foothill-granitic";

export type Faq = { question: string; answer: string };

export type Step = { title: string; description: string };

export type Service = {
  slug: ServiceSlug;
  /** Full display name, e.g. "Stamped Concrete". */
  name: string;
  /** Shorter name for <title> tags when the full name would push a title past 60 chars. */
  titleName?: string;
  /** Lowercase phrase used mid-sentence, e.g. "stamped concrete". */
  lowerName: string;
  /** One-line hook for cards. */
  tagline: string;
  /** ~150-160 char meta description (no city name; the helper adds geo context where needed). */
  metaDescription: string;
  /** Marks the signature service (exactly one). */
  flagship?: boolean;
  category: "residential" | "commercial" | "structural" | "restoration";
  /** 2-3 paragraphs. */
  overview: string[];
  /** Exactly 5 steps. */
  process: Step[];
  /** 4-5 "signs you need this" problems. */
  signs: Step[];
  /** 3-4 materials / techniques. */
  materials: { name: string; description: string }[];
  /** 5-6 FAQs. */
  faqs: Faq[];
  /**
   * Exactly 3 related service slugs. Curated so every service is referenced
   * exactly 3 times across all lists (validated in lib/lookup.ts).
   */
  relatedServices: ServiceSlug[];
  /** One or two sentences: how one-off permitting typically applies to this service (no fees, no department names). */
  permitNote: string;
  /** Typical duration phrasing, honest ranges, e.g. "Most residential driveways are formed and poured in 2-4 working days, plus cure time before vehicle traffic." */
  timeline: string;
  /** How high-desert climate (UV, thermal swing, low humidity, monsoon, freeze-thaw) specifically affects this service. 2-3 sentences. */
  climateNote: string;
  /** For each soil factor, 1-2 sentences on how it affects THIS service and what we do about it. */
  soilNotes: Record<SoilFactor, string>;
};

export type Jurisdiction = {
  /**
   * "municipality" = its own incorporated city/village with its own process.
   * "mixed" = a neighborhood/community where parcels may be City of Albuquerque
   * or unincorporated Bernalillo County depending on the address.
   * "city-neighborhood" = a neighborhood generally inside City of Albuquerque limits.
   */
  type: "municipality" | "mixed" | "city-neighborhood";
  /** Plain-language name of the governing body/bodies, e.g. "City of Rio Rancho". */
  authority: string;
  county: string;
  /** Paragraph describing the general permitting process accurately (no fees, no invented department names/URLs). */
  permitting: string;
  /** Internal note for the README "verify before launch" list. Not rendered. */
  verifyBeforeLaunch: string;
};

export type Area = {
  slug: AreaSlug;
  /** Display name, e.g. "Rio Rancho". */
  name: string;
  /** Geo label for titles, e.g. "Rio Rancho, NM" or "North Valley, Albuquerque, NM". */
  geoLabel: string;
  /** Shorter geo label for <title> tags when geoLabel would push a title past 60 chars. Must end in ", NM". */
  titleGeo?: string;
  /** Short phrase for mid-sentence use, e.g. "Rio Rancho" or "the North Valley". */
  inPhrase: string;
  metaDescription: string;
  /** Exactly 2 paragraphs of neighborhood character. */
  character: [string, string];
  /** Approximate elevation phrasing, hedged, e.g. "roughly 5,100-5,900 feet". */
  elevation: string;
  soilFactors: SoilFactor[];
  /** Paragraph: soil conditions specific to this area. */
  soilSummary: string;
  /** Paragraph: climate/microclimate specifics for this area. */
  climateSummary: string;
  jurisdiction: Jurisdiction;
  /** Exactly 2 local FAQs. */
  faqs: [Faq, Faq];
  /** 4-6 well-known landmarks/corridors. */
  landmarks: string[];
  /** Typical property/project types here, used in combo openers, e.g. "custom homes on acre-plus lots". */
  propertyTypes: string;
  /** 2-3 neighboring area slugs. */
  nearby: AreaSlug[];
};

/** Blog body blocks. Paragraph/list text supports inline links: [anchor](/path/). */
export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  /** Shorter <title> when `title` (the on-page H1) exceeds 60 chars. */
  seoTitle?: string;
  /** Meta description, ~150-160 chars. */
  description: string;
  /** ISO date. */
  published: string;
  /** Short reading summary for cards. */
  excerpt: string;
  body: PostBlock[];
  /** Services this post is genuinely about; the service pages link back automatically. */
  relatedServices: ServiceSlug[];
  /** Related posts; made bidirectional automatically in lib/lookup.ts. */
  relatedPosts: string[];
  faqs?: Faq[];
};

/**
 * A completed project. Add entries to data/portfolio.ts only for real,
 * completed jobs with the client's permission and real photography.
 */
export type Project = {
  slug: string;
  title: string;
  service: ServiceSlug;
  area: AreaSlug;
  /** Year completed (real). */
  year: number;
  summary: string;
  challenge: string;
  solution: string;
  /** Paths under /public, e.g. "/projects/foo/hero.jpg". */
  photos: { src: string; alt: string; width: number; height: number }[];
};
