export const HERO_IMAGE = "https://cdn.poehali.dev/projects/f7e2391a-1715-464f-a771-fa8ac1786bdd/files/4d474ebe-4085-4538-b8e9-4ee89013bed3.jpg";
export const MECHANIC_IMAGE = "https://cdn.poehali.dev/projects/f7e2391a-1715-464f-a771-fa8ac1786bdd/files/dd5e0960-8f3c-48b6-aea5-2708b8f6f4c0.jpg";
export const PARTS_IMAGE = "https://cdn.poehali.dev/projects/f7e2391a-1715-464f-a771-fa8ac1786bdd/files/13594d46-e1b5-4815-9d13-fd341e6428ac.jpg";

export type CartItem = { name: string; price: string; qty: number };
export type Message = { role: "user" | "ai"; text: string };
export type BookingData = { service: string; date: string; time: string; name: string; phone: string };

export const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "parts", label: "Запчасти" },
  { id: "booking", label: "Запись" },
  { id: "bonuses", label: "Бонусы" },
  { id: "masters", label: "О нас" },
  { id: "contacts", label: "Контакты" },
];

export const SERVICES = [
  { icon: "Wrench", title: "Техническое обслуживание", desc: "ТО по регламенту производителя, замена масла, фильтров, свечей", price: "от 2 500 ₽", time: "1–2 ч" },
  { icon: "Zap", title: "Диагностика", desc: "Компьютерная диагностика всех систем, выявление скрытых неисправностей", price: "от 800 ₽", time: "30 мин" },
  { icon: "Shield", title: "Тормозная система", desc: "Замена колодок, дисков, суппортов. Прокачка тормозов", price: "от 1 800 ₽", time: "1–3 ч" },
  { icon: "RotateCcw", title: "Подвеска и рулевое", desc: "Диагностика и замена амортизаторов, рычагов, наконечников", price: "от 2 200 ₽", time: "2–4 ч" },
  { icon: "Thermometer", title: "Система охлаждения", desc: "Замена антифриза, ремонт радиатора, термостата, помпы", price: "от 1 500 ₽", time: "1–2 ч" },
  { icon: "Battery", title: "Электрика", desc: "Диагностика и ремонт электрооборудования, замена АКБ, генератора", price: "от 1 200 ₽", time: "1–3 ч" },
  { icon: "Wind", title: "Кондиционер", desc: "Заправка фреоном, чистка, ремонт системы климат-контроля", price: "от 2 000 ₽", time: "1–2 ч" },
  { icon: "Circle", title: "Шины и диски", desc: "Шиномонтаж, балансировка, хранение шин, ремонт дисков", price: "от 600 ₽", time: "30–60 мин" },
  { icon: "RefreshCw", title: "Замена мотора", desc: "Замена двигателя в сборе, установка контрактного или нового мотора", price: "от 15 000 ₽", time: "1–3 дня" },
  { icon: "Settings", title: "Ремонт мотора", desc: "Капитальный ремонт двигателя, замена поршневой, расточка блока", price: "от 8 000 ₽", time: "3–7 дней" },
  { icon: "Droplets", title: "Замена масла", desc: "Замена моторного масла и фильтра, подбор масла по допускам производителя", price: "от 500 ₽", time: "30 мин" },
];

export const PARTS = [
  { name: "Масляный фильтр Bosch F026407123", price: "890 ₽", oldPrice: "1 100 ₽", status: "В наличии", category: "Фильтры" },
  { name: "Тормозные колодки Brembo P06030", price: "3 200 ₽", oldPrice: null as string | null, status: "В наличии", category: "Тормоза" },
  { name: "Амортизатор передний KYB 339714", price: "5 600 ₽", oldPrice: "6 200 ₽", status: "Под заказ", category: "Подвеска" },
  { name: "Свечи NGK Iridium BKR6EIX-11", price: "1 480 ₽", oldPrice: null as string | null, status: "В наличии", category: "Зажигание" },
  { name: "Ремень ГРМ Gates T43070", price: "2 900 ₽", oldPrice: "3 500 ₽", status: "В наличии", category: "ГРМ" },
  { name: "Аккумулятор Varta Silver 74Ah", price: "9 800 ₽", oldPrice: null as string | null, status: "Под заказ", category: "Электрика" },
];

