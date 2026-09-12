import { cn } from "@/lib/utils";

/**
 * The SUDO wordmark.
 *
 * Rendered as text rather than an image so it stays crisp at any size,
 * inherits the current color, and remains selectable and searchable.
 * The trailing block is a terminal-style cursor — a nod to `sudo`.
 */
export function Logo({
  className,
  showCursor = true,
}: {
  className?: string;
  showCursor?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-mono text-xl font-bold leading-none tracking-tight",
        className,
      )}
    >
      <span aria-hidden>SUDO</span>
      <span className="sr-only">SUDO</span>
      {showCursor ? (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[0.85em] w-[0.42em] translate-y-[0.06em] bg-accent"
        />
      ) : null}
    </span>
  );
}
