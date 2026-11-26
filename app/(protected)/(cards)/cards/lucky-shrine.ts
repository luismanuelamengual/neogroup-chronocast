import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lucky-shrine',
  type: 'artifact',
  name: 'Lucky Shrine',
  text: 'At the start of each phase: deal 4 damage to a random enemy ally. (3 uses)',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  charges: 3,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
    spendCharge(ctx)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Lucky Shrine: an ancient shrine made of rusted iron and chains, standing in a torchlit hall, swirling around the center, scarlet accents, time rift wanderer style'
  }
})
