import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-lost-time',
  type: 'ability',
  name: 'Rally of Lost Time',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  flavor: 'Soldiers from every era answer the call.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 4)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Rally of Lost Time: a tattered war banner planted in the ground, glowing with rallying light, above a calm lake at dusk, seen from above, rose pink accents, time rift wanderer style'
  }
})
