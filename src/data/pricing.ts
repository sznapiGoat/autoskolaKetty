// Ceník (platný od 1. 1. 2025, vč. DPH). Jediný zdroj cen pro celý web.
export type PriceRowData = { label: string; price: string; note?: string }

export const pricingRegions = {
  praha: {
    name: 'Praha',
    rows: [
      { label: 'Skupina B, osobní automobil', price: '22 900 Kč', note: '2-3 měsíce' },
      { label: 'Rychlokurz B EXPRES', price: '26 900 Kč' },
      { label: 'VIP kurz', price: '29 900 Kč' },
      { label: 'Automatická převodovka B', price: '24 500 Kč' },
      { label: 'B-výcvik v cizím jazyce', price: '27 000 Kč' },
      { label: 'B automat + cizí jazyk', price: '30 000 Kč' },
      { label: 'Vrácení ŘP skupiny B', price: '7 000 Kč' },
      { label: 'Nová výuka § 39 písm. a), teorie', price: '7 500 Kč' },
      { label: 'Nový výcvik § 39 písm. b), praxe', price: '16 500 Kč' },
    ],
  },
  region: {
    name: 'Čáslav, Kolín, Kutná Hora',
    rows: [
      { label: 'Skupina B, osobní automobil', price: '16 900 Kč', note: '2-3 měsíce' },
      { label: 'VIP kurz', price: '26 900 Kč' },
      { label: 'Automatická převodovka B', price: '24 500 Kč' },
      { label: 'B-výcvik v cizím jazyce', price: '27 000 Kč' },
      { label: 'B automat + cizí jazyk', price: '30 000 Kč' },
      { label: 'Vrácení ŘP skupiny B', price: '7 000 Kč' },
      { label: 'Nová výuka § 39 písm. a), teorie', price: '7 500 Kč' },
      { label: 'Nový výcvik § 39 písm. b), praxe', price: '16 500 Kč' },
    ],
  },
} satisfies Record<string, { name: string; rows: PriceRowData[] }>

export const pricingExtras: { title: string; rows: PriceRowData[]; note?: string }[] = [
  {
    title: 'Doplňující a kondiční jízdy',
    rows: [
      { label: 'Kondiční jízda, manuál (45 min)', price: '600 Kč' },
      { label: 'Kondiční jízda, automat (45 min)', price: '850 Kč' },
      { label: 'Doplňující jízda před zkouškou', price: '500 Kč' },
      { label: 'Doplňující jízda po zkoušce', price: '600 Kč' },
    ],
  },
  {
    title: 'Opravy a správní poplatky',
    rows: [
      { label: 'Opravná jízda', price: '1 000 Kč' },
      { label: 'Oprava PSP', price: '700 Kč' },
      { label: '1. zkouška z odborné způsobilosti', price: '700 Kč' },
      { label: 'Opakovaná zkouška PPV', price: '100 Kč' },
      { label: 'Opakovaná praktická jízda', price: '400 Kč' },
    ],
  },
  {
    title: 'Storno a penále',
    rows: [
      { label: 'Neomluvený prostoj (24 h předem)', price: '350 Kč' },
      { label: 'Storno poplatek', price: '2 000 Kč' },
    ],
    note: 'Správní poplatky se platí v pokladně Magistrátu hl. m. Prahy nebo MÚ před zkouškou a nejsou součástí ceny kurzu.',
  },
]

export const pricingNote =
  'Ceny platné od 1. 1. 2025, vč. 21 % DPH a kompletního výcviku dle zákona č. 247/2000 Sb. Školné lze platit na splátky se zálohou od 3 000 Kč.'
