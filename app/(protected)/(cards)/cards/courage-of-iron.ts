import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courage-of-iron',
  type: 'ability',
  subtype: 'instinct',
  name: 'Courage of Iron',
  text: 'An ally of yours gains +5 attack and takes 3 shadow damage.',
  flavor: 'Iron does not bend. Neither will you.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 5, 0)
    damage(ctx, ctx.targets[0], 3, 'shadow')
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Courage of Iron: a lion-head emblem blazing with golden light, over a desert of red dunes, centered and seen from slightly below, indigo accents, warrior style'
  }
})
