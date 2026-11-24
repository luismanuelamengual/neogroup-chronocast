import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'solar-idol',
  type: 'artifact',
  name: 'Solar Idol',
  text: 'At the start of each phase: draw a card. (3 uses)',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Solar Idol: an ancient idol made of blue steel with silver runes, standing in a misty clearing, bursting toward the viewer, magenta accents, ancient bronze-age empire style'
  }
})
