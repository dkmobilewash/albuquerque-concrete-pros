import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { PostGrid, ServiceGrid } from "@/components/Grids";
import { InlineText } from "@/components/InlineText";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/data/posts";
import { getPostBySlug, getRelatedPosts, getServiceBySlug } from "@/lib/lookup";
import { pageMetadata } from "@/lib/metadata";
import { postPath } from "@/lib/routes";
import { blogPostingSchema } from "@/lib/schema";
import type { PostBlock, Service } from "@/lib/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: postPath(post.slug),
    type: "article",
    publishedTime: post.published,
  });
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 text-3xl font-semibold">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-xl font-semibold">{block.text}</h3>;
    case "p":
      return (
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          <InlineText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed text-ink-soft marker:text-clay">
          {block.items.map((item) => (
            <li key={item.slice(0, 50)}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="mt-8 border-l-4 border-clay bg-sand-deep p-5 text-lg leading-relaxed">
          <InlineText text={block.text} />
        </aside>
      );
  }
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const path = postPath(post.slug);
  const relatedPosts = getRelatedPosts(post);
  const relatedServices = post.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => Boolean(s));
  const date = new Date(`${post.published}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <JsonLd data={blogPostingSchema(post, path)} />
      <PageHero
        crumbs={[
          { name: "Blog", path: "/blog/" },
          { name: post.title, path },
        ]}
        eyebrow={`Published ${date}`}
        title={post.title}
        lead={<p>{post.excerpt}</p>}
        cta={false}
      />
      <article className="py-12 sm:py-16">
        <Container>
          <div className="prose-site mx-auto max-w-3xl">
            {post.body.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        </Container>
      </article>
      {post.faqs?.length ? (
        <Section tone="deep">
          <FaqSection heading="Frequently asked questions" faqs={post.faqs} />
        </Section>
      ) : null}
      <Section>
        <ServiceGrid heading="Services covered in this article" services={relatedServices} />
      </Section>
      {relatedPosts.length ? (
        <Section tone="deep">
          <PostGrid heading="Keep reading" posts={relatedPosts} />
        </Section>
      ) : null}
      <CtaBand />
    </>
  );
}
