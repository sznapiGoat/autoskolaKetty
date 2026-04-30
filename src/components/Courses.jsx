import { ArrowRight, ArrowUpRight } from 'lucide-react'

const courses = [
  {
    tag: 'B', title: 'Osobní automobil',
    desc: 'Standardní kurz pro auto do 3 500 kg. Nejoblíbenější volba — od 17 let.',
    duration: '2–3 měsíce', lessons: '28 jízd', price: '22 900', featured: false,
  },
  {
    tag: 'A', title: 'Motocykly',
    desc: 'A1 / A2 / A — výběr podle věku a zkušeností. Včetně techniky jízdy.',
    duration: '6–8 týdnů', lessons: '16+ jízd', price: '18 500', featured: false,
  },
  {
    tag: 'C+E', title: 'Nákladní + návěs',
    desc: 'Pro profesionální řidiče. Rozšíření o profesní průkaz na míru.',
    duration: '4–6 týdnů', lessons: '24 jízd', price: '34 900', featured: true,
  },
  {
    tag: '§39', title: 'Vrácení řidičáku',
    desc: 'Přezkoušení odborné způsobilosti dle § 39. Rychle a bez zbytečností.',
    duration: '1–2 týdny', lessons: '5 hodin', price: '7 000', featured: false,
  },
]

export function Courses() {
  return (
    <section id="kurzy" className="relative py-24 lg:py-32 bg-[var(--paper-2)] grain">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="reveal max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/50 mb-3">— 01 / Naše kurzy</div>
            <h2 className="font-display font-bold text-[clamp(40px,5.5vw,76px)] leading-[0.95] tracking-tight">
              Vyber si <span className="text-[var(--lime-deep)]">kategorii</span><br/>a zbytek řešíme my.
            </h2>
          </div>
          <a href="#cenik" className="reveal delay-1 inline-flex items-center gap-2 font-semibold text-[14px] ulink">
            Zobrazit ceník <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {courses.map((c, i) => (
            <article
              key={c.tag}
              className={`reveal delay-${(i % 4) + 1} group relative rounded-3xl p-7 flex flex-col min-h-[360px] transition-all duration-300 hover:-translate-y-1
                ${c.featured ? 'bg-[var(--ink)] text-white' : 'bg-white text-[var(--ink)]'}`}
            >
              <div className="flex items-start justify-between mb-12">
                <div className={`font-display font-bold text-[28px] px-3 py-1 rounded-lg ${c.featured ? 'bg-[var(--lime)] text-[var(--ink)]' : 'bg-[var(--ink)] text-[var(--lime)]'}`}>
                  {c.tag}
                </div>
                <div className={`font-mono text-[10px] tracking-wider uppercase ${c.featured ? 'text-white/50' : 'text-black/40'}`}>0{i + 1}</div>
              </div>

              <h3 className="font-display font-bold text-[26px] leading-tight">{c.title}</h3>
              <p className={`mt-2 text-[14px] leading-relaxed ${c.featured ? 'text-white/70' : 'text-black/60'}`}>{c.desc}</p>

              <div className={`mt-6 grid grid-cols-2 gap-3 pt-5 border-t ${c.featured ? 'border-white/10' : 'border-black/10'}`}>
                <div>
                  <div className={`font-mono text-[10px] uppercase tracking-wider ${c.featured ? 'text-white/40' : 'text-black/40'}`}>Délka</div>
                  <div className="text-[14px] font-semibold mt-0.5">{c.duration}</div>
                </div>
                <div>
                  <div className={`font-mono text-[10px] uppercase tracking-wider ${c.featured ? 'text-white/40' : 'text-black/40'}`}>Rozsah</div>
                  <div className="text-[14px] font-semibold mt-0.5">{c.lessons}</div>
                </div>
              </div>

              <div className="mt-auto pt-6 flex items-end justify-between">
                <div>
                  <div className={`font-mono text-[10px] uppercase tracking-wider ${c.featured ? 'text-white/40' : 'text-black/40'}`}>Od</div>
                  <div className="font-display text-[28px] font-bold leading-none">
                    {c.price} <span className={`text-[14px] ${c.featured ? 'text-white/60' : 'text-black/50'}`}>Kč</span>
                  </div>
                </div>
                <a href="#kontakt" className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-[-30deg] ${c.featured ? 'bg-[var(--lime)] text-[var(--ink)]' : 'bg-[var(--ink)] text-[var(--lime)]'}`}>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
