import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'primal-grove',
  type: 'artifact',
  name: 'Primal Grove',
  text: 'Artifact. At the start of each phase, your allies heal 4.',
  flavor: 'The oldest forest heals the oldest wounds.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 4)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'a lush prehistoric grove with giant glowing ferns, a waterfall and soft green light falling through the canopy'
  }
})
