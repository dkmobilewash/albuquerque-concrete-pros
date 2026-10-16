import Link from "next/link";
import { Container } from "@/components/Container";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { areaPath, servicePath } from "@/lib/routes";

export const metadata = {
  title: "Page Not Found | Albuquerque Concrete Pros",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">404</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-6xl">This slab hasn&apos;t been poured.</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of these instead.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Services</h2>
            <ul className="mt-3 space-y-1.5">
              {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={servicePath(s)} className="text-link">
                      {s.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Service areas</h2>
            <ul className="mt-3 space-y-1.5">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={areaPath(a)} className="text-link">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <p className="mt-3">
              <Link href="/contact/" className="text-link">
                Request a consultation
              </Link>
            </p>
            <p className="mt-1.5">
              <Link href="/" className="text-link">
                Back to the homepage
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
