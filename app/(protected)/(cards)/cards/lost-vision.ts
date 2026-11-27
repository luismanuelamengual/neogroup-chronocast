import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardRandom, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lost-vision',
  type: 'ability',
  subtype: 'program',
  name: 'Lost Vision',
  text: 'Draw 3 cards, then discard a random card.',
  flavor: 'A glimpse of a century nobody lived.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 3)
    discardRandom(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Lost Vision: a crystal ball showing swirling images, above a calm lake at dusk, framed by drifting embers, rose pink accents, time rift wanderer style'
  }
})
