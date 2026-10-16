import Link from "next/link";
import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "About Our Albuquerque, NM Concrete Company",
  description:
    "Albuquerque Concrete Pros is a concrete contractor built around high-desert conditions: soil-first planning, disciplined curing and written scopes on every job.",
  path: "/about/",
});

const STANDARDS = [
  {
    title: "A written, line-item scope",
    body: "Thickness, base, reinforcement, joint layout, finish, curing method and cleanup — in writing before work starts, so bids can be compared honestly.",
  },
  {
    title: "Soil and drainage before finish",
    body: "We look at what's under the work and where water will go before talking about color or pattern. That's where most failures start.",
  },
  {
    title: "Pours scheduled around the weather",
    body: "Early starts in summer, protection on freezing nights, and no pours into high wind when it can be avoided.",
  },
  {
    title: "Permits confirmed per address",
    body: "Across city, county and village lines the rules change. We confirm which jurisdiction governs your property and what it requires.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about/" }]}
        eyebrow="About us"
        title="A concrete company built around the high desert"
        lead={
          <p>
            {siteConfig.name} serves homeowners, builders, HOAs and commercial property owners across the
            Albuquerque metro with concrete that&apos;s designed for the ground and climate it actually lives in.
          </p>
        }
      />
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">How we work</h2>
          <div className="prose-site mt-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Concrete in Albuquerque fails for local reasons: collapse-prone sands that settle when irrigation
              reaches them, caliche that perches water, clay that heaves, dry wind that cracks a slab before
              it&apos;s finished, and monsoon runoff that undermines edges. Good-looking work that ignores those
              conditions doesn&apos;t stay good-looking.
            </p>
            <p>
              So our process starts with the site — soils, drainage, access and jurisdiction — and only then moves
              to finishes. It&apos;s the same approach whether the job is a{" "}
              <Link href="/concrete-sidewalks/">garden walkway</Link>, a{" "}
              <Link href="/stamped-concrete/">stamped courtyard</Link> or an{" "}
              <Link href="/structural-concrete/">engineered structural pour</Link>.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="deep">
        <h2 className="text-3xl font-semibold sm:text-4xl">Our standards on every job</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {STANDARDS.map((s) => (
            <div key={s.title} className="rounded-sm border border-stone bg-sand p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
      {siteConfig.licenseNumber || siteConfig.insuranceStatement ? (
        <Section>
          <h2 className="text-3xl font-semibold sm:text-4xl">Licensing &amp; insurance</h2>
          {siteConfig.licenseNumber ? (
            <p className="mt-4 text-lg text-ink-soft">New Mexico contractor license #{siteConfig.licenseNumber}</p>
          ) : null}
          {siteConfig.insuranceStatement ? (
            <p className="mt-2 text-lg text-ink-soft">{siteConfig.insuranceStatement}</p>
          ) : null}
        </Section>
      ) : null}
      <CtaBand />
    </>
  );
}
