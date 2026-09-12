import type { DetailContent } from "../detail";

export const ai: DetailContent = {
  lead: {
    en: "AI applied to the four jobs where it actually pays for itself.",
    uz: "AI'ni o'zini haqiqatan oqlaydigan to'rtta ishga qo'llash.",
    ru: "ИИ там, где он действительно окупается, — на четырёх задачах.",
  },
  problem: {
    en: [
      "You start thinking about AI when the same routine work keeps eating your people's time. Your support staff answer the same questions all day. Someone retypes supplier invoices into 1C line by line. Your purchasing manager guesses next month's order from last month's figures. And nobody can find that one contract clause without opening thirty files. These are the jobs where AI earns its keep — routine answers, reading documents, forecasting demand, and searching across everything your company already knows.",
      "What usually goes wrong is buying the idea rather than the job. A chatbot gets bolted onto a website with no access to your prices or stock, so it answers politely and wrongly, and customers trust it less than a slow human. Or a demo works beautifully on five clean invoices and falls apart on the crumpled scan your supplier actually sends. The technology was not the problem; it was pointed at the wrong task, with no connection to your real data and no one checking the output.",
      "Both mistakes cost you the same way. You pay for something your staff quietly stop using, and you become more sceptical about the whole idea — while the routine work you wanted to remove is still being done by hand. Meanwhile the tasks that would genuinely have paid back in a few months sit untouched, because the first attempt burned the budget and the goodwill.",
    ],
    uz: [
      "Bir xil takroriy ish xodimlaringizning vaqtini yeyaverganda AI haqida o'ylay boshlaysiz. Qo'llab-quvvatlash xodimlari kun bo'yi bir xil savollarga javob beradi. Kimdir yetkazib beruvchi hisob-fakturalarini 1C'ga satrma-satr kiritadi. Xarid menejeringiz keyingi oy buyurtmasini o'tgan oy raqamlaridan taxmin qiladi. Shartnomadagi bitta bandni esa o'ttizta faylni ochmasdan hech kim topa olmaydi. AI aynan shu ishlarda o'zini oqlaydi: takroriy javoblar, hujjatlarni o'qish, talabni bashorat qilish va kompaniyangiz allaqachon bilgan hamma narsa bo'yicha qidiruv.",
      "Odatdagi xato — ishni emas, g'oyani sotib olish. Saytga chatbot ulanadi, lekin uning narx va qoldiqqa kirishi yo'q: u odob bilan, lekin noto'g'ri javob beradi va mijozlar unga sekin ishlaydigan odamdan ham kamroq ishonadi. Yoki demo beshta toza hisob-fakturada ajoyib ishlaydi, yetkazib beruvchi haqiqatda yuboradigan g'ijimlangan skanda esa qulaydi. Muammo texnologiyada emas edi: u noto'g'ri vazifaga qaratilgan, haqiqiy ma'lumotingizga ulanmagan va natijasini hech kim tekshirmagan edi.",
      "Ikkala xato ham bir xil zarar keltiradi. Xodimlar jimgina ishlatishni bas qiladigan narsaga pul to'laysiz va butun g'oyaga shubha bilan qaray boshlaysiz — olib tashlamoqchi bo'lgan takroriy ish esa hamon qo'lda bajarilaveradi. Shu orada bir necha oyda haqiqatan o'zini qoplaydigan vazifalar tegilmay qoladi, chunki birinchi urinish byudjetni ham, ishonchni ham yoqib yuborgan.",
    ],
    ru: [
      "Об ИИ вы начинаете думать, когда одна и та же рутина съедает время ваших людей. Поддержка целый день отвечает на одни и те же вопросы. Кто-то построчно переносит счета поставщиков в 1С. Снабженец прикидывает заказ на следующий месяц по цифрам прошлого. А найти один нужный пункт в договоре нельзя, не открыв тридцать файлов. Именно на этих задачах ИИ окупается: типовые ответы, разбор документов, прогноз спроса и поиск по всему, что компания уже знает.",
      "Чаще всего покупают идею, а не задачу. К сайту прикручивают чат-бота без доступа к вашим ценам и остаткам — он отвечает вежливо и неверно, и клиенты доверяют ему меньше, чем медленному человеку. Или демонстрация прекрасно работает на пяти чистых счетах и разваливается на мятом скане, который реально присылает поставщик. Дело не в технологии: её направили не на ту задачу, не подключили к настоящим данным и не поставили человека проверять результат.",
      "Обе ошибки стоят одинаково. Вы платите за то, чем сотрудники тихо перестают пользоваться, и начинаете скептически смотреть на всю затею — а рутина, которую вы хотели убрать, по-прежнему делается руками. При этом задачи, которые действительно окупились бы за несколько месяцев, остаются нетронутыми, потому что первая попытка сожгла и бюджет, и доверие.",
    ],
  },
  includes: {
    en: [
      { title: "A support bot that knows your business", body: "Connected to your real prices, stock and order statuses, answering in Uzbek or Russian in Telegram or on your site. It hands a conversation to a person as soon as it is out of its depth, rather than inventing an answer." },
      { title: "Invoices and documents read automatically", body: "Supplier invoices, delivery notes and contracts turned into structured lines your system can use, including photographed and scanned paper. Your accountant checks and confirms rather than retypes." },
      { title: "Demand forecasting for purchasing", body: "A suggested order per item based on your own sales history, seasonality and lead times. It gives your purchasing manager a starting figure to adjust, not an instruction to obey." },
      { title: "Search across your own documents", body: "Ask a question in plain language and get the answer with the contract, regulation or report it came from, so anyone can find a clause without knowing which folder it lives in." },
      { title: "Honest limits and a human in the loop", body: "Every task gets a clear rule for what the AI may decide alone and what a person signs off. Anything touching money, stock write-offs or a customer commitment goes to a person by default." },
      { title: "Accuracy you can see", body: "Before launch I measure how often it is right on your real documents and conversations, and show you the number. If a task does not reach a level worth paying for, I tell you so and recommend dropping it." },
    ],
    uz: [
      { title: "Biznesingizni biladigan qo'llab-quvvatlash boti", body: "Haqiqiy narx, qoldiq va buyurtma holatlariga ulangan holda Telegramda yoki saytingizda o'zbekcha va ruscha javob beradi. Savol qurbiga og'irlik qilsa, javob to'qimay, suhbatni darhol odamga uzatadi." },
      { title: "Avtomatik o'qiladigan hisob-faktura va hujjatlar", body: "Yetkazib beruvchi hisob-fakturalari, yuk xatlari va shartnomalar tizimingiz ishlata oladigan satrlarga aylanadi — rasmga olingan va skanerlangan qog'oz ham. Buxgalteringiz qayta kiritmaydi, tekshirib tasdiqlaydi." },
      { title: "Xarid uchun talab bashorati", body: "O'z savdo tarixingiz, mavsumiylik va yetkazib berish muddatiga qarab har bir mahsulot bo'yicha tavsiya etilgan buyurtma. Bu xarid menejeringizga bo'ysunish uchun buyruq emas, tuzatish uchun boshlang'ich raqam beradi." },
      { title: "O'z hujjatlaringiz bo'yicha qidiruv", body: "Oddiy so'z bilan savol bering va javobni u olingan shartnoma, nizom yoki hisobot bilan birga oling. Endi qaysi papkada turganini bilmasdan ham kerakli bandni topish mumkin." },
      { title: "Ochiq cheklovlar va odam nazorati", body: "Har bir vazifa uchun AI nimani o'zi hal qilishi va nimani odam tasdiqlashi aniq belgilanadi. Pul, tovarni hisobdan chiqarish yoki mijoz oldidagi majburiyatga tegadigan har qanday narsa avvaldan odamga boradi." },
      { title: "Ko'rinadigan aniqlik", body: "Ishga tushirishdan oldin haqiqiy hujjat va suhbatlaringizda qanchalik to'g'ri ishlashini o'lchayman va raqamni ko'rsataman. Agar vazifa pul to'lashga arziydigan darajaga chiqmasa, buni aytaman va undan voz kechamiz." },
    ],
    ru: [
      { title: "Бот поддержки, который знает ваш бизнес", body: "Подключён к реальным ценам, остаткам и статусам заказов, отвечает на узбекском и русском в Telegram или на сайте. Как только вопрос выходит за его пределы, он передаёт диалог человеку, а не придумывает ответ." },
      { title: "Автоматический разбор счетов и документов", body: "Счета поставщиков, накладные и договоры превращаются в структурированные строки, которые понимает ваша система, включая сфотографированные и отсканированные бумаги. Бухгалтер проверяет и подтверждает, а не перенабирает." },
      { title: "Прогноз спроса для закупок", body: "Рекомендованный заказ по каждой позиции на основе вашей истории продаж, сезонности и сроков поставки. Снабженцу это даёт отправную цифру для корректировки, а не указание к исполнению." },
      { title: "Поиск по вашим документам", body: "Задайте вопрос обычными словами и получите ответ вместе с договором, положением или отчётом, откуда он взят. Нужный пункт находится без знания того, в какой папке он лежит." },
      { title: "Честные ограничения и человек в контуре", body: "Для каждой задачи заранее определено, что ИИ решает сам, а что подтверждает человек. Всё, что касается денег, списаний товара или обязательств перед клиентом, по умолчанию уходит человеку." },
      { title: "Измеримая точность", body: "До запуска я измеряю, как часто система права на ваших настоящих документах и переписках, и показываю вам эту цифру. Если задача не выходит на уровень, за который стоит платить, я говорю об этом и мы от неё отказываемся." },
    ],
  },
  outcomes: {
    en: [
      "Routine questions answered without a manager",
      "Invoices checked instead of retyped",
      "Purchasing that starts from a number, not a hunch",
      "Answers found in minutes, with the source attached",
    ],
    uz: [
      "Takroriy savollar menejersiz javob oladi",
      "Hisob-fakturalar qayta kiritilmaydi, tekshiriladi",
      "Xarid taxmindan emas, raqamdan boshlanadi",
      "Javoblar daqiqalarda va manbasi bilan topiladi",
    ],
    ru: [
      "Типовые вопросы закрываются без менеджера",
      "Счета проверяются, а не перенабираются",
      "Закупки начинаются с цифры, а не с интуиции",
      "Ответы находятся за минуты и со ссылкой на источник",
    ],
  },
  faq: {
    en: [
      { q: "How accurate is it really?", a: "It depends entirely on the task, and I would rather tell you that than quote a percentage. Reading a typed invoice is close to reliable; reading a faded handwritten note is not. Before launch I test on your own documents and show you how often it is right, so you decide with a real number in front of you." },
      { q: "Can it make a mistake that costs us money?", a: "It can, which is why it is not left alone with anything financial. Write-offs, payments, price changes and commitments to customers are confirmed by a person, and the AI's job is to prepare the work, not approve it. Where a task genuinely cannot be checked, I will say it is not a good fit." },
      { q: "Does our data go to a foreign company?", a: "That is a real decision and worth making deliberately. Powerful models run on external services, which means the text you send passes through them; smaller models can run on your own server with nothing leaving your building, in exchange for lower quality. I explain the trade-off for your case and you choose — I do not decide it quietly." },
      { q: "Will it replace our staff?", a: "No, and it is worth being straight about that. It removes the repetitive part of the work — the two hundredth identical question, the typing of invoice lines — so the same people handle more and spend their time on the cases that need judgement. Where a task actually needs a human, the honest answer is to keep the human." },
    ],
    uz: [
      { q: "Aniqligi qanchalik yuqori?", a: "Bu butunlay vazifaga bog'liq va foiz aytgandan ko'ra shuni aytganim to'g'ri. Terilgan hisob-fakturani o'qish ishonchliga yaqin; o'chib ketgan qo'lyozmani o'qish esa yo'q. Ishga tushirishdan oldin o'z hujjatlaringizda sinovdan o'tkazaman va qanchalik to'g'ri ishlashini ko'rsataman — qarorni oldingizda haqiqiy raqam turganda qabul qilasiz." },
      { q: "U pulga zarar keltiradigan xato qila oladimi?", a: "Qila oladi, shuning uchun moliyaga aloqador hech narsa unga yolg'iz qoldirilmaydi. Hisobdan chiqarish, to'lov, narx o'zgarishi va mijoz oldidagi majburiyatlarni odam tasdiqlaydi; AI'ning vazifasi ishni tayyorlash, tasdiqlash emas. Vazifani tekshirishning haqiqatan iloji bo'lmasa, bu mos kelmasligini aytaman." },
      { q: "Ma'lumotlarimiz chet el kompaniyasiga ketadimi?", a: "Bu jiddiy qaror va uni ongli qabul qilgan ma'qul. Kuchli modellar tashqi xizmatlarda ishlaydi, ya'ni yuborilgan matn ular orqali o'tadi; kichikroq modellarni esa o'z serveringizda ishlatish mumkin — bunda hech narsa binongizdan chiqmaydi, lekin sifat pastroq bo'ladi. Sizning holatingiz uchun bu tanlovni tushuntiraman va qarorni siz qabul qilasiz — jimgina o'zim hal qilmayman." },
      { q: "U xodimlarimizni almashtiradimi?", a: "Yo'q, va buni ochiq aytgan ma'qul. U ishning takrorlanadigan qismini oladi: ikki yuzinchi bir xil savol, hisob-faktura satrlarini terish. Shunda o'sha odamlar ko'proq ish ulguradi va vaqtini mulohaza talab qiladigan holatlarga sarflaydi. Vazifa haqiqatan odamni talab qilsa, halol javob — odamni qoldirish." },
    ],
    ru: [
      { q: "Насколько это точно на самом деле?", a: "Это полностью зависит от задачи, и честнее сказать так, чем называть процент. Разбор напечатанного счёта близок к надёжному, разбор выцветшей рукописной записки — нет. До запуска я проверяю систему на ваших собственных документах и показываю, как часто она права, чтобы вы решали, имея перед глазами реальную цифру." },
      { q: "Может ли ИИ ошибиться так, что это будет стоить нам денег?", a: "Может — поэтому его не оставляют наедине с финансами. Списания, платежи, изменения цен и обязательства перед клиентами подтверждает человек, а задача ИИ — подготовить работу, а не утвердить её. Если задачу в принципе невозможно проверить, я скажу, что она не подходит." },
      { q: "Уходят ли наши данные в зарубежную компанию?", a: "Это реальный выбор, и сделать его стоит осознанно. Сильные модели работают на внешних сервисах, то есть отправленный текст проходит через них; модели поменьше можно запустить на вашем сервере, и тогда данные не покидают здание, но качество будет ниже. Я объясняю этот компромисс применительно к вашему случаю, и решаете вы — я не делаю этот выбор молча." },
      { q: "Заменит ли это наших сотрудников?", a: "Нет, и об этом стоит говорить прямо. ИИ забирает повторяющуюся часть работы — двухсотый одинаковый вопрос, набор строк из счёта, — и те же люди успевают больше, тратя время на случаи, где нужно решение человека. Там, где задача действительно требует человека, честный ответ — оставить человека." },
    ],
  },
};
