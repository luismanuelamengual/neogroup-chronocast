import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ley-line-conduit',
  type: 'artifact',
  name: 'Ley Line Conduit',
  text: 'Artifact. At the start of each phase, your hero gains 1 more energy.',
  flavor: 'Tap the river of power under the world.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 600,
  cost: 3,
  onPhaseStart(ctx) {
    gainEnergy(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['energy'] },
  art: {
    subject: 'a crystal obelisk planted on glowing blue ley lines that run across the ground like rivers'
  }
})
