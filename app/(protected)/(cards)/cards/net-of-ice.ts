import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze, markPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-ice',
  type: 'trap',
  name: 'Net of Ice',
  text: 'When an enemy ally is summoned: freeze it for 2 phases and it becomes your Prey.',
  flavor: 'It catches and keeps.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'legendary',
  price: 2080,
  cost: 2,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      freeze(ctx, event.unit, 2)
      markPrey(ctx, event.unit)
    }
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Net of Ice: a weighted rope net hidden under leaves, about to spring, diagonal dynamic composition, saffron yellow accents, mage style'
  }
})
