"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { PRODUCTS } from "@/lib/constants";

export default function Navbar({
  scrolled,
  mobileOpen,
  mobileDropdown,
  setMobileDropdown,
  toggleMobile,
  closeMobile,
  onQuoteModal,
}: {
  scrolled: boolean;
  mobileOpen: boolean;
  mobileDropdown: boolean;
  setMobileDropdown: (v: boolean) => void;
  toggleMobile: () => void;
  closeMobile: () => void;
  onQuoteModal: (product?: string) => void;
}) {
  const [desktopDropdown, setDesktopDropdown] = useState(false);

  const categoryMap: Record<string, string> = {
    wooden: "bedroom",
    theme: "bedroom",
    frames: "allrooms",
    pvc: "bathroom",
    frp: "bathroom",
    balcony: "allrooms",
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 transition-all duration-300">
              <Icon icon="mdi:door-sliding" className="text-sky-400 text-xl" />
            </div>
            <div>
              <span className="text-white font-serif text-xl font-semibold tracking-tight">
                Eureka
              </span>
              <span className="text-sky-400 font-serif text-xl font-semibold">
                {" "}Doors
              </span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#gallery" className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
              Gallery
            </a>
            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdown(true)}
              onMouseLeave={() => setDesktopDropdown(false)}
            >
              <button className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-1">
                Products
                <Icon icon="mdi:chevron-down" className="text-xs" />
              </button>
              {desktopDropdown && (
                <div className="absolute top-full left-0 pt-2 animate-slide-down">
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[260px] shadow-2xl">
                    {PRODUCTS.map((p) => (
                      <a
                        key={p.id}
                        href="#products"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <Icon icon="mdi:door" className="text-sky-400 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm text-white font-medium">{p.name}</div>
                          <div className="text-xs text-slate-500">{p.price}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#architects" className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
              Architects
            </a>
            <a href="#awards" className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
              Awards
            </a>
            <a href="#contact" className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => onQuoteModal()} className="quote-btn hidden sm:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
              Get a Quote
              <Icon icon="mdi:arrow-right" className="text-base" />
            </button>
            <button onClick={toggleMobile} className="lg:hidden text-white p-2">
              <Icon icon={mobileOpen ? "mdi:close" : "mdi:menu"} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
            <a href="#gallery" onClick={closeMobile} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Gallery
            </a>
            <div>
              <button
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="w-full flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Products
                <Icon
                  icon="mdi:chevron-down"
                  className="text-lg transition-transform"
                  style={{ transform: mobileDropdown ? "rotate(180deg)" : "" }}
                />
              </button>
              {mobileDropdown && (
                <div className="pl-6 space-y-1">
                  {PRODUCTS.map((p) => (
                    <a
                      key={p.id}
                      href="#products"
                      onClick={closeMobile}
                      className="block px-4 py-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#architects" onClick={closeMobile} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Architects
            </a>
            <a href="#awards" onClick={closeMobile} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Awards
            </a>
            <a href="#contact" onClick={closeMobile} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Contact
            </a>
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => { onQuoteModal(); closeMobile(); }}
                className="quote-btn w-full flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-lg"
              >
                Get a Quote
                <Icon icon="mdi:arrow-right" className="text-base" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
