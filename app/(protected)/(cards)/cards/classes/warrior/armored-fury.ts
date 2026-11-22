import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-fury',
  type: 'ability',
  name: 'Armored Fury',
  text: 'An ally of yours gains +3 attack and +4 health. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'Armored Fury: a warrior surrounded by a surging aura of power, warrior style'
  }
})
