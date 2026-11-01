/**
 * The evnx mark: the interlocked shield, padlock and orange key, from
 * evnx-logo-kit (`svg/evnx-mark-simple.svg`).
 *
 * ⚠️ The SIMPLE mark, without "EVNX" in the shield. The logo spec says the
 * name inside the shield cannot be read below 48 px, and the header is 28.
 * The word sits beside it instead, in the site's own font.
 *
 * Decorative (`alt=""`): it always sits next to the word "evnx", which is the
 * link's accessible name.
 */
export function BrandMark({ size = 28 }: { size?: number }) {
  // The mark's viewBox is 140 × 172.
  return (
    <img
      src="/brand/evnx-mark-simple.svg"
      alt=""
      width={Math.round((size * 140) / 172)}
      height={size}
      className="shrink-0"
    />
  );
}
