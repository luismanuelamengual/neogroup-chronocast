import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flask-of-dusk',
  type: 'item',
  name: 'Flask of Dusk',
  text: 'An ally of yours gains +6 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 6)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Flask of Dusk: a small flask made of blackened iron with gold inlay, stuck in the sand, framed by drifting embers, turquoise accents, time rift wanderer style'
  }
})
