import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-hawk',
  type: 'ability',
  name: 'Rally of the Hawk',
  text: 'An ally of yours gains +4 attack and +5 health. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 4, 5)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'Rally of the Hawk: a warrior surrounded by a surging aura of power, hunter style'
  }
})
