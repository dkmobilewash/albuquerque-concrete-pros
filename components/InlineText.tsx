import Link from "next/link";
import { Fragment } from "react";

/** Renders text containing inline links written as [anchor](/path/). Internal paths use next/link. */
export function InlineText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    const [, anchor, href] = m;
    parts.push(
      href.startsWith("/") ? (
        <Link key={i++} href={href}>
          {anchor}
        </Link>
      ) : (
        <a key={i++} href={href} rel="noopener">
          {anchor}
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}
