import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Section } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig, telHref } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Request a Concrete Consultation | Albuquerque, NM",
  description:
    "Request a consultation for driveways, stamped concrete, slabs, foundations, retaining walls or commercial concrete anywhere in the Albuquerque metro.",
  path: "/contact/",
});

export default function ContactPage() {
  const a = siteConfig.address;
  const addressLine = a ? `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}` : "";
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        eyebrow="Contact"
        title="Request a consultation"
        lead={<p>Tell us about your property and project. We&apos;ll follow up to schedule a site visit and prepare a written scope{siteConfig.phone ? <> — or call {siteConfig.phone}</> : null}.</p>}
        cta={false}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="mb-6 text-3xl font-semibold">Project details</h2>
            <ConsultationForm services={services.map((s) => s.name)} areas={areas.map((a) => a.name)} />
          </div>
          <aside className="h-fit rounded-sm border border-stone bg-white/60 p-6">
            <h2 className="text-xl font-semibold">What happens next</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
              <li>We review your request and confirm which jurisdiction governs your address.</li>
              <li>We schedule a site visit to look at soils, drainage, access and existing concrete.</li>
              <li>You receive a written, line-item scope you can compare against other bids.</li>
            </ol>
            <div className="mt-6 space-y-4 border-t border-stone pt-5 text-sm">
              {siteConfig.phone ? (
                <p>
                  <span className="block font-semibold">Call</span>
                  <a href={telHref(siteConfig.phone)} className="text-link">
                    {siteConfig.phone}
                  </a>
                </p>
              ) : null}
              {siteConfig.email ? (
                <p>
                  <span className="block font-semibold">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-link">
                    {siteConfig.email}
                  </a>
                </p>
              ) : null}
              {siteConfig.address ? (
                <address className="not-italic">
                  <span className="block font-semibold">Office</span>
                  {siteConfig.address.streetAddress}
                  <br />
                  {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}{" "}
                  {siteConfig.address.postalCode}
                  {siteConfig.showOfficeMap ? (
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`}
                      className="text-link mt-1 block"
                      rel="noopener"
                    >
                      Get directions
                    </a>
                  ) : null}
                </address>
              ) : null}
              {siteConfig.hours.length ? (
                <div>
                  <span className="block font-semibold">Hours</span>
                  {siteConfig.hours.map((h) => (
                    <span key={h.schema} className="block">
                      {h.label}: {h.time}
                    </span>
                  ))}
                </div>
              ) : null}
              {siteConfig.address && siteConfig.showOfficeMap ? (
                <iframe
                  title={`Map of ${siteConfig.name} office`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[4/3] w-full rounded-sm border border-stone"
                />
              ) : null}
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Comparing contractors? Read{" "}
              <Link href="/blog/how-to-vet-a-concrete-contractor-new-mexico/" className="text-link">
                how to vet a concrete contractor
              </Link>
              .
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
