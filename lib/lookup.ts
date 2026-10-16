import { areas } from "@/data/areas";
import { projects } from "@/data/portfolio";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import type { Area, AreaSlug, Post, Project, Service, ServiceSlug } from "@/lib/types";

/*
 * Slug-based lookups. Everything that cross-references a service, area, post
 * or project goes through these — never `services[i]`. Integrity checks run
 * once at module load (i.e. at build time) and throw on any bad reference, so
 * a typo or reordering can't silently mislabel content.
 */

const serviceMap = new Map(services.map((s) => [s.slug, s]));
const areaMap = new Map(areas.map((a) => [a.slug, a]));
const postMap = new Map(posts.map((p) => [p.slug, p]));

export function getServiceBySlug(slug: string): Service | undefined {
  return serviceMap.get(slug as ServiceSlug);
}

export function getAreaBySlug(slug: string): Area | undefined {
  return areaMap.get(slug as AreaSlug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return postMap.get(slug);
}

function mustService(slug: string, context: string): Service {
  const s = getServiceBySlug(slug);
  if (!s) throw new Error(`Unknown service slug "${slug}" referenced in ${context}`);
  return s;
}

function mustArea(slug: string, context: string): Area {
  const a = getAreaBySlug(slug);
  if (!a) throw new Error(`Unknown area slug "${slug}" referenced in ${context}`);
  return a;
}

function mustPost(slug: string, context: string): Post {
  const p = getPostBySlug(slug);
  if (!p) throw new Error(`Unknown post slug "${slug}" referenced in ${context}`);
  return p;
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices.map((slug) => mustService(slug, `${service.slug}.relatedServices`));
}

export function getNearbyAreas(area: Area): Area[] {
  return area.nearby.map((slug) => mustArea(slug, `${area.slug}.nearby`));
}

/** Posts that declare this service as related — the reverse side of post → service links. */
export function getPostsForService(slug: ServiceSlug): Post[] {
  return posts.filter((p) => p.relatedServices.includes(slug));
}

/** Related posts, made bidirectional: A lists B, or B lists A. */
export function getRelatedPosts(post: Post): Post[] {
  const slugs = new Set(post.relatedPosts);
  for (const other of posts) {
    if (other.slug !== post.slug && other.relatedPosts.includes(post.slug)) slugs.add(other.slug);
  }
  return [...slugs].map((s) => mustPost(s, `${post.slug}.relatedPosts`));
}

export function getProjectsForArea(slug: AreaSlug): Project[] {
  return projects.filter((p) => p.area === slug);
}

export function getProjectsForService(slug: ServiceSlug): Project[] {
  return projects.filter((p) => p.service === slug);
}

// ---------------------------------------------------------------------------
// Build-time integrity checks
// ---------------------------------------------------------------------------

function assertUnique(label: string, slugs: string[]) {
  const seen = new Set<string>();
  for (const s of slugs) {
    if (seen.has(s)) throw new Error(`Duplicate ${label} slug "${s}"`);
    seen.add(s);
  }
}

assertUnique("service", services.map((s) => s.slug));
assertUnique("area", areas.map((a) => a.slug));
assertUnique("post", posts.map((p) => p.slug));
assertUnique("project", projects.map((p) => p.slug));
{
  const clash = services.find((s) => areaMap.has(s.slug as unknown as AreaSlug));
  if (clash) throw new Error(`Slug "${clash.slug}" is both a service and an area`);
}
if (services.length !== 13) throw new Error(`Expected 13 services, found ${services.length}`);
if (areas.length !== 8) throw new Error(`Expected 8 areas, found ${areas.length}`);
if (services.filter((s) => s.flagship).length !== 1) throw new Error("Exactly one flagship service required");

{
  // Every service is referenced the same number of times across related lists,
  // so contextual cross-links stay uniform for crawlers.
  const counts = new Map<string, number>(services.map((s) => [s.slug, 0]));
  for (const s of services) {
    for (const r of getRelatedServices(s)) {
      if (r.slug === s.slug) throw new Error(`${s.slug} lists itself as related`);
      counts.set(r.slug, (counts.get(r.slug) ?? 0) + 1);
    }
  }
  if (new Set(counts.values()).size !== 1) {
    throw new Error(`Related-service references are uneven: ${JSON.stringify(Object.fromEntries(counts))}`);
  }
}
for (const a of areas) getNearbyAreas(a);
for (const p of posts) {
  p.relatedServices.forEach((s) => mustService(s, `${p.slug}.relatedServices`));
  getRelatedPosts(p);
}
for (const p of projects) {
  mustService(p.service, `project ${p.slug}`);
  mustArea(p.area, `project ${p.slug}`);
}
