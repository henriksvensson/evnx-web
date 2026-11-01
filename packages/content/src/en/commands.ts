// ─── §5 · Command showcase ────────────────────────────────────────────────────
//
// 👉 Add, remove or reorder the cards by editing `featured`. The grid renders
//    whatever it is given.
//
// ⚠️ Every `id` here must be a real top-level command. Verified against
//    `src/cli.rs` on 2026-10-02: init, add, validate, scan, diff, convert,
//    migrate, sync, template, backup, restore, auth, vault, cloud, doctor,
//    spec, completions, update.
//
//    A card for a command that does not exist is the fastest way to lose a
//    reader who tries it.

import type { Card, SectionHeading } from "../types";

export const commands: SectionHeading & {
  featured: Card[];
  allCommandsLink: { label: string; docsSlug: string };
} = {
  heading: "One binary, the whole lifecycle",
  // ⚠️ No count here: the road section above lists every command, and a typed
  // number drifts (it said "Twenty" when 0.12.0 had twenty-two).
  lede: "The six you will run most.",

  featured: [
    {
      id: "scan",
      title: "evnx scan",
      mono: true,
      spot: "guard",
      body: "Find secrets before they leave the machine. Reads every .env variant, not just .env.",
    },
    {
      id: "validate",
      title: "evnx validate",
      mono: true,
      spot: "checklist",
      body: "Placeholders, weak values, localhost in a production config.",
    },
    {
      id: "doctor",
      title: "evnx doctor",
      mono: true,
      spot: "clipboard",
      body: "Everything at once, with a single verdict and a single exit code.",
    },
    {
      id: "sync",
      title: "evnx sync",
      mono: true,
      spot: "sync",
      body: "Keep .env and .env.example honest about each other.",
    },
    {
      id: "convert",
      title: "evnx convert",
      mono: true,
      spot: "fan",
      body: "Fourteen targets — JSON, YAML, Kubernetes, Terraform, Vercel and more.",
    },
    {
      id: "cloud",
      title: "evnx cloud",
      mono: true,
      spot: "cloud",
      body: "Push, pull and run. Encrypted on your machine before it leaves it.",
    },
  ],

  allCommandsLink: { label: "Every command and flag", docsSlug: "commands" },
};
