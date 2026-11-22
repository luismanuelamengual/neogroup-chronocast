import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scholarly-stasis',
  type: 'ability',
  name: 'Scholarly Stasis',
  text: 'Freeze an enemy ally and deal 2 time damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  element: 'time',
  price: 510,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject: 'Scholarly Stasis: glowing chains binding a struggling creature, mage style'
  }
})
