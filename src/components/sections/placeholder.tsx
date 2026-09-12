import { TerminalWindow } from "@/components/terminal";

/**
 * Temporary stand-in shown while a section has no content yet.
 * Styled as shell output so empty sections still fit the theme.
 * Remove each usage as real content lands.
 */
export function Placeholder({
  label,
  command = "cat",
}: {
  label: string;
  command?: string;
}) {
  return (
    <TerminalWindow title={command}>
      <p className="text-muted-foreground">
        <span className="text-accent-text">$</span> {command}
      </p>
      <p className="mt-1 text-muted-foreground">{label}</p>
    </TerminalWindow>
  );
}
