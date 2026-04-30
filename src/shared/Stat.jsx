export function Stat({ n, sub, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      <div className="font-display text-[40px] lg:text-[48px] font-bold leading-none">{n}</div>
      <div className="text-[12px] text-black/60 leading-tight max-w-[120px] flex items-center gap-1">
        {Icon && <Icon size={13} className="text-[var(--lime-deep)] fill-[var(--lime)]" />} {sub}
      </div>
    </div>
  )
}
