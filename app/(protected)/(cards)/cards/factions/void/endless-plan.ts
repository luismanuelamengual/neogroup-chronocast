import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'endless-plan',
  type: 'ability',
  name: 'Endless Plan',
  text: 'Draw a card.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject: 'Endless Plan: glowing cards and runes swirling out of an open book, dark end-of-time void style'
  }
})
