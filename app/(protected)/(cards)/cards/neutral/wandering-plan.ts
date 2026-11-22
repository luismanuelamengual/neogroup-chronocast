import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-plan',
  type: 'ability',
  name: 'Wandering Plan',
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
    subject: 'Wandering Plan: glowing cards and runes swirling out of an open book, time rift wanderer style'
  }
})
