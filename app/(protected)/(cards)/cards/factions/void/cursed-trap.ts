import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cursed-trap',
  type: 'trap',
  name: 'Cursed Trap',
  text: 'When an enemy ally is summoned: freeze it.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      freeze(ctx, event.unit)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject: 'Cursed Trap: a hidden trap about to spring, dark end-of-time void style'
  }
})
