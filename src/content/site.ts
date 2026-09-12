/**
 * Global site configuration. Values here are locale-independent
 * (URLs, handles, contact details). Translatable copy lives in src/messages.
 */
export const siteConfig = {
  name: "Shakhzod Yuldoshev",
  shortName: "Shakhzod",
  domain: "sudo.uz",
  url: "https://sudo.uz",
  email: "venons.ltd@gmail.com",
  yearsOfExperience: 6,
  socials: {
    github: "",
    linkedin: "",
    telegram: "",
    x: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
