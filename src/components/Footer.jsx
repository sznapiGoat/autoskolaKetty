import { ArrowRight } from 'lucide-react'

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">{title}</div>
      <ul className="space-y-2.5">
        {links.map(l => (
          <li key={l}><a href="#" className="ulink hover:text-[var(--lime)]">{l}</a></li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-6">
            <div className="font-display font-bold text-[clamp(48px,7vw,108px)] leading-[0.9] tracking-tight">
              Začni jezdit.<br/><span className="text-[var(--lime)]">Začni dnes.</span>
            </div>
            <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 bg-[var(--lime)] text-[var(--ink)] font-semibold px-7 py-4 rounded-full btn-primary">
              Zapsat se do kurzu <ArrowRight size={16} />
            </a>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-3 gap-8 text-[14px]">
            <FooterCol title="Kurzy" links={['Skupina B', 'Skupina A', 'Skupina C+E', 'Vrácení ŘP § 39']} />
            <FooterCol title="Info" links={['O nás', 'Ceník', 'Recenze', 'FAQ']} />
            <FooterCol title="Kontakt" links={['Dopraváků 723, Praha 8', 'Chotusice 136 — nonstop', '775 298 021', 'kettnerova@autoskolaketty.cz']} />
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-white/50">
          <div>© 2026 Autoškola KETTY · Bc. Renáta Kettnerová · IČO 12345678</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--lime)]">GDPR</a>
            <a href="#" className="hover:text-[var(--lime)]">Obchodní podmínky</a>
            <a href="#" className="hover:text-[var(--lime)]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
