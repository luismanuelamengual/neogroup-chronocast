import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-of-flame',
  type: 'artifact',
  name: 'Lantern of Flame',
  text: 'At the start of each phase: deal 3 fire damage to a random enemy ally. (3 uses)',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'fire',
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
      'Lantern of Flame: an ancient lantern made of crystal and silver filigree, wreathed in roaring flames, standing among ancient trees, swirling around the center, scarlet accents, mage style'
  }
})
