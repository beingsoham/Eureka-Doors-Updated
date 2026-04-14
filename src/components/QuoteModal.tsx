"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function QuoteModal({ isOpen, onClose, preselectedProduct }: { isOpen: boolean; onClose: () => void; preselectedProduct?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div><h3 className="text-lg font-serif text-white">Get a Bulk Quote</h3><p className="text-xs text-slate-500 mt-1">We&apos;ll respond within 24 hours</p></div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Icon icon="mdi:close" className="text-slate-400" /></button>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className="block text-xs text-slate-400 mb-2 font-medium">Full Name *</label><input type="text" required placeholder="Your name" className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
              <div><label className="block text-xs text-slate-400 mb-2 font-medium">Company *</label><input type="text" required placeholder="Company name" className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className="block text-xs text-slate-400 mb-2 font-medium">Phone *</label><input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
              <div><label className="block text-xs text-slate-400 mb-2 font-medium">Email *</label><input type="email" required placeholder="you@company.com" className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
            </div>
            <div><label className="block text-xs text-slate-400 mb-2 font-medium">Product *</label>
              <select id="quoteProduct" required defaultValue={preselectedProduct || ""} className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 transition-all duration-300">
                <option value="">Select a product</option><option value="Wooden Doors">Wooden Doors (₹3,500 – ₹8,000)</option><option value="Solid PVC Doors">Solid PVC Doors (₹2,500 – ₹6,500)</option><option value="Theme Doors">Theme Doors (₹4,500 – ₹10,000)</option><option value="Post Forming Doors">Post Forming Doors (₹3,800 – ₹7,200)</option><option value="FRP Doors">FRP Doors (₹2,200 – ₹5,500)</option><option value="Frames & Plywood">Frames & Plywood (₹2,000 – ₹5,000)</option><option value="Multiple Products">Multiple Products</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className="block text-xs text-slate-400 mb-2 font-medium">Quantity *</label>
                <select required className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 transition-all duration-300"><option value="">Select range</option><option>50 – 100</option><option>100 – 500</option><option>500 – 1,000</option><option>1,000 – 5,000</option><option>5,000+</option></select>
              </div>
              <div><label className="block text-xs text-slate-400 mb-2 font-medium">City</label><input type="text" placeholder="e.g. Pune" className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300" /></div>
            </div>
            <div><label className="block text-xs text-slate-400 mb-2 font-medium">Project Details</label><textarea rows={3} placeholder="Tell us about your project..." className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-300 resize-none" /></div>
            <button type="submit" className="quote-btn w-full flex items-center justify-center gap-2 text-white font-semibold px-6 py-4 rounded-lg text-sm">Submit Quote Request <Icon icon="mdi:arrow-right" /></button>
            <p className="text-center text-xs text-slate-600">Or call: <a href="tel:+918888784444" className="text-sky-500 hover:text-sky-400">+91 – 8888 78 4444</a></p>
          </form>
        ) : (
          <div className="p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5"><Icon icon="mdi:check-circle" className="text-emerald-400 text-4xl" /></div>
            <h4 className="text-xl font-serif text-white mb-2">Quote Request Submitted!</h4>
            <p className="text-sm text-slate-400 mb-6">We&apos;ll get back to you within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={onClose} className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-all">Close</button>
              <a href="https://wa.me/918888784444" target="_blank" className="px-6 py-3 rounded-lg bg-[#25D366] text-sm text-white font-medium hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"><Icon icon="mdi:whatsapp" /> Follow up on WhatsApp</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
