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
  email: "venons.ltd@gmail.com",
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
  socials: {
    github: "",
    linkedin: "",
    telegram: "",
    x: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
