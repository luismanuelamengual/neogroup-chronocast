import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courage-of-iron',
  type: 'ability',
  name: 'Courage of Iron',
  text: 'An ally of yours gains +3 attack and +4 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Courage of Iron: a lion-head emblem blazing with golden light, over a desert of red dunes, centered and seen from slightly below, indigo accents, warrior style'
  }
})
