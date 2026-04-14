import { Icon } from "@iconify/react";
import { WHY_EUREKA } from "@/lib/constants";

export default function WhyEureka() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Why Eureka</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">Built on Trust, <span className="text-sky-400 italic">Delivered with Precision</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_EUREKA.map((item, i) => (
            <div key={item.title} className={`p-6 rounded-xl bg-slate-800/30 border border-white/5 hover:border-sky-500/20 transition-all duration-500 group reveal reveal-delay-${i % 4}`}>
              <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon icon={item.icon} className="text-sky-400 text-xl" />
              </div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
