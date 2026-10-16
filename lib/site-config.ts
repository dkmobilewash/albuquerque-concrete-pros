/**
 * SINGLE SOURCE OF TRUTH for business facts and trust signals.
 *
 * Every field below that is empty / null is empty ON PURPOSE: the real value
 * has not been supplied by the client yet. Components and JSON-LD read from
 * here and automatically omit anything that is empty, so activating a field
 * later means editing ONE value in this file — nothing else.
 *
 * Never put a placeholder that looks real (a fake phone number, a guessed
 * URL, an estimated review count) in any of these fields.
 */

export const siteConfig = {
  name: "Albuquerque Concrete Pros",
  shortName: "ABQ Concrete Pros",
  /** Canonical origin. Apex (albuquerqueconcretepro.com) 308-redirects here via next.config.ts. */
  url: "https://www.albuquerqueconcretepro.com",
  domain: "albuquerqueconcretepro.com",
  locale: "en_US",
  region: "Albuquerque metro, New Mexico",
  description:
    "Albuquerque Concrete Pros builds driveways, stamped concrete, slabs, foundations, retaining walls and commercial concrete engineered for high-desert soils and climate across the Albuquerque metro.",

  /**
   * Main phone number, display format, e.g. "(505) 555-0100".
   * EMPTY until the client supplies the real number. When empty, the site
   * shows no phone anywhere and routes every CTA to the contact form.
   */
  phone: "" as string,

  /**
   * Public-facing email address shown on the site. EMPTY until supplied.
   * (Lead *delivery* address is separate — see LEAD_NOTIFICATION_EMAIL env var.)
   */
  email: "" as string,

  /**
   * Street address for NAP + LocalBusiness schema. null until the client
   * confirms a real address (or confirms they are a service-area business
   * with no public storefront, in which case leave null and keep areaServed).
   */
  address: null as null | {
    streetAddress: string;
    addressLocality: string;
    addressRegion: "NM";
    postalCode: string;
  },

  /**
   * Business hours in schema.org openingHours format, e.g. ["Mo-Fr 07:00-17:00"].
   * EMPTY until the client confirms real hours.
   */
  openingHours: [] as string[],

  /** Year founded. null until supplied — never estimate "years in business". */
  foundingYear: null as number | null,

  /**
   * New Mexico contractor license number (Construction Industries Division)
   * and classification. EMPTY until supplied; when set, it is shown in the
   * footer and About page.
   */
  licenseNumber: "" as string,

  /** Insurance statement, e.g. "General liability and workers' comp insured". EMPTY until confirmed. */
  insuranceStatement: "" as string,

  /**
   * Path under /public to the real logo file, e.g. "/logo.svg". EMPTY until the
   * client supplies one; until then the header renders a text wordmark and the
   * schema omits `logo`.
   */
  logoPath: "" as string,
} as const;

/**
 * Social / citation profile URLs used for JSON-LD `sameAs` and footer links.
 * Each is an empty string until a REAL profile exists. Only populated values
 * are emitted — never add a guessed or placeholder URL here.
 */
export const socialProfiles = {
  googleBusinessProfile: "",
  facebook: "",
  instagram: "",
  youtube: "",
  nextdoor: "",
  yelp: "",
  houzz: "",
  angi: "",
  bbb: "",
} satisfies Record<string, string>;

export type ReviewData = {
  /** Average star rating from the named source, e.g. 4.8 */
  ratingValue: number;
  /** Total number of reviews at that source. */
  reviewCount: number;
  /** Where the numbers come from, e.g. "Google". Shown next to the figure. */
  source: string;
  /** ISO date the figures were last checked. */
  asOf: string;
};

/**
 * Real, verifiable review data. null by default.
 *
 * When null: NO rating, star graphic, review count, or `aggregateRating`
 * schema appears anywhere on the site. Fabricating aggregateRating risks a
 * Google Search Console manual action — only set this from a real, current
 * review source (e.g. the Google Business Profile once it has reviews).
 */
export const reviewData: ReviewData | null = null;

/**
 * GA4 measurement ID (e.g. "G-XXXXXXXXXX"), read from the environment so
 * dev/preview stay silent. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in the production
 * environment once the client provides the GA4 property.
 */
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** Returns only the populated social/citation URLs. */
export function populatedSameAs(): string[] {
  return Object.values(socialProfiles).filter((u) => u.trim().length > 0);
}
