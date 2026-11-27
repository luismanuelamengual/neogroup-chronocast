import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-tide',
  type: 'ally',
  name: 'Timeless Tide',
  text: 'At the end of each phase: deal 2 damage to a random enemy ally.',
  flavor: 'It rises in every century at once.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'water',
  resist: ['water'],
  weak: ['lightning'],
  price: 70,
  cost: 5,
  tribe: 'elemental',
  keywords: ['ranged'],
  attack: 7,
  health: 9,
  onPhaseEnd(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Timeless Tide: an elemental tide with a flickering winged shape made of icy blue and white crystal, mid-stride, time rift wanderer style'
  }
})
