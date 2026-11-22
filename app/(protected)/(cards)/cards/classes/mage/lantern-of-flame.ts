import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-of-flame',
  type: 'artifact',
  name: 'Lantern of Flame',
  text: 'At the start of each phase: deal 3 fire damage to a random enemy ally. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'fire',
  price: 170,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'Lantern of Flame: a single mysterious flame artifact glowing on a pedestal, mage style'
  }
})
