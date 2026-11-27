import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-the-quarry',
  type: 'trap',
  name: 'Net of the Quarry',
  text: 'When an enemy ally is summoned: deal 3 damage to it and draw a card.',
  flavor: 'What falls in, stays in.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 900,
  cost: 1,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 3)
    }

    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Net of the Quarry: a weighted rope net hidden under leaves, about to spring, framed by drifting embers, tangerine accents, hunter style'
  }
})
