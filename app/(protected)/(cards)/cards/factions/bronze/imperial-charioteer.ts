import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'imperial-charioteer',
  type: 'ally',
  name: 'Imperial Charioteer',
  text: 'When it dies: your Legionnaires gain +1 attack and +1 health.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  tribe: 'legionnaire',
  keywords: ['guardian'],
  attack: 2,
  health: 10,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'legionnaire', 1, 1)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject: 'an ancient bronze-armored soldier, the imperial charioteer, roaring, ancient bronze-age empire style'
  }
})
