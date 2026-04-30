import { ArrowRight } from 'lucide-react'

function PriceRow({ label, price, note, highlight }) {
  return (
    <div className={`flex items-baseline justify-between py-3 border-b ${highlight ? 'border-[var(--ink)]/10' : 'border-white/8'}`}>
      <span className={`text-[14px] leading-snug max-w-[60%] ${highlight ? 'text-[var(--ink)]/80' : 'text-white/70'}`}>{label}</span>
      <div className="text-right flex-shrink-0 ml-4">
        <span className={`font-display font-bold text-[18px] ${highlight ? 'text-[var(--ink)]' : 'text-white'}`}>{price}</span>
        {note && <div className={`font-mono text-[10px] ${highlight ? 'text-[var(--ink)]/50' : 'text-white/40'}`}>{note}</div>}
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="cenik" className="relative py-24 lg:py-32 bg-[var(--ink)] text-white overflow-hidden">
      <div aria-hidden className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[var(--lime)]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7 reveal">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-3">— 04 / Ceník skupiny B</div>
            <h2 className="font-display font-bold text-[clamp(40px,5.5vw,76px)] leading-[0.95] tracking-tight">
              Přesný ceník.<br/><span className="text-[var(--lime)]">Žádné překvapení.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 reveal delay-1 self-end">
            <p className="text-[16px] text-white/60 leading-relaxed">
              Ceny platné od 1. 1. 2025, vč. 21&nbsp;% DPH. Obsahují kompletní výcvik dle zákona č.&nbsp;247/2000&nbsp;Sb.
              Školné lze platit na splátky se zálohou od&nbsp;3&nbsp;000&nbsp;Kč.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <div className="reveal delay-1 rounded-3xl p-8 bg-white/[0.04] border border-white/10 flex flex-col">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-1">Oblast</div>
            <div className="font-display text-[28px] font-bold leading-none mb-6">Praha</div>
            <PriceRow label="Skupina B — osobní automobil" price="22 900 Kč" note="2–3 měsíce" />
            <PriceRow label="Rychlokurz B EXPRES" price="26 900 Kč" />
            <PriceRow label="VIP kurz" price="29 900 Kč" />
            <PriceRow label="Automatická převodovka B" price="24 500 Kč" />
            <PriceRow label="B-výcvik v cizím jazyce" price="27 000 Kč" />
            <PriceRow label="B automat + cizí jazyk" price="30 000 Kč" />
            <PriceRow label="Vrácení ŘP skupiny B" price="7 000 Kč" />
            <PriceRow label="Nová výuka § 39 písm. a) — teorie" price="7 500 Kč" />
            <PriceRow label="Nový výcvik § 39 písm. b) — praxe" price="16 500 Kč" />
            <a href="#kontakt" className="mt-8 inline-flex items-center justify-center gap-2 font-semibold py-3.5 rounded-full bg-white text-[var(--ink)] hover:bg-[var(--lime)] transition">
              Zapsat se — Praha <ArrowRight size={15} />
            </a>
          </div>

          <div className="reveal delay-2 rounded-3xl p-8 bg-[var(--lime)] text-[var(--ink)] pricing-glow flex flex-col">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--ink)]/50 mb-1">Oblast</div>
            <div className="font-display text-[28px] font-bold leading-none mb-6">Čáslav · Kolín · Kutná Hora</div>
            <PriceRow label="Skupina B — osobní automobil" price="16 900 Kč" note="2–3 měsíce" highlight />
            <PriceRow label="VIP kurz" price="26 900 Kč" highlight />
            <PriceRow label="Automatická převodovka B" price="24 500 Kč" highlight />
            <PriceRow label="B-výcvik v cizím jazyce" price="27 000 Kč" highlight />
            <PriceRow label="B automat + cizí jazyk" price="30 000 Kč" highlight />
            <PriceRow label="Vrácení ŘP skupiny B" price="7 000 Kč" highlight />
            <PriceRow label="Nová výuka § 39 písm. a) — teorie" price="7 500 Kč" highlight />
            <PriceRow label="Nový výcvik § 39 písm. b) — praxe" price="16 500 Kč" highlight />
            <a href="#kontakt" className="mt-8 inline-flex items-center justify-center gap-2 font-semibold py-3.5 rounded-full bg-[var(--ink)] text-[var(--lime)] hover:bg-black transition">
              Zapsat se — Region <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="reveal delay-1 rounded-3xl p-7 bg-white/[0.04] border border-white/10">
            <div className="font-display text-[20px] font-bold mb-5">Doplňující & kondiční jízdy</div>
            <PriceRow label="Kondiční jízda — manuál (45 min)" price="600 Kč" />
            <PriceRow label="Kondiční jízda — automat (45 min)" price="850 Kč" />
            <PriceRow label="Doplňující jízda před zkouškou" price="500 Kč" />
            <PriceRow label="Doplňující jízda po zkoušce" price="600 Kč" />
          </div>

          <div className="reveal delay-2 rounded-3xl p-7 bg-white/[0.04] border border-white/10">
            <div className="font-display text-[20px] font-bold mb-5">Opravy & správní poplatky</div>
            <PriceRow label="Opravná jízda" price="1 000 Kč" />
            <PriceRow label="Oprava PSP" price="700 Kč" />
            <PriceRow label="1. zkouška z odborné způsobilosti" price="700 Kč" />
            <PriceRow label="Opakovaná zkouška PPV" price="100 Kč" />
            <PriceRow label="Opakovaná praktická jízda" price="400 Kč" />
          </div>

          <div className="reveal delay-3 rounded-3xl p-7 bg-white/[0.04] border border-white/10">
            <div className="font-display text-[20px] font-bold mb-5">Storno & penále</div>
            <PriceRow label="Neomluvený prostoj (24 h předem)" price="350 Kč" />
            <PriceRow label="Storno poplatek" price="2 000 Kč" />
            <div className="mt-5 font-mono text-[11px] text-white/40 leading-relaxed">
              Správní poplatky se platí v pokladně Magistrátu hl. m. Prahy nebo MÚ před zkouškou a nejsou součástí ceny kurzu.
            </div>
          </div>
        </div>

        <div className="mt-8 text-center font-mono text-[11px] text-white/30">
          Ceny platné od 1. 1. 2025 · vč. 21 % DPH · Splátky od zálohy 3 000 Kč
        </div>
      </div>
    </section>
  )
}
