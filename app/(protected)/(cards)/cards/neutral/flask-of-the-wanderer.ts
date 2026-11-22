import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flask-of-the-wanderer',
  type: 'item',
  name: 'Flask of the Wanderer',
  text: 'Your hero heals 13 and draw a card.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 13)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'heal'] },
  art: {
    subject: 'Flask of the Wanderer: a single flask of the wanderer item lying on a stone, time rift wanderer style'
  }
})
