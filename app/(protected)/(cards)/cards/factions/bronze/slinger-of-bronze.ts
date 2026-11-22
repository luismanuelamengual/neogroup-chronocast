import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'slinger-of-bronze',
  type: 'ally',
  name: 'Slinger of Bronze',
  text: 'When it dies: your other allies gain +1 attack.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 4,
  health: 11,
  onDeath(ctx) {
    buffAllies(ctx, ctx.owner, 1, 0, true)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'an ancient bronze-armored soldier, the slinger of bronze, lunging forward, ancient bronze-age empire style'
  }
})
