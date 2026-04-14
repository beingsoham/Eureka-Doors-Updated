import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-semibold text-sky-400 tracking-[0.2em] uppercase mb-4 block">Gallery</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">Our <span className="text-sky-400 italic">Memories</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Moments captured through our journey of crafting doors for residential projects, commercial spaces, and developments across India.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={img.src} className={`gallery-item rounded-xl relative aspect-[4/3] reveal reveal-delay-${(i % 4) + 1}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-xl" />
              <div className="g-overlay absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent rounded-xl opacity-0 flex items-end p-4">
                <span className="text-sm text-white font-medium">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
