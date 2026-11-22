import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clock-of-dusk',
  type: 'artifact',
  name: 'Clock of Dusk',
  text: 'At the start of each phase: your hero gains 1 energy. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject: 'Clock of Dusk: a single mysterious dusk artifact glowing on a pedestal, time rift wanderer style'
  }
})
