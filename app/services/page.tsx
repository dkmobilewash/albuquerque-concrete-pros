import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ServiceGrid } from "@/components/Grids";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import type { Service } from "@/lib/types";

export const metadata = pageMetadata({
  title: "Concrete Services in Albuquerque, NM",
  description:
    "All 13 concrete services from Albuquerque Concrete Pros: driveways, stamped concrete, slabs, foundations, retaining walls, flooring, parking lots, repair and more.",
  path: "/services/",
});

const GROUPS: { category: Service["category"]; heading: string; intro: string }[] = [
  { category: "residential", heading: "Residential flatwork & decorative", intro: "Driveways, walks and decorative surfaces for homes." },
  { category: "structural", heading: "Foundations & structural", intro: "Engineered concrete that carries buildings, walls and loads." },
  { category: "commercial", heading: "Commercial, community & access", intro: "Lots, private roads and interior floors for businesses and HOAs." },
  { category: "restoration", heading: "Repair, leveling & maintenance", intro: "Extend the life of the concrete you already have." },
];

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services/" }]}
        eyebrow="What we build"
        title="Concrete services across the Albuquerque metro"
        lead={<p>Every service is planned around high-desert soils, sun and monsoon weather — from a single walkway to an engineered foundation.</p>}
      />
      {GROUPS.map((g, i) => (
        <Section key={g.category} tone={i % 2 ? "deep" : "default"}>
          <ServiceGrid
            heading={g.heading}
            intro={<p>{g.intro}</p>}
            services={services.filter((s) => s.category === g.category)}
          />
        </Section>
      ))}
      <CtaBand />
    </>
  );
}
