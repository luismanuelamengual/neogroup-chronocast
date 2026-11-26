import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekType, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'portable-workshop',
  type: 'artifact',
  name: 'Portable Workshop',
  text: 'At the start of each phase: draw the first artifact of your deck. (2 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  charges: 2,
  onPhaseStart(ctx) {
    seekType(ctx, ctx.owner, 'artifact')
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Portable Workshop: a brass-bound trunk unfolding into a tiny workshop with drawers of tools, a vise and a miniature boiler, puffing steam, copper and yellow accents, steampunk steam era style'
  }
})
