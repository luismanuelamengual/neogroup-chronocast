import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'explosive-trap',
  type: 'trap',
  name: 'Explosive Trap',
  text: 'When an enemy ally attacks: deal 8 damage to it and deal 4 damage to every enemy ally.',
  flavor: 'Step lightly.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 8)
    }

    damageAllAllies(ctx, ctx.opponent, 4)
  },
  ai: { value: 3, tags: ['trap', 'removal'] },
  art: {
    subject: 'a hidden explosive trap bursting in a fireball under a group of monsters'
  }
})
