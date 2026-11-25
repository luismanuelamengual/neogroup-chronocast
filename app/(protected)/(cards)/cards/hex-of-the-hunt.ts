import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-the-hunt',
  type: 'ability',
  name: 'Hex of the Hunt',
  text: 'Freeze an enemy ally and deal 3 arcane damage to the enemy hero.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'uncommon',
  element: 'arcane',
  price: 170,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Hex of the Hunt: a glowing hex sigil burning in the air, circled by glowing violet runes, in a snowy pass, swirling around the center, gold accents, hunter style'
  }
})
