import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stray-fury',
  type: 'ability',
  name: 'Stray Fury',
  text: 'An ally of yours gains +3 attack and +4 health. Instant.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 4)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'Stray Fury: a warrior surrounded by a surging aura of power, time rift wanderer style'
  }
})
