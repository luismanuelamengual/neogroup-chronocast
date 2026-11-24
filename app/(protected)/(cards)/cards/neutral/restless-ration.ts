import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-ration',
  type: 'item',
  name: 'Restless Ration',
  text: 'An ally of yours gains +6 attack this phase. Instant.',
  flavor: 'Food from the future. Tastes like the past.',
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
    subject:
      'Restless Ration: a small ration made of ivory and jade, on a fur rug, centered and seen from slightly below, emerald accents, time rift wanderer style'
  }
})
