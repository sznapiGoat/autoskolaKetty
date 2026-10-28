import type { PriceRowData } from './pricing'
import { pricingRegions } from './pricing'

export type Course = {
  slug: string
  href: string
  tag: string
  name: string
  cardDesc: string
  duration: string
  lessons: string
  price: string
  featured?: boolean
  // podstránka
  title: string
  seoTitle: string
  description: string
  intro: string
  requirements: string[]
  steps: { title: string; text: string }[]
  included: string[]
  prices: { title: string; rows: PriceRowData[] }[]
  faq: { q: string; a: string }[]
}

// TODO(klientka): ověřit zákonné podmínky (věk, doklady, postup u § 39) a doplnit vlastní texty.
export const courses: Course[] = [
  {
    slug: 'skupina-b',
    href: '/kurzy/skupina-b',
    tag: 'B',
    name: 'Osobní automobil',
    cardDesc: 'Standardní kurz pro auto do 3 500 kg. Nejoblíbenější volba, od 17 let.',
    duration: '2-3 měsíce',
    lessons: '28 jízd',
    price: '22 900',
    featured: true,
    title: 'Řidičák skupiny B',
    seoTitle: 'Řidičák skupiny B, Praha 8 a Čáslavsko | Autoškola KETTY',
    description:
      'Kurz na řidičák skupiny B v Praze 8 a v Chotusicích u Čáslavi. 28 jízd, moderní auta, manuál i automat, splátky. Od 22 900 Kč v Praze, od 16 900 Kč na Čáslavsku.',
    intro: 'Kurz pro osobní auto do 3 500 kg. Naučíme tě jezdit v klidu, s trpělivým instruktorem a v moderním autě.',
    requirements: [
      'Výcvik můžeš začít od 17 let.',
      'Posudek o zdravotní způsobilosti od praktického lékaře.',
      'Platný občanský průkaz.',
    ],
    steps: [
      { title: 'Přihláška', text: 'Vyplníš přihlášku a doneseš posudek od lékaře. Domluvíme termín začátku a způsob platby.' },
      { title: 'Teorie', text: 'Pravidla provozu, ovládání vozidla a zdravotní příprava. Probereme i to, na co se u zkoušky ptají nejčastěji.' },
      { title: 'Jízdy', text: '28 jízd s instruktorem. Termíny si domluvíš podle sebe, i večer a o víkendech.' },
      { title: 'Zkouška', text: 'Test z pravidel na počítači a jízda s komisařem. Na obojí tě připravíme tak, aby byla zkouška formalita.' },
    ],
    included: [
      'Kompletní teorie a 28 jízd',
      'Výcvik na voze Ford Focus, Škoda Kamiq nebo Opel Grandland',
      'Manuál i automatická převodovka',
      'Možnost splátek se zálohou od 3 000 Kč',
    ],
    prices: [
      { title: 'Praha', rows: pricingRegions.praha.rows.slice(0, 6) },
      { title: 'Čáslav, Kolín, Kutná Hora', rows: pricingRegions.region.rows.slice(0, 5) },
    ],
    faq: [
      { q: 'Jak dlouho kurz trvá?', a: 'Obvykle 2-3 měsíce. Záleží hlavně na tom, jak často můžeš jezdit. Rychlokurz B EXPRES je kratší.' },
      { q: 'Můžu platit na splátky?', a: 'Ano. Stačí záloha od 3 000 Kč, zbytek doplatíš během kurzu.' },
      { q: 'Vyplatí se automat?', a: 'Automat je jednodušší na naučení, ale řidičák pak platí jen pro auta s automatickou převodovkou. Rádi ti poradíme, co se hodí pro tebe.' },
      { q: 'Co když u zkoušky neuspěju?', a: 'Nic se neděje. Opakovaná zkouška z pravidel stojí 100 Kč, opakovaná jízda 400 Kč a před ní si můžeš dát opravnou jízdu s instruktorem.' },
      { q: 'Co není v ceně kurzu?', a: 'Správní poplatek za zkoušku 700 Kč, který se platí na úřadě, a případné doplňující jízdy navíc.' },
    ],
  },
  {
    slug: 'motorka',
    href: '/kurzy/motorka',
    tag: 'A',
    name: 'Motocykly',
    cardDesc: 'A1, A2 nebo A, výběr podle věku a zkušeností. Včetně techniky jízdy.',
    duration: '6-8 týdnů',
    lessons: '16+ jízd',
    price: '18 500',
    title: 'Řidičák na motorku',
    seoTitle: 'Řidičák na motorku A1, A2, A | Autoškola KETTY',
    description:
      'Kurz na řidičák skupiny A1, A2 nebo A v Autoškole KETTY. Výběr kategorie podle věku a zkušeností, výuka techniky jízdy. Od 18 500 Kč.',
    intro: 'A1, A2 nebo A podle věku a zkušeností. Kromě pravidel tě naučíme techniku jízdy, která se hodí i po zkoušce.',
    requirements: [
      'A1 (do 125 cm³) od 16 let.',
      'A2 (do 35 kW) od 18 let.',
      'A (bez omezení) od 24 let, nebo dříve s praxí na A2.',
      'Posudek o zdravotní způsobilosti a platný občanský průkaz.',
    ],
    steps: [
      { title: 'Výběr kategorie', text: 'Podle věku a zkušeností vybereme A1, A2 nebo A a domluvíme termíny.' },
      { title: 'Teorie', text: 'Pravidla provozu a specifika jízdy na motocyklu.' },
      { title: 'Jízdy a technika', text: 'Minimálně 16 jízd. Cvičiště, pomalá jízda, brzdění a pak provoz.' },
      { title: 'Zkouška', text: 'Test z pravidel, jízda na cvičišti a v provozu s komisařem.' },
    ],
    included: [
      'Teorie a minimálně 16 jízd',
      'Výuka techniky jízdy',
      'Výběr kategorie podle věku a zkušeností',
      'Možnost splátek se zálohou od 3 000 Kč',
    ],
    prices: [
      { title: 'Kurz skupiny A', rows: [{ label: 'Řidičák na motorku (A1, A2, A)', price: 'od 18 500 Kč', note: '6-8 týdnů' }] },
    ],
    faq: [
      { q: 'Kterou kategorii si mám vybrat?', a: 'Rozhoduje hlavně věk. Pokud si nejsi jistý, zavolej a poradíme ti podle toho, na čem chceš jezdit.' },
      { q: 'Jak dlouho kurz trvá?', a: 'Obvykle 6-8 týdnů podle počasí a toho, jak často můžeš jezdit.' },
      { q: 'Můžu platit na splátky?', a: 'Ano, se zálohou od 3 000 Kč.' },
    ],
  },
  {
    slug: 'nakladni-c-e',
    href: '/kurzy/nakladni-c-e',
    tag: 'C+E',
    name: 'Nákladní + návěs',
    cardDesc: 'Pro profesionální řidiče. Rozšíření o profesní průkaz na míru.',
    duration: '4-6 týdnů',
    lessons: '24 jízd',
    price: '34 900',
    title: 'Řidičák C+E',
    seoTitle: 'Řidičák C+E, nákladní auto s návěsem | Autoškola KETTY',
    description:
      'Kurz na řidičák skupiny C+E pro profesionální řidiče. 24 jízd, 4-6 týdnů, rozšíření o profesní průkaz na míru. Od 34 900 Kč.',
    intro: 'Pro profesionální řidiče nákladních aut s návěsem. Výcvik i profesní průkaz ti nastavíme na míru.',
    requirements: [
      'Řidičské oprávnění skupiny C.',
      'Posudek o zdravotní způsobilosti.',
      'Profesní průkaz řešíme individuálně podle toho, kde budeš jezdit.',
    ],
    steps: [
      { title: 'Konzultace', text: 'Probereme tvoje zkušenosti a domluvíme rozsah výcviku i profesní průkaz.' },
      { title: 'Teorie', text: 'Pravidla pro jízdní soupravy, nakládání a technika vozidla.' },
      { title: 'Jízdy', text: '24 jízd se soupravou, včetně couvání a manévrů.' },
      { title: 'Zkouška', text: 'Teoretická část a praktická jízda s komisařem.' },
    ],
    included: [
      'Teorie a 24 jízd se soupravou',
      'Příprava na zkoušku',
      'Rozšíření o profesní průkaz na míru',
      'Možnost splátek se zálohou od 3 000 Kč',
    ],
    prices: [
      { title: 'Kurz skupiny C+E', rows: [{ label: 'Nákladní automobil s návěsem', price: 'od 34 900 Kč', note: '4-6 týdnů' }] },
    ],
    faq: [
      { q: 'Jak dlouho kurz trvá?', a: 'Obvykle 4-6 týdnů.' },
      { q: 'Pomůžete i s profesním průkazem?', a: 'Ano, rozšíření o profesní průkaz nastavíme na míru podle toho, co potřebuješ.' },
    ],
  },
  {
    slug: 'vraceni-ridicaku',
    href: '/vraceni-ridicaku',
    tag: '§39',
    name: 'Vrácení řidičáku',
    cardDesc: 'Přezkoušení odborné způsobilosti dle § 39. Rychle a bez zbytečností.',
    duration: '1-2 týdny',
    lessons: '5 hodin',
    price: '7 000',
    title: 'Vrácení řidičáku',
    seoTitle: 'Vrácení řidičáku, přezkoušení dle § 39 | Autoškola KETTY',
    description:
      'Přišel jsi o řidičák? Připravíme tě na přezkoušení z odborné způsobilosti dle § 39. Rychle a bez zbytečností, od 7 000 Kč. Praha 8 a Chotusice.',
    intro: 'Přezkoušení z odborné způsobilosti dle § 39. Připravíme tě rychle, bez zbytečností a bez stresu.',
    requirements: [
      'Uplynutí doby, na kterou ti bylo řidičské oprávnění odebráno.',
      'Dopravně psychologické vyšetření, pokud ho úřad vyžaduje (typicky po dosažení 12 bodů).',
      'Posudek o zdravotní způsobilosti.',
    ],
    steps: [
      { title: 'Konzultace', text: 'Podle rozhodnutí úřadu zjistíme, co přesně potřebuješ, a navrhneme nejkratší cestu.' },
      { title: 'Příprava', text: 'Zhruba 5 hodin teorie a jízd, podle toho, jak dlouho jsi neřídil.' },
      { title: 'Přezkoušení', text: 'Test z pravidel a jízda s komisařem.' },
      { title: 'Vrácení', text: 'S potvrzením o úspěšném přezkoušení požádáš na úřadě o vrácení řidičáku.' },
    ],
    included: [
      'Konzultace k tvé situaci',
      'Zhruba 5 hodin přípravy',
      'Přihlášení ke zkoušce',
    ],
    prices: [
      {
        title: 'Vrácení a výuka dle § 39',
        rows: pricingRegions.praha.rows.slice(6),
      },
    ],
    faq: [
      { q: 'Jak dlouho to trvá?', a: 'Obvykle 1-2 týdny od začátku přípravy po přezkoušení.' },
      { q: 'Jaký je rozdíl mezi § 39 písm. a) a b)?', a: 'Liší se rozsahem: písm. a) znamená novou výuku teorie, písm. b) nový výcvik v jízdě. Co platí pro tebe, určuje rozhodnutí úřadu. Rádi ti ho pomůžeme přečíst.' },
      { q: 'Kdy můžu začít?', a: 'Přípravu můžeme začít ještě před koncem zákazu, ať jsi připravený hned, jak to půjde.' },
    ],
  },
]

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug)!
