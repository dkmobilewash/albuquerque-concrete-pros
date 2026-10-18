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

  /** Main phone number (display format). Rendered as a click-to-call link via `telHref()`. */
  phone: "(505) 628-0897" as string,

  /**
   * Public-facing email address shown on the site. EMPTY until supplied.
   * (Lead *delivery* address is separate — see LEAD_NOTIFICATION_EMAIL env var.)
   */
  email: "" as string,

  /** Street address for NAP + LocalBusiness schema. */
  address: {
    streetAddress: "4000 Hendrix Rd NE",
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    postalCode: "87110",
  } as null | {
    streetAddress: string;
    addressLocality: string;
    addressRegion: "NM";
    postalCode: string;
  },

  /**
   * Show a map and "Get directions" link for the street address on the
   * contact page. OFF until the client confirms the address is a place
   * customers can visit (not a home / service-area-only business — Google
   * Business Profile rules treat those differently).
   */
  showOfficeMap: false as boolean,

  /**
   * Business hours. `schema` uses schema.org openingHours format; `label` is
   * what visitors see. Empty array = no hours shown or emitted.
   */
  hours: [
    { label: "Monday–Friday", time: "9:00 am – 6:00 pm", schema: "Mo-Fr 09:00-18:00" },
    { label: "Saturday–Sunday", time: "9:00 am – 2:00 pm", schema: "Sa-Su 09:00-14:00" },
  ] as { label: string; time: string; schema: string }[],

  /** Year founded (supplied by the client). */
  foundingYear: 2020 as number | null,

  /**
   * New Mexico contractor license number (Construction Industries Division)
   * and classification. EMPTY until supplied; when set, it is shown in the
   * footer and About page.
   */
  licenseNumber: "" as string,

  /** Insurance statement, e.g. "General liability and workers' comp insured". EMPTY until confirmed. */
  insuranceStatement: "" as string,

  /**
   * Raster logo used for JSON-LD `logo` (Google wants a crawlable bitmap, min
   * 112x112). Rendered from components/Logo.tsx — regenerate with
   * `npm run logo` after changing the design.
   */
  logoPath: "/logo.png" as string,
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

/** "tel:" href in E.164 form for a US display number, e.g. "(505) 628-0897" → "tel:+15056280897". */
export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `tel:+${digits.length === 10 ? `1${digits}` : digits}`;
}
