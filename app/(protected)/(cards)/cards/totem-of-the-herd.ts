import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, slotOf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'totem-of-the-herd',
  type: 'artifact',
  name: 'Totem of the Herd',
  text: 'At the start of each phase: your Beasts heal 2.',
  flavor: 'The herd remembers where it stands.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  onPhaseStart(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'beast')) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 2)
      }
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Totem of the Herd: an ancient totem made of crystal and silver filigree, standing in shallow water, bursting toward the viewer, ivory accents, prehistoric jungle era style'
  }
})
