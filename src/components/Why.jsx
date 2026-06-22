import { GraduationCap, Car, TrendingUp, CalendarClock, MapPin, BadgeCheck } from 'lucide-react'

const items = [
  { Icon: GraduationCap, title: 'Zkušení instruktoři', desc: 'Trpěliví profíci s 10+ lety praxe. Učíme jezdit, ne jen projít zkoušku.' },
  { Icon: Car, title: 'Moderní vozový park', desc: 'Škoda Scala, Fabia, Octavia — vše po roce 2022. Manuál i automat.' },
  { Icon: TrendingUp, title: '94 % úspěšnost', desc: 'Připravíme tě tak, aby zkouška byla formalita. Statistika za 2024–2025.' },
  { Icon: CalendarClock, title: 'Flexibilní rozvrh', desc: 'Jezdíš, kdy se ti hodí — i o víkendech a večer. Plán měníš v aplikaci.' },
  { Icon: MapPin, title: 'Praha + okolí', desc: 'Centrála v Dolních Chabrech, učebna v centru. Sveze nás i k tobě.' },
  { Icon: BadgeCheck, title: 'Bez schovaných poplatků', desc: 'Cena, kterou vidíš, je cena, kterou platíš. Žádné dojíždění navíc.' },
]

const fleet = [
  { src: '/images/ketty2.jpg', name: 'Škoda Kamiq', tag: 'Skupina B', alt: 'Modrá Škoda Kamiq autoškoly KETTY' },
  { src: '/images/ketty3.jpeg', name: 'Opel Grandland', tag: 'Skupina B', alt: 'Bílý Opel Grandland autoškoly KETTY' },
  { src: '/images/ketty4.jpg', name: 'Opel Mokka', tag: 'Skupina B', alt: 'Bílý Opel Mokka autoškoly KETTY' },
]

export function Why() {
  return (
    <section id="proc" className="relative py-24 lg:py-32 bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5 reveal">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/50 mb-3">— 02 / Proč KETTY</div>
            <h2 className="font-display font-bold text-[clamp(40px,5.5vw,76px)] leading-[0.95] tracking-tight">
              Šest důvodů,<br/>proč si vybrat <span className="bg-[var(--lime)] px-2 -mx-1 rounded">nás</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 reveal delay-1 self-end">
            <p className="text-[17px] text-black/70 leading-relaxed">
              Jezdíme od&nbsp;roku 1998. Za tu dobu jsme prošli vším — od&nbsp;trabantů po&nbsp;elektromobily.
              A&nbsp;naučili jsme se, že to nejdůležitější není auto, ale jak se v&nbsp;něm cítíš.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4 mb-4 reveal delay-1">
          {fleet.map((f, i) => (
            <figure
              key={f.src}
              className={`relative group overflow-hidden rounded-3xl bg-[var(--ink)] ${
                i === 0 ? 'md:col-span-6 aspect-[16/10]' : 'md:col-span-3 aspect-[16/10] md:aspect-auto'
              }`}
            >
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/75 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="font-display font-bold text-white text-[18px] leading-tight drop-shadow">{f.name}</span>
                <span className="font-mono text-[10px] tracking-wider uppercase bg-[var(--lime)] text-[var(--ink)] px-2 py-1 rounded-full whitespace-nowrap">{f.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-3xl overflow-hidden">
          {items.map(({ Icon, title, desc }, i) => (
            <div key={title} className={`reveal delay-${(i % 4) + 1} bg-[var(--paper)] p-8 lg:p-10 group relative`}>
              <div className="w-12 h-12 rounded-2xl bg-[var(--lime)] flex items-center justify-center mb-6 transition-transform group-hover:rotate-6">
                <Icon size={22} strokeWidth={2.2} className="text-[var(--ink)]" />
              </div>
              <h3 className="font-display font-bold text-[22px] leading-tight">{title}</h3>
              <p className="mt-3 text-[14px] text-black/65 leading-relaxed">{desc}</p>
              <div className="font-mono text-[10px] tracking-wider text-black/30 absolute top-6 right-6">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
