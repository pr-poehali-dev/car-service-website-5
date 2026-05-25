import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  HERO_IMAGE, MECHANIC_IMAGE, PARTS_IMAGE,
  SERVICES, PARTS, MASTERS, REVIEWS, BONUSES,
  PART_CATEGORIES, TIME_SLOTS, NAV_LINKS,
  CartItem, BookingData,
} from "./data";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Icon key={i} name="Star" size={14}
          className={i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
      ))}
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <div className="w-14 h-1 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] rounded mx-auto mb-4" />
      <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-[#0f172a] mb-3">{title}</h2>
      {subtitle && <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export function HeroSection({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.93) 0%, rgba(30,64,175,0.75) 100%)" }} />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-white" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-white" />
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <span className="w-8 h-px bg-blue-400" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Профессиональный автосервис</span>
          </div>
          <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Ваш автомобиль<br />
            <span className="text-blue-400">заслуживает</span><br />
            лучшего
          </h1>
          <p className="text-white/75 text-lg md:text-xl mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
            10 лет опыта, 5 мастеров своего дела, гарантия на все виды работ. Запись онлайн за 2 минуты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button size="lg" onClick={() => onScrollTo("booking")}
              className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-8 py-4 text-base font-semibold shadow-lg">
              <Icon name="Calendar" size={18} className="mr-2" />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" onClick={() => onScrollTo("services")}
              className="border-white/40 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-base">
              <Icon name="List" size={18} className="mr-2" />
              Наши услуги
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 mt-16 animate-fade-in-up delay-400">
            {[
              { num: "10+", label: "Лет работы" },
              { num: "2 000+", label: "Довольных клиентов" },
              { num: "5", label: "Специалистов" },
              { num: "98%", label: "Довольны результатом" },
            ].map(s => (
              <div key={s.label} className="text-white">
                <div className="font-montserrat font-black text-2xl md:text-3xl text-blue-300">{s.num}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <Icon name="ChevronDown" size={20} />
      </div>
    </section>
  );
}

export function ServicesSection({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Наши услуги" subtitle="Полный спектр технического обслуживания и ремонта автомобилей любых марок" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(s => (
            <div key={s.title} className="card-hover bg-white border border-gray-200 rounded-xl p-6 group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#1e40af] rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon name={s.icon} size={22} className="text-[#1e40af] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-montserrat font-bold text-base text-[#0f172a] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#1e40af] font-semibold text-sm">{s.price}</span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Icon name="Clock" size={12} /> {s.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 relative rounded-2xl overflow-hidden">
          <img src={MECHANIC_IMAGE} alt="Мастер за работой" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 flex items-center"
            style={{ background: "linear-gradient(to right, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 60%, transparent 100%)" }}>
            <div className="px-8 md:px-14 max-w-lg">
              <h3 className="font-montserrat font-extrabold text-2xl md:text-3xl text-white mb-3">Гарантия на все работы</h3>
              <p className="text-white/75 mb-5">Письменная гарантия на все выполненные работы сроком до 12 месяцев</p>
              <Button onClick={() => onScrollTo("booking")} className="bg-white text-[#1e40af] hover:bg-blue-50">
                Записаться на диагностику
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PartsProps {
  partsFilter: string;
  setPartsFilter: (v: string) => void;
  onAddToCart: (part: CartItem) => void;
}

export function PartsSection({ partsFilter, setPartsFilter, onAddToCart }: PartsProps) {
  const filteredParts = partsFilter === "Все" ? PARTS : PARTS.filter(p => p.category === partsFilter);

  return (
    <section id="parts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Каталог запчастей" subtitle="Оригинальные и качественные аналоги — в наличии и под заказ" />

        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {PART_CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setPartsFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                partsFilter === cat ? "bg-[#1e40af] text-white border-[#1e40af]" : "bg-white text-gray-700 border-gray-200 hover:border-[#1e40af]"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredParts.map(part => (
            <div key={part.name} className="card-hover bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col">
              <div className="h-44 overflow-hidden bg-gray-50">
                <img src={PARTS_IMAGE} alt={part.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <Badge variant="secondary"
                  className={`self-start mb-2 text-xs ${part.status === "В наличии" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-orange-100 text-orange-700 hover:bg-orange-100"}`}>
                  <Icon name={part.status === "В наличии" ? "CheckCircle" : "Clock"} size={11} className="mr-1" />
                  {part.status}
                </Badge>
                <p className="text-sm font-medium text-gray-800 leading-snug mb-2 flex-1">{part.name}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-montserrat font-bold text-lg text-[#1e40af]">{part.price}</span>
                  {part.oldPrice && <span className="text-gray-400 text-sm line-through">{part.oldPrice}</span>}
                </div>
                <Button size="sm" onClick={() => onAddToCart({ name: part.name, price: part.price, qty: 1 })}
                  className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
                  <Icon name="ShoppingCart" size={15} className="mr-1.5" />
                  В корзину
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface BookingProps {
  bookingStep: number;
  setBookingStep: (v: number) => void;
  bookingData: BookingData;
  setBookingData: (v: BookingData) => void;
}

export function BookingSection({ bookingStep, setBookingStep, bookingData, setBookingData }: BookingProps) {
  return (
    <section id="booking" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="w-14 h-1 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] rounded mx-auto mb-4" />
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-white mb-3">Запись онлайн</h2>
          <p className="text-white/60">Выберите услугу, время и мастера — подтвердим запись за 15 минут</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2, 3].map(step => (
              <div key={step} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  bookingStep >= step ? "bg-[#1e40af] text-white" : "bg-white/10 text-white/40"
                }`}>
                  {bookingStep > step ? <Icon name="Check" size={14} /> : step}
                </div>
                {step < 3 && <div className={`w-12 h-px ${bookingStep > step ? "bg-[#1e40af]" : "bg-white/20"}`} />}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-16 mb-8 text-xs">
            {["Услуга и время", "Ваши данные", "Подтверждение"].map((label, i) => (
              <span key={label} className={bookingStep >= i + 1 ? "text-white" : "text-white/40"}>{label}</span>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
            {bookingStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">Услуга</label>
                  <select value={bookingData.service}
                    onChange={e => setBookingData({ ...bookingData, service: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 appearance-none">
                    <option value="" className="text-gray-800">Выберите услугу...</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title} className="text-gray-800">{s.title} — {s.price}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">Дата</label>
                  <Input type="date" value={bookingData.date}
                    onChange={e => setBookingData({ ...bookingData, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    className="bg-white/10 border-white/20 text-white [color-scheme:dark]" />
                </div>
                <div>
                  <label className="text-white/80 text-sm font-medium mb-3 block">Время</label>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map(t => (
                      <button key={t} onClick={() => setBookingData({ ...bookingData, time: t })}
                        className={`py-2 rounded-lg text-sm font-medium border transition-all ${
                          bookingData.time === t ? "bg-[#1e40af] border-[#1e40af] text-white" : "bg-white/5 border-white/20 text-white/70 hover:border-blue-400"
                        }`}>{t}</button>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-3"
                  disabled={!bookingData.service || !bookingData.date || !bookingData.time}
                  onClick={() => setBookingStep(2)}>
                  Далее <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            )}

            {bookingStep === 2 && (
              <div className="space-y-5 animate-fade-in">
                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" value={bookingData.name}
                    onChange={e => setBookingData({ ...bookingData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                </div>
                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" value={bookingData.phone}
                    onChange={e => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                </div>
                <div className="bg-white/5 rounded-xl p-4 space-y-2 text-sm">
                  <div className="flex justify-between text-white/60"><span>Услуга</span><span className="text-white">{bookingData.service}</span></div>
                  <div className="flex justify-between text-white/60"><span>Дата и время</span><span className="text-white">{bookingData.date} в {bookingData.time}</span></div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setBookingStep(1)} className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent">Назад</Button>
                  <Button className="flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                    disabled={!bookingData.name || !bookingData.phone}
                    onClick={() => setBookingStep(3)}>Подтвердить</Button>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div className="text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="CheckCircle" size={32} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-white mb-2">Запись создана!</h3>
                  <p className="text-white/60 text-sm">Свяжемся с вами по номеру {bookingData.phone} для подтверждения</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-sm space-y-2">
                  <div className="flex justify-between text-white/60"><span>Имя</span><span className="text-white">{bookingData.name}</span></div>
                  <div className="flex justify-between text-white/60"><span>Услуга</span><span className="text-white">{bookingData.service}</span></div>
                  <div className="flex justify-between text-white/60"><span>Дата</span><span className="text-white">{bookingData.date} в {bookingData.time}</span></div>
                </div>
                <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white"
                  onClick={() => { setBookingStep(1); setBookingData({ service: "", date: "", time: "", name: "", phone: "" }); }}>
                  Новая запись
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BonusesSection() {
  return (
    <section id="bonuses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Бонусная программа" subtitle="Накапливайте баллы и получайте скидки. 1 балл = 1 рубль" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {BONUSES.map(b => (
            <div key={b.title} className={`card-hover rounded-xl p-6 border ${b.color}`}>
              <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center mb-4">
                <Icon name={b.icon} size={22} className="text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-base text-[#0f172a] mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="font-montserrat font-bold text-xl text-[#0f172a] mb-6 text-center">Уровни участника</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Стандарт", points: "0–10 000", perks: "5% кешбэк", icon: "🥉" },
              { name: "Серебро", points: "10 001–30 000", perks: "7% кешбэк + приоритет", icon: "🥈" },
              { name: "Золото", points: "30 001–50 000", perks: "9% кешбэк + подарки", icon: "🥇" },
              { name: "Платинум", points: "50 000+", perks: "10% + персональный менеджер", icon: "👑" },
            ].map(level => (
              <div key={level.name} className="bg-white rounded-xl p-5 text-center border border-gray-200 card-hover">
                <div className="text-3xl mb-2">{level.icon}</div>
                <div className="font-montserrat font-bold text-[#0f172a] mb-1">{level.name}</div>
                <div className="text-xs text-gray-400 mb-2">{level.points} баллов</div>
                <div className="text-xs font-medium text-[#1e40af]">{level.perks}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface MastersProps {
  masterRatings: Record<number, number>;
  setMasterRatings: (fn: (prev: Record<number, number>) => Record<number, number>) => void;
}

export function MastersSection({ masterRatings, setMasterRatings }: MastersProps) {
  return (
    <section id="masters" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Наши мастера" subtitle="Сертифицированные специалисты с многолетним опытом" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {MASTERS.map((m, i) => (
            <div key={`${m.name}-${i}`} className="card-hover bg-white border border-gray-200 rounded-2xl p-7 text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">{m.avatar}</div>
              <h3 className="font-montserrat font-bold text-lg text-[#0f172a] mb-1">{m.name}</h3>
              <p className="text-[#1e40af] text-sm font-medium mb-1">{m.role}</p>
              <p className="text-gray-400 text-sm mb-4">{m.exp}</p>
              <div className="flex items-center justify-center gap-2 mb-1">
                <StarRating rating={m.rating} />
                <span className="font-montserrat font-bold text-[#0f172a]">{m.rating}</span>
              </div>
              <p className="text-xs text-gray-400">{m.reviews} отзывов</p>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-2">Оставить оценку:</p>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button key={star} onClick={() => setMasterRatings(prev => ({ ...prev, [i]: star }))}
                      className="transition-transform hover:scale-110">
                      <Icon name="Star" size={20}
                        className={`transition-colors ${(masterRatings[i] || 0) >= star ? "fill-amber-400 text-amber-400" : "text-gray-200 hover:text-amber-300"}`} />
                    </button>
                  ))}
                </div>
                {masterRatings[i] && <p className="text-xs text-green-600 mt-1.5 animate-fade-in">Спасибо за оценку!</p>}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-montserrat font-bold text-2xl text-[#0f172a] mb-8 text-center">Отзывы клиентов</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {REVIEWS.map((r, i) => (
              <div key={i} className="card-hover bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-[#0f172a]">{r.author}</p>
                    <p className="text-xs text-gray-400">{r.date}</p>
                  </div>
                  <StarRating rating={r.rating} />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{r.text}</p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">{r.service}</Badge>
                  <Badge variant="outline" className="text-xs text-[#1e40af] border-blue-200">{r.master}</Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-7 max-w-xl mx-auto">
            <h4 className="font-montserrat font-bold text-lg text-[#0f172a] mb-5 text-center">Оставить отзыв</h4>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" />
              <select className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af]">
                <option>Выберите услугу...</option>
                {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
              <div className="flex gap-1 items-center">
                <span className="text-sm text-gray-500 mr-2">Оценка:</span>
                {[1, 2, 3, 4, 5].map(s => (
                  <Icon key={s} name="Star" size={22} className="fill-amber-400 text-amber-400 cursor-pointer hover:scale-110 transition-transform" />
                ))}
              </div>
              <Textarea placeholder="Напишите ваш отзыв..." className="resize-none" rows={3} />
              <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white">Отправить отзыв</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Контакты" subtitle="Работаем ежедневно с 8:00 до 21:00" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
            <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center mb-4">
              <Icon name="Phone" size={22} className="text-white" />
            </div>
            <h3 className="font-montserrat font-bold text-lg text-[#0f172a] mb-3">Телефоны</h3>
            <div className="space-y-2">
              <a href="tel:+79180416015" className="flex items-center gap-2 text-[#1e40af] hover:text-[#1e3a8a] font-medium transition-colors">
                <Icon name="Phone" size={15} /> +7 (918) 041-60-15
              </a>
              <p className="text-gray-400 text-sm mt-3">Звонки с 8:00 до 21:00</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
            <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center mb-4">
              <Icon name="MessageCircle" size={22} className="text-white" />
            </div>
            <h3 className="font-montserrat font-bold text-lg text-[#0f172a] mb-3">Мессенджеры</h3>
            <div className="space-y-3">
              <a href="https://wa.me/79180416015" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 py-2 px-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
                <span className="text-xl">💬</span>
                <div>
                  <p className="font-medium text-green-800 text-sm">WhatsApp</p>
                  <p className="text-xs text-green-600">Ответим за 5 минут</p>
                </div>
              </a>
              <a href="https://t.me/autoprofiru" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 py-2 px-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                <span className="text-xl">✈️</span>
                <div>
                  <p className="font-medium text-blue-800 text-sm">Telegram</p>
                  <p className="text-xs text-blue-600">@autoprofiru</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
            <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center mb-4">
              <Icon name="MapPin" size={22} className="text-white" />
            </div>
            <h3 className="font-montserrat font-bold text-lg text-[#0f172a] mb-3">Адрес</h3>
            <p className="text-gray-800 font-medium mb-1">г. Анапа, угол Пролетарская, 17 / Шевченко, 269</p>
            <p className="text-gray-400 text-sm mb-4">Удобная парковка рядом</p>
            <div className="space-y-1 text-sm text-gray-500">
              <div className="flex items-center gap-2"><Icon name="Clock" size={14} /> Пн–Вс: 08:00–21:00</div>
              <div className="flex items-center gap-2"><Icon name="Car" size={14} /> Бесплатная парковка</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Icon name="MapPin" size={40} className="mx-auto mb-2 text-[#1e40af] opacity-40" />
            <p className="font-medium text-gray-600">г. Анапа, угол Пролетарская 17 / Шевченко 269</p>
            <p className="text-sm">Карта будет подключена после настройки</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[#1e40af] rounded flex items-center justify-center">
                <Icon name="Wrench" size={16} className="text-white" />
              </div>
              <span className="font-montserrat font-extrabold text-lg">АвтоПрофи</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">Профессиональный автосервис г. Анапа. Более 10 лет опыта. Доверяют более 2 000 клиентов.</p>
          </div>
          <div>
            <h4 className="font-montserrat font-bold mb-3 text-xs uppercase tracking-wider text-white/50">Услуги</h4>
            <div className="space-y-1.5 text-sm text-white/50">
              {SERVICES.slice(0, 4).map(s => (
                <button key={s.title} onClick={() => onScrollTo("services")} className="block hover:text-white transition-colors text-left">{s.title}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-montserrat font-bold mb-3 text-xs uppercase tracking-wider text-white/50">Разделы</h4>
            <div className="space-y-1.5 text-sm text-white/50">
              {NAV_LINKS.map(l => (
                <button key={l.id} onClick={() => onScrollTo(l.id)} className="block hover:text-white transition-colors text-left">{l.label}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-montserrat font-bold mb-3 text-xs uppercase tracking-wider text-white/50">Контакты</h4>
            <div className="space-y-2 text-sm text-white/50">
              <a href="tel:+79180416015" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Phone" size={14} /> +7 (918) 041-60-15
              </a>
              <p className="flex items-center gap-2"><Icon name="Clock" size={14} /> Пн–Вс: 08:00–21:00</p>
              <p className="flex items-center gap-2"><Icon name="MapPin" size={14} /> г. Анапа, Пролетарская 17</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-sm">
          <p>© 2026 АвтоПрофи. Все права защищены.</p>
          <div className="flex gap-4">
            <button className="hover:text-white/60 transition-colors">Политика конфиденциальности</button>
            <button className="hover:text-white/60 transition-colors">Пользовательское соглашение</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
