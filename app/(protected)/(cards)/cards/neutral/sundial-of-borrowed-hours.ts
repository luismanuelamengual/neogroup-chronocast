import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sundial-of-borrowed-hours',
  type: 'artifact',
  name: 'Sundial of Borrowed Hours',
  text: 'At the start of each phase: your hero gains 1 energy. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['energy'] },
  art: {
    subject:
      'Sundial of Borrowed Hours: a single mysterious hours artifact glowing on a pedestal, time rift wanderer style'
  }
})
