import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ethereal-beacon',
  type: 'artifact',
  name: 'Ethereal Beacon',
  text: 'At the start of each phase: deal 2 arcane damage to a random enemy ally. (4 uses)',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  element: 'arcane',
  price: 450,
  cost: 1,
  charges: 4,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Ethereal Beacon: a single mysterious beacon artifact glowing on a pedestal, mage style'
  }
})
