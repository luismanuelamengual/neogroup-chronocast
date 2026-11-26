import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-ancestors',
  type: 'ability',
  name: 'Vigor of the Ancestors',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'The old blood still runs strong.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Vigor of the Ancestors: a glowing heart of green life energy pulsing with veins of light, in a sunlit meadow, diagonal dynamic composition, rose pink accents, mystic healer style'
  }
})
