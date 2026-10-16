import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/metadata";
import { comboPath, servicePath } from "@/lib/routes";
import { populatedSameAs, reviewData, siteConfig } from "@/lib/site-config";
import type { Area, Faq, Post, Service } from "@/lib/types";

/*
 * JSON-LD builders. The business is declared ONCE per page (root layout) as a
 * GeneralContractor node with a stable @id; every other block references it
 * by @id instead of re-declaring it.
 */

export const ORG_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;
export const orgRef = { "@id": ORG_ID } as const;

type JsonLdObject = Record<string, unknown>;

function placeFor(area: Area): JsonLdObject {
  return {
    "@type": area.jurisdiction.type === "municipality" ? "City" : "Place",
    name: area.geoLabel,
    containedInPlace: { "@type": "State", name: "New Mexico" },
  };
}

/** The single business node. Optional facts appear only when real values exist in site-config. */
export function organizationNode(): JsonLdObject {
  const sameAs = populatedSameAs();
  const node: JsonLdObject = {
    // GeneralContractor is the most specific schema.org LocalBusiness subtype
    // for a concrete contractor (there is no "ConcreteContractor" type).
    "@type": "GeneralContractor",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    description: siteConfig.description,
    areaServed: areas.map(placeFor),
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Concrete services",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          "@id": `${absoluteUrl(servicePath(s))}#service`,
          name: s.name,
          url: absoluteUrl(servicePath(s)),
        },
      })),
    },
  };
  if (sameAs.length) node.sameAs = sameAs;
  if (siteConfig.phone) node.telephone = siteConfig.phone;
  if (siteConfig.email) node.email = siteConfig.email;
  if (siteConfig.address) node.address = { "@type": "PostalAddress", addressCountry: "US", ...siteConfig.address };
  if (siteConfig.openingHours.length) node.openingHours = siteConfig.openingHours;
  if (siteConfig.foundingYear) node.foundingDate = String(siteConfig.foundingYear);
  if (siteConfig.logoPath) {
    node.logo = absoluteUrl(siteConfig.logoPath);
    node.image = absoluteUrl(siteConfig.logoPath);
  }
  // Only ever emitted from real, supplied review data — never fabricated.
  if (reviewData) {
    node.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: reviewData.ratingValue,
      reviewCount: reviewData.reviewCount,
      bestRating: 5,
    };
  }
  return node;
}

export function websiteNode(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    publisher: orgRef,
    inLanguage: "en-US",
  };
}

export function siteGraph(): JsonLdObject {
  return { "@context": "https://schema.org", "@graph": [organizationNode(), websiteNode()] };
}

export function serviceSchema(service: Service, area?: Area): JsonLdObject {
  const path = area ? comboPath(service, area) : servicePath(service);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: area ? `${service.name} in ${area.geoLabel}` : service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: absoluteUrl(path),
    provider: orgRef,
    areaServed: area ? placeFor(area) : areas.map(placeFor),
  };
}

export function faqSchema(faqs: Faq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: stripInlineLinks(f.answer) },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function blogPostingSchema(post: Post, path: string): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.published,
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    author: orgRef,
    publisher: orgRef,
    isPartOf: { "@id": WEBSITE_ID },
    about: post.relatedServices.map((slug) => ({ "@id": `${absoluteUrl(`/${slug}/`)}#service` })),
  };
}

/** "[anchor](/path/)" → "anchor" for plain-text contexts (schema, meta). */
export function stripInlineLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
