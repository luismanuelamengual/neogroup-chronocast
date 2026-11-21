import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { chargesLeft, draw, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'buried-capsule',
  type: 'artifact',
  name: 'Buried Capsule',
  text: 'Artifact with 2 uses. When its last use is spent, at the start of a phase, you draw 3 cards.',
  flavor: 'Open in two phases. Not before.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 1,
  charges: 2,
  onPhaseStart(ctx) {
    if (chargesLeft(ctx) === 1) {
      draw(ctx, ctx.owner, 3)
    }

    spendCharge(ctx)
  },
  ai: { value: 2 },
  art: {
    subject: 'a sealed brass time capsule with a ticking dial, light leaking through its seams'
  }
})
