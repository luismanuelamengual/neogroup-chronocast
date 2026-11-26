import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clock-of-embers',
  type: 'artifact',
  name: 'Clock of Embers',
  text: 'At the start of each phase: your hero heals 3. (3 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject:
      'Clock of Embers: an ancient clock made of polished bronze with engraved spirals, standing in a torchlit hall, centered and seen from slightly below, rose pink accents, steampunk steam era style'
  }
})
