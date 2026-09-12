import type { ProcessStep } from "./detail";

/**
 * How an engagement runs. Each step states a commitment the visitor can hold
 * me to, rather than a stage name — "a written estimate within two working
 * days" says more than "Planning".
 */
export const processSteps: ProcessStep[] = [
  {
    key: "talk",
    title: {
      en: "A conversation, free of charge",
      uz: "Bepul suhbat",
      ru: "Бесплатный разговор",
    },
    body: {
      en: "We talk through how the work happens now, what breaks and what you want to change. No commitment and no charge.",
      uz: "Hozir ish qanday ketayotgani, nima buzilayotgani va nimani o'zgartirmoqchi ekaningizni muhokama qilamiz. Majburiyat ham, to'lov ham yo'q.",
      ru: "Обсуждаем, как процесс устроен сейчас, что ломается и что вы хотите изменить. Без обязательств и без оплаты.",
    },
  },
  {
    key: "study",
    title: {
      en: "I study the process",
      uz: "Jarayonni o'rganaman",
      ru: "Изучаю процесс",
    },
    body: {
      en: "I look at how your team actually works — the spreadsheets, the notebooks, the workarounds — not how a diagram says it should.",
      uz: "Jamoangiz aslida qanday ishlayotganini ko'raman: jadvallar, daftarlar, vaqtinchalik yechimlar — sxemada yozilganini emas.",
      ru: "Смотрю, как команда работает на самом деле: таблицы, тетради, обходные пути, а не как нарисовано на схеме.",
    },
  },
  {
    key: "quote",
    title: {
      en: "A written scope and price",
      uz: "Yozma hajm va narx",
      ru: "Письменный объём и цена",
    },
    body: {
      en: "You receive a document listing what will be built, what it costs and how long it takes. The price does not move unless the scope does.",
      uz: "Nima qurilishi, qancha turishi va qancha vaqt olishi yozilgan hujjat olasiz. Hajm o'zgarmasa, narx ham o'zgarmaydi.",
      ru: "Вы получаете документ: что будет сделано, сколько это стоит и сколько займёт. Цена не меняется, пока не меняется объём.",
    },
  },
  {
    key: "build",
    title: {
      en: "Building, in visible stages",
      uz: "Bosqichma-bosqich ishlab chiqish",
      ru: "Разработка видимыми этапами",
    },
    body: {
      en: "Work is delivered in pieces you can open and try, so you see progress during the project rather than at the end of it.",
      uz: "Ish ochib ko'rish mumkin bo'lgan qismlar bilan topshiriladi — natijani oxirida emas, jarayon davomida ko'rasiz.",
      ru: "Работа сдаётся частями, которые можно открыть и попробовать, — прогресс виден по ходу проекта, а не в самом конце.",
    },
  },
  {
    key: "launch",
    title: {
      en: "Launch and training",
      uz: "Ishga tushirish va o'qitish",
      ru: "Запуск и обучение",
    },
    body: {
      en: "I move your existing data across, put the system live, and train your staff until they can work in it without me.",
      uz: "Mavjud ma'lumotlaringizni ko'chiraman, tizimni ishga tushiraman va xodimlaringizni mensiz ishlay oladigan darajada o'qitaman.",
      ru: "Переношу существующие данные, запускаю систему и обучаю сотрудников, пока они не смогут работать в ней без меня.",
    },
  },
  {
    key: "after",
    title: {
      en: "Support after go-live",
      uz: "Ishga tushgandan keyingi qo'llab-quvvatlash",
      ru: "Поддержка после запуска",
    },
    body: {
      en: "Thirty days of free bug fixes, and a standing offer to keep improving the system as the business changes.",
      uz: "O'ttiz kun bepul xatolarni tuzatish va biznes o'zgargan sari tizimni takomillashtirishda davom etish imkoni.",
      ru: "Тридцать дней бесплатных исправлений и возможность развивать систему дальше по мере изменений в бизнесе.",
    },
  },
];
