import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'decoy-of-the-undercity',
  type: 'trap',
  name: 'Decoy of the Undercity',
  text: 'When the enemy uses an ability: draw a card and deal 5 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  element: 'lightning',
  price: 570,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    draw(ctx, ctx.owner, 1)
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject: 'Decoy of the Undercity: a hidden undercity about to spring, neon cyberpunk future style'
  }
})
