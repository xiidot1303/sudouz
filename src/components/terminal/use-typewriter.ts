"use client";

import { useEffect, useReducer, useSyncExternalStore } from "react";

type Phase = "typing" | "pausing" | "deleting";

type State = {
  index: number;
  length: number;
  phase: Phase;
};

type Action = { total: number; wordLength: number };

function reducer(state: State, action: Action): State {
  switch (state.phase) {
    case "typing":
      return state.length >= action.wordLength
        ? { ...state, phase: "pausing" }
        : { ...state, length: state.length + 1 };
    case "pausing":
      return { ...state, phase: "deleting" };
    case "deleting":
      return state.length <= 0
        ? { index: (state.index + 1) % action.total, length: 0, phase: "typing" }
        : { ...state, length: state.length - 1 };
  }
}

const initialState: State = { index: 0, length: 0, phase: "typing" };

/**
 * Separator for the stable dependency key built from the word list.
 * A newline cannot appear in these single-line labels, so multi-word
 * entries such as "Software Engineer" survive the round trip intact.
 */
const KEY_SEPARATOR = "\n";

/**
 * Types a list of words one character at a time, deletes, then moves on.
 *
 * Returns the full first word immediately when the visitor prefers reduced
 * motion, so the text is never withheld from them.
 */
export function useTypewriter(
  words: string[],
  {
    typeMs = 90,
    deleteMs = 45,
    pauseMs = 1600,
  }: { typeMs?: number; deleteMs?: number; pauseMs?: number } = {},
) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduceMotion = useReducedMotion();

  // Depend on the joined words rather than the array identity, so a parent
  // re-render passing a fresh array does not restart the animation.
  const key = words.join(KEY_SEPARATOR);

  useEffect(() => {
    if (reduceMotion) return;

    const list = key.split(KEY_SEPARATOR).filter(Boolean);
    if (list.length === 0) return;

    const word = list[state.index] ?? "";
    const delay =
      state.phase === "pausing"
        ? pauseMs
        : state.phase === "deleting"
          ? deleteMs
          : typeMs;

    const id = window.setTimeout(() => {
      dispatch({ total: list.length, wordLength: word.length });
    }, delay);

    return () => window.clearTimeout(id);
  }, [state, key, reduceMotion, typeMs, deleteMs, pauseMs]);

  if (reduceMotion) {
    return { text: words[0] ?? "", isAnimating: false };
  }

  const word = words[state.index] ?? "";
  return { text: word.slice(0, state.length), isAnimating: true };
}

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** Tracks the `prefers-reduced-motion` media query. */
function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    // Assume reduced motion on the server so nothing animates before hydration.
    () => true,
  );
}
