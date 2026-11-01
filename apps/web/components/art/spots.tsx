import type { ComponentType, ReactNode, SVGProps } from "react";
import type { SpotId } from "@evnx/content";

/**
 * Spot illustrations: the recurring objects of the evnx graphics pack
 * (specs/evnx-web-visual-revamp/evnx-graphics-prompt-pack-0.12.0.md), drawn
 * flat on a 64×64 grid.
 *
 * ⚠️ Colours are the site's CSS tokens, not hex. The art follows the theme
 * the way the text does, and a light palette added later reaches it with no
 * edit here. Orange is evnx and its actions; green is ONLY a passed check;
 * red is danger; amber is a warning or a missing value; blue is info, cloud
 * and servers. The satin grey is the logo's shield, and has no token.
 *
 * ⚠️ No words inside the art, ever. Every label sits beside it as HTML, so it
 * can be read, searched and checked against the CLI.
 *
 * shortcut: these are the hand-drawn placeholders the plan calls for (§4.1);
 * a designer's finished set replaces them component by component, same names.
 */

const C = {
  brand: "var(--brand-500)",
  ok: "var(--success)",
  warn: "var(--warning)",
  bad: "var(--danger)",
  info: "var(--info)",
  card: "var(--bg-surface)",
  overlay: "var(--bg-overlay)",
  line: "var(--border-default)",
  muted: "var(--text-muted)",
  base: "var(--bg-base)",
  // The logo's satin grey, light and dark ends of its gradient.
  metal: "#C7CDD4",
  metalDark: "#7A838D",
};

type SpotProps = Omit<SVGProps<SVGSVGElement>, "children"> & { size?: number };

function Svg({ size = 64, children, ...rest }: SpotProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

function Check({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      d={`M${x - 6 * s},${y} l${4 * s},${4 * s} l${8 * s},-${8 * s}`}
      stroke={C.ok}
      strokeWidth={3.5}
    />
  );
}

/** The developer's laptop. */
export function Laptop(p: SpotProps) {
  return (
    <Svg {...p}>
      <rect x="12" y="14" width="40" height="28" rx="3" fill={C.card} stroke={C.info} strokeWidth="3" />
      <path d="M6 48h52l-4 5H10z" fill={C.overlay} stroke={C.info} strokeWidth="3" />
      <path d="M20 24h14M20 31h22" stroke={C.muted} strokeWidth="3" />
    </Svg>
  );
}

/** The key: a secret. Orange, the same key as in the logo. */
export function Key(p: SpotProps) {
  return (
    <Svg {...p}>
      <circle cx="20" cy="32" r="9" stroke={C.brand} strokeWidth="6" />
      <path d="M29 32h26" stroke={C.brand} strokeWidth="7" />
      <path d="M47 35v8M39 35v5" stroke={C.brand} strokeWidth="6" />
    </Svg>
  );
}

/** The guard: the logo's shield, flat, with a passed check. */
export function Guard(p: SpotProps) {
  return (
    <Svg {...p}>
      <path
        d="M32 6l20 7v17c0 14-9 22-20 27C21 52 12 44 12 30V13z"
        fill={C.metal}
        stroke={C.metalDark}
        strokeWidth="2.5"
      />
      <Check x={31} y={32} s={1.2} />
    </Svg>
  );
}

/** The safe: the team's locked storage, with an orange dial. */
export function Safe(p: SpotProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="10" width="48" height="44" rx="5" fill={C.card} stroke={C.metal} strokeWidth="3" />
      <circle cx="32" cy="32" r="11" stroke={C.brand} strokeWidth="4" />
      <path d="M32 21v5M43 32h-5M32 43v-5M21 32h5" stroke={C.brand} strokeWidth="3" />
      <path d="M14 54v4M50 54v4" stroke={C.metal} strokeWidth="3" />
    </Svg>
  );
}

/** The cloud: holds only scrambled bars, data it cannot read. */
export function Cloud(p: SpotProps) {
  return (
    <Svg {...p}>
      <path
        d="M18 46h30a10 10 0 0 0 1-20 14 14 0 0 0-27-3 11 11 0 0 0-4 23z"
        fill={C.card}
        stroke={C.info}
        strokeWidth="3"
      />
      <path d="M22 32h6M31 32h10M22 38h12M37 38h5" stroke={C.muted} strokeWidth="3" />
    </Svg>
  );
}

