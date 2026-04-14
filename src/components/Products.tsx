"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { PRODUCTS } from "@/lib/constants";

export default function Products({ onQuoteModal }: { onQuoteModal: (p?: string) => void }) {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "bedroom", "bathroom", "allrooms"];
  const labels: Record<string, string> = { all: "All Products", bedroom: "Bedroom", bathroom: "Bathroom", allrooms: "All Rooms" };

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="products" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Products</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">6 Product Lines, One Standard — <span className="text-sky-400 italic">Excellence</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Every door engineered for 15-20 years of durability.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === c ? "bg-sky-500 text-white" : "bg-white/5 text-slate-400 border border-white/10 hover:border-sky-500/30 hover:text-white"}`}>
              {labels[c]}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div key={p.id} className="product-card-3d rounded-xl bg-slate-800/40 border border-white/5 hover:border-sky-500/20 overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img src={p.image} alt={`${p.name} by Eureka`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-white">{p.categoryLabel}</div>
                {p.badge && <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${p.badgeColor} text-xs font-semibold text-white`}>{p.badge}</div>}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-serif text-white">{p.name}{p.star && <span className="text-amber-400 text-sm"> ⭐</span>}</h3>
                  <span className="text-sm font-semibold text-sky-400 whitespace-nowrap">{p.price}</span>
                </div>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400">{t}</span>)}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500"><Icon icon="mdi:clock-outline" />15-20 years</div>
                  <button onClick={() => onQuoteModal(p.name)} className="text-xs text-sky-400 font-medium hover:text-sky-300 transition-colors flex items-center gap-1">Get Quote <Icon icon="mdi:arrow-right" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
