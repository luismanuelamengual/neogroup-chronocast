import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-banner',
  type: 'artifact',
  name: 'Restless Banner',
  text: 'At the start of each phase: deal 3 damage to a random enemy ally. (3 uses)',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Restless Banner: an ancient banner made of dark yew wood and brass fittings, standing among ancient trees, swirling around the center, crimson accents, time rift wanderer style'
  }
})
