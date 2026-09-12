import { cn } from "@/lib/utils";

/** A blinking block cursor, as a terminal would draw it. */
export function Cursor({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.12em] bg-accent",
        "motion-safe:animate-blink",
        className,
      )}
    />
  );
}
