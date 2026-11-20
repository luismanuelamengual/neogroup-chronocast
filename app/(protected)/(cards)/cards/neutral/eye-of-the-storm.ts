import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'eye-of-the-storm',
  type: 'location',
  name: 'Eye of the Storm',
  text: 'At the start of each phase, deal 5 damage to the enemy hero.',
  flavor: 'Calm in the center. Ruin all around.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 5)
  },
  ai: { value: 5, tags: ['burn'] },
  art: {
    subject: 'a calm clearing at the center of a gigantic swirling turquoise storm with lightning'
  }
})
