import { Icon } from "@iconify/react";

export default function Architects({ onQuoteModal }: { onQuoteModal: () => void }) {
  return (
    <section id="architects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/98 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">For Architects & Builders</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-6">Your Vision,<br /><span className="text-sky-400 italic">Our Craft</span></h2>
            <p className="text-slate-400 leading-relaxed mb-8">We partner with architects to bring unique door designs to life. From custom CNC routing to veneer finishes, our manufacturing capabilities match your creative ambition.</p>
            <div className="space-y-5 mb-10">
              {[
                { icon: "mdi:cog-outline", title: "Custom CNC Routing", desc: "Intricate patterns cut to your specifications" },
                { icon: "mdi:ruler-square", title: "Bespoke Dimensions", desc: "Non-standard sizes to exact requirements" },
                { icon: "mdi:file-document-check", title: "Technical Documentation", desc: "CAD files and material samples for proposals" },
                { icon: "mdi:account-group", title: "Dedicated Support", desc: "Single point of contact from design to delivery" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="feature-icon w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><Icon icon={item.icon} className="text-sky-400" /></div>
                  <div><h4 className="text-white font-medium text-sm mb-1">{item.title}</h4><p className="text-sm text-slate-400">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <button onClick={onQuoteModal} className="quote-btn inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-sm">Collaborate With Us <Icon icon="mdi:arrow-right" /></button>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="bg-slate-800/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl" />
              <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-6 block relative z-10">MD&apos;s Desk</span>
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6 relative z-10">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-sky-500/20 flex-shrink-0">
                  <img src="https://eurekaindia.com/wp-content/uploads/2020/01/about-eureka.jpg" alt="Dr. Pramod Bhalerao" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-1">Dr. Pramod Bhalerao</h3>
                  <p className="text-sm text-sky-400 font-medium mb-3">Managing Director</p>
                  <p className="text-sm text-slate-400 leading-relaxed">&quot;With over 25 years in door manufacturing, our mission has been simple — deliver quality that builders can trust and homeowners can admire. Every door that leaves our plant carries the Eureka promise.&quot;</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 relative z-10">
                <div className="text-center p-3 rounded-lg bg-slate-900/50"><div className="text-xl font-serif text-white">25+</div><div className="text-xs text-slate-500">Years Leading Eureka</div></div>
                <div className="text-center p-3 rounded-lg bg-slate-900/50"><div className="text-xl font-serif text-sky-400">864K+</div><div className="text-xs text-slate-500">Doors Under His Vision</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
