import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-the-quarry',
  type: 'trap',
  name: 'Net of the Quarry',
  text: 'When an enemy ally is summoned: deal 5 damage to it.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'epic',
  price: 1400,
  cost: 1,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 5)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject: 'Net of the Quarry: a hidden quarry about to spring, hunter style'
  }
})
