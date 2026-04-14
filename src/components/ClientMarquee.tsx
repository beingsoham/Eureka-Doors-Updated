import { CLIENT_LOGOS } from "@/lib/constants";

export default function ClientMarquee() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs text-slate-500 tracking-[0.2em] uppercase font-medium">Trusted by leading developers across Pune &amp; India</p>
      </div>
      <div className="marquee-track overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 w-max">
          {doubled.map((src, i) => (
            <img key={i} src={src} alt="Client" className="client-logo-img h-10 w-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
