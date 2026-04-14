import { Icon } from "@iconify/react";

export default function CTA({ onQuoteModal }: { onQuoteModal: () => void }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/40 via-slate-950 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
        <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Start Your Project</span>
        <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-6">Ready to <span className="text-sky-400 italic">Partner</span> with Eureka?</h2>
        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">Whether you need 100 doors or 10,000 — get a customized quote within 24 hours.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={onQuoteModal} className="quote-btn inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-lg text-sm">Get Bulk Quote <Icon icon="mdi:arrow-right" /></button>
          <a href="https://wa.me/918888784444?text=Hi%20Eureka%20Doors%2C%20I%27m%20interested%20in%20bulk%20door%20orders." target="_blank" className="inline-flex items-center gap-2 text-white font-medium px-10 py-4 rounded-lg text-sm border border-white/20 hover:bg-white/5 hover:border-white/30 transition-all duration-300">
            <Icon icon="mdi:whatsapp" className="text-green-400" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
