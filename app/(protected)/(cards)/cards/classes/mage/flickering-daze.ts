import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-daze',
  type: 'ability',
  name: 'Flickering Daze',
  text: 'Freeze an enemy ally and deal 2 ice damage to the enemy hero.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  element: 'ice',
  price: 1560,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject: 'Flickering Daze: glowing chains binding a struggling creature, mage style'
  }
})
