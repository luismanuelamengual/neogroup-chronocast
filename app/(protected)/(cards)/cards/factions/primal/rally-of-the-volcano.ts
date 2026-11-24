import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-volcano',
  type: 'ability',
  name: 'Rally of the Volcano',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'epic',
  price: 1400,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Rally of the Volcano: a tattered war banner planted in the ground, glowing with rallying light, over a desert of red dunes, diagonal dynamic composition, tangerine accents, prehistoric jungle era style'
  }
})
