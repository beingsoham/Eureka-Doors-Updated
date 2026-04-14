"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Contact</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-6">Let&apos;s Build <span className="text-sky-400 italic">Together</span></h2>
            <p className="text-slate-400 leading-relaxed mb-10">Visit our office or reach out through any channel.</p>
            <div className="space-y-6">
              {[
                { icon: "mdi:map-marker", title: "Office & Plant", content: <><span>Eureka Towers, 5th Floor, Pune-Bangalore Highway,</span><br /><span>Warje, Pune 411058</span></> },
                { icon: "mdi:phone", title: "Phone", content: <><a href="tel:+918888784444" className="hover:text-sky-400 transition-colors">+91 – 8888 78 4444</a><br /><a href="tel:+919373040830" className="hover:text-sky-400 transition-colors">+91 – 9373 040 830</a></> },
                { icon: "mdi:email-outline", title: "Email", content: <><a href="mailto:sales@eurekaindia.com" className="hover:text-sky-400 transition-colors">sales@eurekaindia.com</a><br /><a href="mailto:info@eurekaindia.com" className="hover:text-sky-400 transition-colors">info@eurekaindia.com</a></> },
                { icon: "mdi:web", title: "Website", content: <a href="https://eurekaindia.com" target="_blank" className="hover:text-sky-400 transition-colors">eurekaindia.com</a> },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="feature-icon w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"><Icon icon={item.icon} className="text-sky-400" /></div>
                  <div><h4 className="text-white font-medium text-sm mb-1">{item.title}</h4><p className="text-sm text-slate-400">{item.content}</p></div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/5">
              <span className="text-xs text-slate-500 mr-2">Follow us:</span>
              {[
                { href: "https://instagram.com/eureka_doors", icon: "mdi:instagram" },
                { href: "https://facebook.com/eureka_doors", icon: "mdi:facebook" },
                { href: "https://linkedin.com/company/eureka-doors", icon: "mdi:linkedin" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500/10 hover:border-sky-500/20 transition-all duration-300">
                  <Icon icon={s.icon} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="bg-slate-800/40 border border-white/5 rounded-2xl p-8">
              <h3 className="text-lg font-serif text-white mb-6">Send us a message</h3>
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="block text-xs text-slate-400 mb-2 font-medium">Full Name *</label><input type="text" required placeholder="Your name" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
                    <div><label className="block text-xs text-slate-400 mb-2 font-medium">Company</label><input type="text" placeholder="Your company" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="block text-xs text-slate-400 mb-2 font-medium">Phone *</label><input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
                    <div><label className="block text-xs text-slate-400 mb-2 font-medium">Email *</label><input type="email" required placeholder="you@company.com" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
                  </div>
                  <div><label className="block text-xs text-slate-400 mb-2 font-medium">Product Interest</label>
                    <select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 transition-all duration-300">
                      <option value="">Select a product</option><option>Wooden Doors</option><option>Solid PVC Doors</option><option>Theme Doors</option><option>Post Forming Doors</option><option>FRP Doors</option><option>Frames &amp; Plywood</option><option>Multiple Products</option>
                    </select>
                  </div>
                  <div><label className="block text-xs text-slate-400 mb-2 font-medium">Quantity</label>
                    <select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 transition-all duration-300">
                      <option value="">Select range</option><option>50 – 100</option><option>100 – 500</option><option>500 – 1,000</option><option>1,000+</option>
                    </select>
                  </div>
                  <div><label className="block text-xs text-slate-400 mb-2 font-medium">Message</label><textarea rows={3} placeholder="Tell us about your project..." className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300 resize-none" /></div>
                  <button type="submit" className="quote-btn w-full flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-lg text-sm">Send Message <Icon icon="mdi:send" /></button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4"><Icon icon="mdi:check-circle" className="text-emerald-400 text-3xl" /></div>
                  <h4 className="text-white font-medium mb-2">Message Sent!</h4>
                  <p className="text-sm text-slate-400">We&apos;ll get back to you within 2 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
