import { Icon } from "@iconify/react";

export default function GroupCompanies() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Eureka Group</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">Beyond <span className="text-sky-400 italic">Doors</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group-card rounded-xl bg-slate-800/30 border border-white/5 overflow-hidden reveal">
            <div className="h-48 overflow-hidden"><img src="https://eurekaindia.com/wp-content/uploads/2019/12/structure.jpg" alt="Eureka Structures" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="p-6"><div className="text-xs text-sky-400 font-medium mb-2">Incorporated 2006</div><h3 className="text-lg font-serif text-white mb-2">Eureka Structures</h3><p className="text-sm text-slate-400 leading-relaxed">Civil construction excellence delivering residential and commercial projects.</p></div>
          </div>
          <div className="group-card rounded-xl bg-slate-800/30 border border-white/5 overflow-hidden reveal reveal-delay-2">
            <div className="h-48 bg-gradient-to-br from-sky-950/50 to-slate-900 flex items-center justify-center"><Icon icon="mdi:office-building" className="text-sky-500/30 text-8xl" /></div>
            <div className="p-6"><div className="text-xs text-sky-400 font-medium mb-2">Land Development</div><h3 className="text-lg font-serif text-white mb-2">Eureka Land Dealing</h3><p className="text-sm text-slate-400 leading-relaxed">Agriculture, Commercial, Residential &amp; Industrial land dealings.</p></div>
          </div>
          <div className="group-card rounded-xl bg-slate-800/30 border border-white/5 overflow-hidden reveal reveal-delay-4">
            <div className="h-48 overflow-hidden"><img src="https://eurekaindia.com/wp-content/uploads/2019/12/sai-seva.jpg" alt="Shree Sai Seva School" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="p-6"><div className="text-xs text-amber-400 font-medium mb-2">Social Welfare · Est. 2008</div><h3 className="text-lg font-serif text-white mb-2">Shree Sai Seva School</h3><p className="text-sm text-slate-400 leading-relaxed">Basic literacy and vocational training for mentally challenged children.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
