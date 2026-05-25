import { useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAV_LINKS, CartItem, Message, getAiReply } from "./data";

interface HeaderProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  cartCount: number;
  onCartOpen: () => void;
  onScrollTo: (id: string) => void;
}

export function Header({ activeSection, mobileMenuOpen, setMobileMenuOpen, cartCount, onCartOpen, onScrollTo }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onScrollTo("home")}>
            <div className="w-8 h-8 bg-[#1e40af] rounded flex items-center justify-center">
              <Icon name="Wrench" size={16} className="text-white" />
            </div>
            <div>
              <span className="font-montserrat font-extrabold text-[#0f172a] text-lg leading-none">АвтоПрофи</span>
              <span className="block text-xs text-gray-500 leading-none">профессиональный сервис</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => onScrollTo(link.id)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  activeSection === link.id ? "bg-[#1e40af] text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}>
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+79180416015" className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#1e40af] hover:text-[#1e3a8a] transition-colors">
              <Icon name="Phone" size={15} />
              +7 (918) 041-60-15
            </a>
            <button onClick={onCartOpen} className="relative p-2 rounded hover:bg-gray-100 transition-colors">
              <Icon name="ShoppingCart" size={20} className="text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <Button size="sm" onClick={() => onScrollTo("booking")} className="hidden md:flex bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
              Записаться
            </Button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button key={link.id} onClick={() => onScrollTo(link.id)}
                className="text-left px-3 py-2.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                {link.label}
              </button>
            ))}
            <a href="tel:+79180416015" className="flex items-center gap-2 px-3 py-2.5 text-[#1e40af] font-medium text-sm">
              <Icon name="Phone" size={15} /> +7 (918) 041-60-15
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

interface CartSidebarProps {
  cart: CartItem[];
  cartOpen: boolean;
  onClose: () => void;
  onRemove: (name: string) => void;
  cartTotal: number;
  paymentMethod: "card" | "sbp";
  setPaymentMethod: (v: "card" | "sbp") => void;
}

export function CartSidebar({ cart, cartOpen, onClose, onRemove, cartTotal, paymentMethod, setPaymentMethod }: CartSidebarProps) {
  if (!cartOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white w-full max-w-sm h-full flex flex-col shadow-2xl animate-slide-right">
        <div className="flex items-center justify-between p-5 border-b">
          <h3 className="font-montserrat font-bold text-lg">Корзина</h3>
          <button onClick={onClose}><Icon name="X" size={20} className="text-gray-400" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Icon name="ShoppingCart" size={40} className="mx-auto mb-3 opacity-30" />
              <p>Корзина пуста</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map(item => (
                <div key={item.name} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug line-clamp-2">{item.name}</p>
                    <p className="text-[#1e40af] font-semibold mt-1">{item.price} × {item.qty}</p>
                  </div>
                  <button onClick={() => onRemove(item.name)} className="text-gray-400 hover:text-red-500 transition-colors mt-0.5">
                    <Icon name="Trash2" size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-5 border-t space-y-4">
            <div className="flex justify-between text-lg font-montserrat font-bold">
              <span>Итого</span>
              <span className="text-[#1e40af]">{cartTotal.toLocaleString()} ₽</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setPaymentMethod("card")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded border text-sm font-medium transition-all ${
                  paymentMethod === "card" ? "border-[#1e40af] bg-blue-50 text-[#1e40af]" : "border-gray-200 text-gray-500"
                }`}>
                <Icon name="CreditCard" size={16} /> Карта
              </button>
              <button onClick={() => setPaymentMethod("sbp")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded border text-sm font-medium transition-all ${
                  paymentMethod === "sbp" ? "border-[#1e40af] bg-blue-50 text-[#1e40af]" : "border-gray-200 text-gray-500"
                }`}>
                <Icon name="Smartphone" size={16} /> СБП
              </button>
            </div>
            <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
              Оплатить {cartTotal.toLocaleString()} ₽
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

interface AiChatProps {
  aiOpen: boolean;
  setAiOpen: (v: boolean) => void;
  aiMessages: Message[];
  setAiMessages: (fn: (prev: Message[]) => Message[]) => void;
  aiInput: string;
  setAiInput: (v: string) => void;
}

export function AiChat({ aiOpen, setAiOpen, aiMessages, setAiMessages, aiInput, setAiInput }: AiChatProps) {
  const aiRef = useRef<HTMLDivElement>(null);

  const sendAiMessage = () => {
    if (!aiInput.trim()) return;
    const userMsg = aiInput.trim();
    setAiMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setAiInput("");
    setTimeout(() => {
      setAiMessages(prev => [...prev, { role: "ai", text: getAiReply(userMsg) }]);
    }, 600);
  };

  useEffect(() => {
    if (aiRef.current) aiRef.current.scrollTop = aiRef.current.scrollHeight;
  }, [aiMessages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {aiOpen && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-80 flex flex-col overflow-hidden animate-scale-in" style={{ height: 420 }}>
          <div className="bg-[#1e40af] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Bot" size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-montserrat font-bold text-sm">AI-Ассистент</p>
                <p className="text-blue-200 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  Онлайн
                </p>
              </div>
            </div>
            <button onClick={() => setAiOpen(false)} className="text-white/70 hover:text-white">
              <Icon name="X" size={18} />
            </button>
          </div>
          <div ref={aiRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {aiMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user" ? "bg-[#1e40af] text-white rounded-br-sm" : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <Input placeholder="Задайте вопрос..." value={aiInput}
                onChange={e => setAiInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendAiMessage()}
                className="text-sm h-9" />
              <Button size="sm" onClick={sendAiMessage} className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-3">
                <Icon name="Send" size={15} />
              </Button>
            </div>
            <div className="flex gap-1 mt-2 flex-wrap">
              {["Запись", "Цены", "Бонусы", "Оплата", "Адрес"].map(q => (
                <button key={q} onClick={() => setAiInput(q)}
                  className="text-xs px-2 py-0.5 rounded-full border border-gray-200 hover:border-[#1e40af] hover:text-[#1e40af] transition-colors text-gray-400">
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setAiOpen(!aiOpen)}
        className="w-14 h-14 bg-[#1e40af] hover:bg-[#1e3a8a] text-white rounded-full shadow-lg flex items-center justify-center transition-all animate-pulse-ring">
        <Icon name={aiOpen ? "X" : "Bot"} size={24} />
      </button>
    </div>
  );
}
