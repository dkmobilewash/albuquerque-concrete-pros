import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetaInput = {
  /** Page-specific title. The brand suffix is appended when it fits. */
  title: string;
  description: string;
  /** Path with trailing slash, e.g. "/stamped-concrete/". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** Skip the " | Albuquerque Concrete Pros" suffix entirely. */
  noBrandSuffix?: boolean;
  noIndex?: boolean;
};

/** Branded share card, rendered by scripts/render-logo.mjs. Swap for real project photography later if desired. */
const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — concrete built for the high desert`,
};

/** Google truncates titles around 60 characters; the brand suffix is only added when it fits. */
export const MAX_TITLE = 60;

/** First candidate that fits the title budget, else the last (shortest) one. */
export function fitTitle(candidates: string[]): string {
  return candidates.find((c) => c.length <= MAX_TITLE) ?? candidates[candidates.length - 1];
}

export function fullTitle(title: string, noBrandSuffix = false): string {
  if (noBrandSuffix) return title;
  const withBrand = `${title} | ${siteConfig.name}`;
  return withBrand.length <= MAX_TITLE ? withBrand : title;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

/**
 * The ONE metadata builder every page goes through: canonical, Open Graph and
 * Twitter Card are always set together and always agree.
 */
export function pageMetadata(input: PageMetaInput): Metadata {
  const title = fullTitle(input.title, input.noBrandSuffix);
  const url = absoluteUrl(input.path);
  return {
    title: { absolute: title },
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: input.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: input.type ?? "website",
      images: [OG_IMAGE],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: input.description,
      images: [OG_IMAGE.url],
    },
    ...(input.noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Trim to a meta-description-friendly length at a word boundary. */
export function clampDescription(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "")}…`;
}
