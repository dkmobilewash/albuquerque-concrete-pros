import { Section } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects information submitted through this website.`,
  path: "/privacy-policy/",
});

const UPDATED = "October 16, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", path: "/privacy-policy/" }]} title="Privacy Policy" lead={<p>Last updated {UPDATED}</p>} cta={false} />
      <Section>
        <div className="prose-site max-w-3xl space-y-4 leading-relaxed text-ink-soft">
          <h2 className="text-2xl font-semibold text-ink">Information we collect</h2>
          <p>When you submit our consultation form we collect the details you provide: name, email address, optional phone number, project location, service of interest, timeline and your message. We do not ask for payment information through this website.</p>
          <h2 className="text-2xl font-semibold text-ink">How we use it</h2>
          <p>We use your information only to respond to your request, schedule site visits, prepare estimates and communicate about your project. We do not sell your personal information.</p>
          <h2 className="text-2xl font-semibold text-ink">Service providers</h2>
          <p>Form submissions are delivered to us by email through a transactional email provider and may be passed to a customer-management tool we use to track requests. These providers process data on our behalf.</p>
          <h2 className="text-2xl font-semibold text-ink">Analytics and cookies</h2>
          <p>We may use Google Analytics to understand how visitors use the site. Analytics uses cookies and collects information such as pages visited, device type and approximate location. You can block cookies in your browser or use Google&apos;s opt-out browser add-on.</p>
          <h2 className="text-2xl font-semibold text-ink">Retention and your choices</h2>
          <p>We keep inquiry records for as long as needed to respond and for reasonable business records. You may ask us to access, correct or delete the information you submitted by contacting us through the consultation form.</p>
          <h2 className="text-2xl font-semibold text-ink">Changes</h2>
          <p>We may update this policy; the date above shows the latest revision.</p>
        </div>
      </Section>
    </>
  );
}
