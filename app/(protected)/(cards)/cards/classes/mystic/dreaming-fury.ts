import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-fury',
  type: 'ability',
  name: 'Dreaming Fury',
  text: 'An ally of yours gains +5 attack and +7 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 65,
  cost: 4,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 5, 7)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'Dreaming Fury: a warrior surrounded by a surging aura of power, mystic healer style'
  }
})
