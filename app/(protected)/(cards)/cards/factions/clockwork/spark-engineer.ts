import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spark-engineer',
  type: 'ally',
  name: 'Spark Engineer',
  text: 'At the end of each phase, deal 2 damage to a random enemy ally.',
  flavor: 'Every invention she makes explodes. Some on purpose.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 6,
  health: 14,
  onPhaseEnd(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'an engineer with wild hair holding a crackling tesla coil, sparks jumping around her workshop'
  }
})
