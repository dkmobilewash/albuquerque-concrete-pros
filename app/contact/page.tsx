import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Section } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Request a Concrete Consultation | Albuquerque, NM",
  description:
    "Request a consultation with Albuquerque Concrete Pros for driveways, stamped concrete, slabs, foundations, retaining walls or commercial concrete in the Albuquerque metro.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        eyebrow="Contact"
        title="Request a consultation"
        lead={<p>Tell us about your property and project. We&apos;ll follow up to schedule a site visit and prepare a written scope.</p>}
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
            {siteConfig.phone || siteConfig.email ? (
              <div className="mt-6 space-y-1 border-t border-stone pt-4 text-sm">
                {siteConfig.phone ? <p>Phone: {siteConfig.phone}</p> : null}
                {siteConfig.email ? <p>Email: {siteConfig.email}</p> : null}
              </div>
            ) : null}
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
