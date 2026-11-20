import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, heal, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'miracle',
  type: 'ability',
  name: 'Miracle',
  text: 'Your hero heals 30, a random ally of your discard pile returns to play and draw 2 cards. Slow.',
  flavor: 'Nobody can explain it. Nobody needs to.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'legendary',
  price: 5500,
  cost: 6,
  speed: 'slow',
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 30)
    reviveFromDiscard(ctx, ctx.owner)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 8, tags: ['heal', 'revive', 'draw'] },
  art: {
    subject: 'a golden sky splitting open with divine light pouring down on a ruined battlefield'
  }
})
