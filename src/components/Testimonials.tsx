import { Icon } from "@iconify/react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "\"Eureka supplied 2,000+ doors for 500+ residential units in Pune. Quality was consistent across every unit, delivery always on schedule.\"",
      logo: "https://eurekaindia.com/wp-content/uploads/2020/01/VASUDHA.png",
      name: "Mr. Yogesh Wani",
      company: "Vasudha Projects, Pune",
      badge: "2,000+ Doors · 500+ Units",
      badgeColor: "sky",
      badgeIcon: "mdi:door",
      delay: "",
    },
    {
      text: "\"10+ years partnership. 6,000+ doors across 1,000+ unit projects. Their consistency and willingness to customize is unmatched.\"",
      logo: "https://eurekaindia.com/wp-content/uploads/2020/01/RAVIMA.jpg",
      name: "Mr. Gaurav Gadiya",
      company: "Ravima Ventures",
      badge: "10-Year Partnership · 6,000+ Doors",
      badgeColor: "amber",
      badgeIcon: "mdi:handshake",
      delay: "reveal-delay-2",
    },
    {
      text: "\"6,000+ CNC Routed veneer doors for 800+ units annually. Eureka handled the complexity with ease. Added real value to our project.\"",
      logo: "https://eurekaindia.com/wp-content/uploads/2020/01/PHARANDE.png",
      name: "Mr. Ramesh Pharande",
      company: "Pharande Promoters, Pune",
      badge: "6,000+ CNC Doors · 800+ Units/yr",
      badgeColor: "purple",
      badgeIcon: "mdi:vector-intersection",
      delay: "reveal-delay-4",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Client Stories</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">Trusted by <span className="text-sky-400 italic">India&apos;s Top Builders</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className={`testimonial-card rounded-xl border border-white/5 p-8 hover:border-sky-500/20 transition-all duration-500 reveal ${t.delay}`}>
              <div className="flex items-center gap-1 mb-5">{[...Array(5)].map((_, i) => <Icon key={i} icon="mdi:star" className="text-amber-400" />)}</div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="pt-5 border-t border-white/5 mb-4"><img src={t.logo} alt={t.company} className="h-10 w-auto object-contain opacity-80" /></div>
              <div className="text-white text-sm font-medium">{t.name}</div>
              <div className="text-xs text-slate-500 mb-4">{t.company}</div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-${t.badgeColor}-500/10 border border-${t.badgeColor}-500/20`}>
                <Icon icon={t.badgeIcon} className={`text-${t.badgeColor}-400 text-sm`} />
                <span className={`text-xs text-${t.badgeColor}-400 font-medium`}>{t.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
