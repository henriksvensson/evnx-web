// ─── §2 · The road: every command, in four stages ────────────────────────────
//
// The overview scene of the graphics pack, set as HTML so every command name
// is real text that links to its guide. Captions are the pack's own, checked
// against evnx 0.12.0 (specs/evnx-web-visual-revamp/).
//
// ⚠️ Every `guide` must be a top-level command with a guide page. Utilities
// (`commands`, `completions`, `update`, `help`) are left out on purpose.

import type { CommandPill, SectionHeading, SpotId } from "../types";

export interface RoadStage {
  n: number;
  name: string;
  subtitle: string;
  spot: SpotId;
  commands: (CommandPill & { line: string })[];
}

export const road: SectionHeading & { stages: RoadStage[]; banner: string } = {
  eyebrow: "Every command, in order",
  heading: "One road from laptop to live app",
  lede: "Four stages. Each command does one job, and each links to its guide.",

  stages: [
    {
      n: 1,
      name: "Set up",
      subtitle: "Start the project with the right settings",
      spot: "settings",
      commands: [
        { label: "evnx init", guide: "init", line: "Start a project safely" },
        { label: "evnx add", guide: "add", line: "Add settings for a service" },
        { label: "evnx spec", guide: "spec", line: "Write down the rules" },
        { label: "evnx template", guide: "template", line: "Fill config files" },
      ],
    },
    {
      n: 2,
      name: "Check",
      subtitle: "Catch mistakes and leaks before they ship",
      spot: "guard",
      commands: [
        { label: "evnx validate", guide: "validate", line: "Catch fake or weak passwords" },
        { label: "evnx scan", guide: "scan", line: "Stop a leak before it is saved" },
        { label: "evnx diff", guide: "diff", line: "Spot what is missing" },
        { label: "evnx sync", guide: "sync", line: "Keep the template in step" },
        { label: "evnx doctor", guide: "doctor", line: "Health check for the project" },
        { label: "evnx parse", guide: "parse", line: "See what evnx reads" },
      ],
    },
    {
      n: 3,
      name: "Share and run",
      subtitle: "Work as a team, run without secret files",
      spot: "safe",
      commands: [
        { label: "evnx auth", guide: "auth", line: "Your account and two-step login" },
        { label: "evnx org", guide: "org", line: "Team seats and billing" },
        { label: "evnx vault share", guide: "vault", line: "Share with the team, not the chat" },
        { label: "evnx cloud push", guide: "cloud", line: "Sync encrypted versions" },
        { label: "evnx cloud history", guide: "cloud", line: "See every change and go back" },
        { label: "evnx cloud run", guide: "cloud", line: "Run without a secrets file" },
        { label: "evnx run", guide: "run", line: "Run an app with its settings" },
      ],
    },
    {
      n: 4,
      name: "Protect and move",
      subtitle: "Keep a safe copy, hand off to the cloud",
      spot: "backup",
      commands: [
        { label: "evnx backup", guide: "backup", line: "Make an encrypted backup" },
        { label: "evnx restore", guide: "restore", line: "Bring a backup back" },
        { label: "evnx convert", guide: "convert", line: "Send settings anywhere" },
        { label: "evnx migrate", guide: "migrate", line: "Move into a secret manager" },
      ],
    },
  ],

  banner: "evnx guards the developer side, from the first .env to the live app.",
};
