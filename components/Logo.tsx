/**
 * Albuquerque Concrete Pros logo.
 *
 * Mark: the long, steep-faced Sandia crest with the sun setting behind it, over a poured slab with two
 * saw-cut control joints — high-desert concrete in one glyph. Pure geometry
 * (no text) so it stays crisp from a 16px favicon up. The same paths live in
 * app/icon.svg; keep them in sync.
 */

export const MARK_PATHS = {
  tile: "M8 0h48a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z",
  ridge: "M5 41 11 37.5 15 29 19.5 26 23 27.5 28 22.5 32 24.5 36 21.5 40.5 23.5 45 22.5 49 26 53 33 59 41z",
  slab: "M5 44h54v12H5z",
} as const;

export const MARK_COLORS = {
  tile: "#1e1c19",
  sun: "#b0512b",
  ridge: "#ece4d6",
  slab: "#b8ae9f",
  joint: "#1e1c19",
} as const;

export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={MARK_PATHS.tile} fill={MARK_COLORS.tile} />
      <circle cx="44" cy="20" r="7.5" fill={MARK_COLORS.sun} />
      <path d={MARK_PATHS.ridge} fill={MARK_COLORS.ridge} />
      <path d={MARK_PATHS.slab} fill={MARK_COLORS.slab} />
      <rect x="22.75" y="44" width="1.5" height="12" fill={MARK_COLORS.joint} />
      <rect x="39.75" y="44" width="1.5" height="12" fill={MARK_COLORS.joint} />
    </svg>
  );
}

/** Mark + wordmark. `tone="light"` for dark backgrounds. */
export function Logo({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark size={big ? 72 : 40} className={tone === "light" ? "ring-1 ring-white/15 rounded-[12.5%]" : ""} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-tight ${big ? "text-5xl" : "text-xl sm:text-[1.4rem]"} ${
            tone === "light" ? "text-sand" : "text-ink"
          }`}
        >
          Albuquerque
        </span>
        <span
          className={`font-sans font-bold uppercase text-clay ${big ? "mt-2 text-lg tracking-[0.42em]" : "mt-1 text-[0.62rem] tracking-[0.34em]"}`}
        >
          Concrete Pros
        </span>
      </span>
    </span>
  );
}
