import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'weary-plan',
  type: 'ability',
  name: 'Weary Plan',
  text: 'Draw 2 cards.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'Weary Plan: glowing cards and runes swirling out of an open book, time rift wanderer style'
  }
})
