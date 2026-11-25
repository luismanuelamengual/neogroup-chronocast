import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-countermeasure',
  type: 'trap',
  name: 'Tracking Countermeasure',
  text: 'When the enemy uses an ability: draw a card and deal 4 damage to the enemy hero.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    draw(ctx, ctx.owner, 1)
    damageEnemyHero(ctx, 4)
  },
  ai: { value: 2, tags: ['trap'] },
  art: {
    subject:
      'Tracking Countermeasure: a hidden pressure plate wired with glowing filaments, bursting toward the viewer, cobalt blue accents, hunter style'
  }
})
