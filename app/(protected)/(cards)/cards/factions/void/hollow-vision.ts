import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-vision',
  type: 'ability',
  name: 'Hollow Vision',
  text: 'Draw 2 cards.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'Hollow Vision: glowing cards and runes swirling out of an open book, dark end-of-time void style'
  }
})
