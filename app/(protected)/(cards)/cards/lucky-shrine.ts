import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lucky-shrine',
  type: 'artifact',
  name: 'Lucky Shrine',
  text: 'At the start of each phase: deal 3 shadow damage to the enemy hero and 1 to yours. (3 uses)',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  charges: 3,
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 3, 'shadow')
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 1, 'shadow')
    spendCharge(ctx)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Lucky Shrine: an ancient shrine made of rusted iron and chains, standing in a torchlit hall, swirling around the center, scarlet accents, time rift wanderer style'
  }
})
