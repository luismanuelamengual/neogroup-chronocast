import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'varros-glaive',
  type: 'weapon',
  subtype: 'spear',
  name: "Varro's Glaive",
  text: 'When it is equipped: your Legionnaires gain +1 attack and +1 health.',
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
    for (const unit of tribeAllies(ctx, ctx.owner, 'legionnaire')) {
      buff(ctx, unit, 1, 1)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Varro's Glaive: a single glaive made of white bone and leather wraps, on a pile of old coins, centered and seen from slightly below, turquoise accents, ancient bronze-age empire style"
  }
})
