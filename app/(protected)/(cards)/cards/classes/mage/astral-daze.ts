import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'astral-daze',
  type: 'ability',
  name: 'Astral Daze',
  text: 'Freeze an enemy ally and deal 5 arcane damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'arcane',
  price: 205,
  cost: 5,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 5, tags: ['aggro', 'removal'] },
  art: {
    subject: 'Astral Daze: glowing chains binding a struggling creature, mage style'
  }
})
