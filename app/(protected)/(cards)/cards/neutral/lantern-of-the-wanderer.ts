import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-of-the-wanderer',
  type: 'artifact',
  name: 'Lantern of the Wanderer',
  text: 'At the start of each phase: your hero gains 3 armor. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Lantern of the Wanderer: an ancient lantern made of gilded marble, standing in a misty clearing, bursting toward the viewer, tangerine accents, time rift wanderer style'
  }
})
