/**
 * Temporary stand-in shown while a section has no content yet.
 * Remove each usage as real content lands.
 */
export function Placeholder({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border px-6 py-10 text-center text-sm text-muted-foreground sm:px-10 sm:py-14">
      {label}
    </div>
  );
}
