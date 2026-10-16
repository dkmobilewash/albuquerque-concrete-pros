import Link from "next/link";
import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { AreaGrid } from "@/components/Grids";
import { PageHero } from "@/components/PageHero";
import { areas } from "@/data/areas";
import { SOIL_LABELS } from "@/lib/combo";
import { pageMetadata } from "@/lib/metadata";
import { areaPath } from "@/lib/routes";

export const metadata = pageMetadata({
  title: "Service Areas: Albuquerque, Rio Rancho, Corrales, NM",
  description:
    "Concrete service across Albuquerque, Rio Rancho, Corrales, the North Valley, Tanoan, Paradise Hills, Los Ranchos de Albuquerque and Albuquerque Acres.",
  path: "/service-areas/",
});

export default function ServiceAreasIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Service Areas", path: "/service-areas/" }]}
        eyebrow="Where we work"
        title="Concrete service areas in the Albuquerque metro"
        lead={<p>Eight communities across Bernalillo and Sandoval counties, several permitting authorities and very different ground. Here&apos;s how they compare.</p>}
      />
      <Section>
        <AreaGrid heading="Communities we serve" areas={areas} />
      </Section>
      <Section tone="deep">
        <h2 className="text-3xl font-semibold sm:text-4xl">Who handles permits — and what&apos;s underground</h2>
        <p className="mt-3 max-w-3xl text-ink-soft">
          Some of these are independent municipalities; others are neighborhoods where the city/county line runs
          parcel by parcel. We confirm jurisdiction for every address before quoting.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-concrete/40">
                <th scope="col" className="py-3 pr-4 font-semibold">Area</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Permitting authority</th>
                <th scope="col" className="py-3 pr-4 font-semibold">County</th>
                <th scope="col" className="py-3 font-semibold">Common soil conditions</th>
              </tr>
            </thead>
            <tbody>
              {areas.map((a) => (
                <tr key={a.slug} className="border-b border-stone">
                  <th scope="row" className="py-3 pr-4 font-semibold">
                    <Link href={areaPath(a)} className="text-link">
                      {a.name}
                    </Link>
                  </th>
                  <td className="py-3 pr-4 text-ink-soft">{a.jurisdiction.authority}</td>
                  <td className="py-3 pr-4 text-ink-soft">{a.jurisdiction.county}</td>
                  <td className="py-3 text-ink-soft">{a.soilFactors.map((f) => SOIL_LABELS[f]).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
