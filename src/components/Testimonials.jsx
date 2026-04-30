import { Star } from 'lucide-react'

const items = [
  {
    name: 'Tereza N.', age: 19,
    text: '„Měla jsem strach z parkování, ale po pár hodinách s Mírou jsem to dala napoprvé. Atmosféra v autě byla v pohodě a nikdy na mě nikdo nekřičel."',
    rating: 5, color: 'bg-[var(--lime)]', course: 'Skupina B',
  },
  {
    name: 'Vojta K.', age: 22,
    text: '„Nejlepší autoškola, kterou jsem zažil. Šel jsem sem po neúspěchu jinde a tady mě konečně naučili jezdit. Hodně si vážím přístupu instruktorů."',
    rating: 5, color: 'bg-[var(--ink)] text-white', course: 'Skupina B + EXPRES',
  },
  {
    name: 'Klára S.', age: 24,
    text: '„Flexibilní termíny, super komunikace přes WhatsApp a moderní auta. Doporučuju každému, kdo to chce mít rychle hotové."',
    rating: 5, color: 'bg-white', course: 'Skupina A2',
  },
]

function starColor(color) {
  if (color.includes('lime')) return 'text-[var(--ink)]'
  if (color.includes('ink')) return 'text-[var(--lime)]'
  return 'text-[var(--lime-deep)]'
}

export function Testimonials() {
  return (
    <section id="recenze" className="relative py-24 lg:py-32 bg-[var(--paper-2)] grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 reveal">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/50 mb-3">— 03 / Recenze studentů</div>
            <h2 className="font-display font-bold text-[clamp(40px,5.5vw,76px)] leading-[0.95] tracking-tight max-w-[14ch]">
              4.9 z&nbsp;5 napříč 34&nbsp;recenzemi.
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2">
            {[0, 1, 2, 3, 4].map(i => <Star key={i} size={15} className="fill-[var(--lime-deep)] text-[var(--lime-deep)]" />)}
            <span className="font-mono text-[12px] ml-1">Google · ověřeno</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <article key={it.name} className={`reveal delay-${i + 1} ${it.color} rounded-3xl p-7 flex flex-col min-h-[340px] border border-black/5`}>
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: it.rating }).map((_, j) => (
                  <Star key={j} size={16} className={`fill-current ${starColor(it.color)}`} />
                ))}
              </div>
              <p className={`font-display text-[20px] leading-snug ${it.color.includes('ink') ? 'text-white' : ''}`}>{it.text}</p>
              <div className={`mt-auto pt-6 flex items-center gap-3 border-t ${it.color.includes('ink') ? 'border-white/15' : 'border-black/10'}`}>
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold ${it.color.includes('ink') ? 'bg-[var(--lime)] text-[var(--ink)]' : 'bg-[var(--ink)] text-[var(--lime)]'}`}>
                  {it.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[14px]">{it.name}, {it.age}</div>
                  <div className={`font-mono text-[11px] ${it.color.includes('ink') ? 'text-white/50' : 'text-black/50'}`}>{it.course}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
