// ─── §4 · Stories: several commands, one real problem ────────────────────────
//
// Use cases U2 and U4 of the graphics pack, as numbered strips. U1 ("I pushed
// a key by mistake") is the leak-anatomy section above, so it is not repeated.
//
// ⚠️ Every step is a real command in evnx 0.12.0, in the order you would run
// it. A step that cannot be typed as shown is worse than no step.

import type { CommandPill, SpotId } from "../types";

export interface StoryStep extends CommandPill {
  caption: string;
  spot: SpotId;
}

export interface Story {
  id: string;
  tab: string;
  title: string;
  situation: string;
  without: string[];
  steps: StoryStep[];
  outcome: string;
  guide: string;
}

export const stories: {
  eyebrow: string;
  heading: string;
  lede: string;
  withoutLabel: string;
  withLabel: string;
  guideLabel: string;
  items: Story[];
} = {
  eyebrow: "In practice",
  heading: "The same tool, two everyday problems",
  lede: "What happens today, then the commands that fix it, in the order you run them.",
  withoutLabel: "Without evnx",
  withLabel: "With evnx",
  guideLabel: "Read the walkthrough",

  items: [
    {
      id: "teammate",
      tab: "A teammate joins",
      title: "A new teammate on Monday, a contractor leaves on Friday",
      situation: "Sharing secrets without the chat",
      without: [
        "“Can you send me the passwords?”",
        "The .env is pasted into a chat and copied to every phone",
        "The contractor leaves with a copy nobody can take back",
      ],
      steps: [
        { label: "evnx auth", guide: "auth", caption: "Their own account", spot: "phone" },
        { label: "evnx vault share", guide: "vault", caption: "Their own access card", spot: "card" },
        { label: "evnx cloud pull", guide: "cloud", caption: "Decrypted on their laptop", spot: "cloud" },
        { label: "evnx diff", guide: "diff", caption: "Nothing missing", spot: "settings-ok" },
        { label: "evnx vault revoke", guide: "vault", caption: "Removed, and the key changed", spot: "card-revoked" },
      ],
      outcome: "Access you can switch off, not copies you can't take back.",
      guide: "use-cases/sharing-a-vault-with-a-teammate",
    },
    {
      id: "deploy",
      tab: "Deploy with no file",
      title: "Deploy with no secrets file",
      situation: "The build server needs the keys",
      without: [
        "A .env is copied onto the build server",
        "Every step of the build can read it",
        "It stays on disk after the build",
      ],
      steps: [
        { label: "evnx auth token", guide: "auth", caption: "A pass, not a password", spot: "card" },
        { label: "evnx scan", guide: "scan", caption: "No leaked keys in the code", spot: "guard" },
        { label: "evnx validate", guide: "validate", caption: "Settings checked", spot: "checklist" },
        { label: "evnx cloud run", guide: "cloud", caption: "Nothing left on disk", spot: "server" },
      ],
      outcome: "The app gets its keys; the server keeps none.",
      guide: "integrations/ci-cd-cloud-tokens",
    },
  ],
};
