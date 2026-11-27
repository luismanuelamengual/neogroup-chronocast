import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chronometer',
  type: 'artifact',
  name: 'Chronometer',
  text: 'At the start of each phase: if you have 4 or more artifacts, draw a card.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  onPhaseStart(ctx) {
    if (artifactCount(ctx) >= 4) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Chronometer: a brass precision chronometer with many dials and a ticking golden escapement, steampunk clockwork era style'
  }
})
