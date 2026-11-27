import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'decoy-of-the-undercity',
  type: 'trap',
  name: 'Decoy of the Undercity',
  text: 'When the enemy uses an ability: summon a Sabertooth Cub and draw a card.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  speed: 'instant',
  trigger: 'enemyAbility',
  onTrigger(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Decoy of the Undercity: a straw decoy dummy standing in a misty clearing, crackling with forked lightning, bursting toward the viewer, crimson accents, prehistoric jungle era style'
  }
})
