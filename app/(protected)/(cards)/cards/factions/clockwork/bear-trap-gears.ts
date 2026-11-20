import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bear-trap-gears',
  type: 'trap',
  name: 'Gear Trap',
  text: 'When an enemy ally attacks: cancel the attack and deal 6 damage to it.',
  flavor: 'Snap!',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
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
    subject: "a mechanical jaw trap made of sharp gears snapping shut on a monster's leg"
  }
})
