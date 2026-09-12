import type { DetailContent } from "../detail";

export const ecommerce: DetailContent = {
  lead: {
    en: "An online store wired to your real stock, so you never sell what you do not have.",
    uz: "Haqiqiy qoldiqqa ulangan onlayn do'kon — yo'q narsani sotib qo'ymaysiz.",
    ru: "Интернет-магазин, связанный с реальными остатками, — вы не продадите то, чего нет.",
  },
  problem: {
    en: [
      "You are ready for an online store when selling through Instagram and Telegram stops scaling. The photos go up, the messages come in, and a person answers each one: is it in stock, what colour, how much is delivery, where do I pay. That works at twenty orders a week. At two hundred it does not, and you are choosing between hiring another manager and turning customers away. Marketplaces like Uzum take the pressure off but take your margin and your customer with it.",
      "The common mistake is to build a catalogue that is not connected to anything. Someone updates prices by hand once a week, so on Tuesday you sell an item you ran out of on Monday, and the customer finds out after paying. Delivery costs are quoted from memory. Orders arrive by email and get retyped into Excel. Meanwhile Asl Belgisi labelling applies to more product categories each year, and a store that ignores it creates a problem for the accountant rather than solving one.",
      "The cost lands on both sides of the counter. You refund and apologise for stock that was not there, which is exactly the story a customer repeats to their friends. You pay for advertising that sends people to a page they cannot pay on, because the card checkout was never finished. And you still cannot answer the simplest question — which products actually make you money.",
    ],
    uz: [
      "Instagram va Telegram orqali sotish o'sishni ko'tara olmay qolganda onlayn do'konga tayyorsiz. Rasm joylanadi, xabarlar keladi va har biriga odam javob beradi: bormi, qaysi rangda, yetkazish qancha, qayerga to'layman. Haftasiga yigirmata buyurtmada bu ishlaydi. Ikki yuztada ishlamaydi va siz yana bir menejer yollash bilan mijozni rad etish orasida tanlaysiz. Uzum kabi marketpleyslar yukni yengillashtiradi, lekin foydangizni ham, mijozingizni ham o'ziga oladi.",
      "Keng tarqalgan xato — hech narsaga ulanmagan katalog qurish. Kimdir narxlarni haftada bir marta qo'lda yangilaydi, natijada seshanba kuni dushanba kuni tugagan tovarni sotasiz va mijoz buni to'lagandan keyin bilib oladi. Yetkazib berish narxi xotiradan aytiladi. Buyurtmalar pochtaga tushadi va Excel'ga qayta kiritiladi. Shu orada Asl Belgisi majburiy markirovkasi har yili ko'proq mahsulot toifalarini qamrab oladi va buni hisobga olmagan do'kon buxgalter uchun muammo hal qilmaydi, balki yaratadi.",
      "Zarar peshtaxtaning ikkala tomoniga tushadi. Yo'q tovar uchun pulni qaytarasiz va uzr so'raysiz — mijoz do'stlariga aynan shu voqeani aytib beradi. Reklamaga to'laysiz, u odamlarni to'lay olmaydigan sahifaga olib boradi, chunki karta orqali to'lov oxirigacha qilinmagan. Va eng oddiy savolga baribir javob bera olmaysiz: qaysi mahsulot sizga haqiqatan foyda keltiryapti.",
    ],
    ru: [
      "К интернет-магазину вы готовы тогда, когда продажи через Instagram и Telegram перестают масштабироваться. Фото выкладываются, сообщения приходят, и на каждое отвечает человек: есть ли в наличии, какой цвет, сколько доставка, куда платить. При двадцати заказах в неделю это работает. При двухстах — нет, и вы выбираете между наймом ещё одного менеджера и отказом клиентам. Маркетплейсы вроде Uzum снимают нагрузку, но забирают и вашу маржу, и вашего клиента.",
      "Типичная ошибка — сделать каталог, который ни с чем не связан. Кто-то раз в неделю правит цены вручную, и во вторник вы продаёте товар, закончившийся в понедельник, а клиент узнаёт об этом уже после оплаты. Стоимость доставки называют по памяти. Заказы падают на почту и перенабираются в Excel. При этом обязательная маркировка Asl Belgisi охватывает всё больше категорий товаров, и магазин, который её не учитывает, создаёт бухгалтеру проблему вместо того, чтобы её решать.",
      "Убыток приходит с обеих сторон прилавка. Вы возвращаете деньги и извиняетесь за товар, которого не было, — и именно эту историю клиент пересказывает знакомым. Вы платите за рекламу, которая ведёт людей на страницу, где нельзя заплатить, потому что оплату картой так и не доделали. И вы по-прежнему не можете ответить на простой вопрос: какие товары действительно приносят вам деньги.",
    ],
  },
  includes: {
    en: [
      { title: "Stock the store reads, not retypes", body: "The catalogue shows the balance from your warehouse system or 1C. When the last one sells in the shop, it stops being available online within seconds." },
      { title: "Payme, Click, Uzum and cash on delivery", body: "Local card payment set up properly, with payment confirmation coming back into the order automatically, alongside cash on delivery where you offer it." },
      { title: "Delivery your customers understand", body: "Delivery zones and prices calculated from the address rather than quoted by a manager, with courier or pickup options and a status the customer can follow." },
      { title: "Asl Belgisi and receipts", body: "Mandatory product labelling handled where your categories require it, and fiscal receipts issued on payment, so your accountant is not left patching things afterwards." },
      { title: "Promotions that do not break the price list", body: "Discounts, promo codes, bundles and seasonal campaigns set by your own staff, with rules on what can be combined so margins are not given away by accident." },
      { title: "Sales analytics worth reading", body: "Which products sell, which pages people abandon, which advertising brought real paid orders, and what each customer has spent with you overall." },
    ],
    uz: [
      { title: "Do'kon o'qiydigan qoldiq, qayta kiritiladigan emas", body: "Katalog ombor tizimingiz yoki 1C'dagi qoldiqni ko'rsatadi. Do'konda oxirgisi sotilsa, u bir necha soniyada onlayn mavjud bo'lmay qoladi." },
      { title: "Payme, Click, Uzum va yetkazishda naqd", body: "Mahalliy karta to'lovi to'g'ri sozlanadi va to'lov tasdig'i avtomatik ravishda buyurtmaga qaytadi, siz taklif qilsangiz, yetkazishda naqd to'lov bilan birga." },
      { title: "Mijozga tushunarli yetkazib berish", body: "Yetkazish hududlari va narxlari menejer aytib berishi emas, manzildan hisoblanadi; kuryer yoki o'zi olib ketish varianti va mijoz kuzata oladigan holat bo'ladi." },
      { title: "Asl Belgisi va cheklar", body: "Toifalaringiz talab qilgan joyda majburiy markirovka hisobga olinadi, to'lovda esa fiskal chek beriladi — buxgalteringiz keyin hech narsani yamashga majbur bo'lmaydi." },
      { title: "Narxni buzmaydigan aksiyalar", body: "Chegirma, promo-kod, to'plam va mavsumiy kampaniyalarni xodimlaringiz o'zi qo'yadi; nimani nima bilan birlashtirish mumkinligi qoidalar bilan cheklanadi, shunda foyda bexosdan berib yuborilmaydi." },
      { title: "O'qishga arziydigan savdo tahlili", body: "Qaysi mahsulot sotiladi, qaysi sahifani odamlar tashlab ketadi, qaysi reklama haqiqiy to'langan buyurtma keltirdi va har bir mijoz umuman qancha xarid qilgan." },
    ],
    ru: [
      { title: "Остаток, который магазин читает, а не перенабирает", body: "Каталог показывает остаток из вашей складской системы или 1С. Когда последнюю единицу продали в магазине, она перестаёт быть доступной онлайн за секунды." },
      { title: "Payme, Click, Uzum и наличные при доставке", body: "Локальная оплата картой настроена как положено, подтверждение платежа возвращается в заказ автоматически, а рядом работает оплата наличными курьеру, если вы её предлагаете." },
      { title: "Понятная клиенту доставка", body: "Зоны и стоимость доставки считаются по адресу, а не называются менеджером; есть выбор курьера или самовывоза и статус, который клиент может отследить." },
      { title: "Asl Belgisi и чеки", body: "Обязательная маркировка учитывается там, где этого требуют ваши категории, а при оплате выдаётся фискальный чек — бухгалтеру не придётся потом всё это латать." },
      { title: "Акции, которые не ломают прайс", body: "Скидки, промокоды, наборы и сезонные кампании ваши сотрудники задают сами, а правила сочетаемости не дают случайно отдать маржу." },
      { title: "Аналитика продаж, которую стоит читать", body: "Какие товары продаются, с каких страниц уходят, какая реклама принесла реальные оплаченные заказы и сколько каждый клиент потратил у вас в целом." },
    ],
  },
  outcomes: {
    en: [
      "Orders taken without a manager in the loop",
      "Online stock that matches the shelf",
      "Payment completed on the site, not by transfer",
      "Clear view of which products earn",
    ],
    uz: [
      "Menejersiz qabul qilinadigan buyurtmalar",
      "Javondagi holatga mos onlayn qoldiq",
      "Pul o'tkazmasi emas, saytda yakunlanadigan to'lov",
      "Qaysi mahsulot daromad keltirayotgani aniq ko'rinadi",
    ],
    ru: [
      "Заказы принимаются без участия менеджера",
      "Остатки на сайте совпадают с полкой",
      "Оплата завершается на сайте, а не переводом",
      "Понятно, какие товары приносят деньги",
    ],
  },
  faq: {
    en: [
      { q: "Can it connect to Payme, Click and Uzum?", a: "Yes, and to more than one at the same time, since customers have different preferences. You sign a merchant agreement with each provider and they take a percentage of each payment; I handle the technical integration and tell you in advance what documents each one asks for." },
      { q: "Will it sync with our 1C or warehouse system?", a: "Yes. Products, prices and balances come from your existing system, and orders go back into it, so your staff carry on working in the programme they know. If you have no system yet, the store can hold stock itself until you do." },
      { q: "We already sell on Uzum. Why do we need our own store?", a: "Keep the marketplace — it brings customers you would not reach. Your own store is where you keep the full margin, own the customer contact and control how your products are presented. Most sellers here run both, and the store gives you somewhere to send your Instagram and Telegram traffic." },
      { q: "Who adds products and changes prices afterwards?", a: "Your own staff, through an admin panel built for the job, and training them on site is part of the project. If your products come from 1C, prices update automatically and nobody touches them by hand at all." },
    ],
    uz: [
      { q: "Payme, Click va Uzum'ga ulanadimi?", a: "Ha, hatto bir vaqtning o'zida bir nechtasiga, chunki mijozlarning xohishi har xil. Har bir provayder bilan merchant shartnomasi tuzasiz va ular har bir to'lovdan foiz oladi; texnik integratsiyani men qilaman va har biri qanday hujjat so'rashini oldindan aytaman." },
      { q: "1C yoki ombor tizimimiz bilan sinxronlanadimi?", a: "Ha. Mahsulot, narx va qoldiq mavjud tizimingizdan keladi, buyurtmalar esa unga qaytadi — xodimlaringiz o'zi biladigan dasturda ishlashda davom etadi. Agar hali tizimingiz bo'lmasa, do'konning o'zi qoldiqni yuritib turadi." },
      { q: "Biz Uzum'da sotamiz. O'z do'konimiz nimaga kerak?", a: "Marketpleysni qoldiring — u siz yeta olmaydigan mijozlarni keltiradi. O'z do'koningiz esa to'liq foyda sizda qoladigan, mijoz kontakti sizniki bo'ladigan va mahsulotingiz qanday ko'rsatilishini o'zingiz hal qiladigan joy. Bizda ko'p sotuvchilar ikkalasini birga yuritadi, do'kon esa Instagram va Telegramdagi oqimni yuboradigan manzil bo'ladi." },
      { q: "Keyinchalik mahsulot qo'shish va narx o'zgartirishni kim qiladi?", a: "Xodimlaringizning o'zi, shu ish uchun qilingan admin panel orqali; ularni joyida o'qitish loyihaga kiradi. Agar mahsulotlar 1C'dan kelsa, narxlar avtomatik yangilanadi va ularga hech kim qo'l urmaydi." },
    ],
    ru: [
      { q: "Подключается ли к Payme, Click и Uzum?", a: "Да, и сразу к нескольким, потому что у клиентов разные предпочтения. С каждым провайдером вы заключаете договор мерчанта, и они удерживают процент с платежа; техническую интеграцию делаю я и заранее говорю, какие документы запросит каждый." },
      { q: "Будет ли синхронизация с нашей 1С или складской системой?", a: "Да. Товары, цены и остатки приходят из вашей текущей системы, а заказы возвращаются в неё, и сотрудники продолжают работать в знакомой программе. Если системы пока нет, магазин может вести остатки сам." },
      { q: "Мы уже продаём на Uzum. Зачем нам свой магазин?", a: "Маркетплейс оставьте — он приводит клиентов, до которых вы иначе не дотянетесь. Свой магазин — это место, где у вас остаётся вся маржа, где контакт клиента принадлежит вам и где вы сами решаете, как показан товар. Большинство продавцов здесь ведут и то и другое, а магазин даёт куда вести трафик из Instagram и Telegram." },
      { q: "Кто потом добавляет товары и меняет цены?", a: "Ваши сотрудники через админку, сделанную именно для этого, и обучение на месте входит в проект. Если товары приходят из 1С, цены обновляются автоматически и руками их никто не трогает." },
    ],
  },
};
