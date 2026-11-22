import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-the-volcano',
  type: 'trap',
  name: 'Net of the Volcano',
  text: 'When an enemy ally is summoned: freeze it.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
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
    subject: 'Net of the Volcano: a hidden volcano about to spring, prehistoric jungle era style'
  }
})
