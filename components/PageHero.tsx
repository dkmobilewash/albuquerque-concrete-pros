import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Eyebrow } from "@/components/Container";
import type { Crumb } from "@/lib/schema";

/** The page's one and only <h1>. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  aside,
  cta = true,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  aside?: ReactNode;
  cta?: boolean;
}) {
  return (
    <section className="border-b border-stone bg-sand-deep">
      <Container className="py-10 sm:py-14">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-8 grid gap-10 ${aside ? "lg:grid-cols-[1.15fr_1fr] lg:items-center" : ""}`}>
          <div className="max-w-3xl">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
            {lead ? <div className="mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">{lead}</div> : null}
            {cta ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center rounded-sm bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay-dark"
                >
                  Request a consultation
                </Link>
              </div>
            ) : null}
          </div>
          {aside}
        </div>
      </Container>
    </section>
  );
}
