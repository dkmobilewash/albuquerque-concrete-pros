import Link from "next/link";
import type { ReactNode } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { areaPath, comboPath, postPath, servicePath } from "@/lib/routes";
import type { Area, Post, Project, Service } from "@/lib/types";

/*
 * Every grid REQUIRES a `heading` (rendered as the section's <h2>; cards are
 * <h3>). It's a required prop on purpose: an optional heading is how the
 * reference build ended up with h1 → h3 jumps on its blog and portfolio pages.
 */

type GridHeading = { heading: string; intro?: ReactNode; id?: string };

function GridHeader({ heading, intro, id }: GridHeading) {
  return (
    <div className="mb-8 max-w-3xl">
      <h2 id={id} className="text-3xl font-semibold sm:text-4xl">
        {heading}
      </h2>
      {intro ? <div className="mt-3 text-lg text-ink-soft">{intro}</div> : null}
    </div>
  );
}

const cardClass =
  "group flex h-full flex-col rounded-sm border border-stone bg-white/60 p-6 transition hover:border-clay hover:bg-white";

export function ServiceGrid({
  services,
  area,
  ...head
}: GridHeading & {
  services: Service[];
  /** When set, cards link to the service × area combo page instead of the service hub. */
  area?: Area;
}) {
  return (
    <div>
      <GridHeader {...head} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.slug}>
            <Link href={area ? comboPath(s, area) : servicePath(s)} className={cardClass}>
              {s.flagship ? (
                <span className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                  Signature service
                </span>
              ) : null}
              <h3 className="text-xl font-semibold group-hover:text-clay-dark">
                {area ? `${s.name} in ${area.name}` : s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.tagline}</p>
              <span className="mt-auto pt-4 text-sm font-semibold text-clay-dark">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AreaGrid({
  areas,
  service,
  ...head
}: GridHeading & {
  areas: Area[];
  /** When set, cards link to the service × area combo page instead of the area hub. */
  service?: Service;
}) {
  return (
    <div>
      <GridHeader {...head} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((a) => (
          <li key={a.slug}>
            <Link href={service ? comboPath(service, a) : areaPath(a)} className={cardClass}>
              <h3 className="text-lg font-semibold group-hover:text-clay-dark">
                {service ? `${service.name} in ${a.name}` : a.name}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{a.jurisdiction.authority}</p>
              <span className="mt-auto pt-4 text-sm font-semibold text-clay-dark">
                View area <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PostGrid({ posts, ...head }: GridHeading & { posts: Post[] }) {
  return (
    <div>
      <GridHeader {...head} />
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={postPath(p.slug)} className={cardClass}>
              <h3 className="text-xl font-semibold group-hover:text-clay-dark">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
              <span className="mt-auto pt-4 text-sm font-semibold text-clay-dark">
                Read the article <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectGrid({
  projects,
  serviceName,
  areaName,
  ...head
}: GridHeading & {
  projects: Project[];
  serviceName: (p: Project) => string;
  areaName: (p: Project) => string;
}) {
  return (
    <div>
      <GridHeader {...head} />
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const photo = p.photos[0];
          return (
            <li key={p.slug} id={p.slug} className="rounded-sm border border-stone bg-white/60 p-5">
              <PlaceholderImage
                src={photo?.src}
                alt={photo?.alt ?? p.title}
                width={photo?.width ?? 1600}
                height={photo?.height ?? 1000}
              />
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-concrete">
                {serviceName(p)} · {areaName(p)} · {p.year}
              </p>
              <p className="mt-3 text-ink-soft">{p.summary}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="font-semibold">The challenge</dt>
                  <dd className="text-ink-soft">{p.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Our approach</dt>
                  <dd className="text-ink-soft">{p.solution}</dd>
                </div>
              </dl>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
