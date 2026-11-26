import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courage-of-the-ancestors',
  type: 'ability',
  subtype: 'instinct',
  name: 'Courage of the Ancestors',
  text: 'An ally of yours gains +3 attack and +4 health.',
  flavor: 'They were brave. So are you.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Courage of the Ancestors: a lion-head emblem blazing with golden light, over a stormy battlefield, seen from above, tangerine accents, mystic healer style'
  }
})