/** One person's access card. `revoked` is red and cut in half. */
export function AccessCard({ revoked = false, ...p }: SpotProps & { revoked?: boolean }) {
  const fill = revoked ? C.bad : C.brand;
  return (
    <Svg {...p}>
      <rect x="8" y="16" width="48" height="32" rx="5" fill={fill} />
      <circle cx="22" cy="32" r="5" stroke={C.base} strokeWidth="3" />
      <path d="M27 32h14M37 32v4" stroke={C.base} strokeWidth="3" />
      {revoked && <path d="M30 10l6 44" stroke={C.base} strokeWidth="4" />}
    </Svg>
  );
}

/** The clipboard. `cross` is the health check (doctor); otherwise a checklist. */
export function Clipboard({ cross = false, ...p }: SpotProps & { cross?: boolean }) {
  return (
    <Svg {...p}>
      <rect x="12" y="10" width="40" height="48" rx="4" fill={C.card} stroke={C.line} strokeWidth="3" />
      <rect x="24" y="6" width="16" height="8" rx="2" fill={C.overlay} stroke={C.line} strokeWidth="2.5" />
      {cross ? (
        <>
          <path d="M32 20v12M26 26h12" stroke={C.info} strokeWidth="4" />
          <Check x={23} y={44} s={0.8} />
          <path d="M31 44h12" stroke={C.muted} strokeWidth="3" />
        </>
      ) : (
        <>
          <Check x={23} y={24} s={0.8} />
          <path d="M31 24h12" stroke={C.muted} strokeWidth="3" />
          <Check x={23} y={36} s={0.8} />
          <path d="M31 36h12" stroke={C.muted} strokeWidth="3" />
          <path d="M19 48l3-5 3 5z" fill={C.warn} />
          <path d="M31 47h12" stroke={C.muted} strokeWidth="3" />
        </>
      )}
    </Svg>
  );
}

/** The build server, with its gear. */
export function Server(p: SpotProps) {
  return (
    <Svg {...p}>
      <rect x="10" y="8" width="34" height="48" rx="4" fill={C.card} stroke={C.info} strokeWidth="3" />
      <path d="M17 18h20M17 26h20M17 34h12" stroke={C.muted} strokeWidth="3" />
      <circle cx="46" cy="44" r="7" fill={C.base} stroke={C.info} strokeWidth="3" />
      <path d="M46 33v4M46 51v4M35 44h4M53 44h4" stroke={C.info} strokeWidth="3" />
    </Svg>
  );
}

type Row = "plain" | "new" | "missing" | "different" | "ok";

/** The settings card: a .env file. Each row's colour says its state. */
export function SettingsCard({
  rows = ["plain", "plain", "new", "missing"],
  ...p
}: SpotProps & { rows?: Row[] }) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="48" height="50" rx="5" fill={C.card} stroke={C.line} strokeWidth="3" />
      <path d="M8 18h48" stroke={C.line} strokeWidth="2.5" />
      <rect x="14" y="11" width="14" height="4" rx="2" fill={C.muted} />
      {rows.slice(0, 4).map((r, i) => {
        const y = 26 + i * 8;
        if (r === "missing")
          return (
            <rect key={i} x="14" y={y - 2.5} width="36" height="5" rx="2.5" stroke={C.warn} strokeWidth="2" strokeDasharray="3 3" />
          );
        if (r === "ok")
          return (
            <g key={i}>
              <path d={`M15 ${y}h22`} stroke={C.muted} strokeWidth="3" />
              <Check x={46} y={y} s={0.5} />
            </g>
          );
        const color = r === "new" ? C.brand : r === "different" ? C.warn : C.muted;
        return <path key={i} d={`M15 ${y}h34`} stroke={color} strokeWidth="3.5" />;
      })}
    </Svg>
  );
}

/** The backup file: padlocked, newest in front, older copies faded behind. */
export function BackupFile(p: SpotProps) {
  return (
    <Svg {...p}>
      <rect x="20" y="6" width="32" height="40" rx="3" fill={C.overlay} stroke={C.line} strokeWidth="2" opacity="0.6" />
      <rect x="14" y="12" width="32" height="40" rx="3" fill={C.card} stroke={C.line} strokeWidth="2.5" />
      <path d="M36 12h10v10z" fill={C.brand} />
      <path d="M24 34v-4a6 6 0 0 1 12 0v4" stroke={C.metal} strokeWidth="3.5" />
      <rect x="21" y="33" width="18" height="13" rx="3" fill={C.metal} />
      <circle cx="30" cy="39" r="2" fill={C.base} />
    </Svg>
  );
}

