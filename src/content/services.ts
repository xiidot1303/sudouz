import type { Localized } from "./types";

/**
 * What Shakhzod builds — the means. Pairs with `solutions.ts`, which covers
 * the business problems these are used to solve.
 *
 * `icon` names a lucide-react icon, resolved in the section component.
 */
export type Service = {
  slug: string;
  icon: string;
  title: Localized;
  summary: Localized;
  /** Concrete deliverables, so the offer is not abstract. */
  points: Localized<string[]>;
};

export const services: Service[] = [
  {
    slug: "erp",
    icon: "Boxes",
    title: { en: "ERP systems", uz: "ERP tizimlari", ru: "ERP-системы" },
    summary: {
      en: "One system for stock, purchasing, production and finance, so every department works from the same numbers.",
      uz: "Ombor, xarid, ishlab chiqarish va moliya uchun yagona tizim — barcha bo'limlar bir xil raqamlar bilan ishlaydi.",
      ru: "Единая система для склада, закупок, производства и финансов — все отделы работают с одними цифрами.",
    },
    points: {
      en: ["Inventory and warehouses", "Purchasing and suppliers", "Production and costing", "Finance and reporting"],
      uz: ["Inventarizatsiya va omborlar", "Xarid va yetkazib beruvchilar", "Ishlab chiqarish va tannarx", "Moliya va hisobotlar"],
      ru: ["Склад и остатки", "Закупки и поставщики", "Производство и себестоимость", "Финансы и отчётность"],
    },
  },
  {
    slug: "crm",
    icon: "Users",
    title: { en: "CRM systems", uz: "CRM tizimlari", ru: "CRM-системы" },
    summary: {
      en: "A single place for every lead, deal and conversation, so nothing is lost when someone is away.",
      uz: "Har bir mijoz, bitim va suhbat uchun yagona joy — xodim yo'q bo'lganda ham hech narsa yo'qolmaydi.",
      ru: "Единое место для всех лидов, сделок и переписок — ничего не теряется, даже если сотрудник в отпуске.",
    },
    points: {
      en: ["Sales pipeline", "Call and chat history", "Tasks and reminders", "Manager performance"],
      uz: ["Savdo voronkasi", "Qo'ng'iroq va chat tarixi", "Vazifa va eslatmalar", "Menejerlar samaradorligi"],
      ru: ["Воронка продаж", "История звонков и переписки", "Задачи и напоминания", "Эффективность менеджеров"],
    },
  },
  {
    slug: "web",
    icon: "Globe",
    title: { en: "Websites", uz: "Veb-saytlar", ru: "Веб-сайты" },
    summary: {
      en: "Fast, searchable sites that load on any connection and turn visitors into enquiries.",
      uz: "Har qanday internetda tez ochiladigan va tashrifchini mijozga aylantiradigan saytlar.",
      ru: "Быстрые сайты, которые открываются при любом интернете и превращают посетителей в заявки.",
    },
    points: {
      en: ["Corporate and landing pages", "Admin panel you control", "SEO and analytics", "Multilingual by default"],
      uz: ["Korporativ va landing sahifalar", "O'zingiz boshqaradigan admin panel", "SEO va analitika", "Ko'p tillilik"],
      ru: ["Корпоративные сайты и лендинги", "Админка под вашим контролем", "SEO и аналитика", "Мультиязычность"],
    },
  },
  {
    slug: "telegram-bots",
    icon: "Send",
    title: { en: "Telegram bots", uz: "Telegram botlar", ru: "Telegram-боты" },
    summary: {
      en: "Put orders, requests and reports where your customers and staff already are — inside Telegram.",
      uz: "Buyurtma, ariza va hisobotlarni mijoz va xodimlar allaqachon bo'lgan joyga — Telegramga olib kiring.",
      ru: "Заказы, заявки и отчёты там, где ваши клиенты и сотрудники уже есть — в Telegram.",
    },
    points: {
      en: ["Orders and payments", "Staff requests and approvals", "Automatic notifications", "Reports on demand"],
      uz: ["Buyurtma va to'lovlar", "Xodim arizalari va tasdiqlash", "Avtomatik bildirishnomalar", "So'rov bo'yicha hisobotlar"],
      ru: ["Заказы и оплаты", "Заявки и согласования", "Автоматические уведомления", "Отчёты по запросу"],
    },
  },
  {
    slug: "mobile",
    icon: "Smartphone",
    title: { en: "Mobile apps", uz: "Mobil ilovalar", ru: "Мобильные приложения" },
    summary: {
      en: "Apps for the people who work away from a desk — couriers, agents and field staff, online or off.",
      uz: "Stol ortida ishlamaydiganlar uchun — kuryer, agent va dala xodimlari uchun, internet bilan yoki usiz.",
      ru: "Приложения для тех, кто работает не за столом — курьеров, агентов и полевых сотрудников, онлайн и офлайн.",
    },
    points: {
      en: ["iOS and Android", "Works offline", "Barcode and QR scanning", "GPS and route tracking"],
      uz: ["iOS va Android", "Oflayn ishlaydi", "Shtrix-kod va QR skaner", "GPS va marshrutni kuzatish"],
      ru: ["iOS и Android", "Работает офлайн", "Сканирование штрих-кодов и QR", "GPS и отслеживание маршрутов"],
    },
  },
  {
    slug: "ecommerce",
    icon: "ShoppingCart",
    title: { en: "E-commerce", uz: "Onlayn savdo", ru: "Электронная коммерция" },
    summary: {
      en: "An online store wired to your real stock and payments, not a catalogue you update by hand.",
      uz: "Qo'lda yangilanadigan katalog emas — haqiqiy qoldiq va to'lovlarga ulangan onlayn do'kon.",
      ru: "Интернет-магазин, связанный с реальными остатками и платежами, а не каталог, который правят вручную.",
    },
    points: {
      en: ["Payments and delivery", "Live stock sync", "Promotions and discounts", "Sales analytics"],
      uz: ["To'lov va yetkazib berish", "Jonli qoldiq sinxronizatsiyasi", "Aksiya va chegirmalar", "Savdo tahlili"],
      ru: ["Оплата и доставка", "Синхронизация остатков", "Акции и скидки", "Аналитика продаж"],
    },
  },
  {
    slug: "ai",
    icon: "Sparkles",
    title: { en: "AI integrations", uz: "AI integratsiyalari", ru: "AI-интеграции" },
    summary: {
      en: "Use AI where it pays for itself: answering routine questions, reading documents and forecasting demand.",
      uz: "AI'ni o'zini oqlaydigan joyda ishlating: oddiy savollarga javob, hujjatlarni o'qish va talabni bashorat qilish.",
      ru: "ИИ там, где он окупается: ответы на типовые вопросы, разбор документов и прогноз спроса.",
    },
    points: {
      en: ["Support chatbots", "Document and invoice parsing", "Demand forecasting", "Search over your own data"],
      uz: ["Qo'llab-quvvatlash chatbotlari", "Hujjat va hisob-faktura tahlili", "Talabni bashorat qilish", "O'z ma'lumotlaringiz bo'yicha qidiruv"],
      ru: ["Чат-боты поддержки", "Разбор документов и счетов", "Прогноз спроса", "Поиск по своим данным"],
    },
  },
];
