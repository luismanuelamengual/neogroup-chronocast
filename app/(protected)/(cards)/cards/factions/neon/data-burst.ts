import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'data-burst',
  type: 'ability',
  name: 'Data Burst',
  text: 'Draw 2 cards. Fast.',
  flavor: 'Downloaded in a blink.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a burst of cyan and magenta data streams exploding out of a holographic terminal in a neon city'
  }
})
