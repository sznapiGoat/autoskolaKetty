import { useState, useEffect } from 'react'
import { Phone, ArrowRight, X, Menu } from 'lucide-react'

const links = [
  { href: '#kurzy', label: 'Kurzy' },
  { href: '#proc', label: 'Proč my' },
  { href: '#cenik', label: 'Ceník' },
  { href: '#recenze', label: 'Recenze' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAFAF7]/85 backdrop-blur-md border-b border-black/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-[var(--ink)] flex items-center justify-center">
              <span className="font-display font-bold text-[var(--lime)] text-[17px] leading-none -mt-0.5">K</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[var(--lime)] border-2 border-[#FAFAF7]" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[17px] tracking-tight">KETTY</div>
            <div className="font-mono text-[10px] text-black/50 -mt-0.5">AUTOŠKOLA · PRAHA</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="ulink text-[14px] font-medium text-black/70 hover:text-black">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+420775298021" className="hidden md:flex items-center gap-2 text-[13px] font-mono text-black/70 hover:text-black">
            <Phone size={14} /> 775 298 021
          </a>
          <a href="#kontakt" className="hidden sm:inline-flex btn-primary items-center gap-1.5 bg-[var(--ink)] text-[var(--lime)] font-semibold text-[14px] px-5 py-2.5 rounded-full">
            Zapsat se <ArrowRight size={15} />
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            className="lg:hidden w-10 h-10 rounded-full bg-[var(--ink)] text-[var(--lime)] flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#FAFAF7] border-t border-black/5">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 px-2 text-[16px] font-medium border-b border-black/5">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="mt-3 inline-flex justify-center items-center gap-1.5 bg-[var(--ink)] text-[var(--lime)] font-semibold py-3 rounded-full">
              Zapsat se <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
