import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'server-farm',
  type: 'location',
  name: 'Server Farm',
  text: 'At the start of each phase, draw a card and gain 1 Chronos.',
  flavor: 'Every byte of every era, stored and humming.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'legendary',
  price: 5000,
  cost: 4,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['draw', 'ramp'] },
  art: {
    subject: 'an enormous server farm with endless rows of glowing blue servers in a dark futuristic hall'
  }
})
