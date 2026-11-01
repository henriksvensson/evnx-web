import { Board, Bot, Guard, Key, Laptop } from "./spots";

/**
 * Use case U1 as one picture: a key on its way from the laptop to GitHub.
 * Without evnx it reaches the board and the scanners find it; with evnx the
 * guard stops it at a red bar and the scanners find nothing.
 *
 * ⚠️ The words are HTML under the drawing, not inside it, and the whole
 * figure carries one description for screen readers.
 */
export function LeakScene({ blocked }: { blocked: boolean }) {
  const label = blocked
    ? "A key leaves the laptop toward GitHub and is stopped by the evnx guard; the scanners near GitHub find nothing."
    : "A key travels from the laptop to GitHub, where automated scanners find it.";

  return (
    <figure role="img" aria-label={label} className="max-w-3xl mb-10">
      <svg viewBox="0 0 480 120" className="w-full h-auto" aria-hidden focusable="false">
        {/* The path from the laptop to the board. */}
        <path
          d="M78 70H322"
          stroke="var(--border-default)"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
        <Laptop x={6} y={32} size={72} />
        <Board x={322} y={28} size={72} />
        <Bot x={404} y={8} size={56} found={!blocked} />
        <Bot x={404} y={64} size={56} found={!blocked} />

        {blocked ? (
          <>
            <Key x={112} y={46} size={48} />
            <path d="M118 50v-14h14l-4 5 4 5h-14" fill="var(--danger)" />
            <rect x="170" y="42" width="6" height="56" rx="3" fill="var(--danger)" />
            <Guard x={186} y={34} size={72} />
          </>
        ) : (
          <>
            <Key x={276} y={46} size={48} />
            <circle cx="358" cy="64" r="26" fill="var(--danger)" opacity="0.15" />
          </>
        )}
      </svg>
      <figcaption
        className="grid grid-cols-[1fr_1fr_1fr] font-mono text-xs text-text-muted mt-2"
        aria-hidden
      >
        <span>your laptop</span>
        <span className="text-center">{blocked ? "evnx scan" : ""}</span>
        <span className="text-right">GitHub · scanners</span>
      </figcaption>
    </figure>
  );
}
