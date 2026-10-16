import Link from "next/link";
import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { AreaGrid, ServiceGrid } from "@/components/Grids";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { PROJECT_NOUN, buildCombo } from "@/lib/combo";
import { areaPath, comboPath, servicePath } from "@/lib/routes";
import { serviceSchema } from "@/lib/schema";
import type { Area, Service } from "@/lib/types";

export function ComboPage({ service, area, heading }: { service: Service; area: Area; heading: string }) {
  const combo = buildCombo(service, area);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <JsonLd data={serviceSchema(service, area)} />
      <PageHero
        crumbs={[
          { name: service.name, path: servicePath(service) },
          { name: area.name, path: comboPath(service, area) },
        ]}
        eyebrow={`${area.name} · ${service.name}`}
        title={heading}
        lead={<p>{combo.intro[0]}</p>}
        aside={
          <PlaceholderImage
            alt={`${service.name} in ${area.name}`}
            width={1200}
            height={900}
            label={`${service.name} work in ${area.name} will be shown here`}
          />
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              What makes {service.lowerName} different in {area.inPhrase}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{combo.intro[1]}</p>
            <div className="mt-8 space-y-6">
              {combo.soilPoints.map((p) => (
                <div key={p.factor} className="border-l-2 border-clay pl-5">
                  <h3 className="text-xl font-semibold">{p.label}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
                </div>
              ))}
              <div className="border-l-2 border-juniper pl-5">
                <h3 className="text-xl font-semibold">Sun, wind, monsoon and freeze-thaw</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{combo.climate}</p>
              </div>
            </div>
          </div>
          <aside className="h-fit rounded-sm border border-stone bg-white/60 p-6">
            <h3 className="text-xl font-semibold">How we build it</h3>
            <ol className="mt-4 space-y-3 text-sm">
              {service.process.map((s, i) => (
                <li key={s.title} className="flex gap-3">
                  <span className="font-display text-clay">{i + 1}.</span>
                  <span>{s.title}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm">
              <Link href={servicePath(service)} className="text-link">
                Full process and materials for {service.lowerName}
              </Link>
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="deep">
        <h2 className="text-3xl font-semibold sm:text-4xl">Permits for {service.lowerName} in {area.inPhrase}</h2>
        <div className="prose-site mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
          {combo.permitting.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <p>
            More on local conditions and jurisdiction:{" "}
            <Link href={areaPath(area)}>concrete work in {area.name}</Link>.
          </p>
        </div>
      </Section>

      <Section>
        <FaqSection heading={`${service.name} in ${area.name}: common questions`} faqs={combo.faqs} />
      </Section>

      <Section tone="deep">
        <ServiceGrid heading={`More concrete services in ${area.name}`} services={otherServices} area={area} />
      </Section>

      <Section>
        <AreaGrid heading={`${service.name} in nearby communities`} areas={otherAreas} service={service} />
      </Section>

      <CtaBand heading={`Get a ${PROJECT_NOUN[service.slug]} consultation in ${area.name}`} />
    </>
  );
}
