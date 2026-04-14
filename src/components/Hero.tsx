import { Icon } from "@iconify/react";

export default function Hero({ onQuoteModal }: { onQuoteModal: (p?: string) => void }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(14,165,233,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-600/3 rounded-full blur-[100px]" />
      </div>

      {/* Background floating doors */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 hidden lg:block" style={{ animation: "heroFloat1 8s ease-in-out infinite" }}>
        <div className="door-scene opacity-20" style={{ transform: "rotateY(25deg) rotateX(10deg) scale(0.7)" }}>
          <div className="relative w-48 h-72">
            <div className="door-panel door-panel-left" style={{ border: "2px solid rgba(14,165,233,0.15)" }}><div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" /></div>
            <div className="door-panel door-panel-right" style={{ border: "2px solid rgba(14,165,233,0.15)" }}><div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" /></div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 right-[25%] hidden lg:block" style={{ animation: "heroFloat2 10s ease-in-out infinite", animationDelay: "1s" }}>
        <div className="door-scene opacity-10" style={{ transform: "rotateY(-20deg) rotateX(8deg) scale(0.5)" }}>
          <div className="relative w-40 h-60">
            <div className="door-panel door-panel-left" style={{ border: "2px solid rgba(14,165,233,0.1)" }}><div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" /></div>
            <div className="door-panel door-panel-right" style={{ border: "2px solid rgba(14,165,233,0.1)" }}><div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" /></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Since 2000 · 864,000+ Doors Installed</span>
            </div>
            <h1 className="animate-fade-in-up font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight mb-6" style={{ animationDelay: "0.15s" }}>
              Crafted for<br /><span className="text-sky-400 italic">Every Opening</span>
            </h1>
            <p className="animate-fade-in-up text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mb-10" style={{ animationDelay: "0.3s" }}>
              India&apos;s trusted bulk door manufacturer for builders &amp; developers. PVC, Wooden, Theme &amp; FRP doors — engineered with precision, delivered on schedule.
            </p>
            <div className="animate-fade-in-up flex flex-wrap gap-4" style={{ animationDelay: "0.45s" }}>
              <button onClick={() => onQuoteModal()} className="quote-btn inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm">
                Get Bulk Quote <Icon icon="mdi:arrow-right" />
              </button>
              <a href="#products" className="inline-flex items-center gap-2 text-white font-medium px-8 py-4 rounded-lg text-sm border border-white/20 hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                Explore Products <Icon icon="mdi:chevron-down" />
              </a>
            </div>
            <div className="animate-fade-in-up flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10" style={{ animationDelay: "0.6s" }}>
              {[
                { icon: "mdi:shield-check", text: "RERA Project Ready" },
                { icon: "mdi:factory", text: "Pune Manufacturing Plant" },
                { icon: "mdi:truck-delivery", text: "Timely Delivery" },
                { icon: "mdi:star-circle", text: "50+ Awards Won" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <Icon icon={item.icon} className="text-sky-400 text-lg" />
                  <span className="text-xs text-slate-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Door */}
          <div className="flex justify-center items-center">
            <div className="door-scene" style={{ animation: "heroFloat1 8s ease-in-out infinite" }}>
              <div className="door-frame-3d" style={{ animation: "doorPulseGlow 4s ease-in-out infinite" }}>
                <div className="door-frame-border" />
                <div className="door-frame-border" style={{ inset: "-12px", borderColor: "rgba(14,165,233,0.06)" }} />
                <div className="door-panel door-panel-left">
                  <img src="https://eurekaindia.com/wp-content/uploads/2020/02/theme-Door-768x635.jpg" alt="Eureka Theme Door" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/20" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-sky-400 to-sky-600 rounded-full shadow-lg shadow-sky-500/30" />
                  <div className="absolute top-8 left-4 right-8 bottom-8 border border-sky-500/10 rounded-sm" />
                </div>
                <div className="door-panel door-panel-right">
                  <img src="https://eurekaindia.com/wp-content/uploads/2020/02/theme-Door-768x635.jpg" alt="Eureka Theme Door" className="w-full h-full object-cover" style={{ marginLeft: "200%" }} />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-950/20" />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-sky-400 to-sky-600 rounded-full shadow-lg shadow-sky-500/30" />
                  <div className="absolute top-8 left-8 right-4 bottom-8 border border-sky-500/10 rounded-sm" />
                </div>
                <div className="door-light" />
                <div className="door-shadow" />
              </div>
              <div className="absolute -inset-16 border border-sky-500/5 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-24 border border-dashed border-sky-500/3 rounded-full animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon icon="mdi:chevron-double-down" className="text-slate-500 text-2xl" />
      </div>
    </section>
  );
}
