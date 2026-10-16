import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site-config";

/** Closing call to action. Shows a phone number only once a real one is configured. */
export function CtaBand({
  heading = "Request a consultation",
  body = "Tell us about the project, the property and your timeline. We'll follow up to schedule a site visit and a written, line-item scope.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="texture-concrete py-16 text-sand sm:py-20">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-lg text-stone">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-sm bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay-dark"
          >
            Start your request
          </Link>
          {siteConfig.phone ? (
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center rounded-sm border border-stone/40 px-6 py-3 font-semibold text-sand hover:border-sand"
            >
              Call {siteConfig.phone}
            </a>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
