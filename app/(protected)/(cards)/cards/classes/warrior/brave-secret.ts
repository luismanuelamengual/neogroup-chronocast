import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'brave-secret',
  type: 'ability',
  name: 'Brave Secret',
  text: 'Draw 2 cards.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'legendary',
  price: 4800,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject: 'Brave Secret: glowing cards and runes swirling out of an open book, warrior style'
  }
})
