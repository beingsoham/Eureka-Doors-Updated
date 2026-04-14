import { Icon } from "@iconify/react";
import { AWARDS } from "@/lib/constants";

export default function Awards() {
  return (
    <section id="awards" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Recognition</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">Awards & <span className="text-sky-400 italic">Honours</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {AWARDS.map((a, i) => (
            <div key={a.title} className={`flex items-center gap-4 p-5 rounded-xl bg-slate-800/30 border border-white/5 hover:bg-slate-800/50 transition-all reveal reveal-delay-${i % 4}`}>
              <div className={`w-10 h-10 rounded-lg ${a.color === "amber" ? "bg-amber-500/10 border-amber-500/20" : "bg-sky-500/10 border-sky-500/20"} border flex items-center justify-center flex-shrink-0`}>
                <Icon icon={a.icon} className={a.color === "amber" ? "text-amber-400" : "text-sky-400"} />
              </div>
              <div><div className="text-white text-sm font-medium">{a.title}</div><div className="text-xs text-slate-500">{a.subtitle}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
