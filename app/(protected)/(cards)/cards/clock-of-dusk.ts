import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clock-of-dusk',
  type: 'artifact',
  name: 'Clock of Dusk',
  text: 'At the start of each phase: the enemy hero loses 1 energy. (3 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    drainEnergy(ctx, ctx.opponent, 1)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['energy'] },
  art: {
    subject:
      'Clock of Dusk: an ancient clock made of gilded marble, standing on a windy cliff, centered and seen from slightly below, tangerine accents, steampunk steam era style'
  }
})
