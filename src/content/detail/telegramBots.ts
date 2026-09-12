import type { DetailContent } from "../detail";

export const telegramBots: DetailContent = {
  lead: {
    en: "Take orders, requests and reports where your customers already are.",
    uz: "Buyurtma, ariza va hisobotlarni mijozlaringiz allaqachon bo'lgan joyda qabul qiling.",
    ru: "Принимайте заказы, заявки и отчёты там, где ваши клиенты уже есть.",
  },
  problem: {
    en: [
      "Almost everyone you sell to is already in Telegram every day, and almost nobody will install your app to place one order. That is the situation a bot solves. A Telegram bot is a chat account that answers and takes orders automatically; a Telegram Mini App goes further — it is a complete web application, with a catalogue, a basket and payment, that opens directly inside Telegram with no installation at all. For most businesses here, that is the shortest path between a customer and a confirmed order.",
      "Right now that traffic probably lands on a person. Customers write to your company chat asking about price, availability and delivery, and somebody answers the same five questions two hundred times a day, badly after six in the evening and not at all on Sunday. Orders come as free text — a voice message, a screenshot, half an address — and someone retypes them into Excel, losing one in twenty. Your staff side is the same: requests for leave, expenses and daily reports arrive as messages that nobody can later find.",
      "The cost is paid twice. You pay a manager to do work a bot does instantly, and you lose the customers who wrote at eleven at night, waited, and ordered from whoever replied first. Meanwhile nothing you learn from those conversations is recorded anywhere, so you cannot see what people ask for most or how many orders you missed.",
    ],
    uz: [
      "Siz sotadigan odamlarning deyarli hammasi har kuni Telegramda, va deyarli hech kim bitta buyurtma uchun ilovangizni o'rnatmaydi. Bot aynan shu holatni hal qiladi. Telegram bot — javob beradigan va buyurtmani avtomatik qabul qiladigan chat akkaunt; Telegram Mini App esa bundan ham ko'proq: bu katalogi, savati va to'lovi bor to'liq veb-ilova bo'lib, hech narsa o'rnatmasdan to'g'ridan-to'g'ri Telegram ichida ochiladi. Bizdagi ko'p biznes uchun bu mijoz bilan tasdiqlangan buyurtma orasidagi eng qisqa yo'l.",
      "Hozir bu oqim, ehtimol, odamga tushadi. Mijozlar kompaniya chatiga yozib, narx, mavjudlik va yetkazib berishni so'raydi, kimdir esa o'sha beshta savolga kuniga ikki yuz marta javob beradi — kechqurun soat oltidan keyin yomon, yakshanba kuni esa umuman yo'q. Buyurtmalar erkin matn bo'lib keladi: ovozli xabar, skrinshot, yarim manzil — va kimdir ularni Excel'ga qayta kiritib, yigirmatadan bittasini yo'qotadi. Xodimlar tomonida ham shu: ta'til, xarajat va kunlik hisobotlar keyin topib bo'lmaydigan xabarlar ko'rinishida keladi.",
      "Haqini ikki marta to'laysiz. Bot bir zumda bajaradigan ish uchun menejerga maosh berasiz va kechasi soat o'nu birda yozib, javob kutib, birinchi javob berganidan buyurtma qilgan mijozlarni yo'qotasiz. Shu bilan birga, o'sha suhbatlardan bilib olingan hech narsa hech qayerda saqlanmaydi: odamlar nimani ko'proq so'rashini ham, nechta buyurtma qo'ldan ketganini ham ko'rmaysiz.",
    ],
    ru: [
      "Почти все, кому вы продаёте, каждый день сидят в Telegram, и почти никто не поставит ваше приложение ради одного заказа. Именно эту ситуацию решает бот. Telegram-бот — это чат-аккаунт, который отвечает и принимает заказы автоматически, а Telegram Mini App идёт дальше: это полноценное веб-приложение с каталогом, корзиной и оплатой, которое открывается прямо внутри Telegram, без установки. Для большинства бизнесов здесь это самый короткий путь от клиента до подтверждённого заказа.",
      "Сейчас весь этот поток, скорее всего, падает на человека. Клиенты пишут в чат компании про цену, наличие и доставку, а кто-то двести раз в день отвечает на одни и те же пять вопросов — плохо после шести вечера и никак в воскресенье. Заказы приходят свободным текстом: голосовое, скриншот, половина адреса, — и кто-то перенабирает их в Excel, теряя один из двадцати. С сотрудниками то же самое: заявления на отпуск, расходы и ежедневные отчёты приходят сообщениями, которые потом невозможно найти.",
      "Платить приходится дважды. Вы платите менеджеру за работу, которую бот делает мгновенно, и теряете клиентов, которые написали в одиннадцать вечера, подождали и заказали у того, кто ответил первым. При этом ничего из этих переписок нигде не сохраняется, и вы не видите ни что спрашивают чаще всего, ни сколько заказов упустили.",
    ],
  },
  includes: {
    en: [
      { title: "Orders taken inside Telegram", body: "A catalogue with photos, prices and a basket that opens as a Mini App. The customer chooses, confirms the address and pays without leaving the chat." },
      { title: "Payment through Payme, Click and Uzum", body: "The customer pays in the bot and you see the order already marked paid. Card payment and cash on delivery can run side by side." },
      { title: "Answers to the questions you repeat", body: "Working hours, addresses, prices, delivery terms and order status answered instantly, at three in the morning and on public holidays, in Uzbek or Russian." },
      { title: "A bot for your staff", body: "Leave requests, expense claims, daily reports and approvals submitted in Telegram and routed to the right manager, with a record you can search later." },
      { title: "Notifications that go out by themselves", body: "New order to the manager, courier assigned to the customer, low stock to the warehouse, yesterday's takings to you each morning." },
      { title: "Connected to your systems", body: "The bot reads live stock and writes orders straight into your CRM, ERP or 1C, so nobody retypes anything and the numbers stay the same everywhere." },
    ],
    uz: [
      { title: "Telegram ichida buyurtma qabul qilish", body: "Rasm, narx va savati bor katalog Mini App bo'lib ochiladi. Mijoz tanlaydi, manzilni tasdiqlaydi va chatdan chiqmasdan to'laydi." },
      { title: "Payme, Click va Uzum orqali to'lov", body: "Mijoz botda to'laydi, siz esa buyurtmani allaqachon to'langan holatda ko'rasiz. Karta orqali to'lov va yetkazib berishda naqd to'lov birga ishlashi mumkin." },
      { title: "Qaytariladigan savollarga javob", body: "Ish vaqti, manzillar, narxlar, yetkazib berish shartlari va buyurtma holati bir zumda javob oladi — kechasi soat uchda ham, bayram kunlari ham, o'zbekcha yoki ruscha." },
      { title: "Xodimlar uchun bot", body: "Ta'til arizasi, xarajat hisoboti, kunlik hisobotlar va tasdiqlashlar Telegramda topshiriladi va kerakli rahbarga yo'naltiriladi, keyin qidirib topish mumkin bo'lgan yozuv bilan." },
      { title: "O'zi yuboriladigan bildirishnomalar", body: "Yangi buyurtma — menejerga, biriktirilgan kuryer — mijozga, qoldiq kamayishi — omborga, kechagi tushum esa har kuni ertalab sizga." },
      { title: "Tizimlaringizga ulangan", body: "Bot jonli qoldiqni o'qiydi va buyurtmani to'g'ridan-to'g'ri CRM, ERP yoki 1C'ga yozadi. Hech kim qayta kiritmaydi va raqamlar hamma joyda bir xil qoladi." },
    ],
    ru: [
      { title: "Заказы прямо в Telegram", body: "Каталог с фотографиями, ценами и корзиной открывается как Mini App. Клиент выбирает, подтверждает адрес и оплачивает, не выходя из чата." },
      { title: "Оплата через Payme, Click и Uzum", body: "Клиент платит в боте, а вы видите заказ уже оплаченным. Оплата картой и наличные при доставке могут работать одновременно." },
      { title: "Ответы на повторяющиеся вопросы", body: "Часы работы, адреса, цены, условия доставки и статус заказа отвечаются мгновенно — и в три часа ночи, и в праздники, на узбекском или русском." },
      { title: "Бот для сотрудников", body: "Заявления на отпуск, расходы, ежедневные отчёты и согласования подаются в Telegram и уходят нужному руководителю, оставляя запись, которую потом можно найти." },
      { title: "Уведомления, которые уходят сами", body: "Новый заказ — менеджеру, назначенный курьер — клиенту, низкий остаток — складу, вчерашняя выручка — вам каждое утро." },
      { title: "Связь с вашими системами", body: "Бот читает актуальные остатки и записывает заказы прямо в вашу CRM, ERP или 1С, поэтому никто ничего не перенабирает и цифры везде совпадают." },
    ],
  },
  outcomes: {
    en: [
      "Orders accepted around the clock",
      "Routine questions off your managers' hands",
      "Every order recorded, none retyped",
      "Customers served without installing anything",
    ],
    uz: [
      "Buyurtmalar kechayu kunduz qabul qilinadi",
      "Takroriy savollar menejerlar yelkasidan olinadi",
      "Har bir buyurtma yozib boriladi, hech biri qayta kiritilmaydi",
      "Mijoz hech narsa o'rnatmasdan xizmat oladi",
    ],
    ru: [
      "Заказы принимаются круглосуточно",
      "Типовые вопросы сняты с менеджеров",
      "Каждый заказ зафиксирован, ни один не перенабирается",
      "Клиента обслуживают без установки приложений",
    ],
  },
  faq: {
    en: [
      { q: "Is a bot enough, or do we still need an app?", a: "For most businesses here a bot with a Mini App is enough, and it is cheaper and faster to launch. Your customer already has Telegram, so there is nothing to download and nothing to approve in the app stores. A separate app makes sense when you need the phone's hardware or offline work — I will tell you honestly which side your case falls on." },
      { q: "Are there limits to what Telegram allows?", a: "Yes, and they are worth knowing before you plan. Telegram limits how fast messages can be sent, so a mass broadcast to a large audience goes out over minutes rather than instantly. A bot can only write to people who started the chat first — it cannot message strangers. Within those rules, orders, payments and notifications all work normally." },
      { q: "Can customers pay in the bot?", a: "Yes. Payme, Click and Uzum are the usual choices here, and payment happens inside Telegram. You will need a merchant account with the provider; I set up the technical side and tell you exactly which documents they ask for." },
      { q: "What does it cost to run each month?", a: "A modest server, and that is essentially it — Telegram charges nothing for bots. The payment providers take their own percentage of each transaction, which you agree directly with them. After launch you get 30 days of free bug fixes, and your own staff manage the content through an admin panel." },
    ],
    uz: [
      { q: "Bot yetarlimi yoki baribir ilova kerakmi?", a: "Bizdagi ko'p biznes uchun Mini App'li bot yetarli, ustiga u arzonroq va tezroq ishga tushadi. Mijozingizda Telegram allaqachon bor: yuklab olishga ham, ilova do'konlarida tasdiqlashga ham hojat yo'q. Alohida ilova telefon qurilmalari yoki oflayn ish kerak bo'lganda ma'noga ega. Sizning holatingiz qaysi tomonga tushishini ochiq aytaman." },
      { q: "Telegramning cheklovlari bormi?", a: "Ha, va rejalashtirishdan oldin ularni bilgan ma'qul. Telegram xabarlarni yuborish tezligini cheklaydi, shuning uchun katta auditoriyaga ommaviy tarqatma bir zumda emas, bir necha daqiqada yetib boradi. Bot faqat o'zi birinchi yozgan odamga javob yoza oladi — notanish odamga xabar yubora olmaydi. Shu qoidalar doirasida buyurtma, to'lov va bildirishnomalar normal ishlaydi." },
      { q: "Mijozlar botda to'lay oladimi?", a: "Ha. Bizda odatda Payme, Click va Uzum tanlanadi va to'lov Telegram ichida amalga oshadi. Provayder bilan merchant hisobi ochishingiz kerak bo'ladi; men texnik tomonini sozlayman va ular qanday hujjat so'rashini aniq aytaman." },
      { q: "Oyiga ushlab turish qancha turadi?", a: "Kichik server — asosan shu, chunki Telegram botlar uchun pul olmaydi. To'lov provayderlari har bir tranzaksiyadan o'z foizini oladi, buni ular bilan to'g'ridan-to'g'ri kelishasiz. Ishga tushgandan keyin 30 kun bepul xatolarni tuzatish beriladi, kontentni esa xodimlaringiz admin panel orqali o'zlari boshqaradi." },
    ],
    ru: [
      { q: "Бота достаточно или всё равно нужно приложение?", a: "Для большинства бизнесов здесь бота с Mini App достаточно, и запускается он дешевле и быстрее. У вашего клиента Telegram уже есть: ничего не нужно скачивать и ничего не нужно проходить в магазинах приложений. Отдельное приложение оправдано, когда нужны возможности телефона или работа офлайн. Я честно скажу, к какому случаю относится ваш." },
      { q: "Есть ли у Telegram ограничения?", a: "Да, и их стоит знать до планирования. Telegram ограничивает скорость отправки сообщений, поэтому массовая рассылка по большой базе уходит минутами, а не мгновенно. Бот может писать только тем, кто начал диалог первым, — незнакомому человеку он написать не может. В рамках этих правил заказы, оплаты и уведомления работают нормально." },
      { q: "Смогут ли клиенты платить в боте?", a: "Да. Обычно здесь выбирают Payme, Click и Uzum, и оплата проходит внутри Telegram. Вам понадобится счёт мерчанта у провайдера; техническую часть настраиваю я и заранее говорю, какие документы они запросят." },
      { q: "Сколько стоит содержание в месяц?", a: "Небольшой сервер — по сути всё, потому что за ботов Telegram денег не берёт. Платёжные провайдеры удерживают свой процент с каждой операции, и это вы согласуете напрямую с ними. После запуска даётся 30 дней бесплатного исправления ошибок, а контентом ваши сотрудники управляют через админку." },
    ],
  },
};