export const MASTERS = [
  { name: "Михаил", role: "Мастер-механик", exp: "Опытный специалист", rating: 4.9, reviews: 87, avatar: "👨‍🔧" },
  { name: "Альберт", role: "Диагност", exp: "Компьютерная диагностика", rating: 4.8, reviews: 64, avatar: "👷" },
  { name: "Александр", role: "Мастер по подвеске", exp: "Ходовая часть", rating: 4.9, reviews: 72, avatar: "🔧" },
  { name: "Александр", role: "Мастер по тормозам", exp: "Тормозные системы", rating: 4.7, reviews: 51, avatar: "⚙️" },
  { name: "Владимир", role: "Электрик", exp: "Автоэлектрика", rating: 4.8, reviews: 43, avatar: "⚡" },
];

export const REVIEWS = [
  { author: "Михаил К.", date: "20 мая 2026", rating: 5, text: "Отличный сервис! Сделали ТО быстро и качественно. Мастер Алексей объяснил всё понятно, не навязывал лишнего.", service: "ТО", master: "Алексей С." },
  { author: "Елена П.", date: "18 мая 2026", rating: 5, text: "Записалась онлайн, приехала в точное время. Диагностика провалила все страхи — проблема оказалась незначительной. Рекомендую!", service: "Диагностика", master: "Дмитрий К." },
  { author: "Андрей Р.", date: "15 мая 2026", rating: 4, text: "Хорошая работа по подвеске. Единственное — немного дольше ожидал, чем планировалось. В целом доволен.", service: "Подвеска", master: "Сергей В." },
];

export const BONUSES = [
  { icon: "Gift", title: "Приветственный бонус", desc: "500 бонусных баллов при первом посещении", color: "bg-blue-50 border-blue-200" },
  { icon: "Star", title: "За каждый заказ", desc: "5% от суммы заказа возвращается бонусами", color: "bg-slate-50 border-slate-200" },
  { icon: "Users", title: "Приведи друга", desc: "1000 баллов вам и 500 другу при первом визите", color: "bg-blue-50 border-blue-200" },
  { icon: "Crown", title: "Статус Платинум", desc: "Скидка 10% на все услуги от 50 000 баллов", color: "bg-slate-50 border-slate-200" },
];

export const PART_CATEGORIES = ["Все", "Фильтры", "Тормоза", "Подвеска", "Зажигание", "ГРМ", "Электрика"];
export const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const AI_KEYS: Record<string, string> = {
  запись: "Записаться очень просто — перейдите в раздел «Запись», выберите услугу, дату и мастера. Запись онлайн 24/7!",
  цена: "Стоимость услуг начинается от 600 ₽. Диагностика — от 800 ₽. Точную цену назовём после осмотра.",
  бонус: "Наша программа даёт 5% с каждого заказа. За первое посещение — 500 баллов! 1 балл = 1 рубль.",
  запчаст: "В каталоге есть запчасти в наличии и под заказ. Доставка под заказ — 1–3 дня. Гарантия на всё.",
  то: "ТО включает замену масла, фильтров, проверку систем. От 2 500 ₽, время — 1–2 часа.",
  оплата: "Принимаем карту (Visa, MasterCard, Мир) и СБП. Можно оплачивать бонусными баллами.",
  время: "Работаем ежедневно с 8:00 до 21:00. Запись онлайн — круглосуточно.",
  адрес: "г. Анапа, угол Пролетарская 17 / Шевченко 269. Удобная парковка рядом.",
};

export function getAiReply(msg: string): string {
  const lower = msg.toLowerCase();
  for (const [key, reply] of Object.entries(AI_KEYS)) {
    if (lower.includes(key)) return reply;
  }
  return "Спасибо за вопрос! Позвоните нам: +7 (918) 041-60-15 или запишитесь онлайн — мастер проконсультирует лично.";
}