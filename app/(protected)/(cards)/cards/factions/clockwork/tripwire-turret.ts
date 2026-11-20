import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tripwire-turret',
  type: 'trap',
  name: 'Tripwire Turret',
  text: 'When an enemy ally is summoned: deal 12 damage to it.',
  flavor: 'It only fires at new friends.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 12)
    }
  },
  ai: { value: 4, tags: ['trap', 'removal'] },
  art: {
    subject: 'a small brass turret popping out of the floor and firing at an arriving creature'
  }
})
