import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-of-the-wanderer',
  type: 'artifact',
  name: 'Lantern of the Wanderer',
  text: 'At the start of each phase: your hero heals 3. (3 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Lantern of the Wanderer: an ancient lantern made of gilded marble, standing in a misty clearing, bursting toward the viewer, tangerine accents, steampunk steam era style'
  }
})
