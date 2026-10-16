import { areas } from "@/data/areas";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import type { Area, Service } from "@/lib/types";

/*
 * Every indexable route on the site, in one place. app/sitemap.ts is built
 * from this list, and the build QA compares its length against the actual
 * prerendered pages — change the content model here and both move together.
 * All paths use a trailing slash to match `trailingSlash: true`.
 */

export const STATIC_PAGES = [
  "/",
  "/services/",
  "/service-areas/",
  "/portfolio/",
  "/about/",
  "/reviews/",
  "/contact/",
  "/blog/",
  "/privacy-policy/",
  "/terms/",
] as const;

export const servicePath = (s: Pick<Service, "slug">) => `/${s.slug}/`;
export const areaPath = (a: Pick<Area, "slug">) => `/${a.slug}/`;
export const comboPath = (s: Pick<Service, "slug">, a: Pick<Area, "slug">) => `/${s.slug}/${a.slug}/`;
export const postPath = (slug: string) => `/blog/${slug}/`;

export type SiteRoute = {
  path: string;
  kind: "static" | "service" | "area" | "combo" | "post";
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  lastModified?: string;
};

export function allRoutes(): SiteRoute[] {
  const routes: SiteRoute[] = STATIC_PAGES.map((path) => ({
    path,
    kind: "static",
    priority: path === "/" ? 1 : path === "/privacy-policy/" || path === "/terms/" ? 0.2 : 0.6,
    changeFrequency: path === "/privacy-policy/" || path === "/terms/" ? "yearly" : "monthly",
  }));
  for (const s of services) {
    routes.push({ path: servicePath(s), kind: "service", priority: s.flagship ? 0.9 : 0.8, changeFrequency: "monthly" });
  }
  for (const a of areas) {
    routes.push({ path: areaPath(a), kind: "area", priority: 0.8, changeFrequency: "monthly" });
  }
  for (const s of services) {
    for (const a of areas) {
      routes.push({ path: comboPath(s, a), kind: "combo", priority: 0.6, changeFrequency: "monthly" });
    }
  }
  for (const p of posts) {
    routes.push({ path: postPath(p.slug), kind: "post", priority: 0.5, changeFrequency: "yearly", lastModified: p.published });
  }
  return routes;
}
