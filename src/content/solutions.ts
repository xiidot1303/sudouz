import type { Localized } from "./types";

/**
 * Business problems Shakhzod solves — the *what it fixes*, paired with
 * `services.ts` (the *how*).
 *
 * Each entry names the symptom a visitor would recognise in their own
 * business, then the outcome, so they can self-identify without knowing
 * what an ERP is. `symptom` is deliberately written in their words.
 */
export type Solution = {
  slug: string;
  icon: string;
  title: Localized;
  /** The pain, as the business owner would describe it. */
  symptom: Localized;
  /** What changes once it is solved. */
  outcome: Localized;
  /** Slugs from `services.ts` typically used to deliver this. */
  delivers: string[];
};

export const solutions: Solution[] = [
  {
    slug: "warehouse",
    icon: "Warehouse",
    title: {
      en: "Warehouse management",
      uz: "Ombor boshqaruvi",
      ru: "Управление складом",
    },
    symptom: {
      en: "Stock on paper never matches stock on the shelf, and nobody can say what is actually there.",
      uz: "Qog'ozdagi qoldiq javondagi qoldiqqa hech qachon to'g'ri kelmaydi va aslida nima borligini hech kim ayta olmaydi.",
      ru: "Остатки на бумаге никогда не сходятся с остатками на полке, и никто не может сказать, что там на самом деле.",
    },
    outcome: {
      en: "Real-time balances across every warehouse, barcode receiving and shipping, and stocktakes that take hours instead of days.",
      uz: "Har bir omborda real vaqtdagi qoldiq, shtrix-kod orqali qabul va jo'natish, kunlar emas soatlar davom etadigan inventarizatsiya.",
      ru: "Актуальные остатки по всем складам, приём и отгрузка по штрих-коду и инвентаризация за часы, а не за дни.",
    },
    delivers: ["erp", "mobile"],
  },
  {
    slug: "sales",
    icon: "TrendingUp",
    title: {
      en: "Sales management",
      uz: "Savdo boshqaruvi",
      ru: "Управление продажами",
    },
    symptom: {
      en: "Sales live in spreadsheets and notebooks, so the monthly figure is a surprise every time.",
      uz: "Savdo Excel va daftarlarda saqlanadi, shuning uchun oylik natija har safar kutilmagan bo'ladi.",
      ru: "Продажи живут в таблицах и блокнотах, поэтому месячная цифра каждый раз сюрприз.",
    },
    outcome: {
      en: "Every order in one pipeline, plans against actuals by agent and region, and margin you can see before the month closes.",
      uz: "Har bir buyurtma yagona voronkada, agent va hudud bo'yicha reja va fakt, oy yopilmasdan ko'rinadigan foyda.",
      ru: "Каждый заказ в одной воронке, план и факт по агентам и регионам, маржа видна ещё до закрытия месяца.",
    },
    delivers: ["crm", "erp", "mobile"],
  },
  {
    slug: "clients",
    icon: "UserCheck",
    title: {
      en: "Client management",
      uz: "Mijozlar bilan ishlash",
      ru: "Работа с клиентами",
    },
    symptom: {
      en: "Enquiries get missed, follow-ups depend on memory, and when a manager leaves their clients leave too.",
      uz: "Arizalar e'tibordan chetda qoladi, qayta aloqa xotiraga bog'liq, menejer ketsa mijozlari ham ketadi.",
      ru: "Заявки теряются, повторные касания держатся на памяти, а уходит менеджер — уходят и его клиенты.",
    },
    outcome: {
      en: "Every enquiry captured and assigned, full history on each client, and automatic reminders so nothing goes cold.",
      uz: "Har bir ariza qayd etiladi va biriktiriladi, har bir mijoz bo'yicha to'liq tarix, hech narsa unutilmasligi uchun avtomatik eslatmalar.",
      ru: "Каждая заявка зафиксирована и назначена, полная история по клиенту и автонапоминания, чтобы ничего не остыло.",
    },
    delivers: ["crm", "telegram-bots"],
  },
  {
    slug: "hr",
    icon: "IdCard",
    title: { en: "HR management", uz: "HR boshqaruvi", ru: "Управление персоналом" },
    symptom: {
      en: "Attendance, leave and payroll are tracked in three different places that disagree.",
      uz: "Davomat, ta'til va oylik uch xil joyda yuritiladi va ular bir-biriga to'g'ri kelmaydi.",
      ru: "Посещаемость, отпуска и зарплата ведутся в трёх разных местах, которые не сходятся.",
    },
    outcome: {
      en: "One employee record from hire to payslip, self-service requests, and payroll that reads real attendance data.",
      uz: "Ishga qabuldan oylikkacha yagona xodim yozuvi, o'z-o'ziga xizmat arizalari va haqiqiy davomatdan hisoblanadigan oylik.",
      ru: "Одна карточка сотрудника от найма до расчётного листа, заявки самообслуживания и зарплата по реальной посещаемости.",
    },
    delivers: ["erp", "telegram-bots"],
  },
  {
    slug: "accounting",
    icon: "Calculator",
    title: { en: "Accounting", uz: "Buxgalteriya", ru: "Бухгалтерия" },
    symptom: {
      en: "Closing the month means re-keying the same numbers into yet another spreadsheet.",
      uz: "Oyni yopish — o'sha raqamlarni yana bir Excel jadvaliga qayta kiritish demak.",
      ru: "Закрытие месяца — это перенос одних и тех же цифр в очередную таблицу вручную.",
    },
    outcome: {
      en: "Documents and payments flow straight from operations into the books, with receivables and cash position always current.",
      uz: "Hujjat va to'lovlar operatsiyalardan to'g'ridan-to'g'ri hisobga tushadi, debitorlik va kassa holati doim dolzarb.",
      ru: "Документы и платежи попадают в учёт прямо из операций, а дебиторка и остаток в кассе всегда актуальны.",
    },
    delivers: ["erp"],
  },
  {
    slug: "online-store",
    icon: "Store",
    title: { en: "Online store", uz: "Onlayn do'kon", ru: "Интернет-магазин" },
    symptom: {
      en: "Orders arrive through Instagram and Telegram, then get copied into the system by hand — and sometimes sold twice.",
      uz: "Buyurtmalar Instagram va Telegram orqali keladi, keyin qo'lda tizimga ko'chiriladi — ba'zan bir mahsulot ikki marta sotiladi.",
      ru: "Заказы приходят из Instagram и Telegram, потом вручную переносятся в систему — и иногда товар продаётся дважды.",
    },
    outcome: {
      en: "A storefront tied to live stock, online payments and delivery, with every order landing in the same system as the rest.",
      uz: "Jonli qoldiq, onlayn to'lov va yetkazib berishga ulangan do'kon; har bir buyurtma qolganlari bilan bitta tizimga tushadi.",
      ru: "Витрина, связанная с реальными остатками, онлайн-оплатой и доставкой; каждый заказ попадает в ту же систему, что и остальные.",
    },
    delivers: ["ecommerce", "web", "telegram-bots"],
  },
];
