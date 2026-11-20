import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tripwire',
  type: 'trap',
  name: 'Tripwire',
  text: 'When an enemy ally is summoned: deal 6 damage to it.',
  flavor: 'Watch your step. And your timing.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 6)
    }
  },
  ai: { value: 1, tags: ['trap'] },
  art: {
    subject: 'a thin glowing wire stretched across a doorway, a monster about to trip over it'
  }
})
