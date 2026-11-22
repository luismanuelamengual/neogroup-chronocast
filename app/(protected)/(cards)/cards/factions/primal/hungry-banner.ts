import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hungry-banner',
  type: 'artifact',
  name: 'Hungry Banner',
  text: 'At the start of each phase: deal 3 ice damage to a random enemy ally. (3 uses)',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  element: 'ice',
  price: 170,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'Hungry Banner: a single mysterious banner artifact glowing on a pedestal, prehistoric jungle era style'
  }
})
