import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-ration',
  type: 'item',
  name: 'Restless Ration',
  text: 'An ally of yours gains +3 attack and heals 5. Instant.',
  flavor: 'Food from the future. Tastes like the past.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 0)
    heal(ctx, ctx.targets[0], 5)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Restless Ration: a small ration made of ivory and jade, on a fur rug, centered and seen from slightly below, emerald accents, time rift wanderer style'
  }
})
