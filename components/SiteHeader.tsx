import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { NavDetails } from "@/components/NavDetails";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { areaPath, servicePath } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

const primaryLinks = [
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
];

function Wordmark() {
  if (siteConfig.logoPath) {
    return <Image src={siteConfig.logoPath} alt={siteConfig.name} width={180} height={48} priority />;
  }
  return (
    <span className="flex items-baseline gap-2 leading-none">
      <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">Albuquerque</span>
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-clay">Concrete Pros</span>
    </span>
  );
}

const menuPanel =
  "absolute left-0 top-full z-50 mt-3 rounded-sm border border-stone bg-sand p-5 shadow-xl";
const menuLink = "block rounded-sm px-2 py-1.5 text-sm hover:bg-sand-deep hover:text-clay-dark";

/**
 * Every service and every area is linked from the header (desktop menus and
 * mobile menu alike) on every page — no filtering or truncation.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-sand/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <NavDetails className="relative" summaryClassName="hover:text-clay-dark" summary={<>Services ▾</>}>
            <div className={`${menuPanel} w-[34rem]`}>
              <ul className="grid grid-cols-2 gap-x-4">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={servicePath(s)} className={menuLink}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/services/" className="mt-3 block px-2 text-sm font-semibold text-clay-dark">
                All services →
              </Link>
            </div>
          </NavDetails>
          <NavDetails className="relative" summaryClassName="hover:text-clay-dark" summary={<>Service Areas ▾</>}>
            <div className={`${menuPanel} w-72`}>
              <ul>
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link href={areaPath(a)} className={menuLink}>
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/service-areas/" className="mt-3 block px-2 text-sm font-semibold text-clay-dark">
                All service areas →
              </Link>
            </div>
          </NavDetails>
          {primaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-clay-dark">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="rounded-sm bg-clay px-4 py-2.5 font-semibold text-white transition hover:bg-clay-dark"
          >
            Request a Consultation
          </Link>
        </nav>

        <NavDetails
          className="lg:hidden"
          summaryClassName="rounded-sm border border-stone px-3 py-2 text-sm font-semibold"
          summary={<>Menu</>}
        >
          <nav
            aria-label="Mobile"
            className="absolute inset-x-0 top-full max-h-[80vh] overflow-y-auto border-b border-stone bg-sand px-5 pb-8 pt-4 shadow-xl"
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-concrete">Services</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s)} className={menuLink}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-1 mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-concrete">Service areas</p>
            <ul className="grid grid-cols-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={areaPath(a)} className={menuLink}>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-5 border-t border-stone pt-4">
              {[{ href: "/services/", label: "All services" }, { href: "/service-areas/", label: "All service areas" }, ...primaryLinks].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={menuLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact/"
              className="mt-5 block rounded-sm bg-clay px-4 py-3 text-center font-semibold text-white"
            >
              Request a Consultation
            </Link>
          </nav>
        </NavDetails>
      </Container>
    </header>
  );
}
