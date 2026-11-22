import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-fury',
  type: 'ability',
  name: 'Devout Fury',
  text: 'An ally of yours gains +1 attack and +1 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 140,
  cost: 0,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 1, 1)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'Devout Fury: a warrior surrounded by a surging aura of power, mystic healer style'
  }
})
