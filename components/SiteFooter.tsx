import Link from "next/link";
import { Container } from "@/components/Container";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { areaPath, servicePath } from "@/lib/routes";
import { siteConfig, socialProfiles } from "@/lib/site-config";

const SOCIAL_LABELS: Record<keyof typeof socialProfiles, string> = {
  googleBusinessProfile: "Google",
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  nextdoor: "Nextdoor",
  yelp: "Yelp",
  houzz: "Houzz",
  angi: "Angi",
  bbb: "BBB",
};

const colTitle = "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone";
const footLink = "text-sm text-stone/90 hover:text-white";

/** Footer links every service and every area, uniformly, on every page. NAP fields render only when real. */
export function SiteFooter() {
  const socials = (Object.keys(socialProfiles) as (keyof typeof socialProfiles)[]).filter(
    (k) => socialProfiles[k],
  );
  const { address } = siteConfig;
  return (
    <footer className="texture-concrete text-sand">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone">
            Concrete engineered for high-desert soils and weather, serving the Albuquerque metro.
          </p>
          <address className="mt-5 space-y-1 text-sm not-italic text-stone">
            {address ? (
              <p>
                {address.streetAddress}
                <br />
                {address.addressLocality}, {address.addressRegion} {address.postalCode}
              </p>
            ) : null}
            {siteConfig.phone ? (
              <p>
                <a className={footLink} href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>
                  {siteConfig.phone}
                </a>
              </p>
            ) : null}
            {siteConfig.email ? (
              <p>
                <a className={footLink} href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
            ) : null}
            {siteConfig.openingHours.length ? <p>Hours: {siteConfig.openingHours.join(", ")}</p> : null}
            <p>
              <Link className={footLink} href="/contact/">
                Request a consultation →
              </Link>
            </p>
          </address>
          {siteConfig.licenseNumber ? (
            <p className="mt-4 text-xs text-stone">NM Contractor License #{siteConfig.licenseNumber}</p>
          ) : null}
          {siteConfig.insuranceStatement ? (
            <p className="mt-1 text-xs text-stone">{siteConfig.insuranceStatement}</p>
          ) : null}
        </div>

        <div className="lg:col-span-2">
          <p className={colTitle}>Services</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className={footLink} href={servicePath(s)}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
          <div>
            <p className={colTitle}>Service areas</p>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link className={footLink} href={areaPath(a)}>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={colTitle}>Company</p>
            <ul className="space-y-2">
              {[
                ["/services/", "All services"],
                ["/service-areas/", "All service areas"],
                ["/portfolio/", "Portfolio"],
                ["/reviews/", "Reviews"],
                ["/blog/", "Blog"],
                ["/about/", "About"],
                ["/contact/", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link className={footLink} href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {socials.map((k) => (
              <li key={k}>
                <a className={footLink} href={socialProfiles[k]} rel="noopener me">
                  {SOCIAL_LABELS[k]}
                </a>
              </li>
            ))}
            <li>
              <Link className={footLink} href="/privacy-policy/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className={footLink} href="/terms/">
                Terms
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
