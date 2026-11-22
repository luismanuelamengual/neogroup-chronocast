import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-lost-time',
  type: 'ability',
  name: 'Rally of Lost Time',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
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
    subject: 'Rally of Lost Time: a warrior surrounded by a surging aura of power, time rift wanderer style'
  }
})
