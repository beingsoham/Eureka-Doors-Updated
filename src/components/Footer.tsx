import { Icon } from "@iconify/react";
import { PRODUCTS } from "@/lib/constants";

export default function Footer({ onQuoteModal }: { onQuoteModal: () => void }) {
  return (
    <footer className="pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center"><Icon icon="mdi:door-sliding" className="text-sky-400 text-xl" /></div>
              <div><span className="text-white font-serif text-xl font-semibold">Eureka</span><span className="text-sky-400 font-serif text-xl font-semibold"> Doors</span></div>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">Crafted for Every Opening. India&apos;s trusted door manufacturer since 2000.</p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://instagram.com/eureka_doors", icon: "mdi:instagram" },
                { href: "https://facebook.com/eureka_doors", icon: "mdi:facebook" },
                { href: "https://linkedin.com/company/eureka-doors", icon: "mdi:linkedin" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-sky-500/10 transition-all"><Icon icon={s.icon} className="text-slate-500 text-sm" /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-5">Products</h4>
            <ul className="space-y-3">{PRODUCTS.map((p) => <li key={p.id}><a href="#products" className="text-sm text-slate-500 hover:text-sky-400 transition-colors">{p.name}</a></li>)}</ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { href: "#gallery", label: "Gallery" },
                { href: "#architects", label: "Architects" },
                { href: "#awards", label: "Awards" },
                { href: "#testimonials", label: "Client Stories" },
                { href: "#contact", label: "Contact Us" },
              ].map((l) => <li key={l.href}><a href={l.href} className="text-sm text-slate-500 hover:text-sky-400 transition-colors">{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-500"><Icon icon="mdi:phone" className="text-sky-500/50 text-sm" /><a href="tel:+918888784444" className="hover:text-sky-400 transition-colors">+91 – 8888 78 4444</a></li>
              <li className="flex items-center gap-2 text-sm text-slate-500"><Icon icon="mdi:email-outline" className="text-sky-500/50 text-sm" /><a href="mailto:sales@eurekaindia.com" className="hover:text-sky-400 transition-colors">sales@eurekaindia.com</a></li>
              <li className="flex items-start gap-2 text-sm text-slate-500"><Icon icon="mdi:map-marker" className="text-sky-500/50 text-sm mt-0.5" /><span>Warje, Pune 411058</span></li>
            </ul>
            <button onClick={onQuoteModal} className="mt-6 quote-btn inline-flex items-center gap-2 text-white text-xs font-semibold px-5 py-2.5 rounded-lg">Get a Quote <Icon icon="mdi:arrow-right" /></button>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2025 Eureka Doors. All rights reserved. | eurekaindia.com</p>
          <div className="flex items-center gap-6"><a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</a><a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}
