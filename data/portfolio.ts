import type { Project } from "@/lib/types";

/**
 * Completed-project case studies, shared by /portfolio/ and every area page
 * (an area page shows any project whose `area` matches it, linking back to the
 * full portfolio).
 *
 * EMPTY ON PURPOSE: no real project photography or client-approved case
 * studies exist yet. Do not add stock photos or invented jobs. When a real job
 * is documented, add an entry like:
 *
 *   {
 *     slug: "corrales-stamped-courtyard",
 *     title: "Flagstone-pattern stamped courtyard",
 *     service: "stamped-concrete",      // a ServiceSlug — never an array index
 *     area: "corrales",                  // an AreaSlug
 *     year: 2027,
 *     summary: "...", challenge: "...", solution: "...",
 *     photos: [{ src: "/projects/corrales-stamped-courtyard/1.jpg", alt: "...", width: 1600, height: 1067 }],
 *   },
 *
 * Service and area references are validated at build time in lib/lookup.ts.
 */
export const projects: Project[] = [];
