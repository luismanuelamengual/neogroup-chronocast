import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'holo-secret',
  type: 'ability',
  name: 'Holo Secret',
  text: 'Draw 2 cards.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 65,
  cost: 4,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'Holo Secret: glowing cards and runes swirling out of an open book, neon cyberpunk future style'
  }
})
