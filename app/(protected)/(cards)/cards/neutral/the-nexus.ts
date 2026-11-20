import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-nexus',
  type: 'location',
  name: 'The Nexus',
  text: 'At the start of each phase, gain 1 Chronos and draw a card.',
  flavor: 'Where every era meets, and every road begins.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'exotic',
  price: 12500,
  cost: 5,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 7, tags: ['ramp', 'draw'] },
  art: {
    subject: 'a gigantic glowing crossroads of portals to many eras floating in a starry void'
  }
})
