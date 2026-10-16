import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { AreaGrid, PostGrid, ServiceGrid } from "@/components/Grids";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { areas } from "@/data/areas";
import { PROJECT_NOUN, SOIL_LABELS } from "@/lib/combo";
import { getPostsForService, getRelatedServices } from "@/lib/lookup";
import { servicePath } from "@/lib/routes";
import { serviceSchema } from "@/lib/schema";
import type { Service, SoilFactor } from "@/lib/types";

export function ServicePage({ service }: { service: Service }) {
  const related = getRelatedServices(service);
  const posts = getPostsForService(service.slug);
  const lower = service.lowerName;

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHero
        crumbs={[
          { name: "Services", path: "/services/" },
          { name: service.name, path: servicePath(service) },
        ]}
        eyebrow={service.flagship ? "Signature service · Albuquerque metro" : "Albuquerque metro"}
        title={`${service.name} in Albuquerque, NM`}
        lead={<p>{service.tagline}</p>}
        aside={
          <PlaceholderImage
            alt={`${service.name} project in the Albuquerque area`}
            width={1200}
            height={900}
            label={`Completed ${lower} work will be shown here`}
          />
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">{service.name}, done for high-desert conditions</h2>
            <div className="prose-site mt-6 text-lg leading-relaxed text-ink-soft">
              {service.overview.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-sm border border-stone bg-white/60 p-6">
            <h3 className="text-xl font-semibold">Signs you need {lower}</h3>
            <ul className="mt-4 space-y-4">
              {service.signs.map((s) => (
                <li key={s.title}>
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.description}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="deep">
        <h2 className="text-3xl font-semibold sm:text-4xl">Our {PROJECT_NOUN[service.slug]} process</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {service.process.map((step, i) => (
            <li key={step.title} className="rounded-sm border border-stone bg-sand p-5">
              <span className="font-display text-3xl text-clay">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold sm:text-4xl">Materials &amp; techniques</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {service.materials.map((m) => (
            <div key={m.name} className="border-l-2 border-clay pl-5">
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{m.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <h2 className="text-3xl font-semibold sm:text-4xl">Built for Albuquerque soils and weather</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone">{service.climateNote}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(SOIL_LABELS) as SoilFactor[]).map((f) => (
            <div key={f} className="rounded-sm border border-white/10 p-5">
              <h3 className="text-lg font-semibold text-white">{SOIL_LABELS[f]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{service.soilNotes[f]}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Permits</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{service.permitNote}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Typical timeline</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{service.timeline}</p>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <AreaGrid
          heading={`${service.name} by service area`}
          intro={<p>Soil, elevation and permitting differ across the metro. See how {lower} is planned in each community.</p>}
          areas={areas}
          service={service}
        />
      </Section>

      <Section>
        <FaqSection heading={`${service.name} FAQs`} faqs={service.faqs} />
      </Section>

      {posts.length ? (
        <Section tone="deep">
          <PostGrid heading={`Further reading on ${lower}`} posts={posts} />
        </Section>
      ) : null}

      <Section>
        <ServiceGrid heading="Related services" services={related} />
      </Section>

      <CtaBand heading={`Plan your ${PROJECT_NOUN[service.slug]} project`} />
    </>
  );
}
