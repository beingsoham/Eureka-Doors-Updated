import { Icon } from "@iconify/react";
import { VALUES } from "@/lib/constants";

export default function CoreValues() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Our Foundation</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">Values That <span className="text-sky-400 italic">Drive Us</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {VALUES.map((v, i) => (
            <div key={v.title} className={`value-card text-center p-6 rounded-xl bg-slate-800/30 border border-white/5 reveal reveal-delay-${i}`}>
              <div className="value-icon w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Icon icon={v.icon} className="text-sky-400 text-2xl" />
              </div>
              <h3 className="text-white font-medium text-sm mb-2">{v.title}</h3>
              <p className="text-xs text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
