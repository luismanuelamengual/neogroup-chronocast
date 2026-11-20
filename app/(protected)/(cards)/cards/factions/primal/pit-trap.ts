import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pit-trap',
  type: 'trap',
  name: 'Pit Trap',
  text: 'When an enemy ally attacks: cancel the attack and deal 6 damage to it.',
  flavor: 'Mind the leaves.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 50,
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()

    if (event.unit) {
      damage(ctx, event.unit, 6)
    }
  },
  ai: { value: 2, tags: ['trap', 'control', 'removal'] },
  art: {
    subject: 'a beast falling into a hidden pit covered with leaves and sharpened sticks'
  }
})
