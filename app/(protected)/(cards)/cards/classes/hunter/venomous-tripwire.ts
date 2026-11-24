import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venomous-tripwire',
  type: 'trap',
  name: 'Venomous Tripwire',
  text: 'When an enemy ally is summoned: deal 7 acid damage to it.',
  flavor: 'Snap, sting, sleep.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  element: 'acid',
  price: 50,
  cost: 2,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 7)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Venomous Tripwire: a thin glinting tripwire stretched low between rocks, dripping bubbling green acid, swirling around the center, ivory accents, hunter style'
  }
})
