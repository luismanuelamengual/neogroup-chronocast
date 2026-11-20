import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'relic-of-the-saints',
  type: 'item',
  name: 'Relic of the Saints',
  text: 'A random ally of your discard pile returns to play and draw a card.',
  flavor: 'It still remembers the hands that held it.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['revive', 'draw'] },
  art: {
    subject: 'an ancient golden reliquary box glowing softly on a velvet altar'
  }
})
