import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gentle-ward',
  type: 'trap',
  name: 'Gentle Ward',
  text: 'When an enemy ally attacks: deal 7 light damage to it.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  element: 'light',
  price: 155,
  cost: 2,
  speed: 'instant',
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 7)
    }
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject: 'Gentle Ward: a hidden ward about to spring, mystic healer style'
  }
})
