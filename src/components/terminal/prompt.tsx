import { cn } from "@/lib/utils";

/**
 * A shell prompt label, e.g.  shakhzod@sudo:~/projects$
 *
 * Decorative: the whole thing is `aria-hidden` so screen readers hear the
 * heading text alone, without shell punctuation read out character by
 * character.
 */
export function Prompt({
  path = "~",
  className,
  user = "shakhzod",
  host = "sudo",
}: {
  path?: string;
  className?: string;
  user?: string;
  host?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "select-none font-mono text-xs sm:text-sm",
        className,
      )}
    >
      <span className="text-accent-text">
        {user}@{host}
      </span>
      <span className="text-muted-foreground">:</span>
      <span className="text-foreground/70">{path}</span>
      <span className="text-muted-foreground">$</span>
      {/* Trailing space so a following command is not glued to the `$`. */}
      <span> </span>
    </span>
  );
}
