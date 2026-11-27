import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shadow-stalker',
  type: 'ally',
  name: 'Shadow Stalker',
  text: 'Its attacks against the enemy hero deal 3 more damage.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 380,
  cost: 4,
  tribe: 'beast',
  keywords: ['stealth'],
  attack: 6,
  health: 6,
  attackBonus(ctx, attacker, target) {
    return unitAt(ctx, attacker)?.uid === ctx.self.uid && target.slot === 'hero' ? 3 : 0
  },
  ai: { value: 3 },
  art: {
    subject:
      'Shadow Stalker: a black panther made of living shadow leaping toward a hero on a throne, its eyes two violet sparks, dark ritual mood'
  }
})
