import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComboPage } from "@/components/pages/ComboPage";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { comboHeading, comboTitle, soilPhrase } from "@/lib/combo";
import { getAreaBySlug, getServiceBySlug } from "@/lib/lookup";
import { clampDescription, pageMetadata } from "@/lib/metadata";
import { comboPath } from "@/lib/routes";

/** Service × area matrix: 13 × 8 = 104 statically generated pages. */

export const dynamicParams = false;

export function generateStaticParams() {
  return services.flatMap((s) => areas.map((a) => ({ slug: s.slug, area: a.slug })));
}

function resolve(slug: string, areaSlug: string) {
  const service = getServiceBySlug(slug);
  const area = getAreaBySlug(areaSlug);
  return service && area ? { service, area } : null;
}

export async function generateMetadata({ params }: PageProps<"/[slug]/[area]">): Promise<Metadata> {
  const { slug, area: areaSlug } = await params;
  const r = resolve(slug, areaSlug);
  if (!r) return {};
  const { service, area } = r;
  return pageMetadata({
    title: comboTitle(service, area),
    description: clampDescription(
      `${service.name} in ${area.name}, planned around ${soilPhrase(area)} and local permitting. ${service.tagline}`,
    ),
    path: comboPath(service, area),
  });
}

export default async function Page({ params }: PageProps<"/[slug]/[area]">) {
  const { slug, area: areaSlug } = await params;
  const r = resolve(slug, areaSlug);
  if (!r) notFound();
  return <ComboPage service={r.service} area={r.area} heading={comboHeading(r.service, r.area)} />;
}
