import type { DetailContent } from "../detail";

export const sales: DetailContent = {
  lead: {
    en: "See where the month is going while you can still change it.",
    uz: "Oy qanday ketayotganini hali o'zgartira oladigan paytda ko'ring.",
    ru: "Видеть, как идёт месяц, пока его ещё можно изменить.",
  },
  problem: {
    en: [
      "Your sales are not slow because your agents are lazy. They are slow because nobody, including you, can see the pipeline until the month is already over. An order lives in a notebook, a price agreement lives in a WhatsApp thread, and the figure you finally get is assembled by hand in Excel a week after it mattered.",
      "Day to day it looks like this. An agent promises a discount you never approved. A client is visited twice in one week and another is not visited for two months. Your accountant asks the sales manager for the numbers, the sales manager asks the agents, the agents look through their own notes, and you wait.",
      "The real cost is the decisions you could not make in time. You buy stock for a product that has already stopped selling, you find out a key client went quiet only when the quarter closes, and you pay bonuses on figures nobody can properly check. That is money, and so are the days your managers spend rebuilding reports instead of selling.",
    ],
    uz: [
      "Savdongiz sekin bo'lsa, sababi agentlaringizning dangasaligi emas. Sababi shundaki, oy tugamaguncha voronkani hech kim — siz ham — ko'rmaydi. Buyurtma daftarda, narx kelishuvi WhatsApp yozishmasida, yakuniy raqam esa kerak bo'lgan paytdan bir hafta keyin Excel'da qo'lda yig'iladi.",
      "Kundalik manzara shunday. Agent siz tasdiqlamagan chegirmani va'da qiladi. Bir mijozga bir haftada ikki marta boriladi, boshqasiga ikki oy davomida umuman borilmaydi. Buxgalteringiz savdo menejeridan raqam so'raydi, menejer agentlardan so'raydi, agentlar o'z yozuvlarini titkilaydi, siz esa kutasiz.",
      "Asosiy zarar — o'z vaqtida qabul qilinmagan qarorlar. Sotilmay qolgan mahsulotga tovar olasiz, yirik mijoz jimib qolganini chorak yopilganda bilasiz va hech kim tekshira olmaydigan raqamlar bo'yicha bonus to'laysiz. Bu pul. Menejerlaringiz sotish o'rniga hisobot tiklashga sarflagan kunlar ham shunday.",
    ],
    ru: [
      "Ваши продажи идут медленно не потому, что агенты ленятся. А потому, что воронку не видит никто, включая вас, пока месяц не закончился. Заказ лежит в блокноте, договорённость о цене — в переписке WhatsApp, а итоговая цифра собирается вручную в Excel через неделю после того, как она была нужна.",
      "Изо дня в день это выглядит так. Агент обещает скидку, которую вы не согласовывали. К одному клиенту заезжают дважды за неделю, к другому не заезжают два месяца. Бухгалтер просит цифры у руководителя отдела, тот — у агентов, агенты перебирают свои записи, а вы ждёте.",
      "Настоящая цена — решения, которые вы не успели принять. Вы закупаете товар, который уже перестал продаваться, узнаёте об ушедшем в тишину крупном клиенте только на закрытии квартала и платите бонусы по цифрам, которые никто не может проверить. Это деньги. Как и дни, которые менеджеры тратят на восстановление отчётов вместо продаж.",
    ],
  },
  includes: {
    en: [
      { title: "One pipeline for every order", body: "Orders from agents, the shop floor, Telegram and the website all land in the same list, with a status you can see at a glance. Nothing is closed in a private notebook." },
      { title: "Price lists and discount limits", body: "Each client segment gets its own prices. An agent can discount down to the limit you set, and anything below it needs your approval before the order goes through." },
      { title: "Field app for agents", body: "Your agents take orders on a phone, at the client's counter, with current stock and the client's debt in front of them. It works without signal and syncs later." },
      { title: "Plans against actuals", body: "Set targets by agent, region, product group or client, and watch the gap fill during the month rather than reading about it afterwards." },
      { title: "Margin on every line", body: "Cost price follows the item from the warehouse, so you see profit per order, per client and per agent — not just turnover." },
      { title: "Debt control at the point of sale", body: "An agent sees the outstanding balance before writing a new order, and you decide whether shipping to a debtor is blocked or simply flagged." },
    ],
    uz: [
      { title: "Barcha buyurtmalar uchun yagona voronka", body: "Agentlardan, savdo zalidan, Telegram va saytdan kelgan buyurtmalar bitta ro'yxatga tushadi va holati bir qarashda ko'rinadi. Hech narsa shaxsiy daftarda yopilmaydi." },
      { title: "Narx ro'yxatlari va chegirma chegarasi", body: "Har bir mijoz toifasiga o'z narxi. Agent siz belgilagan chegaragacha chegirma bera oladi, undan pastga tushsa — buyurtma sizning tasdig'ingizsiz o'tmaydi." },
      { title: "Agentlar uchun mobil ilova", body: "Agentlaringiz buyurtmani mijozning oldida, telefonda oladi: joriy qoldiq va mijozning qarzi ko'z o'ngida turadi. Aloqa bo'lmasa ham ishlaydi, keyin sinxronlanadi." },
      { title: "Reja va fakt", body: "Agent, hudud, mahsulot guruhi yoki mijoz bo'yicha reja qo'ying va farq oy davomida qanday to'lib borayotganini kuzating — keyin o'qib bilmang." },
      { title: "Har bir satr bo'yicha foyda", body: "Tannarx tovar bilan birga ombordan keladi, shuning uchun siz aylanmani emas, buyurtma, mijoz va agent bo'yicha sof foydani ko'rasiz." },
      { title: "Sotuv paytida qarz nazorati", body: "Agent yangi buyurtma yozishdan oldin qoldiq qarzni ko'radi, siz esa qarzdorga jo'natishni butunlay to'xtatishni yoki shunchaki belgilab qo'yishni o'zingiz hal qilasiz." },
    ],
    ru: [
      { title: "Одна воронка для всех заказов", body: "Заказы от агентов, из торгового зала, из Telegram и с сайта попадают в один список, статус виден сразу. Ничего не закрывается в личном блокноте." },
      { title: "Прайс-листы и лимиты скидок", body: "У каждого сегмента клиентов свои цены. Агент может дать скидку до заданного вами предела, а всё, что ниже, не проходит без вашего согласования." },
      { title: "Мобильное приложение для агентов", body: "Агенты принимают заказ прямо у клиента, с телефона, видя актуальные остатки и долг клиента. Работает без связи и синхронизируется позже." },
      { title: "План и факт", body: "Ставьте план по агенту, региону, товарной группе или клиенту и смотрите, как закрывается разрыв в течение месяца, а не читайте об этом потом." },
      { title: "Маржа по каждой строке", body: "Себестоимость приходит вместе с товаром со склада, поэтому вы видите прибыль по заказу, клиенту и агенту, а не только оборот." },
      { title: "Контроль долга в момент продажи", body: "Агент видит остаток долга до того, как выпишет новый заказ, а вы решаете, блокировать отгрузку должнику или просто помечать её." },
    ],
  },
  outcomes: {
    en: [
      "The month's figure visible on any day of the month",
      "Discounts inside limits you set, not limits agents feel",
      "Profit per client and per agent, not just turnover",
      "Bonuses paid on numbers nobody has to rebuild",
    ],
    uz: [
      "Oylik natija oyning istalgan kunida ko'rinadi",
      "Chegirma agent his qilgan emas, siz belgilagan chegarada",
      "Aylanma emas, mijoz va agent bo'yicha sof foyda",
      "Bonus hech kim qayta yig'masa ham ishonchli raqam bo'yicha",
    ],
    ru: [
      "Цифра месяца видна в любой день месяца",
      "Скидки в рамках, которые задали вы, а не агент",
      "Прибыль по клиенту и агенту, а не только оборот",
      "Бонусы по цифрам, которые не нужно пересобирать",
    ],
  },
  faq: {
    en: [
      { q: "Our sales history is in Excel and 1C. Is it lost?", a: "No. Your client list, price lists, outstanding debts and sales history are migrated in, so you open the new system with last year's numbers already in it. If your accountant wants to keep 1C, the two exchange documents." },
      { q: "Our agents are not office people. Will they actually use it?", a: "Yes, because taking an order becomes faster than writing it down. The agent app shows the client, the price and the stock on one screen, and the order is three taps. I train your agents in person before launch." },
      { q: "We use Bitrix24 already. Do we have to drop it?", a: "No. If Bitrix24 works for your sales team, it stays and I connect it to the warehouse, prices and margin figures. I replace it only when you find it is costing you more than it returns." },
      { q: "How long before we see the first reports?", a: "After I look at how you sell now, you get a written scope, a fixed price and a date, all agreed before any work starts. Order entry and the basic sales reports are usually the first part delivered, so you are reading real numbers well before the last module is finished." },
    ],
    uz: [
      { q: "Savdo tariximiz Excel va 1C'da. U yo'qoladimi?", a: "Yo'q. Mijozlar ro'yxati, narx ro'yxatlari, qoldiq qarzlar va savdo tarixi ko'chiriladi — yangi tizimni o'tgan yilgi raqamlar bilan ochasiz. Buxgalteringiz 1C'da qolmoqchi bo'lsa, ikkalasi hujjat almashib turadi." },
      { q: "Agentlarimiz ofis odami emas. Haqiqatan ishlatadimi?", a: "Ha, chunki buyurtma olish yozib qo'yishdan tezroq bo'ladi. Agent ilovasida mijoz, narx va qoldiq bitta ekranda, buyurtma esa uch bosishda tayyor. Ishga tushirishdan oldin agentlaringizni o'zim o'rgataman." },
      { q: "Bizda Bitrix24 bor. Undan voz kechish kerakmi?", a: "Yo'q. Bitrix24 savdo bo'limingizga mos kelsa, u qoladi va men uni ombor, narx va foyda ma'lumotlariga ulayman. Uni faqat sizga qaytargandan ko'proq xarajat keltirayotgani aniq bo'lgandagina almashtiraman." },
      { q: "Birinchi hisobotlarni qachon ko'ramiz?", a: "Hozir qanday sotayotganingizni o'rganganimdan so'ng yozma hajm, qat'iy narx va muddat olasiz — hammasi ish boshlanishidan oldin kelishiladi. Odatda avval buyurtma kiritish va asosiy savdo hisobotlari topshiriladi, shuning uchun oxirgi modul tugashidan ancha oldin haqiqiy raqamlarni o'qiy boshlaysiz." },
    ],
    ru: [
      { q: "История продаж у нас в Excel и 1С. Она потеряется?", a: "Нет. Список клиентов, прайс-листы, текущие долги и история продаж переносятся, и вы открываете новую систему с прошлогодними цифрами внутри. Если бухгалтер хочет остаться в 1С, системы обмениваются документами." },
      { q: "Наши агенты не офисные люди. Они правда будут этим пользоваться?", a: "Да, потому что принять заказ станет быстрее, чем записать его. В приложении агента клиент, цена и остаток на одном экране, а заказ — это три касания. Ваших агентов я обучаю лично до запуска." },
      { q: "У нас уже есть Bitrix24. Придётся от него отказаться?", a: "Нет. Если Bitrix24 устраивает отдел продаж, он остаётся, а я связываю его со складом, ценами и маржой. Заменяю только тогда, когда вы сами увидите, что он обходится дороже, чем возвращает." },
      { q: "Когда мы увидим первые отчёты?", a: "После разбора того, как вы продаёте сейчас, вы получаете письменный объём, фиксированную цену и срок — всё согласовано до начала работ. Обычно первыми сдаются ввод заказов и базовые отчёты по продажам, так что реальные цифры вы читаете задолго до последнего модуля." },
    ],
  },
};
