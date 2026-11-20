import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'laser-grid',
  type: 'trap',
  name: 'Laser Grid',
  text: 'When an enemy ally attacks: cancel the attack and deal 5 damage to it.',
  flavor: 'Mind the red lines.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()

    if (event.unit) {
      damage(ctx, event.unit, 5)
    }
  },
  ai: { value: 2, tags: ['trap', 'control', 'removal'] },
  art: {
    subject: 'a grid of red laser beams cutting across a corridor, a creature caught in it'
  }
})
