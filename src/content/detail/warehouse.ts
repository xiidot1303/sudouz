import type { DetailContent } from "../detail";

export const warehouse: DetailContent = {
  lead: {
    en: "Know what is on the shelf without counting it by hand.",
    uz: "Javonda nima borligini qo'lda sanamasdan biling.",
    ru: "Знайте, что лежит на складе, не пересчитывая вручную.",
  },
  problem: {
    en: [
      "Most warehouses do not have a stock problem. They have a record problem. Goods arrive, get moved, get sold and get written off, and each of those events is written down somewhere different — a notebook at the gate, a spreadsheet on the manager's laptop, a message in a group chat.",
      "By the end of the month nobody can say with confidence what is actually in the building. Stocktaking turns into a two-day shutdown, and the numbers it produces are already out of date by the time they are typed up.",
      "The cost is not just the missing goods. It is the purchase you make because the system said you were out, the sale you lose because it said you had stock, and the hours your team spends reconciling instead of working.",
    ],
    uz: [
      "Ko'p omborlarda muammo tovar emas, hisob-kitobda. Tovar keladi, ko'chiriladi, sotiladi va hisobdan chiqariladi — har bir harakat boshqa joyga yoziladi: darvozadagi daftar, menejer noutbukidagi jadval, guruhdagi xabar.",
      "Oy oxirida binoda aslida nima borligini hech kim aniq ayta olmaydi. Inventarizatsiya ikki kunlik to'xtashga aylanadi va olingan raqamlar yozib bo'lingunicha eskiradi.",
      "Zarar faqat yo'qolgan tovar emas. Tizim 'yo'q' degani uchun qilingan ortiqcha xarid, 'bor' degani uchun qo'ldan boy berilgan savdo va jamoangiz solishtirishga sarflagan soatlar ham shunga kiradi.",
    ],
    ru: [
      "У большинства складов проблема не с товаром, а с учётом. Товар приходит, перемещается, продаётся и списывается — и каждое из этих событий записывается в разное место: тетрадь на воротах, таблица на ноутбуке менеджера, сообщение в рабочем чате.",
      "К концу месяца никто не может уверенно сказать, что на самом деле лежит на складе. Инвентаризация превращается в двухдневную остановку, а полученные цифры устаревают, пока их вносят.",
      "Убыток — это не только пропавший товар. Это лишняя закупка, потому что система показала ноль, потерянная продажа, потому что она показала остаток, и часы, которые команда тратит на сверку вместо работы.",
    ],
  },
  includes: {
    en: [
      { title: "Live balances by warehouse", body: "Every receipt, transfer, sale and write-off updates the balance as it happens, across as many warehouses and shops as you run." },
      { title: "Barcode receiving and picking", body: "Staff scan goods in and out with a phone or a scanner. The system records who moved what, and when." },
      { title: "Stocktaking without closing", body: "Count by section while the warehouse keeps working, and see the discrepancy list with the responsible person against each line." },
      { title: "Reorder points", body: "Set a minimum for each item and get told what to buy before you run out, based on how fast it actually sells." },
      { title: "Batches, expiry and serial numbers", body: "Track goods by batch or expiry date where it matters — pharmacy, food, anything with a shelf life." },
      { title: "Reports that match reality", body: "Stock value, turnover, dead stock and shortages, drawn from the same data your staff enter daily." },
    ],
    uz: [
      { title: "Ombor bo'yicha jonli qoldiq", body: "Har bir qabul, ko'chirish, sotuv va hisobdan chiqarish qoldiqni o'sha zahoti yangilaydi — nechta ombor va do'koningiz bo'lsa ham." },
      { title: "Shtrix-kod bilan qabul va yig'ish", body: "Xodimlar telefon yoki skaner bilan tovarni kiritadi va chiqaradi. Tizim kim, nimani va qachon ko'chirganini yozib boradi." },
      { title: "To'xtamasdan inventarizatsiya", body: "Ombor ishlayotgan paytda bo'limlar bo'yicha sanang va har bir satrda mas'ul shaxs ko'rsatilgan tafovut ro'yxatini oling." },
      { title: "Qayta buyurtma chegarasi", body: "Har bir mahsulotga minimum belgilang va tugashidan oldin nima sotib olish kerakligini bilib turing — haqiqiy sotuv tezligiga qarab." },
      { title: "Partiya, muddat va seriya raqami", body: "Kerak bo'lgan joyda tovarni partiya yoki yaroqlilik muddati bo'yicha kuzating: dorixona, oziq-ovqat va muddati bor har qanday mahsulot." },
      { title: "Haqiqatga mos hisobotlar", body: "Qoldiq qiymati, aylanma, harakatsiz tovar va kamomad — xodimlaringiz har kuni kiritadigan ma'lumotdan." },
    ],
    ru: [
      { title: "Актуальные остатки по складам", body: "Каждое поступление, перемещение, продажа и списание меняют остаток сразу — по всем складам и магазинам, сколько бы их ни было." },
      { title: "Приём и сборка по штрих-коду", body: "Сотрудники сканируют товар телефоном или сканером. Система фиксирует, кто, что и когда переместил." },
      { title: "Инвентаризация без остановки", body: "Считайте по секциям, пока склад работает, и получайте список расхождений с ответственным по каждой строке." },
      { title: "Точка дозаказа", body: "Задайте минимум по каждой позиции и узнавайте, что закупить, до того как товар закончится, — исходя из реальной скорости продаж." },
      { title: "Партии, сроки годности и серийные номера", body: "Ведите учёт по партиям и срокам там, где это важно: аптека, продукты, любой товар с ограниченным сроком." },
      { title: "Отчёты, которые сходятся с реальностью", body: "Стоимость остатков, оборачиваемость, неликвид и недостачи — из тех же данных, которые сотрудники вносят ежедневно." },
    ],
  },
  outcomes: {
    en: [
      "Stocktaking measured in hours instead of days",
      "Purchasing based on real consumption, not guesswork",
      "A named person against every movement",
      "One balance figure the whole company agrees on",
    ],
    uz: [
      "Inventarizatsiya kunlar emas, soatlar bilan o'lchanadi",
      "Xarid taxmin emas, haqiqiy sarfga asoslanadi",
      "Har bir harakat ortida aniq mas'ul shaxs",
      "Butun kompaniya rozi bo'ladigan yagona qoldiq raqami",
    ],
    ru: [
      "Инвентаризация занимает часы, а не дни",
      "Закупки по реальному расходу, а не на глаз",
      "За каждым движением закреплён конкретный человек",
      "Одна цифра остатка, с которой согласна вся компания",
    ],
  },
  faq: {
    en: [
      { q: "We already keep records in 1C and Excel. Do we start from nothing?", a: "No. Existing balances, the item catalogue and counterparties are migrated across, and 1C can keep exchanging data with the new system if you want to keep using it for accounting." },
      { q: "Our storekeepers are not confident with computers. Will they manage?", a: "The daily work is scanning a barcode and confirming a number, which is deliberately simpler than the spreadsheets they use now. Training their staff on site is part of every project." },
      { q: "How long does it take?", a: "It depends on how many warehouses and how much history has to move. After looking at your process I give you a written timeline before any work starts — and the date does not move unless the scope does." },
      { q: "Can it work offline? Our warehouse has poor internet.", a: "Yes. The scanning app keeps working without a connection and syncs when the signal returns, so receiving does not stop when the internet does." },
    ],
    uz: [
      { q: "Bizda 1C va Excel'da hisob yuritiladi. Noldan boshlaymizmi?", a: "Yo'q. Mavjud qoldiqlar, mahsulot katalogi va kontragentlar ko'chiriladi. Buxgalteriya uchun 1C'dan foydalanishda davom etmoqchi bo'lsangiz, yangi tizim u bilan ma'lumot almashib turadi." },
      { q: "Omborchilarimiz kompyuterni yaxshi bilmaydi. Uddalay oladimi?", a: "Kundalik ish — shtrix-kodni skanerlash va raqamni tasdiqlash. Bu ular hozir ishlatayotgan jadvallardan ataylab soddaroq. Xodimlarni joyida o'qitish har bir loyihaga kiradi." },
      { q: "Qancha vaqt oladi?", a: "Nechta ombor borligi va qancha tarix ko'chishiga bog'liq. Jarayoningizni ko'rib chiqqach, ish boshlanishidan oldin yozma muddat beraman — hajm o'zgarmasa, sana ham o'zgarmaydi." },
      { q: "Internet zaif bo'lsa ishlaydimi?", a: "Ha. Skanerlash ilovasi aloqasiz ham ishlaydi va signal qaytganda sinxronlanadi, shuning uchun internet uzilganda qabul to'xtamaydi." },
    ],
    ru: [
      { q: "У нас учёт в 1С и Excel. Начинать с нуля?", a: "Нет. Текущие остатки, номенклатура и контрагенты переносятся, а 1С может продолжать обмениваться данными с новой системой, если вы хотите оставить её для бухгалтерии." },
      { q: "Наши кладовщики плохо владеют компьютером. Справятся?", a: "Ежедневная работа — отсканировать штрих-код и подтвердить количество. Это намеренно проще, чем таблицы, которыми они пользуются сейчас. Обучение сотрудников на месте входит в каждый проект." },
      { q: "Сколько времени это займёт?", a: "Зависит от количества складов и объёма истории, которую нужно перенести. После изучения процесса вы получаете письменный срок до начала работ — и дата не сдвигается, пока не меняется объём." },
      { q: "Будет ли работать офлайн? На складе плохой интернет.", a: "Да. Приложение для сканирования работает без связи и синхронизируется, когда сигнал возвращается, поэтому приёмка не останавливается вместе с интернетом." },
    ],
  },
};
