import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A block styled as a terminal window, with a title bar and traffic lights.
 * Decorative chrome only — the children are ordinary content.
 */
export function TerminalWindow({
  title = "bash",
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("terminal-window", className)}>
      <div className="terminal-titlebar">
        <div className="flex gap-1.5" aria-hidden>
          <span className="terminal-dot bg-destructive/70" />
          <span className="terminal-dot bg-yellow-500/70" />
          <span className="terminal-dot bg-brand-mint/70" />
        </div>
        <span
          aria-hidden
          className="ml-1 select-none font-mono text-[11px] text-muted-foreground"
        >
          {title}
        </span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
