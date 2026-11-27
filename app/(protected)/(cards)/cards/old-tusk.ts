import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, slotOf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-tusk',
  type: 'ally',
  reward: true,
  name: 'Old Tusk',
  text: 'At the start of each phase: your other Beasts heal 3.',
  flavor: "Ooma's oldest companion, and her heaviest.",
  faction: 'primal',
  restriction: { heroes: ['ooma-bonewhisper'] },
  rarity: 'rare',
  cost: 5,
  tribe: 'beast',
  keywords: ['guardian', 'retaliate'],
  attack: 5,
  health: 13,
  onPhaseStart(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'beast', true)) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 3)
      }
    }
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject: 'an ancient woolly mammoth with broken tusks and tribal paint, children riding on its back'
  }
})