/** A phone with a two-step code: six orange dots under a small shield. */
export function Phone(p: SpotProps) {
  return (
    <Svg {...p}>
      <rect x="18" y="6" width="28" height="52" rx="5" fill={C.card} stroke={C.line} strokeWidth="3" />
      <path d="M32 14l7 3v6c0 5-3 8-7 10-4-2-7-5-7-10v-6z" fill={C.metal} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={23 + (i % 3) * 9} cy={i < 3 ? 41 : 49} r="2.5" fill={C.brand} />
      ))}
    </Svg>
  );
}

/** The public notice board on a post: GitHub. Labelled beside, never inside. */
export function Board(p: SpotProps) {
  return (
    <Svg {...p}>
      <path d="M32 40v20" stroke={C.line} strokeWidth="4" />
      <rect x="8" y="8" width="48" height="32" rx="3" fill={C.card} stroke={C.line} strokeWidth="3" />
      <path d="M15 18h20M15 25h28M15 32h14" stroke={C.muted} strokeWidth="3" />
    </Svg>
  );
}

/** An automated scanner: a small grey bot with a magnifier. */
export function Bot({ found = false, ...p }: SpotProps & { found?: boolean }) {
  return (
    <Svg {...p}>
      <rect x="10" y="18" width="30" height="26" rx="6" fill={C.overlay} stroke={C.muted} strokeWidth="3" />
      <path d="M25 18v-6" stroke={C.muted} strokeWidth="3" />
      <circle cx="19" cy="30" r="3" fill={C.muted} />
      <circle cx="31" cy="30" r="3" fill={C.muted} />
      <circle cx="46" cy="42" r="8" stroke={found ? C.bad : C.muted} strokeWidth="3" />
      <path d="M52 48l6 6" stroke={found ? C.bad : C.muted} strokeWidth="4" />
    </Svg>
  );
}

/** One card fanning out to many targets: convert. */
export function Fan(p: SpotProps) {
  return (
    <Svg {...p}>
      <path d="M26 32L48 10M26 32h22M26 32l22 22" stroke={C.brand} strokeWidth="2.5" />
      <rect x="6" y="20" width="20" height="24" rx="3" fill={C.card} stroke={C.line} strokeWidth="2.5" />
      <path d="M10 28h12M10 34h9" stroke={C.muted} strokeWidth="2.5" />
      {[10, 32, 54].map((y) => (
        <rect key={y} x="46" y={y - 5} width="14" height="10" rx="2" fill={C.card} stroke={C.info} strokeWidth="2.5" />
      ))}
    </Svg>
  );
}

/** Two settings cards in step: sync. */
export function SyncPair(p: SpotProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="14" width="24" height="36" rx="3" fill={C.card} stroke={C.line} strokeWidth="2.5" />
      <rect x="36" y="14" width="24" height="36" rx="3" fill={C.card} stroke={C.line} strokeWidth="2.5" />
      <path d="M9 24h14M9 31h14M9 38h14" stroke={C.muted} strokeWidth="2.5" />
      <path d="M41 24h14M41 31h14" stroke={C.muted} strokeWidth="2.5" />
      <rect x="41" y="36" width="14" height="5" rx="2.5" stroke={C.warn} strokeWidth="2" strokeDasharray="3 2" />
      <path d="M26 20h12l-3-3" stroke={C.brand} strokeWidth="2.5" />
      <path d="M38 44H26l3 3" stroke={C.info} strokeWidth="2.5" />
    </Svg>
  );
}

/** Every spot by name, so content files can refer to art with a string. */
export const SPOTS: Record<SpotId, ComponentType<SpotProps>> = {
  laptop: Laptop,
  key: Key,
  guard: Guard,
  safe: Safe,
  cloud: Cloud,
  card: AccessCard,
  "card-revoked": (p: SpotProps) => <AccessCard revoked {...p} />,
  checklist: Clipboard,
  clipboard: (p: SpotProps) => <Clipboard cross {...p} />,
  server: Server,
  settings: SettingsCard,
  "settings-ok": (p: SpotProps) => <SettingsCard rows={["ok", "ok", "ok", "ok"]} {...p} />,
  backup: BackupFile,
  phone: Phone,
  board: Board,
  bot: Bot,
  fan: Fan,
  sync: SyncPair,
};

export function Spot({ id, ...p }: SpotProps & { id: SpotId }) {
  const S = SPOTS[id];
  return <S {...p} />;
}
