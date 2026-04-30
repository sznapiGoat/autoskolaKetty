import { ArrowRight, Star } from 'lucide-react'
import { Dot } from '../shared/Dot'
import { Stat } from '../shared/Stat'

export function Hero() {
  return (
    <section id="top" className="relative pt-[112px] pb-24 lg:pb-32 overflow-hidden">
      <div aria-hidden className="absolute -top-20 -right-32 w-[520px] h-[520px] rounded-full bg-[var(--lime)] blur-[2px] opacity-90" />
      <div aria-hidden className="absolute top-40 -right-10 w-32 h-32 rounded-3xl bg-[var(--ink)] rotate-12" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 bg-white border border-black/10 rounded-full px-3 py-1.5 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--lime-deep)] animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider uppercase">Zápis na květen otevřen</span>
          </div>

          <h1 className="font-display font-bold leading-[0.92] tracking-tight text-[clamp(48px,8vw,128px)]">
            Řidičák,
            <br />
            který <span className="relative inline-block">
              <span className="relative z-10">opravdu</span>
              <span aria-hidden className="absolute inset-x-0 bottom-2 h-[18px] lg:h-[26px] bg-[var(--lime)] -z-0" />
            </span>
            <br />
            <span className="text-black/40">uděláš.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[17px] lg:text-[19px] text-black/70 leading-relaxed">
            Individuální výuka, moderní vozový park a&nbsp;instruktoři, kteří tě naučí jezdit — ne jen projít zkoušku.
            Praha, Dolní Chabry. Od&nbsp;17&nbsp;let.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#cenik" className="btn-primary inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--lime)] font-semibold text-[15px] px-7 py-4 rounded-full">
              Začít kurz <ArrowRight size={17} />
            </a>
            <a href="#kurzy" className="btn-secondary inline-flex items-center gap-2 text-[15px] font-semibold px-6 py-4 rounded-full border-2 border-[var(--ink)]/15 hover:border-[var(--ink)] hover:bg-white">
              Zjistit více
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
            <Stat n="4.9" sub="34 recenzí na Google" icon={Star} />
            <Stat n="94%" sub="úspěšnost u zkoušek" />
            <Stat n="2 200+" sub="absolventů od 1998" />
          </div>
        </div>

        <div className="lg:col-span-5 reveal delay-2 relative">
          <div className="relative bg-[var(--ink)] rounded-[28px] p-7 text-white overflow-hidden">
            <div className="flex items-start justify-between mb-12">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">Kurz · Skupina B</div>
                <div className="font-display text-[34px] leading-none mt-1">Osobní<br/>automobil</div>
              </div>
              <div className="bg-[var(--lime)] text-[var(--ink)] font-display font-bold text-[18px] px-3 py-1.5 rounded-lg rotate-3">B</div>
            </div>

            <div className="relative h-[160px]">
              <svg viewBox="0 0 400 160" className="absolute inset-0 w-full h-full" aria-hidden>
                <rect x="40" y="80" width="320" height="40" rx="20" fill="#C7F23D"/>
                <rect x="90" y="50" width="220" height="50" rx="22" fill="#C7F23D"/>
                <rect x="115" y="60" width="80" height="32" rx="6" fill="#0B0B0A" opacity="0.85"/>
                <rect x="205" y="60" width="80" height="32" rx="6" fill="#0B0B0A" opacity="0.85"/>
                <circle cx="120" cy="125" r="22" fill="#0B0B0A"/>
                <circle cx="120" cy="125" r="10" fill="#C7F23D"/>
                <circle cx="280" cy="125" r="22" fill="#0B0B0A"/>
                <circle cx="280" cy="125" r="10" fill="#C7F23D"/>
                <rect x="40" y="100" width="6" height="14" rx="2" fill="#FAFAF7"/>
                <rect x="354" y="100" width="6" height="14" rx="2" fill="#FAFAF7"/>
              </svg>
            </div>

            <div
              className="mt-6 rounded-full opacity-70"
              style={{ background: 'repeating-linear-gradient(90deg, #FAFAF7 0 30px, transparent 30px 60px)', height: '6px' }}
            />

            <div className="mt-7 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">Od</div>
                <div className="font-display text-[40px] leading-none">22 900 <span className="text-[20px] text-white/60">Kč</span></div>
              </div>
              <a href="#cenik" className="inline-flex items-center gap-1 text-[var(--lime)] font-semibold text-[14px]">
                Detail balíčků <ArrowRight size={15} className="rotate-[-30deg]" />
              </a>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 lg:-left-10 bg-[var(--lime)] text-[var(--ink)] rounded-2xl px-4 py-3 rotate-[-6deg] shadow-lg">
            <div className="font-mono text-[10px] tracking-wider uppercase opacity-70">Zápis</div>
            <div className="font-display text-[18px] font-bold leading-tight">2–3 měsíce<br/>do řidičáku</div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 lg:mt-28 border-y-2 border-[var(--ink)] py-5 bg-[var(--paper-2)] overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap font-display text-[28px] lg:text-[40px] font-bold tracking-tight">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>SKUPINA B</span><Dot/>
              <span className="text-black/30">SKUPINA A</span><Dot/>
              <span>SKUPINA C+E</span><Dot/>
              <span className="text-black/30">VRÁCENÍ ŘP</span><Dot/>
              <span>EXPRES KURZ</span><Dot/>
              <span className="text-black/30">VIP KURZ</span><Dot/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
