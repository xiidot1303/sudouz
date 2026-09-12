import type { DetailContent } from "../detail";

export const mobile: DetailContent = {
  lead: {
    en: "Give the people who work away from a desk something that works without signal.",
    uz: "Stol ortida ishlamaydigan xodimlaringizga aloqasiz ham ishlaydigan vosita bering.",
    ru: "Дайте тем, кто работает не за столом, инструмент, который работает без связи.",
  },
  problem: {
    en: [
      "You need a mobile app when the work happens away from the office. Couriers delivering across the city, sales agents visiting shops in the regions, engineers on call-outs, storekeepers walking the racks, inspectors filling in a form on site. These people have a phone in their hand all day and no computer anywhere near them, and everything they see is information your business needs the same hour, not the next morning.",
      "So it reaches you by photograph and voice message. Your agent sends the day's orders to a group chat, your courier phones in to say he delivered, your engineer writes the meter reading on a scrap of paper and types it up on Thursday. Somebody in your office turns all that into Excel rows. Numbers are transposed, a delivery is recorded twice, an order is missed entirely. And when a customer asks where their goods are, nobody can answer without making three phone calls.",
      "Then there is the signal. Much of the real work happens in basements, warehouses, markets and villages where mobile internet drops out, and any tool that needs a connection stops working exactly where it matters. So your staff go back to paper, and you go back to finding out what happened at the end of the week — long after you could have done anything about it.",
    ],
    uz: [
      "Ish ofisdan tashqarida bo'lganda mobil ilova kerak bo'ladi. Shahar bo'ylab yetkazadigan kuryerlar, viloyatlardagi do'konlarga boradigan savdo agentlari, chaqiruvga chiqadigan ustalar, javonlar orasida yuradigan omborchilar, joyida forma to'ldiradigan nazoratchilar. Bu odamlarning qo'lida kun bo'yi telefon bor, yaqin-atrofda kompyuter yo'q, ular ko'radigan har bir narsa esa biznesingizga ertaga ertalab emas, o'sha soatning o'zida kerak bo'ladigan ma'lumot.",
      "Shuning uchun u rasm va ovozli xabar bo'lib keladi. Agent kunlik buyurtmalarni guruhga tashlaydi, kuryer yetkazganini telefonda aytadi, usta hisoblagich ko'rsatkichini qog'oz parchasiga yozib, payshanba kuni kiritadi. Ofisdagi kimdir bularning hammasini Excel satrlariga aylantiradi. Raqamlar adashadi, bitta yetkazib berish ikki marta yoziladi, bitta buyurtma umuman tushib qoladi. Mijoz tovari qayerdaligini so'raganda esa uchta qo'ng'iroq qilmasdan hech kim javob bera olmaydi.",
      "Yana aloqa masalasi bor. Haqiqiy ishning ko'p qismi mobil internet uzilib turadigan yerto'la, ombor, bozor va qishloqlarda bo'ladi — internetga bog'liq har qanday vosita aynan eng kerakli joyda to'xtaydi. Natijada xodimlaringiz qog'ozga qaytadi, siz esa nima bo'lganini hafta oxirida bilib olishga qaytasiz — bunga ta'sir qila oladigan payt allaqachon o'tib ketgan bo'ladi.",
    ],
    ru: [
      "Мобильное приложение нужно, когда работа идёт не в офисе. Курьеры развозят заказы по городу, торговые агенты объезжают магазины в регионах, мастера выезжают по заявкам, кладовщики ходят вдоль стеллажей, инспекторы заполняют акт на месте. У этих людей весь день в руке телефон и рядом нет компьютера, а всё, что они видят, — это информация, которая нужна бизнесу в тот же час, а не завтра утром.",
      "Поэтому она приходит фотографиями и голосовыми. Агент скидывает заказы дня в общий чат, курьер звонит и говорит, что доставил, мастер записывает показания счётчика на клочке бумаги и вносит их в четверг. Кто-то в офисе превращает всё это в строки Excel. Цифры путаются, одна доставка записывается дважды, один заказ теряется целиком. А когда клиент спрашивает, где его товар, ответить без трёх звонков никто не может.",
      "И есть связь. Значительная часть реальной работы идёт в подвалах, на складах, рынках и в кишлаках, где мобильный интернет пропадает, и любой инструмент, которому нужно соединение, отказывает именно там, где он важен. В итоге сотрудники возвращаются к бумаге, а вы — к тому, чтобы узнавать о происходящем в конце недели, когда повлиять уже нельзя.",
    ],
  },
  includes: {
    en: [
      { title: "Works with the internet off", body: "Your staff keep entering orders, readings and photos with no signal. Everything is stored on the phone and syncs by itself when the connection returns." },
      { title: "One app on iOS and Android", body: "Built once for both, so a courier on an old Android and a manager on an iPhone get the same app and the same updates." },
      { title: "Barcode and QR scanning", body: "The phone's camera reads barcodes for receiving, picking and checking goods — no separate scanner to buy unless you want one." },
      { title: "GPS, routes and visit confirmation", body: "See where a courier or agent actually is, how the route went, and confirm a visit or delivery with a photo, signature and location stamp." },
      { title: "Photos and documents from the field", body: "Attach a photo of the delivered goods, a signed delivery note or a damaged item straight onto the order, with the time and place recorded automatically." },
      { title: "Tied to your office system", body: "The app reads and writes the same data as your ERP, CRM or 1C, so what an agent enters on the road is visible in the office within seconds of the phone coming back online." },
    ],
    uz: [
      { title: "Internetsiz ishlaydi", body: "Xodimlaringiz aloqa yo'q joyda ham buyurtma, ko'rsatkich va rasm kiritishda davom etadi. Hammasi telefonda saqlanadi va aloqa tiklanganda o'zi sinxronlanadi." },
      { title: "iOS va Android uchun bitta ilova", body: "Ikkalasi uchun bir marta quriladi: eski Android'li kuryer ham, iPhone'li menejer ham bir xil ilova va bir xil yangilanishlarni oladi." },
      { title: "Shtrix-kod va QR skanerlash", body: "Telefon kamerasi qabul, yig'ish va tekshirish uchun shtrix-kodni o'qiydi — o'zingiz xohlamasangiz, alohida skaner sotib olish shart emas." },
      { title: "GPS, marshrut va tashrif tasdig'i", body: "Kuryer yoki agent aslida qayerdaligini va marshrut qanday o'tganini ko'rasiz; tashrif yoki yetkazib berish rasm, imzo va joylashuv bilan tasdiqlanadi." },
      { title: "Dala sharoitidan rasm va hujjatlar", body: "Yetkazilgan tovar rasmi, imzolangan yuk xati yoki shikastlangan mahsulot to'g'ridan-to'g'ri buyurtmaga biriktiriladi — vaqt va joy avtomatik yoziladi." },
      { title: "Ofis tizimingizga ulangan", body: "Ilova ERP, CRM yoki 1C bilan bir xil ma'lumotni o'qiydi va yozadi. Agent yo'lda kiritgan narsa telefon aloqaga qaytgan zahoti ofisda ko'rinadi." },
    ],
    ru: [
      { title: "Работает без интернета", body: "Сотрудники продолжают вносить заказы, показания и фотографии без связи. Всё хранится на телефоне и синхронизируется само, когда соединение возвращается." },
      { title: "Одно приложение на iOS и Android", body: "Делается сразу под обе платформы: и курьер со старым Android, и руководитель с iPhone получают одно приложение и одни обновления." },
      { title: "Сканирование штрих-кодов и QR", body: "Камера телефона читает штрих-коды при приёмке, сборке и проверке товара — отдельный сканер покупать не нужно, если вы сами этого не хотите." },
      { title: "GPS, маршруты и подтверждение визита", body: "Вы видите, где на самом деле курьер или агент и как прошёл маршрут, а визит или доставка подтверждаются фотографией, подписью и отметкой места." },
      { title: "Фото и документы с выезда", body: "Снимок доставленного товара, подписанная накладная или фото брака прикрепляются прямо к заказу, а время и место записываются автоматически." },
      { title: "Связь с офисной системой", body: "Приложение читает и пишет те же данные, что ваша ERP, CRM или 1С, поэтому внесённое агентом в дороге видно в офисе через секунды после возвращения связи." },
    ],
  },
  outcomes: {
    en: [
      "Field data in the office the same hour",
      "Work continues where the signal does not",
      "Deliveries confirmed with photo and location",
      "No more retyping from chats into Excel",
    ],
    uz: [
      "Daladagi ma'lumot o'sha soatda ofisda",
      "Aloqa yo'q joyda ham ish to'xtamaydi",
      "Yetkazib berish rasm va joylashuv bilan tasdiqlanadi",
      "Chatdan Excel'ga qayta kiritish tugaydi",
    ],
    ru: [
      "Данные с выезда в офисе в тот же час",
      "Работа идёт там, где связи нет",
      "Доставка подтверждается фото и геометкой",
      "Больше никакого перенабора из чатов в Excel",
    ],
  },
  faq: {
    en: [
      { q: "Will it really work without internet?", a: "Yes. The app keeps full working data on the phone, so orders, readings, scans and photos are entered normally with the connection off. When the phone finds signal again it sends everything through and resolves any conflicts, and your staff see confirmation that it went." },
      { q: "Do we have to publish it in Google Play and the App Store?", a: "Not necessarily. For an app used only by your own staff, it can be installed directly on their phones, which avoids the stores' review process entirely. For an app your customers download, publishing is the right route — I prepare the listings and handle the review, and you own the developer accounts." },
      { q: "Our couriers use cheap old Android phones. Is that a problem?", a: "No, and it is worth saying so upfront. The app is built to run on modest hardware and older Android versions, because that is what field staff actually carry. I will confirm the minimum device your team already has before development starts." },
      { q: "What happens after launch?", a: "Deployment and training of your staff are part of the project, and you get 30 days of free bug fixes after go-live. Beyond that, phones and operating systems keep changing, so a small ongoing support arrangement is sensible — but it is your choice, not a condition." },
    ],
    uz: [
      { q: "Haqiqatan internetsiz ishlaydimi?", a: "Ha. Ilova ish uchun kerakli ma'lumotni telefonda to'liq saqlaydi, shuning uchun buyurtma, ko'rsatkich, skanerlash va rasmlar aloqasiz ham odatdagidek kiritiladi. Telefon signalni topgach, hammasini yuboradi va ziddiyatlarni hal qiladi, xodim esa yuborilgani haqida tasdiq ko'radi." },
      { q: "Uni Google Play va App Store'ga joylash shartmi?", a: "Shart emas. Faqat o'z xodimlaringiz ishlatadigan ilovani ularning telefoniga to'g'ridan-to'g'ri o'rnatish mumkin — bunda do'konlar tekshiruvi umuman kerak bo'lmaydi. Mijozlar yuklab oladigan ilova uchun esa joylashtirish to'g'ri yo'l: sahifalarni tayyorlayman va tekshiruvdan o'tkazaman, dasturchi akkauntlari esa sizniki bo'ladi." },
      { q: "Kuryerlarimizda arzon, eski Android telefonlar. Bu muammomi?", a: "Yo'q, va buni oldindan aytib qo'ygan ma'qul. Ilova kuchsiz qurilmalar va eski Android versiyalarida ishlashga moslab quriladi, chunki dala xodimlari aynan shunaqasini ko'taradi. Ishlab chiqish boshlanishidan oldin jamoangizdagi eng past qurilmani aniqlab olaman." },
      { q: "Ishga tushgandan keyin nima bo'ladi?", a: "Joriy etish va xodimlarni o'qitish loyihaga kiradi, ishga tushgandan keyin esa 30 kun bepul xatolarni tuzatish beriladi. Undan keyin telefonlar va operatsion tizimlar o'zgarib turadi, shuning uchun kichik doimiy qo'llab-quvvatlash kelishuvi mantiqiy — lekin bu sizning tanlovingiz, shart emas." },
    ],
    ru: [
      { q: "Оно действительно будет работать без интернета?", a: "Да. Приложение держит рабочие данные на телефоне, поэтому заказы, показания, сканы и фотографии вносятся как обычно при выключенной связи. Когда сигнал появляется, всё уходит на сервер, конфликты разрешаются, а сотрудник видит подтверждение отправки." },
      { q: "Обязательно ли публиковать его в Google Play и App Store?", a: "Не обязательно. Приложение только для ваших сотрудников можно установить им на телефоны напрямую, минуя проверку магазинов. Если приложение скачивают клиенты, публикация — правильный путь: я готовлю карточки и провожу проверку, а аккаунты разработчика оформляются на вас." },
      { q: "У наших курьеров дешёвые старые Android-телефоны. Это проблема?", a: "Нет, и об этом стоит сказать сразу. Приложение делается с расчётом на слабые устройства и старые версии Android, потому что именно такие носят полевые сотрудники. Минимальное устройство, которое есть у вашей команды, мы фиксируем до начала разработки." },
      { q: "Что происходит после запуска?", a: "Внедрение и обучение сотрудников входят в проект, а после запуска даётся 30 дней бесплатного исправления ошибок. Дальше телефоны и операционные системы продолжают меняться, поэтому небольшая постоянная поддержка разумна — но это ваш выбор, а не условие." },
    ],
  },
};
