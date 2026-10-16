#!/usr/bin/env node
/**
 * Post-build QA over the prerendered HTML in .next/server/app.
 * Run `npm run build && npm run qa`. Exits non-zero on any failure.
 *
 * Checks:
 *  1. Sitemap URL set === prerendered page set (exact, both directions)
 *  2. Exactly one <h1> per page, no skipped heading levels
 *  3. Title tags present, geo modifier on service / area / combo pages
 *  4. No rating/review-count/years-in-business-looking claims in visible HTML
 *  5. Header/footer link uniformity: every service and area linked equally on every page
 *  6. No aggregateRating in JSON-LD unless reviewData is configured
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("../.next/server/app/", import.meta.url).pathname;
const ORIGIN = "https://www.albuquerqueconcretepro.com";
const failures = [];
const fail = (msg) => failures.push(msg);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const htmlFiles = walk(ROOT).filter(
  (f) => f.endsWith(".html") && !/(^|\/)_(not-found|global-error)\.html$/.test(relative(ROOT, f)),
);
const pathOf = (file) => {
  const rel = relative(ROOT, file).replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}/`;
};
const pages = new Map(htmlFiles.map((f) => [pathOf(f), readFileSync(f, "utf8")]));

// 1. Sitemap parity -----------------------------------------------------------
const sitemap = readFileSync(join(ROOT, "sitemap.xml.body"), "utf8");
const sitemapPaths = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, "")));
const builtPaths = new Set(pages.keys());
for (const p of builtPaths) if (!sitemapPaths.has(p)) fail(`Built page missing from sitemap: ${p}`);
for (const p of sitemapPaths) if (!builtPaths.has(p)) fail(`Sitemap URL has no built page: ${p}`);
console.log(`Pages built: ${builtPaths.size} · Sitemap URLs: ${sitemapPaths.size}`);

// Strip scripts/styles so JSON-LD & inline code don't pollute HTML checks.
const visible = (html) => html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");

// 2. Heading hierarchy --------------------------------------------------------
let headingPagesOk = 0;
for (const [path, html] of pages) {
  const levels = [...visible(html).matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const h1s = levels.filter((l) => l === 1).length;
  if (h1s !== 1) fail(`${path}: ${h1s} <h1> elements`);
  if (levels[0] !== 1) fail(`${path}: first heading is h${levels[0]}, not h1`);
  let ok = true;
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      fail(`${path}: heading jump h${levels[i - 1]} → h${levels[i]} (position ${i})`);
      ok = false;
    }
  }
  if (ok && h1s === 1) headingPagesOk++;
}
console.log(`Heading hierarchy OK on ${headingPagesOk}/${pages.size} pages`);

// 3. Titles -------------------------------------------------------------------
const titleOf = (html) => (html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "";
const titles = new Map();
for (const [path, html] of pages) {
  const t = titleOf(html);
  if (!t) fail(`${path}: missing <title>`);
  if (titles.has(t)) fail(`Duplicate title "${t}" on ${path} and ${titles.get(t)}`);
  titles.set(t, path);
  const depth = path.split("/").filter(Boolean).length;
  const isPost = path.startsWith("/blog/") && depth === 2;
  const isUtility = ["/privacy-policy/", "/terms/", "/reviews/"].includes(path);
  if (!isPost && !isUtility && !/, NM\b/.test(t)) fail(`${path}: title lacks ", NM" geo modifier: "${t}"`);
}

// 4. Fabricated trust signals -------------------------------------------------
const TRUST_PATTERNS = [
  /\b\d(\.\d)?\s*(★|stars?\b|-star)/i,
  /★/,
  /\b\d{2,}\+?\s*(google\s+)?reviews\b/i,
  /\b\d+\+?\s*years?\s+(of\s+)?(experience|in business)\b/i,
  /\bsince\s+(19|20)\d{2}\b/i,
  /\b\d{2,}\+?\s*(projects|jobs|customers|clients|homeowners)\s+(completed|served|poured)?/i,
  /\$\s?\d/,
  /\blicensed\s*(,|and|&amp;|&)\s*insured\b/i,
];
for (const [path, html] of pages) {
  const text = visible(html).replace(/<[^>]+>/g, " ");
  for (const re of TRUST_PATTERNS) {
    const m = text.match(re);
    if (m) fail(`${path}: trust-signal-looking text "${m[0]}"`);
  }
  if (/aggregateRating/.test(html)) fail(`${path}: aggregateRating present in JSON-LD`);
}

// 5. Link uniformity ----------------------------------------------------------
const SERVICES = [
  "concrete-driveways", "private-road-construction", "concrete-leveling", "concrete-parking-lots",
  "concrete-repair", "concrete-sidewalks", "concrete-flooring", "foundation-installation",
  "concrete-maintenance", "retaining-walls", "slab-foundations", "stamped-concrete", "structural-concrete",
];
const AREAS = [
  "albuquerque", "rio-rancho", "corrales", "north-valley", "tanoan", "paradise-hills",
  "los-ranchos-de-albuquerque", "albuquerque-acres",
];
const count = (html, slug) => (html.match(new RegExp(`href="/${slug}/"`, "g")) ?? []).length;
const chrome = (html) => {
  const header = (html.match(/<header[\s\S]*?<\/header>/) ?? [""])[0];
  const footer = (html.match(/<footer[\s\S]*?<\/footer>/) ?? [""])[0];
  return header + footer;
};
for (const [path, html] of pages) {
  const c = chrome(html);
  const sc = new Set(SERVICES.map((s) => count(c, s)));
  const ac = new Set(AREAS.map((a) => count(c, a)));
  if (sc.size !== 1 || [...sc][0] === 0) fail(`${path}: uneven header/footer service links ${[...sc]}`);
  if (ac.size !== 1 || [...ac][0] === 0) fail(`${path}: uneven header/footer area links ${[...ac]}`);
}
const totals = (slugs) => Object.fromEntries(slugs.map((s) => [s, [...pages.values()].reduce((n, h) => n + count(h, s), 0)]));
const st = totals(SERVICES);
const at = totals(AREAS);
console.log("Sitewide href totals — services:", st);
console.log("Sitewide href totals — areas:", at);
const sample = pages.get("/about/");
console.log(
  "Per-page sample (/about/): services",
  [...new Set(SERVICES.map((s) => count(sample, s)))],
  "areas",
  [...new Set(AREAS.map((a) => count(sample, a)))],
);

if (failures.length) {
  console.error(`\n✗ ${failures.length} QA failure(s):`);
  failures.slice(0, 80).forEach((f) => console.error("  - " + f));
  process.exit(1);
}
console.log("\n✓ All QA checks passed");
