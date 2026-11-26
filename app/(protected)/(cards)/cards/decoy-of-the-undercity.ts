import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'decoy-of-the-undercity',
  type: 'trap',
  name: 'Decoy of the Undercity',
  text: 'When the enemy uses an ability: draw a card and deal 5 lightning damage to the enemy hero.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'rare',
  element: 'lightning',
  price: 420,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    draw(ctx, ctx.owner, 1)
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Decoy of the Undercity: a straw decoy dummy standing in a misty clearing, crackling with forked lightning, bursting toward the viewer, crimson accents, prehistoric jungle era style'
  }
})
