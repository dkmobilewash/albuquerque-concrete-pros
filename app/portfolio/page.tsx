import Link from "next/link";
import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ProjectGrid, ServiceGrid } from "@/components/Grids";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/data/portfolio";
import { services } from "@/data/services";
import { getAreaBySlug, getServiceBySlug } from "@/lib/lookup";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Concrete Project Portfolio | Albuquerque, NM",
  description:
    "Completed concrete projects from Albuquerque Concrete Pros across the Albuquerque metro — real jobs, real photography, with the soil and site challenges behind each one.",
  path: "/portfolio/",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Portfolio", path: "/portfolio/" }]}
        eyebrow="Our work"
        title="Concrete project portfolio"
        lead={<p>Completed work across the metro, documented with our own photography and the site conditions each job had to solve.</p>}
      />
      <Section>
        {projects.length ? (
          <ProjectGrid
            heading="Completed projects"
            projects={projects}
            serviceName={(p) => getServiceBySlug(p.service)?.name ?? ""}
            areaName={(p) => getAreaBySlug(p.area)?.name ?? ""}
          />
        ) : (
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Completed projects</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              We only publish our own project photography — never stock images. Case studies are being
              documented now and will appear here, and on the matching service-area pages, as they&apos;re
              completed. In the meantime, we&apos;re glad to talk through comparable work during your{" "}
              <Link href="/contact/" className="text-link">
                consultation
              </Link>
              .
            </p>
          </div>
        )}
      </Section>
      <Section tone="deep">
        <ServiceGrid heading="Browse by service" services={services} />
      </Section>
      <CtaBand />
    </>
  );
}
