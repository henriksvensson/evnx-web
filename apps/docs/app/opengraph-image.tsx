import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "evnx documentation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The share card for the docs root.
 *
 * ⚠️ Per-page rather than one static image. 57 guides sharing a single card
 * means every link anyone posts looks identical — the card says "evnx" and
 * nothing about which page it is, which is most of what a share card is for.
 *
 * Deliberately no custom font. Loading one means fetching and embedding a
 * binary at build time for every page, and the system stack renders this
 * layout fine. A card that exists beats a prettier one that sometimes fails
 * the build.
 */
export default async function Image() {
  const title = "Every command, flag and exit code";
  const kicker = "Documentation";
  // The simple mark on its tile, from evnx-logo-kit. A PNG, not the SVG: the
  // renderer drops the SVG's drop-shadow filter, which is what makes the key
  // read as hooked through the shackle.
  const mark = await readFile(join(process.cwd(), "public/brand/evnx-icon-192.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d1117",
          padding: 72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={markSrc} width={56} height={56} alt="" />
          <div style={{ fontSize: 30, color: "#e6edf3", fontWeight: 600 }}>evnx</div>
          <div style={{ fontSize: 26, color: "#8b949e" }}>docs</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              color: "#e8652a",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 20,
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              fontSize: title.length > 44 ? 62 : 76,
              color: "#e6edf3",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#8b949e" }}>docs.evnx.dev</div>
      </div>
    ),
    size,
  );
}
