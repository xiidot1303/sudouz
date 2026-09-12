import type { Localized } from "./types";

/**
 * Venons — the company Shakhzod works at.
 * Facts sourced from venons.uz (single-page site, retrieved 2026-09-12).
 */
export const company = {
  name: "Venons",
  legalName: "VENONS MChJ",
  url: "https://venons.uz",
  founded: 2020,
  /** Venons' own brand blue, used to tint their section only. */
  brandColor: "#2160F3",
  location: {
    city: "Samarkand",
    country: "Uzbekistan",
    address: "Gagarin Street 11, Samarkand, Uzbekistan",
  },
  contact: {
    email: "info@venons.uz",
    phone: "+998 94 233 08 88",
  },
  socials: {
    telegram: "https://t.me/venons_uz",
    instagram: "https://www.instagram.com/venons_uz/",
    linkedin: "https://www.linkedin.com/company/venons",
  },
  teamPhoto: "/images/team.jpg",
} as const;

export const companyTagline: Localized = {
  en: "Digital transformation and business automation.",
  uz: "Raqamli transformatsiya va biznesni avtomatlashtirish.",
  ru: "Цифровая трансформация и автоматизация бизнеса.",
};

export const companyMission: Localized = {
  en: "Building cloud software to international standards that makes our clients' business processes fully transparent.",
  uz: "Mijozlarimizning biznes jarayonlarini to'liq shaffof qilish uchun xalqaro standartlarga mos bulutli dasturiy yechimlar yaratamiz.",
  ru: "Создаём облачные решения по международным стандартам, которые делают бизнес-процессы клиентов полностью прозрачными.",
};

/** Headline numbers shown as a stat row. */
export const companyStats: { value: string; label: Localized }[] = [
  {
    value: "20+",
    label: {
      en: "Projects delivered",
      uz: "Muvaffaqiyatli loyiha",
      ru: "Успешных проектов",
    },
  },
  {
    value: "5",
    label: {
      en: "Innovative products",
      uz: "Innovatsion loyiha",
      ru: "Инновационных проекта",
    },
  },
  {
    value: "600+",
    label: { en: "Active users", uz: "Foydalanuvchilar", ru: "Пользователей" },
  },
];

/** Industries Venons has shipped into. */
export const companyIndustries: Localized<string>[] = [
  { en: "FMCG", uz: "FMCG", ru: "FMCG" },
  { en: "Pharma", uz: "Farmatsevtika", ru: "Фармацевтика" },
  { en: "Auto parts", uz: "Avtozapchastlar", ru: "Автозапчасти" },
  { en: "Artificial intelligence", uz: "Sun'iy intellekt", ru: "Искусственный интеллект" },
];

/** In-house products. */
export const companyProducts: {
  name: string;
  description: Localized;
}[] = [
  {
    name: "VSALES",
    description: {
      en: "Management system for distribution, pharmacy and FMCG operations.",
      uz: "Distributsiya, dorixona va FMCG sohalari uchun boshqaruv tizimi.",
      ru: "Система управления для дистрибуции, аптек и FMCG.",
    },
  },
  {
    name: "VERP",
    description: {
      en: "Enterprise resource planning built for mid-size businesses.",
      uz: "O'rta biznes uchun korxona resurslarini rejalashtirish tizimi.",
      ru: "Система планирования ресурсов для среднего бизнеса.",
    },
  },
];
