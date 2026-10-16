import Link from "next/link";
import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { AreaGrid, ProjectGrid, ServiceGrid } from "@/components/Grids";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";
import { SOIL_LABELS } from "@/lib/combo";
import { getAreaBySlug, getNearbyAreas, getProjectsForArea, getServiceBySlug } from "@/lib/lookup";
import { areaPath } from "@/lib/routes";
import type { Area } from "@/lib/types";

const JURISDICTION_LABEL: Record<Area["jurisdiction"]["type"], string> = {
  municipality: "Incorporated municipality",
  mixed: "City or county — varies by address",
  "city-neighborhood": "Neighborhood within the City of Albuquerque",
};

export function AreaPage({ area }: { area: Area }) {
  const nearby = getNearbyAreas(area);
  const projects = getProjectsForArea(area.slug);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Service Areas", path: "/service-areas/" },
          { name: area.name, path: areaPath(area) },
        ]}
        eyebrow={area.jurisdiction.county}
        title={`Concrete Contractor in ${area.geoLabel}`}
        lead={<p>{area.character[0]}</p>}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Building in {area.inPhrase}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{area.character[1]}</p>
            <h3 className="mt-10 text-xl font-semibold">Around {area.name}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {area.landmarks.map((l) => (
                <li key={l} className="rounded-full border border-stone bg-white/60 px-3 py-1 text-sm">
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-sm border border-stone bg-white/60 p-6">
            <h3 className="text-xl font-semibold">At a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold">Jurisdiction</dt>
                <dd className="text-ink-soft">{JURISDICTION_LABEL[area.jurisdiction.type]}</dd>
              </div>
              <div>
                <dt className="font-semibold">Permitting authority</dt>
                <dd className="text-ink-soft">{area.jurisdiction.authority}</dd>
              </div>
              <div>
                <dt className="font-semibold">County</dt>
                <dd className="text-ink-soft">{area.jurisdiction.county}</dd>
              </div>
              <div>
                <dt className="font-semibold">Elevation</dt>
                <dd className="text-ink-soft">{area.elevation}</dd>
              </div>
              <div>
                <dt className="font-semibold">Common soil conditions</dt>
                <dd className="text-ink-soft">{area.soilFactors.map((f) => SOIL_LABELS[f]).join(", ")}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="dark">
        <h2 className="text-3xl font-semibold sm:text-4xl">Soil &amp; climate in {area.inPhrase}</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">What&apos;s underground</h3>
            <p className="mt-3 leading-relaxed text-stone">{area.soilSummary}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">What&apos;s overhead</h3>
            <p className="mt-3 leading-relaxed text-stone">{area.climateSummary}</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold sm:text-4xl">Permits in {area.inPhrase}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">{area.jurisdiction.permitting}</p>
      </Section>

      <Section tone="deep">
        <ServiceGrid
          heading={`Concrete services in ${area.name}`}
          intro={<p>Every service we offer, planned for {area.inPhrase}&apos;s ground conditions and permitting.</p>}
          services={services}
          area={area}
        />
      </Section>

      {projects.length ? (
        <Section>
          <ProjectGrid
            heading={`Completed projects in ${area.name}`}
            intro={
              <p>
                Real case studies from {area.inPhrase}.{" "}
                <Link href="/portfolio/" className="text-link">
                  See the full portfolio
                </Link>
                .
              </p>
            }
            projects={projects}
            serviceName={(p) => getServiceBySlug(p.service)?.name ?? ""}
            areaName={(p) => getAreaBySlug(p.area)?.name ?? ""}
          />
        </Section>
      ) : null}

      <Section>
        <FaqSection heading={`Concrete questions from ${area.name}`} faqs={area.faqs} />
      </Section>

      <Section tone="deep">
        <AreaGrid heading="Nearby service areas" areas={nearby} />
      </Section>

      <CtaBand heading={`Start a project in ${area.name}`} />
    </>
  );
}
