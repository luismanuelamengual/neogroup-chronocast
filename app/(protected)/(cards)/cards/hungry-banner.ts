import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hungry-banner',
  type: 'artifact',
  name: 'Hungry Banner',
  text: 'At the start of each phase: deal 3 ice damage to a random enemy ally. (3 uses)',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'ice',
  price: 160,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Hungry Banner: an ancient banner made of rough stone and sinew, covered in frost and ice crystals, standing in a misty clearing, centered and seen from slightly below, magenta accents, prehistoric jungle era style'
  }
})
