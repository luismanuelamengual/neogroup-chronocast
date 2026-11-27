import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainChronosCapacity, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forbidden-lands-map',
  type: 'ability',
  subtype: 'ritual',
  name: 'Forbidden Lands Map',
  text: 'If the rival has as much Chronos capacity as you or more, it loses 1. Draw a card.',
  flavor: 'Here be monsters. Here be you.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    if (ctx.engine.player(ctx.opponent).chronosCapacity >= ctx.engine.player(ctx.owner).chronosCapacity) {
      drainChronosCapacity(ctx, ctx.opponent, 1)
    }

    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw', 'control'] },
  art: {
    subject:
      'Forbidden Lands Map: an old torn map with sea monsters drawn at its edges glowing faintly, a black candle beside it, close-up filling the frame, sepia accents, dark end-of-time void style'
  }
})
