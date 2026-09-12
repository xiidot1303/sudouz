import type { DetailContent } from "../detail";

export const accounting: DetailContent = {
  lead: {
    en: "Close the month from the work your team already did, not by typing it again.",
    uz: "Oyni jamoangiz allaqachon bajargan ishdan yoping — raqamlarni qaytadan terib emas.",
    ru: "Закрывайте месяц по работе, которую команда уже сделала, а не перенабирая её заново.",
  },
  problem: {
    en: [
      "Your accountant is not slow. Your accountant is being asked to be a data entry clerk. The sale happened in one place, the invoice was written in another, the payment landed in the bank and the delivery note is in a folder on a shelf — and the only thing joining them is a person re-keying numbers.",
      "So the month closes late, every month. Your accountant asks the sales manager for a list, the sales manager asks the warehouse, somebody finds two versions of the same invoice, and the receivables report you asked for on Tuesday arrives on Friday describing last month. Meanwhile you decide about a payment, a purchase or a loan using a figure you know is at least a week old.",
      "That delay is expensive in ways that never appear as a line item. You pay a supplier early while a client's overdue debt goes unchased. You cannot say which product or branch actually earns money, so you cut the wrong cost. And every hand-copied number is a chance for the error you will find during an inspection rather than before it.",
    ],
    uz: [
      "Buxgalteringiz sekin emas. Undan ma'lumot kirituvchi bo'lish talab qilinmoqda. Sotuv bir joyda bo'ldi, hisob-faktura boshqa joyda yozildi, to'lov bankka tushdi, yuk xati esa javondagi papkada — ularni bog'lab turgan yagona narsa raqamlarni qayta terayotgan odam.",
      "Shuning uchun oy har safar kech yopiladi. Buxgalter savdo menejeridan ro'yxat so'raydi, menejer ombordan so'raydi, kimdir bitta hisob-fakturaning ikki nusxasini topadi, siz seshanbada so'ragan debitorlik hisoboti esa jumada, o'tgan oyni tasvirlab keladi. Shu orada siz to'lov, xarid yoki kredit haqidagi qarorni kamida bir haftalik eskirgan raqam bo'yicha qabul qilasiz.",
      "Bu kechikishning narxi hech qayerda alohida satr bo'lib chiqmaydi. Siz yetkazib beruvchiga muddatidan oldin to'laysiz, mijozning muddati o'tgan qarzi esa undirilmay qoladi. Qaysi mahsulot yoki filial haqiqatan pul ishlab berayotganini ayta olmaysiz va noto'g'ri xarajatni qisqartirasiz. Har bir qo'lda ko'chirilgan raqam esa — siz uni tekshiruvdan oldin emas, tekshiruv paytida topadigan xatoga imkoniyat.",
    ],
    ru: [
      "Ваш бухгалтер не медлительный. Вашего бухгалтера заставляют работать оператором ввода. Продажа прошла в одном месте, счёт выписан в другом, платёж пришёл в банк, а накладная лежит в папке на полке — и связывает всё это только человек, перебивающий цифры руками.",
      "Поэтому месяц закрывается поздно, и так каждый месяц. Бухгалтер просит список у отдела продаж, продажи — у склада, кто-то находит две версии одного счёта, а отчёт по дебиторке, который вы просили во вторник, приходит в пятницу и описывает прошлый месяц. И всё это время вы принимаете решения о платеже, закупке или кредите по цифре, которой как минимум неделя.",
      "Эта задержка стоит дорого, но нигде не выглядит как отдельная статья. Вы платите поставщику раньше срока, пока просроченный долг клиента никто не требует. Вы не можете сказать, какой товар или филиал действительно зарабатывает, и сокращаете не тот расход. А каждая переписанная вручную цифра — это шанс на ошибку, которую вы найдёте во время проверки, а не до неё.",
    ],
  },
  includes: {
    en: [
      { title: "Documents created where the work happens", body: "An invoice, delivery note or act is produced from the order itself, once, by the person who made the sale. Your accountant checks instead of typing." },
      { title: "Receivables you can act on", body: "Debt by client with ageing, who promised to pay when, and an automatic reminder to the client and the manager before the date, not a month after it." },
      { title: "Cash and bank in one place", body: "Every till, card terminal, bank account and Payme or Click receipt is reflected in one cash position, so you know what you actually have today." },
      { title: "Costs and profit by segment", body: "Expenses allocated to branch, product group or project, so profit is shown where it is earned rather than as one number for the whole company." },
      { title: "Supplier payables and schedule", body: "What you owe, to whom and by when, with the payment calendar next to your expected receipts so you stop paying early and borrowing late." },
      { title: "Exchange with 1C and the bank", body: "Documents flow to 1C for the statutory side and bank statements are imported back, so the same payment is entered once and only once." },
    ],
    uz: [
      { title: "Hujjat ish bo'layotgan joyda yaratiladi", body: "Hisob-faktura, yuk xati yoki dalolatnoma buyurtmaning o'zidan, bir marta va sotuvni amalga oshirgan xodim tomonidan chiqariladi. Buxgalter terib o'tirmaydi, tekshiradi." },
      { title: "Ish qilsa bo'ladigan debitorlik", body: "Mijozlar bo'yicha qarz muddatlari bilan, kim qachon to'lashni va'da qilgani va sana o'tgandan bir oy keyin emas, undan oldin mijozga hamda menejerga boradigan avtomatik eslatma." },
      { title: "Kassa va bank bitta joyda", body: "Har bir kassa, to'lov terminali, bank hisobvarag'i, Payme va Click tushumi yagona kassa holatida aks etadi — bugun qo'lingizda aslida nima borligini bilasiz." },
      { title: "Yo'nalishlar bo'yicha xarajat va foyda", body: "Xarajatlar filial, mahsulot guruhi yoki loyihaga taqsimlanadi, shuning uchun foyda butun kompaniya uchun bitta raqam emas, ishlab topilgan joyi bo'yicha ko'rinadi." },
      { title: "Yetkazib beruvchilarga qarz va jadval", body: "Kimga, qancha va qachongacha qarzdorsiz — to'lov kalendari kutilayotgan tushumlar yonida turadi, shunda erta to'lab, kech qarz olishni bas qilasiz." },
      { title: "1C va bank bilan almashuv", body: "Hujjatlar rasmiy hisob uchun 1C'ga o'tadi, bank ko'chirmalari esa qaytib yuklanadi. Natijada bitta to'lov faqat bir marta kiritiladi." },
    ],
    ru: [
      { title: "Документы создаются там, где идёт работа", body: "Счёт, накладная или акт формируются из самого заказа, один раз и тем, кто сделал продажу. Бухгалтер проверяет, а не набирает." },
      { title: "Дебиторка, с которой можно работать", body: "Долг по клиентам со сроками, кто и когда обещал заплатить, и автоматическое напоминание клиенту и менеджеру до даты, а не через месяц после неё." },
      { title: "Касса и банк в одном месте", body: "Каждая касса, платёжный терминал, банковский счёт и поступление через Payme или Click отражаются в одном остатке денег — вы знаете, что у вас есть сегодня." },
      { title: "Затраты и прибыль по направлениям", body: "Расходы распределяются на филиал, товарную группу или проект, поэтому прибыль видна там, где она заработана, а не одной цифрой по всей компании." },
      { title: "Долги поставщикам и график", body: "Кому, сколько и к какому сроку вы должны, а платёжный календарь стоит рядом с ожидаемыми поступлениями, чтобы вы перестали платить рано и занимать поздно." },
      { title: "Обмен с 1С и банком", body: "Документы уходят в 1С для регламентированного учёта, а банковские выписки загружаются обратно, так что один платёж вводится ровно один раз." },
    ],
  },
  outcomes: {
    en: [
      "The month closed in days, not weeks",
      "Today's cash position, not last week's",
      "Overdue debt chased before it ages",
      "Profit visible by branch and product group",
    ],
    uz: [
      "Oy haftalar emas, kunlarda yopiladi",
      "O'tgan haftaning emas, bugungi kassa holati",
      "Muddati o'tgan qarz eskirmasdan oldin undiriladi",
      "Filial va mahsulot guruhi bo'yicha ko'rinadigan foyda",
    ],
    ru: [
      "Месяц закрывается за дни, а не за недели",
      "Остаток денег на сегодня, а не на прошлую неделю",
      "Просроченный долг требуют, пока он не состарился",
      "Прибыль видна по филиалам и товарным группам",
    ],
  },
  faq: {
    en: [
      { q: "Does this replace 1C and our accountant?", a: "No to both. Your accountant keeps the statutory accounting, and 1C can stay for reporting and tax. What changes is that documents and payments arrive there already formed and checked, instead of being typed in a second time." },
      { q: "We work with Payme and Click. Do those payments come in automatically?", a: "Yes. Payments through Payme, Click and Uzum, along with bank statements, are matched to the invoice and the client automatically, and anything that does not match is put in front of your accountant rather than silently guessed." },
      { q: "What about Asl Belgisi labelling?", a: "If your goods fall under mandatory labelling, codes are handled where they are actually created — at receiving and at sale — and the required data goes out from the same system. Which goods are affected in your case we check before the contract is signed." },
      { q: "How do we know the price will not grow halfway through?", a: "Because the price is fixed in a signed contract before work starts. I take the time to understand your document flow first, precisely so the figure I give you is one I can hold to. If you later ask for something outside that scope, you see the cost before I build it." },
    ],
    uz: [
      { q: "Bu 1C va buxgalterimiz o'rnini bosadimi?", a: "Ikkalasiga ham yo'q. Rasmiy hisobni buxgalteringiz yuritadi, 1C esa hisobot va soliq uchun qolishi mumkin. O'zgaradigan narsa shu: hujjat va to'lovlar u yerga qayta terilgan holda emas, allaqachon shakllangan va tekshirilgan holda tushadi." },
      { q: "Biz Payme va Click bilan ishlaymiz. Bu to'lovlar avtomatik tushadimi?", a: "Ha. Payme, Click va Uzum orqali to'lovlar hamda bank ko'chirmalari hisob-faktura va mijozga avtomatik biriktiriladi. Mos kelmagani esa jimgina taxmin qilinmaydi, buxgalteringiz ko'rigiga chiqariladi." },
      { q: "Asl Belgisi markalash-chi?", a: "Tovaringiz majburiy markalashga tushsa, kodlar ular haqiqatda paydo bo'ladigan joyda — qabul va sotuv paytida — yuritiladi, talab qilinadigan ma'lumot esa shu tizimdan yuboriladi. Sizning holatingizda qaysi tovarlar tushishini shartnoma imzolanishidan oldin aniqlaymiz." },
      { q: "Narx ish o'rtasida oshib ketmasligiga qanday ishonamiz?", a: "Chunki narx ish boshlanishidan oldin imzolangan shartnomada qat'iy belgilanadi. Men avval hujjat aylanishingizni o'rganib chiqaman — aynan aytgan raqamimda tura olishim uchun. Keyinroq kelishuvdan tashqari nimadir so'rasangiz, uning narxini men ishni boshlashimdan oldin ko'rasiz." },
    ],
    ru: [
      { q: "Это заменит 1С и нашего бухгалтера?", a: "Нет ни то, ни другое. Регламентированный учёт остаётся за бухгалтером, а 1С может остаться для отчётности и налогов. Меняется то, что документы и платежи попадают туда уже сформированными и выверенными, а не набираются второй раз." },
      { q: "Мы работаем с Payme и Click. Эти платежи будут приходить автоматически?", a: "Да. Платежи через Payme, Click и Uzum, а также банковские выписки автоматически сопоставляются со счётом и клиентом. То, что не сошлось, не угадывается втихую, а выносится бухгалтеру на проверку." },
      { q: "А маркировка Asl Belgisi?", a: "Если ваш товар подпадает под обязательную маркировку, коды ведутся там, где они реально появляются — на приёмке и на продаже, — а нужные данные уходят из той же системы. Какие именно товары это затрагивает в вашем случае, мы выясняем до подписания договора." },
      { q: "Как мы поймём, что цена не вырастет посреди работы?", a: "Потому что цена фиксируется в подписанном договоре до начала работ. Я сначала разбираюсь в вашем документообороте — именно для того, чтобы названная цифра была той, за которую я могу отвечать. Если позже вы попросите что-то вне согласованного объёма, стоимость вы увидите до того, как я это сделаю." },
    ],
  },
};
