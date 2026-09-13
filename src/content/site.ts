/**
 * Global site configuration. Values here are locale-independent
 * (URLs, handles, contact details). Translatable copy lives in src/messages.
 */
export const siteConfig = {
  /** Brand wordmark, rendered by <Logo />. */
  brand: "SUDO",
  name: "Shakhzod Yuldoshev",
  shortName: "Shakhzod",
  domain: "sudo.uz",
  url: "https://sudo.uz",
  /** Personal address. Contact details live in `contact.ts`; this is here
   *  for metadata and structured data only. */
  email: "xii1303@inbox.ru",
  yearsOfExperience: 6,
  /**
   * Brand colors, kept here for reference and for non-CSS consumers
   * (OG images, manifest, theme-color). The CSS source of truth is the
   * token block in src/app/globals.css.
   */
  colors: {
    ink: "#231f20",
    mint: "#1feace",
  },
} as const;

export type SiteConfig = typeof siteConfig;
