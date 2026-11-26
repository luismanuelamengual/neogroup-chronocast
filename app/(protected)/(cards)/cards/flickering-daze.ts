import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flickering-daze',
  type: 'ability',
  name: 'Flickering Daze',
  text: 'Freeze an enemy ally and deal 2 ice damage to the enemy hero.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'epic',
  element: 'ice',
  price: 1000,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Flickering Daze: spinning stars and swirls circling a dented helmet, covered in frost and ice crystals, over a stormy battlefield, centered and seen from slightly below, crimson accents, mage style'
  }
})
