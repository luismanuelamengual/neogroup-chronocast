import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stun, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'temporal-prison',
  type: 'trap',
  name: 'Temporal Prison',
  text: 'When an enemy ally is summoned: stun it for two phases.',
  flavor: 'Welcome. Please wait.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    const unit = event.unit ? unitAt(ctx, event.unit) : null

    if (unit) {
      stun(ctx, unit, 1)
    }
  },
  ai: { value: 4, tags: ['trap', 'control'] },
  art: {
    subject: 'a creature trapped inside a giant glowing hourglass, sand pouring around it'
  }
})
