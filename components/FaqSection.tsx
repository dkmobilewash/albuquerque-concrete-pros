import { InlineText } from "@/components/InlineText";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { Faq } from "@/lib/types";

/** Visible FAQ list + matching FAQPage schema from one array. `heading` renders as <h2>, questions as <h3>. */
export function FaqSection({ heading, faqs }: { heading: string; faqs: Faq[] }) {
  if (!faqs.length) return null;
  return (
    <div>
      <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">{heading}</h2>
      <div className="divide-y divide-stone border-y border-stone">
        {faqs.map((f) => (
          <details key={f.question} className="group py-5">
            <summary className="flex items-start justify-between gap-6">
              <h3 className="text-lg font-semibold">{f.question}</h3>
              <span
                aria-hidden="true"
                className="mt-1 text-xl leading-none text-clay transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="prose-site mt-3 max-w-3xl leading-relaxed text-ink-soft">
              <InlineText text={f.answer} />
            </p>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </div>
  );
}
