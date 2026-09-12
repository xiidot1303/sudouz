import type { Localized } from "./types";

/**
 * Shared shape for the long-form content on a solution or service detail page.
 * Every field is optional so a page can grow over time without breaking.
 */
export type DetailContent = {
  /** One-line promise under the page title. */
  lead: Localized;
  /** Two or three paragraphs on the problem, in the reader's terms. */
  problem: Localized<string[]>;
  /** Concrete capabilities delivered. */
  includes: Localized<{ title: string; body: string }[]>;
  /** How the work runs, step by step. */
  process?: Localized<{ title: string; body: string }[]>;
  /** Measurable changes after go-live. */
  outcomes?: Localized<string[]>;
  /** Questions a cautious buyer asks before enquiring. */
  faq?: Localized<{ q: string; a: string }[]>;
};

/** A step in the shared delivery process, reused across pages. */
export type ProcessStep = {
  key: string;
  title: Localized;
  body: Localized;
};
