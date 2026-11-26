import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'astral-daze',
  type: 'ability',
  name: 'Astral Daze',
  text: 'Freeze an enemy ally and deal 5 arcane damage to the enemy hero.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'uncommon',
  element: 'arcane',
  price: 200,
  cost: 5,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 5, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Astral Daze: spinning stars and swirls circling a dented helmet, circled by glowing violet runes, inside a cave of crystals, seen from above, scarlet accents, mage style'
  }
})
