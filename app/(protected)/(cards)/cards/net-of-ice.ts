import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-ice',
  type: 'trap',
  name: 'Net of Ice',
  text: 'When an enemy ally is summoned: freeze it.',
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
      freeze(ctx, event.unit)
    }
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Net of Ice: a weighted rope net hidden under leaves, about to spring, diagonal dynamic composition, saffron yellow accents, mage style'
  }
})
