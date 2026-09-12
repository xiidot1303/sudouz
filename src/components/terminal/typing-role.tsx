"use client";

import { useTypewriter } from "./use-typewriter";
import { Cursor } from "./cursor";

/**
 * Cycles through the given roles, typing and deleting each in turn.
 *
 * The full list is rendered for assistive tech in a visually hidden node,
 * and the animated copy is hidden from it, so the roles are announced once
 * rather than on every keystroke.
 */
export function TypingRole({ roles }: { roles: string[] }) {
  const { text } = useTypewriter(roles);

  return (
    <>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden className="inline-flex items-center">
        {text}
        <Cursor />
      </span>
    </>
  );
}
