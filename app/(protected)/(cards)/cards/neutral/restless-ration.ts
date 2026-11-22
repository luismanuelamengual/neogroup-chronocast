import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-ration',
  type: 'item',
  name: 'Restless Ration',
  text: 'An ally of yours gains +6 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 6)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'Restless Ration: a single restless ration item lying on a stone, time rift wanderer style'
  }
})
