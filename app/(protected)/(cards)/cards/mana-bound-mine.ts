import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mana-bound-mine',
  type: 'trap',
  name: 'Mana-Bound Mine',
  text: 'When the enemy uses an ability: draw a card and deal 5 arcane damage to the enemy hero.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'common',
  element: 'arcane',
  price: 55,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    draw(ctx, ctx.owner, 1)
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 3, tags: ['trap'] },
  art: {
    subject:
      'Mana-Bound Mine: a buried rune mine glowing faintly under the dirt, circled by glowing violet runes, seen from above, indigo accents, mage style'
  }
})
