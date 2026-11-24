import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lucky-stasis',
  type: 'ability',
  name: 'Lucky Stasis',
  text: "Return an enemy ally to its owner's hand and draw a card. Fast.",
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Lucky Stasis: a clock frozen inside a floating crystal, its hands stopped, in a ruined temple, seen from above, crimson accents, time rift wanderer style'
  }
})
