import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Star, ArrowRight, Check, ArrowUpRight } from 'lucide-react'
import { Field } from '../shared/Field'

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-[var(--lime)]" />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-0.5">{label}</div>
        <div className="text-[15px] leading-snug">{children}</div>
      </div>
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: 'B' })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="kontakt" className="relative py-24 lg:py-32 bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="reveal mb-14 max-w-3xl">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/50 mb-3">— 05 / Najdeš nás</div>
          <h2 className="font-display font-bold text-[clamp(40px,5.5vw,76px)] leading-[0.95] tracking-tight">
            Stav se,<br/>nebo napiš.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 reveal bg-[var(--ink)] text-white rounded-3xl p-8 lg:p-10 flex flex-col">
            <div className="font-display font-bold text-[28px] leading-tight mb-8">Autoškola KETTY</div>

            <div className="space-y-6 flex-1">
              <ContactRow icon={MapPin} label="Náborová kancelář & učebna">
                Dopraváků 723, Praha 8 — 184 00<br/>
                <span style={{ fontSize: '13px', opacity: .6 }}>(v areálu autobazaru AAA AUTO)</span>
              </ContactRow>
              <ContactRow icon={MapPin} label="Pobočka Chotusice">
                Chotusice 136, 285 76 — <strong>nonstop</strong>
              </ContactRow>
              <ContactRow icon={Phone} label="Bc. Renáta Kettnerová">
                <a href="tel:+420775298021" className="ulink">775 298 021</a>
              </ContactRow>
              <ContactRow icon={Phone} label="Martin Kettner">
                <a href="tel:+420734872240" className="ulink">734 872 240</a>
              </ContactRow>
              <ContactRow icon={Mail} label="E-mail">
                <a href="mailto:kettnerova@autoskolaketty.cz" className="ulink">kettnerova@autoskolaketty.cz</a>
              </ContactRow>
              <ContactRow icon={Clock} label="Úřední hodiny na učebně">
                Út 14:00–18:00 · Čt 14:00–18:00<br/>
                <span style={{ fontSize: '13px', opacity: .6 }}>nebo dle telefonické dohody</span>
              </ContactRow>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map(i => <Star key={i} size={14} className="fill-[var(--lime)] text-[var(--lime)]" />)}
              </div>
              <span className="font-mono text-[12px] text-white/60">4.9 / 5 · Google recenze</span>
            </div>
          </div>

          <div className="lg:col-span-4 reveal delay-1 bg-[var(--lime)] rounded-3xl p-8 lg:p-10 flex flex-col">
            <div className="font-display font-bold text-[28px] leading-tight mb-2">Nezávazná přihláška</div>
            <p className="text-[14px] text-[var(--ink)]/70 mb-7">Ozveme se do 24 hodin s nejbližším termínem.</p>

            <form onSubmit={submit} className="flex flex-col gap-3 flex-1">
              <Field label="Jméno a příjmení" value={form.name} onChange={v => setForm({ ...form, name: v })} />
              <Field label="Telefon" value={form.phone} onChange={v => setForm({ ...form, phone: v })} type="tel" />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink)]/60 block mb-1.5">Kurz</label>
                <div className="flex gap-2 flex-wrap">
                  {['B', 'A', 'C+E', '§39'].map(k => (
                    <button
                      type="button" key={k}
                      onClick={() => setForm({ ...form, course: k })}
                      className={`font-mono text-[12px] px-3 py-2 rounded-full border-2 transition
                        ${form.course === k ? 'bg-[var(--ink)] text-[var(--lime)] border-[var(--ink)]' : 'border-[var(--ink)]/20 hover:border-[var(--ink)]'}`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="mt-auto inline-flex items-center justify-center gap-2 bg-[var(--ink)] text-[var(--lime)] font-semibold py-4 rounded-full btn-primary">
                {sent ? <>Odesláno <Check size={16} /></> : <>Odeslat přihlášku <ArrowRight size={16} /></>}
              </button>
            </form>
          </div>

          <div className="lg:col-span-3 reveal delay-2 rounded-3xl overflow-hidden bg-white border border-black/10 min-h-[420px] flex flex-col">
            <div className="relative flex-1 bg-[var(--paper-2)] overflow-hidden">
              <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" aria-hidden>
                <rect width="300" height="400" fill="#F1F1EC"/>
                <path d="M0 80 L300 120" stroke="#0B0B0A" strokeWidth="14" opacity="0.08"/>
                <path d="M0 220 L300 200" stroke="#0B0B0A" strokeWidth="20" opacity="0.08"/>
                <path d="M50 0 L80 400" stroke="#0B0B0A" strokeWidth="10" opacity="0.08"/>
                <path d="M220 0 L200 400" stroke="#0B0B0A" strokeWidth="14" opacity="0.08"/>
                <path d="M0 80 L300 120" stroke="#FAFAF7" strokeWidth="2" strokeDasharray="6 6"/>
                <path d="M0 220 L300 200" stroke="#FAFAF7" strokeWidth="2" strokeDasharray="6 6"/>
                <rect x="100" y="140" width="80" height="60" rx="6" fill="#0B0B0A" opacity="0.06"/>
                <rect x="220" y="240" width="60" height="100" rx="6" fill="#0B0B0A" opacity="0.06"/>
                <rect x="20" y="280" width="50" height="80" rx="6" fill="#0B0B0A" opacity="0.06"/>
                <circle cx="240" cy="100" r="40" fill="#C7F23D" opacity="0.4"/>
                <g transform="translate(150 200)">
                  <circle r="22" fill="#C7F23D"/>
                  <circle r="22" fill="#C7F23D" opacity="0.4">
                    <animate attributeName="r" values="22;38;22" dur="2.4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="10" fill="#0B0B0A"/>
                </g>
              </svg>
              <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider bg-white/90 px-2 py-1 rounded">
                50.1644° N, 14.4399° E
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Dopraváků+723+Praha+Dolní+Chabry"
              target="_blank" rel="noreferrer"
              className="p-5 flex items-center justify-between hover:bg-[var(--paper-2)] transition"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-black/50">Otevřít v mapě</div>
                <div className="font-semibold text-[14px]">Dopraváků 723, Praha</div>
              </div>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
