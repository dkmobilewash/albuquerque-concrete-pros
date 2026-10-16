import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";
import { allRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((r) => ({
    url: absoluteUrl(r.path),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    ...(r.lastModified ? { lastModified: r.lastModified } : {}),
  }));
}
