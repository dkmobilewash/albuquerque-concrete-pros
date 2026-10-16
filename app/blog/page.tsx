import { Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PostGrid } from "@/components/Grids";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/data/posts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Concrete Blog & Guides for Albuquerque, NM",
  description:
    "Straight answers on concrete costs, cure times, cracking, soils and hiring a contractor — written for Albuquerque's high-desert climate.",
  path: "/blog/",
});

export default function BlogIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Blog", path: "/blog/" }]}
        eyebrow="Guides"
        title="Concrete answers for the Albuquerque metro"
        lead={<p>The questions homeowners and property managers ask before hiring a concrete contractor, answered for high-desert conditions.</p>}
        cta={false}
      />
      <Section>
        <PostGrid heading="All articles" posts={posts} />
      </Section>
      <CtaBand />
    </>
  );
}
