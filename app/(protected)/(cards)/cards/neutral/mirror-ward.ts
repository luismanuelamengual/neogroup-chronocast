import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mirror-ward',
  type: 'trap',
  name: 'Mirror Ward',
  text: 'When an enemy ally attacks: cancel the attack and deal 8 damage to it.',
  flavor: 'It hits itself, and never knows why.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 525,
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()

    if (event.unit) {
      damage(ctx, event.unit, 8)
    }
  },
  ai: { value: 3, tags: ['trap'] },
  art: {
    subject: "a floating crystal mirror reflecting a warrior's strike back at him"
  }
})
