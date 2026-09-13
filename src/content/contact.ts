import type { Localized } from "./types";

/**
 * Contact channels, in the order they should be offered.
 *
 * Telegram is first and is what every call to action points at: it is the
 * channel Shakhzod actually uses, and the one business buyers in the region
 * expect. Email is listed but never used as a primary CTA.
 */

/** Digits only, for tel: and wa.me links. */
const PHONE_E164 = "998335551303";

export const contact = {
  telegram: {
    handle: "XIIdot1303",
    url: "https://t.me/XIIdot1303",
  },
  phone: {
    /** Display form. */
    label: "+998 33 555 13 03",
    tel: `+${PHONE_E164}`,
    whatsapp: `https://wa.me/${PHONE_E164}`,
  },
  email: "xii1303@inbox.ru",
  linkedin: "https://www.linkedin.com/in/shakhzod-yuldoshev-7476261b6",
  instagram: "https://www.instagram.com/xiidot1303",
  github: "https://github.com/xiidot1303",
} as const;

export type ContactChannelKey =
  | "telegram"
  | "whatsapp"
  | "phone"
  | "email"
  | "linkedin"
  | "instagram"
  | "github";

export type ContactChannel = {
  key: ContactChannelKey;
  icon: string;
  label: string;
  href: string;
  /** Shown beneath the label. */
  note: Localized;
  /** Primary channels are surfaced as buttons, the rest as links. */
  primary?: boolean;
  /** External links open in a new tab; tel: and mailto: do not. */
  external?: boolean;
};

export const contactChannels: ContactChannel[] = [
  {
    key: "telegram",
    icon: "Telegram",
    label: `@${contact.telegram.handle}`,
    href: contact.telegram.url,
    note: {
      en: "Fastest way to reach me",
      uz: "Men bilan bog'lanishning eng tez yo'li",
      ru: "Самый быстрый способ связаться",
    },
    primary: true,
    external: true,
  },
  {
    key: "whatsapp",
    icon: "Whatsapp",
    label: contact.phone.label,
    href: contact.phone.whatsapp,
    note: { en: "WhatsApp", uz: "WhatsApp", ru: "WhatsApp" },
    primary: true,
    external: true,
  },
  {
    key: "phone",
    icon: "Phone",
    label: contact.phone.label,
    href: `tel:${contact.phone.tel}`,
    note: { en: "Call directly", uz: "To'g'ridan-to'g'ri qo'ng'iroq", ru: "Позвонить напрямую" },
  },
  {
    key: "email",
    icon: "Mail",
    label: contact.email,
    href: `mailto:${contact.email}`,
    note: { en: "Email", uz: "Email", ru: "Электронная почта" },
  },
  {
    key: "linkedin",
    icon: "Linkedin",
    label: "LinkedIn",
    href: contact.linkedin,
    note: { en: "Professional profile", uz: "Professional profil", ru: "Профессиональный профиль" },
    external: true,
  },
  {
    key: "github",
    icon: "Github",
    label: "GitHub",
    href: contact.github,
    note: { en: "Code and projects", uz: "Kod va loyihalar", ru: "Код и проекты" },
    external: true,
  },
  {
    key: "instagram",
    icon: "Instagram",
    label: "Instagram",
    href: contact.instagram,
    note: { en: "Instagram", uz: "Instagram", ru: "Instagram" },
    external: true,
  },
];

/**
 * Builds a Telegram link. Telegram has no equivalent of a mail subject line,
 * so the topic cannot be prefilled — callers should make the CTA's own label
 * carry the context instead.
 */
export function telegramLink(): string {
  return contact.telegram.url;
}
