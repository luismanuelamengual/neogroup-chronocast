import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lost-vision',
  type: 'ability',
  name: 'Lost Vision',
  text: 'Draw 2 cards.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'Lost Vision: glowing cards and runes swirling out of an open book, time rift wanderer style'
  }
})
