import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clock-of-embers',
  type: 'artifact',
  name: 'Clock of Embers',
  text: 'At the start of each phase: your hero gains 3 armor. (3 uses)',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 3)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject: 'Clock of Embers: a single mysterious embers artifact glowing on a pedestal, medieval magic order style'
  }
})
