import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-the-volcano',
  type: 'trap',
  name: 'Net of the Volcano',
  text: 'When an enemy ally is summoned: freeze it.',
  flavor: 'Woven with lava and patience.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'exotic',
  price: 10800,
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
      'Net of the Volcano: a weighted rope net hidden under leaves, about to spring, swirling around the center, teal accents, prehistoric jungle era style'
  }
})
