import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grasping-dead',
  type: 'trap',
  name: 'Grasping Dead',
  text: 'When an enemy ally attacks: cancel the attack and stun it.',
  flavor: 'The ground holds you. So do they.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 50,
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    stunAt(ctx, event.unit)
  },
  ai: { value: 2, tags: ['trap', 'control'] },
  art: {
    subject: 'skeletal hands bursting from the ground and grabbing the legs of a charging monster'
  }
})
