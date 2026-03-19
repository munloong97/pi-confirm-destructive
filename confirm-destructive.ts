import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { isToolCallEventType } from "@mariozechner/pi-coding-agent";

const DANGEROUS = [
  "rm -rf",
  "DROP",
  "TRUNCATE",
  "git push --force",
  "git push -f",
  "git reset --hard",
  "git clean -fd",
  "--no-verify",
];

export default function (pi: ExtensionAPI) {
  pi.on("tool_call", async (event, ctx) => {
    if (isToolCallEventType("bash", event)) {
      const cmd = event.input.command;
      const match = DANGEROUS.find((d) => cmd.includes(d));
      if (match) {
        const ok = await ctx.ui.confirm(
          "🚨 Destructive Command",
          `Contains "${match}":\n${cmd}\n\nAllow?`
        );
        if (!ok) return { block: true, reason: `Blocked: contains "${match}"` };
      }
    }
  });
}
