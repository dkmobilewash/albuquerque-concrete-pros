import Image from "next/image";

type Props = {
  /** Path to REAL project photography under /public. Omit until real photos exist. */
  src?: string;
  alt: string;
  width: number;
  height: number;
  /** Caption describing what photo belongs here, shown on the placeholder. */
  label?: string;
  className?: string;
  priority?: boolean;
  /** Use light text when placed on a dark background. */
  onDark?: boolean;
};

/**
 * Renders real photography via next/image when `src` is provided; otherwise a
 * clearly labeled "photography pending" box. Never pass stock photography —
 * only the business's own project photos.
 */
export function PlaceholderImage({ src, alt, width, height, label, className = "", priority, onDark = false }: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`h-auto w-full rounded-sm object-cover ${className}`}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${alt} (project photography pending)`}
      style={{ aspectRatio: `${width} / ${height}` }}
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-sm border border-dashed border-concrete/60 bg-stone/50 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 14px, rgba(30,28,25,0.06) 14px 15px)",
        }}
      />
      <div className="relative px-6 text-center">
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${onDark ? "text-stone" : "text-concrete"}`}>
          Project photography pending
        </p>
        {label ? <p className={`mt-2 text-sm ${onDark ? "text-stone/80" : "text-ink-soft"}`}>{label}</p> : null}
      </div>
    </div>
  );
}
