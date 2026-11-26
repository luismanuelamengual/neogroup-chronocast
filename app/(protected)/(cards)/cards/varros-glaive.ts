import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'varros-glaive',
  type: 'weapon',
  subtype: 'spear',
  name: "Varro's Glaive",
  text: 'When it is equipped: your hero heals 5.',
  flavor: "The legate's word, made steel.",
  faction: 'bronze',
  restriction: { heroes: ['legate-varro'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 5)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Varro's Glaive: a single glaive made of white bone and leather wraps, on a pile of old coins, centered and seen from slightly below, turquoise accents, ancient bronze-age empire style"
  }
})
