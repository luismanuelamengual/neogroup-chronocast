import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'relentless-fury',
  type: 'ability',
  name: 'Relentless Fury',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 450,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'Relentless Fury: a warrior surrounded by a surging aura of power, warrior style'
  }
})
