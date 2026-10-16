import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { AreaGrid, PostGrid, ProjectGrid, ServiceGrid } from "@/components/Grids";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { areas } from "@/data/areas";
import { projects } from "@/data/portfolio";
import { posts } from "@/data/posts";
import { services } from "@/data/services";
import { getAreaBySlug, getServiceBySlug } from "@/lib/lookup";
import { pageMetadata } from "@/lib/metadata";
import { servicePath } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Albuquerque Concrete Pros | Concrete Contractor in Albuquerque, NM",
  noBrandSuffix: true,
  description:
    "Driveways, stamped concrete, slabs, foundations, retaining walls and commercial concrete built for high-desert soils across Albuquerque, Rio Rancho and Corrales.",
  path: "/",
});

const HIGH_DESERT = [
  {
    title: "Soil first, always",
    body: "Caliche, expansive clay and collapse-prone sands are all common in the metro. Subgrade preparation is planned for the ground on your lot, not a generic spec.",
  },
  {
    title: "Curing for dry air and wind",
    body: "Low humidity and afternoon wind pull water out of fresh concrete fast. Pour timing, evaporation control and curing are planned before the truck is ordered.",
  },
  {
    title: "Drainage for monsoon season",
    body: "Short, intense summer storms find every low spot. Slopes, edges and runoff paths are designed so water moves away from slabs and foundations.",
  },
  {
    title: "Finishes that stand up to UV",
    body: "High-altitude sun fades color and breaks down cheap sealers. We specify pigments, sealers and maintenance intervals with that exposure in mind.",
  },
];

export default function HomePage() {
  const flagship = services.find((s) => s.flagship);
  return (
    <>
      <section className="texture-concrete text-sand">
        <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Concrete contractor · Albuquerque metro, NM</Eyebrow>
            <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Concrete built for the high desert.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
              {siteConfig.name} plans every driveway, patio, slab and wall around what&apos;s actually under it —
              caliche, clay or sand — and the sun, wind and monsoon it will live through.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center rounded-sm bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay-dark"
              >
                Request a consultation
              </Link>
              {flagship ? (
                <Link
                  href={servicePath(flagship)}
                  className="inline-flex items-center rounded-sm border border-stone/40 px-6 py-3 font-semibold text-sand hover:border-sand"
                >
                  Explore {flagship.lowerName}
                </Link>
              ) : null}
            </div>
          </div>
          <PlaceholderImage
            alt="Recently completed concrete project in the Albuquerque metro"
            width={1200}
            height={1000}
            label="A featured completed project will be shown here"
            className="border-white/20 bg-white/5"
            onDark
          />
        </Container>
      </section>

      <Section>
        <ServiceGrid
          heading="Concrete services"
          intro={<p>Thirteen residential, commercial and structural services, each planned for high-desert conditions.</p>}
          services={services}
        />
      </Section>

      <Section tone="deep">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why high-desert concrete is different</h2>
          <p className="mt-3 text-lg text-ink-soft">
            Most concrete problems around Albuquerque trace back to the same handful of local conditions.{" "}
            <Link href="/blog/whats-under-your-slab/" className="text-link">
              Read about the soils under the metro
            </Link>
            .
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HIGH_DESERT.map((h) => (
            <div key={h.title} className="rounded-sm border border-stone bg-sand p-6">
              <h3 className="text-xl font-semibold">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{h.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <AreaGrid
          heading="Service areas"
          intro={<p>Eight communities across the metro — each with its own soils and permitting.</p>}
          areas={areas}
        />
      </Section>

      {projects.length ? (
        <Section tone="deep">
          <ProjectGrid
            heading="Recent projects"
            projects={projects.slice(0, 4)}
            serviceName={(p) => getServiceBySlug(p.service)?.name ?? ""}
            areaName={(p) => getAreaBySlug(p.area)?.name ?? ""}
          />
        </Section>
      ) : null}

      <Section tone="deep">
        <PostGrid heading="Answers before you hire" posts={posts.slice(0, 3)} />
        <p className="mt-6">
          <Link href="/blog/" className="text-link">
            All articles
          </Link>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
