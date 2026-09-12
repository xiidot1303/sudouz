import type { Localized } from "./types";

/**
 * What every engagement includes, shown on each detail page.
 *
 * These are commitments Shakhzod confirmed he can actually make — do not add
 * to this list without asking him. Source-code handover is deliberately
 * absent: it was not among the commitments he selected.
 */
export const guarantees: {
  key: string;
  icon: string;
  title: Localized;
  body: Localized;
}[] = [
  {
    key: "contract",
    icon: "FileSignature",
    title: {
      en: "An official contract",
      uz: "Rasmiy shartnoma",
      ru: "Официальный договор",
    },
    body: {
      en: "Every project runs on a signed contract that sets out scope, deadlines and obligations on both sides.",
      uz: "Har bir loyiha imzolangan shartnoma asosida olib boriladi: hajm, muddat va ikki tomon majburiyatlari aniq yoziladi.",
      ru: "Каждый проект идёт по подписанному договору, где зафиксированы объём, сроки и обязательства обеих сторон.",
    },
  },
  {
    key: "fixed-price",
    icon: "Receipt",
    title: {
      en: "A fixed price, agreed first",
      uz: "Oldindan kelishilgan aniq narx",
      ru: "Фиксированная цена, согласованная заранее",
    },
    body: {
      en: "The price is settled before development starts. If the scope changes later, we agree the difference before anyone writes code.",
      uz: "Narx ishlash boshlanishidan oldin kelishiladi. Keyinchalik hajm o'zgarsa, farqni kod yozilishidan avval kelishib olamiz.",
      ru: "Цена определяется до начала разработки. Если объём меняется, разницу согласовываем до того, как писать код.",
    },
  },
  {
    key: "deployment",
    icon: "Rocket",
    title: {
      en: "Deployment and staff training",
      uz: "Ishga tushirish va xodimlarni o'qitish",
      ru: "Запуск и обучение сотрудников",
    },
    body: {
      en: "I install the system on your server, confirm it is running, and train the people who will use it every day.",
      uz: "Tizimni serveringizga o'rnataman, ishlayotganiga ishonch hosil qilaman va undan har kuni foydalanadigan xodimlarni o'qitaman.",
      ru: "Устанавливаю систему на ваш сервер, убеждаюсь, что она работает, и обучаю сотрудников, которые будут работать в ней каждый день.",
    },
  },
  {
    key: "support",
    icon: "LifeBuoy",
    title: {
      en: "30 days of support after launch",
      uz: "Ishga tushgandan keyin 30 kun qo'llab-quvvatlash",
      ru: "30 дней поддержки после запуска",
    },
    body: {
      en: "Bugs found in the first 30 days are fixed free of charge. Longer support is available if you want it.",
      uz: "Dastlabki 30 kunda topilgan xatolar bepul tuzatiladi. Xohlasangiz, uzoqroq qo'llab-quvvatlash ham mavjud.",
      ru: "Ошибки, найденные в первые 30 дней, исправляю бесплатно. При желании можно продлить поддержку.",
    },
  },
];

/**
 * Systems commonly integrated with. Named rather than described, because a
 * specific name is worth more than "seamless integration".
 */
export const integrations: { name: string; note: Localized }[] = [
  {
    name: "1C",
    note: {
      en: "Data migration and two-way exchange",
      uz: "Ma'lumot ko'chirish va ikki tomonlama almashinuv",
      ru: "Миграция данных и двусторонний обмен",
    },
  },
  {
    name: "Excel",
    note: {
      en: "Import of existing records and reports",
      uz: "Mavjud yozuv va hisobotlarni import qilish",
      ru: "Импорт существующих записей и отчётов",
    },
  },
  {
    name: "Asl Belgisi",
    note: {
      en: "Mandatory product labelling",
      uz: "Majburiy markirovka",
      ru: "Обязательная маркировка товаров",
    },
  },
  {
    name: "Payme",
    note: { en: "Online payments", uz: "Onlayn to'lovlar", ru: "Онлайн-платежи" },
  },
  {
    name: "Click",
    note: { en: "Online payments", uz: "Onlayn to'lovlar", ru: "Онлайн-платежи" },
  },
  {
    name: "Uzum",
    note: { en: "Online payments", uz: "Onlayn to'lovlar", ru: "Онлайн-платежи" },
  },
  {
    name: "Bitrix24",
    note: {
      en: "Setup and custom integration",
      uz: "Sozlash va integratsiya",
      ru: "Настройка и интеграция",
    },
  },
  {
    name: "Billz",
    note: {
      en: "Retail data exchange",
      uz: "Chakana savdo ma'lumot almashinuvi",
      ru: "Обмен данными розницы",
    },
  },
  {
    name: "Telegram",
    note: {
      en: "Bots, mini apps and notifications",
      uz: "Botlar, mini ilovalar va bildirishnomalar",
      ru: "Боты, мини-приложения и уведомления",
    },
  },
];
