import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scholars-lens',
  type: 'artifact',
  name: 'Scholar Lens',
  text: 'Artifact with 3 uses. At the start of each phase, you draw a card.',
  flavor: 'It reads what is not written yet.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 550,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
    spendCharge(ctx)
  },
  ai: { value: 3 },
  art: {
    subject: 'a brass magnifying lens floating over an open book, glowing runes rising from the pages'
  }
})
