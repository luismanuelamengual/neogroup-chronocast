import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-monolith',
  type: 'artifact',
  name: 'Wandering Monolith',
  text: 'At the start of each phase: your hero gains 3 armor. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'any' },
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
    subject: 'Wandering Monolith: a single mysterious monolith artifact glowing on a pedestal, time rift wanderer style'
  }
})
