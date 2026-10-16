import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaPage } from "@/components/pages/AreaPage";
import { ServicePage } from "@/components/pages/ServicePage";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { getAreaBySlug, getServiceBySlug } from "@/lib/lookup";
import { pageMetadata } from "@/lib/metadata";
import { areaPath, servicePath } from "@/lib/routes";

/*
 * One dynamic segment serves both service hubs (/stamped-concrete/) and area
 * hubs (/rio-rancho/). Static routes (/about/, /blog/ …) take precedence, and
 * lib/lookup.ts asserts no slug is both a service and an area.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...areas.map((a) => ({ slug: a.slug }))];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (service) {
    return pageMetadata({
      // Geo modifier on service hubs too (distinct from the City-of-Albuquerque combo title).
      title: `${service.name} in Albuquerque, NM & the Metro`,
      description: service.metaDescription,
      path: servicePath(service),
    });
  }
  const area = getAreaBySlug(slug);
  if (area) {
    return pageMetadata({
      title: `Concrete Contractor in ${area.geoLabel}`,
      description: area.metaDescription,
      path: areaPath(area),
    });
  }
  return {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (service) return <ServicePage service={service} />;
  const area = getAreaBySlug(slug);
  if (area) return <AreaPage area={area} />;
  notFound();
}
