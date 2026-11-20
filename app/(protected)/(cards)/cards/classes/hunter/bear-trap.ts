import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bear-trap',
  type: 'trap',
  name: 'Bear Trap',
  text: 'When an enemy ally attacks: cancel the attack and stun it.',
  flavor: 'Snap.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
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
    subject: "a big iron bear trap snapping shut on a monster's leg in the leaves"
  }
})
