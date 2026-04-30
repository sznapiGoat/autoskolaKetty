export function Field({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink)]/60 block mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required
        className="w-full bg-transparent border-b-2 border-[var(--ink)]/20 focus:border-[var(--ink)] outline-none py-2 text-[15px] font-medium placeholder:text-[var(--ink)]/30"
      />
    </div>
  )
}
