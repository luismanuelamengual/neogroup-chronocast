import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pocket-watch',
  type: 'item',
  name: 'Pocket Watch',
  text: 'Gain 1 Chronos.',
  flavor: 'It does not tell the time. It lends it.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 140,
  cost: 0,
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['ramp'] },
  art: {
    subject: 'an ornate golden pocket watch open on a chain, its gears glowing turquoise'
  }
})
