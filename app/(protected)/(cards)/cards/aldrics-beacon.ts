import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, heal, slotOf, spendCharge, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aldrics-beacon',
  type: 'artifact',
  name: "Aldric's Beacon",
  text: 'At the start of each phase: your Magi heal 2 and gain +1 attack. (3 uses)',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'magus')) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 2)
      }

      buff(ctx, unit, 1, 0)
    }

    spendCharge(ctx)
  },
  charges: 3,
  ai: { value: 5 },
  art: {
    subject:
      "Aldric's Beacon: an ancient beacon made of gilded marble, standing in shallow water, seen from above, lime green accents, medieval magic order style"
  }
})
