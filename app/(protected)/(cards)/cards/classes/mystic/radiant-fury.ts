import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'radiant-fury',
  type: 'ability',
  name: 'Radiant Fury',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
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
    subject: 'Radiant Fury: a warrior surrounded by a surging aura of power, mystic healer style'
  }
})
