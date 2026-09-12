import type { DetailContent } from "../detail";

export const hr: DetailContent = {
  lead: {
    en: "Pay people from the hours they actually worked, without a week of checking.",
    uz: "Xodimlarga haqiqatda ishlagan soatlari bo'yicha haq to'lang — bir haftalik tekshiruvsiz.",
    ru: "Платите людям за реально отработанные часы, без недели сверок.",
  },
  problem: {
    en: [
      "Payroll is rarely a calculation problem. It is a trust problem. Your attendance sheet says one thing, the guard's notebook says another, your shift supervisor remembers a third version, and you have to decide which of them to believe before the money goes out.",
      "Meanwhile leave requests reach you as WhatsApp messages you scroll back to find. A shop assistant swears they told the manager about Thursday. Your accountant chases signatures for a week, re-types the same names into a payroll spreadsheet, and on the 5th of the month you get a stack of paper to sign without any way of checking it. Then three people ask why their pay is short.",
      "The cost is paid twice. Once in hours you do not get but do pay for, and once in the days your accountant and managers spend reconciling. The heavier cost is quieter: staff stop believing the numbers, and a workplace where people think payroll is arbitrary is a workplace people leave.",
    ],
    uz: [
      "Oylik hisoblash kamdan-kam hollarda matematika muammosi bo'ladi. Bu ishonch muammosi. Davomat jadvalingizda bir raqam, qorovulning daftarida boshqasi, smena boshlig'ingizning esida uchinchisi. Pul chiqishidan oldin qaysi biriga ishonishni siz hal qilishingiz kerak.",
      "Shu orada ta'til arizalari sizga WhatsApp xabari sifatida keladi va siz ularni yozishmani yuqoriga surib qidirasiz. Sotuvchi payshanba haqida menejerga aytganini qasam ichib turadi. Buxgalteringiz bir hafta imzo ortidan yuguradi, o'sha ismlarni yana Excel jadvaliga teradi, oyning 5-sanasida esa siz tekshirish imkoni bo'lmagan qog'ozlar dastasini imzolaysiz. Keyin uch kishi oyligi nega kam ekanini so'raydi.",
      "Buning puli ikki marta to'lanadi. Birinchisi — olinmagan, lekin to'langan soatlar. Ikkinchisi — buxgalter va menejerlar solishtirishga sarflagan kunlar. Og'irrog'i esa jimroq keladi: xodimlar raqamlarga ishonmay qo'yadi, oylik o'zboshimchalik bilan hisoblanadi deb o'ylangan joydan esa odamlar ketadi.",
    ],
    ru: [
      "Зарплата редко бывает проблемой расчёта. Это проблема доверия. В вашем табеле одно, в тетради охранника другое, ваш начальник смены помнит третье, и решать, кому верить, приходится вам — прежде чем деньги уйдут.",
      "Параллельно заявления на отпуск приходят к вам сообщениями в WhatsApp, которые вы потом ищете, листая переписку вверх. Продавец клянётся, что предупредил менеджера про четверг. Бухгалтер неделю собирает подписи, заново вбивает те же фамилии в зарплатную таблицу, а 5-го числа вы подписываете стопку бумаг, которую нечем проверить. Потом трое спрашивают, почему им недоплатили.",
      "Вы платите за это дважды. Один раз — за часы, которых не было, но которые оплачены. Второй — днями, которые бухгалтер и руководители тратят на сверку. Тяжелее другое, и оно тише: сотрудники перестают верить цифрам, а из места, где зарплата кажется произвольной, люди уходят.",
    ],
  },
  includes: {
    en: [
      { title: "Attendance without the paper sheet", body: "Staff check in by QR code, fingerprint terminal or a phone with location, depending on what suits the site. The timesheet builds itself as people arrive." },
      { title: "One employee record", body: "Contract, position, salary history, documents, holidays taken and warnings sit on one card, from the first day to the last." },
      { title: "Leave and absence requests", body: "An employee sends a request from Telegram, their manager approves it in a tap, and it is already in the timesheet and the payroll base. No message gets lost." },
      { title: "Shifts and schedules", body: "Plan rotas for shops, restaurants or a production line, see who is short-staffed next week, and let people swap shifts with a manager's approval." },
      { title: "Payroll from real data", body: "Salary, hourly rates, piece rates, bonuses, penalties and advances are calculated from the same attendance your staff can see. Payslips go out in Telegram." },
      { title: "Who is where, right now", body: "One screen shows who is in, who is late, who is on leave and who is on the road, across all your branches." },
    ],
    uz: [
      { title: "Qog'oz jadvalsiz davomat", body: "Xodimlar QR kod, barmoq izi terminali yoki joylashuv aniqlanadigan telefon orqali belgilanadi — obyektga qaysi biri qulay bo'lsa. Tabel odamlar kelishi bilan o'zi to'ladi." },
      { title: "Yagona xodim yozuvi", body: "Shartnoma, lavozim, oylik tarixi, hujjatlar, olingan ta'tillar va hayfsanlar birinchi kundan oxirgisigacha bitta kartada turadi." },
      { title: "Ta'til va sababli kelmaslik arizalari", body: "Xodim arizani Telegram'dan yuboradi, rahbari bir bosishda tasdiqlaydi va u darhol tabelga hamda oylik bazasiga tushadi. Hech qanday xabar yo'qolmaydi." },
      { title: "Smena va jadvallar", body: "Do'kon, restoran yoki ishlab chiqarish uchun jadval tuzing, kelasi hafta qayerda odam yetishmasligini ko'ring, xodimlarga rahbar ruxsati bilan smena almashish imkonini bering." },
      { title: "Haqiqiy ma'lumotdan oylik", body: "Oylik, soatbay va ishbay stavkalar, bonuslar, jarimalar va avanslar xodimlar o'zi ko'ra oladigan o'sha davomatdan hisoblanadi. Hisob varaqalari Telegram orqali yuboriladi." },
      { title: "Kim qayerda — hozir", body: "Bitta ekranda kim ishda, kim kechikkan, kim ta'tilda va kim yo'lda ekani barcha filiallar bo'yicha ko'rinadi." },
    ],
    ru: [
      { title: "Посещаемость без бумажного табеля", body: "Сотрудники отмечаются по QR-коду, через терминал по отпечатку или с телефона с определением места — как удобнее на объекте. Табель собирается сам, по мере прихода людей." },
      { title: "Одна карточка сотрудника", body: "Договор, должность, история зарплаты, документы, использованные отпуска и взыскания лежат в одной карточке, от первого дня до последнего." },
      { title: "Заявки на отпуск и отсутствие", body: "Сотрудник отправляет заявку из Telegram, руководитель согласовывает её одним касанием, и она сразу попадает в табель и в базу для расчёта. Ни одно сообщение не теряется." },
      { title: "Смены и графики", body: "Составляйте графики для магазинов, ресторанов или производства, смотрите, где на следующей неделе не хватает людей, и разрешайте обмен сменами с согласования руководителя." },
      { title: "Зарплата по реальным данным", body: "Оклад, почасовые и сдельные ставки, премии, штрафы и авансы считаются по той же посещаемости, которую видят сами сотрудники. Расчётные листы уходят в Telegram." },
      { title: "Кто где прямо сейчас", body: "Один экран показывает, кто на месте, кто опоздал, кто в отпуске и кто в разъездах — по всем филиалам." },
    ],
  },
  outcomes: {
    en: [
      "Payroll closed in hours, not in a week of checking",
      "One timesheet nobody argues with",
      "Leave requests approved and recorded in one step",
      "Staff who can see how their pay was worked out",
    ],
    uz: [
      "Oylik bir haftalik tekshiruv emas, bir necha soatda yopiladi",
      "Hech kim bahslashmaydigan yagona tabel",
      "Ta'til arizasi bir qadamda tasdiqlanadi va qayd etiladi",
      "Oyligi qanday hisoblanganini ko'ra oladigan xodimlar",
    ],
    ru: [
      "Зарплата закрывается за часы, а не за неделю сверок",
      "Один табель, с которым никто не спорит",
      "Заявка на отпуск согласуется и фиксируется в один шаг",
      "Сотрудники видят, из чего сложилась их зарплата",
    ],
  },
  faq: {
    en: [
      { q: "Payroll is in 1C and the timesheet is in Excel. Do we change everything?", a: "No. You can keep 1C for the accounting side and feed it a finished, checked timesheet instead of a hand-typed one. Employee cards, salary history and leave balances are migrated across so you start with what you already have." },
      { q: "Our staff are not office workers. How do they check in?", a: "However fits the site. A QR code by the door, a fingerprint terminal, or a tap in a Telegram bot with the location checked. For the employee it is one action; nothing to learn beyond that." },
      { q: "Can people send leave requests without a computer?", a: "Yes. The request, the approval and the payslip all work through Telegram on an ordinary phone. That is deliberate — most of your staff will never open the desktop system at all." },
      { q: "What happens after launch if something is wrong?", a: "I deploy the system, train your staff on site, and fix any bugs free for 30 days after launch. The scope, the price and the deadline are all in a signed contract, agreed before work begins." },
    ],
    uz: [
      { q: "Oylik 1C'da, tabel Excel'da. Hammasini o'zgartiramizmi?", a: "Yo'q. Buxgalteriya tomonida 1C qolishi mumkin — unga qo'lda terilgan emas, tayyor va tekshirilgan tabel tushadi. Xodim kartalari, oylik tarixi va ta'til qoldiqlari ko'chiriladi, ya'ni bor narsangiz bilan boshlaysiz." },
      { q: "Xodimlarimiz ofis xodimi emas. Ular qanday belgilanadi?", a: "Obyektga nima mos kelsa, shunday. Eshik yonidagi QR kod, barmoq izi terminali yoki joylashuvi tekshiriladigan Telegram botidagi bir bosish. Xodim uchun bu bitta harakat, undan boshqa hech narsa o'rganish shart emas." },
      { q: "Kompyutersiz ta'tilga ariza yuborsa bo'ladimi?", a: "Ha. Ariza ham, tasdiqlash ham, hisob varaqasi ham oddiy telefondagi Telegram orqali ishlaydi. Bu ataylab shunday: xodimlaringizning ko'pchiligi kompyuterdagi tizimni umuman ochmaydi." },
      { q: "Ishga tushgandan keyin nimadir noto'g'ri bo'lsa-chi?", a: "Tizimni men o'rnataman, xodimlaringizni joyida o'qitaman va ishga tushgandan keyin 30 kun davomida xatolarni bepul tuzataman. Hajm, narx va muddat ish boshlanishidan oldin imzolangan shartnomada yoziladi." },
    ],
    ru: [
      { q: "Зарплата в 1С, табель в Excel. Всё придётся менять?", a: "Нет. 1С можно оставить для бухгалтерии и передавать в неё готовый, выверенный табель вместо набранного вручную. Карточки сотрудников, история зарплаты и остатки отпусков переносятся, так что вы стартуете с тем, что уже есть." },
      { q: "Наши сотрудники не офисные. Как они будут отмечаться?", a: "Так, как удобнее на объекте. QR-код у входа, терминал по отпечатку пальца или касание в Telegram-боте с проверкой местоположения. Для сотрудника это одно действие, учить больше нечего." },
      { q: "Можно подавать заявление на отпуск без компьютера?", a: "Да. И заявка, и согласование, и расчётный лист работают через Telegram на обычном телефоне. Это сделано намеренно: большинство ваших сотрудников вообще не откроет десктопную систему." },
      { q: "Что будет после запуска, если что-то не так?", a: "Я разворачиваю систему, обучаю сотрудников на месте и 30 дней после запуска бесплатно исправляю ошибки. Объём, цена и срок зафиксированы в подписанном договоре, согласованном до начала работ." },
    ],
  },
};
