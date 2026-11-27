import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn, randomAlly, slotOf, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'obelisk-of-flame',
  type: 'artifact',
  name: 'Obelisk of Flame',
  text: 'At the start of each phase: burn a random enemy ally (2). (3 uses)',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  element: 'fire',
  price: 65,
  cost: 4,
  charges: 3,
  onPhaseStart(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref) {
      burn(ctx, ref, 2)
    }

    spendCharge(ctx)
  },
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject:
      'Obelisk of Flame: an ancient obelisk made of white bone and leather wraps, wreathed in roaring flames, standing in a misty clearing, framed by drifting embers, violet accents, mage style'
  }
})
