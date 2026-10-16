import Link from "next/link";
import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { reviewData, socialProfiles } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Customer Reviews | Albuquerque Concrete Pros",
  noBrandSuffix: true,
  description:
    "How Albuquerque Concrete Pros publishes customer reviews: only real, verifiable feedback from public review platforms — never invented ratings or testimonials.",
  path: "/reviews/",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Reviews", path: "/reviews/" }]}
        eyebrow="Reviews"
        title="Customer reviews"
        lead={<p>We publish only real, verifiable reviews — and we link to where they live so you can read them yourself.</p>}
      />
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Where to find our reviews</h2>
          {reviewData ? (
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {reviewData.ratingValue.toFixed(1)} average from {reviewData.reviewCount} reviews on {reviewData.source}{" "}
              (as of {reviewData.asOf}).
              {socialProfiles.googleBusinessProfile ? (
                <>
                  {" "}
                  <a href={socialProfiles.googleBusinessProfile} className="text-link" rel="noopener">
                    Read them on Google
                  </a>
                  .
                </>
              ) : null}
            </p>
          ) : (
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Public reviews will be linked here as customers leave them on independent review platforms. We
              don&apos;t write, edit or cherry-pick testimonials, and we don&apos;t display star ratings that
              can&apos;t be verified at the source.
            </p>
          )}
          <h2 className="mt-12 text-3xl font-semibold sm:text-4xl">Vetting any contractor</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Reviews are one signal. A state license, proof of insurance, a written scope and a clear answer about
            who pulls permits matter more. Our guide on{" "}
            <Link href="/blog/how-to-vet-a-concrete-contractor-new-mexico/" className="text-link">
              how to vet a concrete contractor in New Mexico
            </Link>{" "}
            walks through what to ask.
          </p>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
