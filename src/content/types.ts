import type { Locale } from "@/i18n/routing";

/** A string that has a value per locale. */
export type Localized<T = string> = Record<Locale, T>;

export type Project = {
  slug: string;
  title: string;
  summary: Localized;
  description?: Localized;
  year: number;
  role: Localized;
  stack: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type Client = {
  slug: string;
  name: string;
  logo?: string;
  url?: string;
  industry?: Localized;
  /** Short blurb about the engagement. */
  work?: Localized;
};

export type ExperienceItem = {
  company: string;
  url?: string;
  position: Localized;
  /** ISO month, e.g. "2021-03". */
  start: string;
  /** ISO month, or null when this is the current role. */
  end: string | null;
  location?: Localized;
  highlights?: Localized<string[]>;
  stack?: string[];
};

export type SkillGroup = {
  category: Localized;
  items: string[];
};
