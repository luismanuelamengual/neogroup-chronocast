import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'repair-bay',
  type: 'artifact',
  name: 'Repair Bay',
  text: 'At the start of each phase: your allies heal 2. (3 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Repair Bay: a workshop bay with robotic arms welding and patching a dented automaton, steampunk clockwork era style'
  }
})
