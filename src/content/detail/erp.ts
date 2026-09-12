import type { DetailContent } from "../detail";

export const erp: DetailContent = {
  lead: {
    en: "One system where stock, purchasing, production and money finally agree.",
    uz: "Ombor, xarid, ishlab chiqarish va pul nihoyat bir-biriga mos keladigan yagona tizim.",
    ru: "Одна система, в которой склад, закупки, производство и деньги наконец сходятся.",
  },
  problem: {
    en: [
      "You reach this point when your business outgrows the tools it started with. You have a warehouse, a sales team, suppliers and maybe a production line, and each of them keeps its own records — 1C for the accountant, Excel for the purchasing manager, a Telegram chat for the shop floor. An ERP is simply one system where all of that lives together, so a sale reduces stock, stock triggers a purchase, and the purchase shows up in your costs without anyone retyping it.",
      "Without that, every question you ask has to be assembled by hand. You want last month's real margin, so someone exports three files and spends a day matching them. By the time you get the answer it is a guess, and two of your managers will disagree with it. Buying a heavy foreign ERP does not fix this either — it usually adds a system nobody fills in properly, so your staff quietly go back to their spreadsheets.",
      "The cost is decisions made late and made blind. You overbuy raw material because nobody could see what was already in the yard. You price a job on last year's costs. You find out about a shortage from an angry customer rather than from your own numbers. None of that shows up as a line in your accounts, but it is the most expensive thing in the business.",
    ],
    uz: [
      "Biznesingiz boshlangan paytdagi vositalardan o'sib chiqqanda shu holatga kelasiz. Sizda ombor, savdo bo'limi, yetkazib beruvchilar, balki ishlab chiqarish bor va har biri o'z hisobini yuritadi: buxgalter uchun 1C, xarid menejeri uchun Excel, sex uchun Telegram guruhi. ERP — bularning barchasi bitta joyda yashaydigan tizim: sotuv qoldiqni kamaytiradi, qoldiq xaridni ishga tushiradi, xarid esa hech kim qayta kiritmasdan tannarxingizda ko'rinadi.",
      "Aks holda har bir savolingizga javobni qo'lda yig'ish kerak. O'tgan oyning haqiqiy foydasini bilmoqchisiz — kimdir uchta faylni eksport qiladi va bir kunni ularni solishtirishga sarflaydi. Javob kelganda u allaqachon taxmin bo'ladi va ikki menejeringiz u bilan rozi bo'lmaydi. Og'ir chet el ERP'sini sotib olish ham buni hal qilmaydi: odatda hech kim to'g'ri to'ldirmaydigan yana bir tizim qo'shiladi va xodimlaringiz jimgina jadvallariga qaytadi.",
      "Zarar — kech va ko'r-ko'rona qabul qilingan qarorlarda. Hovlida nima borligini hech kim ko'rmagani uchun ortiqcha xom ashyo olasiz. Buyurtmani o'tgan yilgi tannarx bo'yicha narxlaysiz. Tovar yetishmasligini o'z raqamlaringizdan emas, jahli chiqqan mijozdan bilib olasiz. Bularning hech biri hisobotda alohida satr bo'lib chiqmaydi, lekin biznesdagi eng qimmat narsa shu.",
    ],
    ru: [
      "К этому вы приходите, когда бизнес перерастает инструменты, с которых начинал. У вас есть склад, отдел продаж, поставщики, возможно производство — и каждый ведёт свой учёт: 1С у бухгалтера, Excel у снабженца, чат в Telegram у цеха. ERP — это просто одна система, где всё это живёт вместе: продажа уменьшает остаток, остаток запускает закупку, а закупка попадает в себестоимость без ручного перенабора.",
      "Иначе ответ на любой ваш вопрос приходится собирать руками. Вы хотите увидеть реальную маржу за прошлый месяц — кто-то выгружает три файла и тратит день на их сведение. К моменту, когда ответ готов, это уже догадка, и двое ваших руководителей с ней не согласятся. Покупка тяжёлой зарубежной ERP тоже не спасает: обычно появляется ещё одна система, которую никто толком не заполняет, и сотрудники тихо возвращаются в свои таблицы.",
      "Цена — решения, принятые поздно и вслепую. Вы закупаете лишнее сырьё, потому что никто не видел, что уже лежит во дворе. Вы считаете заказ по прошлогодней себестоимости. О нехватке товара вы узнаёте от рассерженного клиента, а не из собственных цифр. Ничего из этого не отражается отдельной строкой в отчётности, но именно это обходится бизнесу дороже всего.",
    ],
  },
  includes: {
    en: [
      { title: "Stock across every warehouse and shop", body: "Balances update as goods are received, moved, sold and written off. One figure your warehouse, your sales team and your accountant all read from." },
      { title: "Purchasing and supplier control", body: "Requests, orders, deliveries and debts to each supplier in one place. You see what was ordered, what arrived and what you still owe." },
      { title: "Production and real cost price", body: "Recipes or specifications for what you make, material written off as it is used, and a cost per unit that includes materials, labour and overhead." },
      { title: "Sales, invoices and receivables", body: "Orders through to shipment and payment, with an ageing list of who owes you money and for how long." },
      { title: "Roles and access rights", body: "Each person sees only what their job needs. A storekeeper does not see margins, a sales manager does not see supplier prices, and every change is logged with a name against it." },
      { title: "Reports for the director", body: "Turnover, margin by product and customer, cash position and dead stock — built from the data your staff enter daily, not from a separate monthly exercise." },
    ],
    uz: [
      { title: "Barcha ombor va do'konlar bo'yicha qoldiq", body: "Tovar qabul qilinganda, ko'chirilganda, sotilganda va hisobdan chiqarilganda qoldiq yangilanadi. Ombor, savdo bo'limi va buxgalteringiz bir xil raqamni ko'radi." },
      { title: "Xarid va yetkazib beruvchilar nazorati", body: "Arizalar, buyurtmalar, yetkazib berishlar va har bir yetkazib beruvchiga qarz — bitta joyda. Nima buyurtma qilinganini, nima kelganini va qancha qarzingiz qolganini ko'rasiz." },
      { title: "Ishlab chiqarish va haqiqiy tannarx", body: "Mahsulotingiz uchun retsept yoki spetsifikatsiya, sarflanganda material hisobdan chiqishi va material, ish haqi hamda ustama xarajatni o'z ichiga olgan birlik tannarxi." },
      { title: "Savdo, hisob-fakturalar va debitorlik", body: "Buyurtmadan jo'natish va to'lovgacha, hamda kim, qancha va qancha vaqtdan beri qarzdor ekanini ko'rsatuvchi ro'yxat." },
      { title: "Rollar va kirish huquqlari", body: "Har kim faqat o'z ishiga kerakli narsani ko'radi. Omborchi foydani, savdo menejeri yetkazib beruvchi narxini ko'rmaydi va har bir o'zgarish kim tomonidan qilingani yozib boriladi." },
      { title: "Rahbar uchun hisobotlar", body: "Aylanma, mahsulot va mijoz bo'yicha foyda, pul holati va harakatsiz tovar — alohida oylik yig'ishdan emas, xodimlar har kuni kiritadigan ma'lumotdan." },
    ],
    ru: [
      { title: "Остатки по всем складам и магазинам", body: "Остаток меняется при поступлении, перемещении, продаже и списании. Одна цифра, которую видят и склад, и продажи, и бухгалтер." },
      { title: "Закупки и контроль поставщиков", body: "Заявки, заказы, поставки и долги перед каждым поставщиком в одном месте. Вы видите, что заказано, что пришло и сколько ещё должны." },
      { title: "Производство и реальная себестоимость", body: "Рецептуры или спецификации на то, что вы выпускаете, списание материала по мере расхода и себестоимость единицы с материалами, оплатой труда и накладными." },
      { title: "Продажи, счета и дебиторка", body: "Путь от заказа до отгрузки и оплаты, плюс список должников с суммами и сроками просрочки." },
      { title: "Роли и права доступа", body: "Каждый видит только то, что нужно для его работы. Кладовщик не видит маржу, менеджер по продажам не видит закупочные цены, и каждое изменение фиксируется с именем автора." },
      { title: "Отчёты для руководителя", body: "Оборот, маржа по товарам и клиентам, состояние денег и неликвид — из данных, которые сотрудники вносят ежедневно, а не из отдельного месячного сведения." },
    ],
  },
  outcomes: {
    en: [
      "One set of numbers for every department",
      "Cost price you can price from with confidence",
      "Purchasing driven by real stock, not by memory",
      "Month-end figures on the first working day",
    ],
    uz: [
      "Barcha bo'limlar uchun yagona raqamlar",
      "Ishonch bilan narx qo'yish mumkin bo'lgan tannarx",
      "Xotira emas, haqiqiy qoldiqqa asoslangan xarid",
      "Oy yakunidagi raqamlar birinchi ish kunida",
    ],
    ru: [
      "Одни цифры для всех отделов",
      "Себестоимость, от которой можно уверенно считать цену",
      "Закупки по реальным остаткам, а не по памяти",
      "Итоги месяца в первый рабочий день",
    ],
  },
  faq: {
    en: [
      { q: "We use 1C for accounting. Do we have to give it up?", a: "No. Most companies keep 1C for accounting and tax reporting, and the ERP handles the operational side — stock, purchasing, production, sales. The two exchange data, so your accountant carries on working the way they do now." },
      { q: "How long before we can actually use it?", a: "It depends on how many of your processes go in and how much history is migrated. I usually start with the part that hurts most — often stock or purchasing — so you are working in the system within weeks rather than waiting for everything at once. You get a written timeline and a fixed price before any work starts." },
      { q: "Our staff resist new systems. What happens then?", a: "That is the usual reason ERP projects fail, so the screens are built around what your people already do rather than a foreign template. Deployment and on-site training of your staff are included, and I stay reachable afterwards while everyone settles in." },
      { q: "Where is our data kept, and is it ours?", a: "Your data is yours. It can sit on a server inside your office or with a hosting provider you choose, in Uzbekistan or abroad, and you can export it at any time. Nothing is locked behind a monthly subscription you cannot leave." },
    ],
    uz: [
      { q: "Buxgalteriyada 1C ishlatamiz. Undan voz kechish kerakmi?", a: "Yo'q. Ko'pchilik 1C'ni buxgalteriya va soliq hisoboti uchun qoldiradi, ERP esa operativ tomonni oladi: ombor, xarid, ishlab chiqarish, savdo. Ikkalasi ma'lumot almashadi, shuning uchun buxgalteringiz hozirgidek ishlashda davom etadi." },
      { q: "Qachondan boshlab haqiqatan foydalana olamiz?", a: "Nechta jarayon kiritilishiga va qancha tarix ko'chirilishiga bog'liq. Odatda eng og'riyotgan qismdan boshlayman — ko'pincha ombor yoki xarid — shunda hammasini kutmasdan, bir necha hafta ichida tizimda ishlaysiz. Ish boshlanishidan oldin yozma muddat va qat'iy narx olasiz." },
      { q: "Xodimlarimiz yangi tizimga qarshi turadi. Nima bo'ladi?", a: "ERP loyihalari aynan shu sababdan muvaffaqiyatsizlikka uchraydi, shuning uchun ekranlar chet el shablonidan emas, xodimlaringiz allaqachon qiladigan ishdan kelib chiqib quriladi. Joriy etish va xodimlarni joyida o'qitish narxga kiradi, keyin ham hamma ko'nikib olguncha aloqada bo'laman." },
      { q: "Ma'lumotlarimiz qayerda saqlanadi va u bizniki bo'ladimi?", a: "Ma'lumot sizniki. U ofisingizdagi serverda yoki o'zingiz tanlagan hosting provayderda — O'zbekistonda yoki chet elda — turishi mumkin va uni istalgan vaqtda eksport qilasiz. Hech narsa chiqib bo'lmaydigan oylik obunaga bog'lab qo'yilmaydi." },
    ],
    ru: [
      { q: "У нас бухгалтерия в 1С. Придётся от неё отказаться?", a: "Нет. Большинство компаний оставляют 1С для бухгалтерии и налоговой отчётности, а ERP берёт на себя операционную часть — склад, закупки, производство, продажи. Системы обмениваются данными, и ваш бухгалтер продолжает работать как привык." },
      { q: "Через сколько мы сможем реально в ней работать?", a: "Зависит от того, сколько процессов входит в проект и сколько истории переносится. Обычно я начинаю с самого болезненного участка — чаще это склад или закупки, — чтобы вы работали в системе через недели, а не ждали всё сразу. Письменный срок и фиксированную цену вы получаете до начала работ." },
      { q: "Наши сотрудники сопротивляются новым системам. Что тогда?", a: "Именно из-за этого чаще всего проваливаются ERP-проекты, поэтому экраны строятся вокруг того, что ваши люди уже делают, а не вокруг зарубежного шаблона. Внедрение и обучение сотрудников на месте входят в проект, а после запуска я остаюсь на связи, пока все привыкают." },
      { q: "Где хранятся наши данные и наши ли они?", a: "Данные ваши. Они могут лежать на сервере в вашем офисе или у выбранного вами хостинга — в Узбекистане или за рубежом, — и выгрузить их можно в любой момент. Ничего не заперто в подписке, из которой нельзя уйти." },
    ],
  },
};
