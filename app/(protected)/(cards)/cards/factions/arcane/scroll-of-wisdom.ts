import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scroll-of-wisdom',
  type: 'item',
  name: 'Scroll of Wisdom',
  text: 'Draw 2 cards.',
  flavor: 'Read it twice. The second time it says something else.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'an ancient scroll unrolling by itself, its runes glowing gold and floating off the parchment'
  }
})
