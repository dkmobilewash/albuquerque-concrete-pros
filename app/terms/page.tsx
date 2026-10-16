import { Section } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: `Terms governing use of the ${siteConfig.name} website and the general information it provides.`,
  path: "/terms/",
});

const UPDATED = "October 16, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Terms", path: "/terms/" }]} title="Terms of Use" lead={<p>Last updated {UPDATED}</p>} cta={false} />
      <Section>
        <div className="prose-site max-w-3xl space-y-4 leading-relaxed text-ink-soft">
          <h2 className="text-2xl font-semibold text-ink">General information only</h2>
          <p>Content on this website — including articles, typical timelines, specifications and permitting notes — is general information about concrete construction in the Albuquerque area. It is not engineering, legal or permitting advice for any specific property. Requirements vary by jurisdiction and site; confirm them with the governing authority and a qualified professional.</p>
          <h2 className="text-2xl font-semibold text-ink">No offer or contract</h2>
          <p>Nothing on this site is an offer, quote or warranty. Work is performed only under a signed written agreement, which governs scope, price, schedule and any warranty terms.</p>
          <h2 className="text-2xl font-semibold text-ink">Submissions</h2>
          <p>By submitting the consultation form you confirm the information is accurate and that you are authorized to request work at the property described.</p>
          <h2 className="text-2xl font-semibold text-ink">Intellectual property</h2>
          <p>Text, design and photography on this site belong to {siteConfig.name} unless noted, and may not be reproduced without permission.</p>
          <h2 className="text-2xl font-semibold text-ink">Liability</h2>
          <p>To the extent permitted by law, {siteConfig.name} is not liable for decisions made in reliance on general website content. These terms are governed by the laws of the State of New Mexico.</p>
        </div>
      </Section>
    </>
  );
}
