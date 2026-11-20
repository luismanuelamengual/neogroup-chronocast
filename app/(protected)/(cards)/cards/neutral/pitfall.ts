import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pitfall',
  type: 'trap',
  name: 'Pitfall',
  text: 'When an enemy ally attacks: deal 14 damage to it.',
  flavor: 'The oldest trap there is, and still the best.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 14)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject: 'a hidden pit opening under a charging beast, leaves and branches falling in'
  }
})
