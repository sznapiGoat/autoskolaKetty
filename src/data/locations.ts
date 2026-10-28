import { pricingRegions } from './pricing'
import { site } from './site'

export type Location = {
  slug: string
  href: string
  name: string
  short: string
  // Hlavní nadpis stránky (krátký, ať se nezalomí do tří řádků)
  heading: string
  seoTitle: string
  description: string
  intro: string
  role: string
  address: string[]
  hours: string[]
  mapsUrl: string
  embedQuery: string
  regionLabel: string
  pricing: { name: string; rows: { label: string; price: string; note?: string }[] }
  about: string[]
}

// TODO(klientka): doplnit vlastní texty o pobočkách (parkování, kde přesně je učebna, kde se začíná jízda).
export const locations: Location[] = [
  {
    slug: 'praha-8',
    href: '/praha-8',
    name: 'Praha 8, Dolní Chabry',
    short: 'Praha 8',
    heading: 'Praha 8',
    seoTitle: 'Autoškola Praha 8, Dolní Chabry | Autoškola KETTY',
    description:
      'Autoškola KETTY v Praze 8, Dolní Chabry. Náborová kancelář a učebna v ulici Dopraváků 723. Řidičák skupiny B od 22 900 Kč, rychlokurz, VIP kurz i výcvik v cizím jazyce.',
    intro: 'Náborová kancelář a učebna v Dolních Chabrech. Tady se zapíšeš, chodíš na teorii a začínáš jízdy.',
    role: 'Náborová kancelář & učebna',
    address: ['Dopraváků 723', '184 00 Praha 8', 'V areálu autobazaru AAA AUTO'],
    hours: ['Út a Čt 14:00-18:00', 'Jindy po telefonické domluvě'],
    mapsUrl: site.mapsPraha,
    embedQuery: 'Doprav%C3%A1k%C5%AF+723,+184+00+Praha+8',
    regionLabel: 'Ceník pro Prahu',
    pricing: pricingRegions.praha,
    about: [
      'V Praze nabízíme kromě standardního kurzu i rychlokurz B EXPRES, VIP kurz, výcvik na automatu a výcvik v cizím jazyce.',
      'Na jízdy se dá domluvit i večer a o víkendech, takže kurz zvládneš i při škole nebo práci.',
    ],
  },
  {
    slug: 'caslav-kutna-hora',
    href: '/caslav-kutna-hora',
    name: 'Chotusice u Čáslavi',
    short: 'Čáslavsko',
    heading: 'Čáslav a okolí',
    seoTitle: 'Autoškola Čáslav, Kolín, Kutná Hora | Autoškola KETTY',
    description:
      'Pobočka Autoškoly KETTY v Chotusicích u Čáslavi pro Čáslav, Kolín a Kutnou Horu. Řidičák skupiny B od 16 900 Kč, VIP kurz, automat i výcvik v cizím jazyce.',
    intro: 'Pobočka v Chotusicích pro Čáslav, Kolín a Kutnou Horu. Stejná kvalita výuky jako v Praze, za regionální ceny.',
    role: 'Pobočka Chotusice',
    address: ['Chotusice 136', '285 76 Chotusice'],
    hours: ['Otevřeno nonstop', 'Termín si domluv po telefonu'],
    mapsUrl: site.mapsChotusice,
    embedQuery: 'Chotusice+136,+285+76',
    regionLabel: 'Ceník pro Čáslav, Kolín a Kutnou Horu',
    pricing: pricingRegions.region,
    about: [
      'Řidičák skupiny B tu pořídíš od 16 900 Kč, tedy výrazně levněji než v Praze. K dispozici je i VIP kurz, automat a výcvik v cizím jazyce.',
      'Pobočka slouží studentům z Čáslavi, Kolína, Kutné Hory a okolí.',
    ],
  },
]
