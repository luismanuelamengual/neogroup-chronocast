import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spark-of-dusk',
  type: 'ally',
  name: 'Spark of Dusk',
  text: 'At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  element: 'lightning',
  resist: ['lightning'],
  weak: ['earth'],
  price: 600,
  cost: 6,
  tribe: 'elemental',
  attack: 9,
  health: 12,
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 7, tags: ['heal'] },
  art: {
    subject:
      'Spark of Dusk: an elemental spark with a swirling vortex shape made of molten orange and black rock, baring its teeth, time rift wanderer style'
  }
})
