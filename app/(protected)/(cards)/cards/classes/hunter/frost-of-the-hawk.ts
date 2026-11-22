import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-the-hawk',
  type: 'ability',
  name: 'Frost of the Hawk',
  text: 'Freeze an enemy ally and deal 3 ice damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  element: 'ice',
  price: 55,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject: 'Frost of the Hawk: glowing chains binding a struggling creature, hunter style'
  }
})
