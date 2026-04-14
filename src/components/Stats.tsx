"use client";
import { useCounter } from "@/hooks/useCounter";

export default function Stats() {
  useCounter();

  const stats = [
    { target: "50", suffix: "+", label: "Awards Won", delay: "" },
    { target: "5000", suffix: "+", label: "Happy Clients", delay: "reveal-delay-1" },
    { target: "864000", suffix: "+", label: "Doors Installed", delay: "reveal-delay-2" },
    { target: "26", suffix: "+", label: "Years Legacy", delay: "reveal-delay-3" },
  ];

  return (
    <section className="relative py-16 bg-slate-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className={`stat-card text-center p-6 rounded-xl bg-slate-800/30 border border-white/5 hover:border-sky-500/20 transition-all duration-500 reveal ${s.delay}`}>
              <div className="text-3xl md:text-4xl font-serif text-white mb-2">
                <span className="counter" data-target={s.target} data-suffix={s.suffix}>0</span>
              </div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
