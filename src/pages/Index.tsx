import { useState } from "react";
import { CartItem, Message, BookingData } from "@/components/auto/data";
import { Header, CartSidebar, AiChat } from "@/components/auto/HeaderCart";
import {
  HeroSection, ServicesSection, PartsSection, BookingSection,
  BonusesSection, MastersSection, ContactsSection, Footer,
} from "@/components/auto/Sections";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState<Message[]>([
    { role: "ai", text: "Здравствуйте! Я AI-ассистент АвтоПрофи. Отвечу на вопросы об услугах, ценах и записи. Чем могу помочь?" }
  ]);
  const [aiInput, setAiInput] = useState("");
  const [partsFilter, setPartsFilter] = useState("Все");
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({ service: "", date: "", time: "", name: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState<"card" | "sbp">("card");
  const [masterRatings, setMasterRatings] = useState<Record<number, number>>({});

  const addToCart = (part: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === part.name);
      if (existing) return prev.map(i => i.name === part.name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { name: part.name, price: part.price, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => setCart(prev => prev.filter(i => i.name !== name));

  const cartTotal = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\D/g, ""));
    return sum + price * item.qty;
  }, 0);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-ibm">
      <Header
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onCartOpen={() => setCartOpen(!cartOpen)}
        onScrollTo={scrollTo}
      />

      <CartSidebar
        cart={cart}
        cartOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        cartTotal={cartTotal}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      <HeroSection onScrollTo={scrollTo} />
      <ServicesSection onScrollTo={scrollTo} />

      <PartsSection
        partsFilter={partsFilter}
        setPartsFilter={setPartsFilter}
        onAddToCart={addToCart}
      />

      <BookingSection
        bookingStep={bookingStep}
        setBookingStep={setBookingStep}
        bookingData={bookingData}
        setBookingData={setBookingData}
      />

      <BonusesSection />

      <MastersSection
        masterRatings={masterRatings}
        setMasterRatings={setMasterRatings}
      />

      <ContactsSection />
      <Footer onScrollTo={scrollTo} />

      <AiChat
        aiOpen={aiOpen}
        setAiOpen={setAiOpen}
        aiMessages={aiMessages}
        setAiMessages={setAiMessages}
        aiInput={aiInput}
        setAiInput={setAiInput}
      />
    </div>
  );
}
