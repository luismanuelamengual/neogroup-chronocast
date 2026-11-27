import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronosCapacity, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sundial-of-the-last-hour',
  type: 'artifact',
  name: 'Sundial of the Last Hour',
  text: 'At the start of each phase: you gain 1 Chronos capacity. (2 uses)',
  flavor: 'Its shadow points to the end.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  charges: 2,
  onPhaseStart(ctx) {
    gainChronosCapacity(ctx, ctx.owner, 1)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Sundial of the Last Hour: an ancient sundial made of rusted iron and chains, standing on a floating rock, centered and seen from slightly below, tangerine accents, steampunk steam era style'
  }
})
