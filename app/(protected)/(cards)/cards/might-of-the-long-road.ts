import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-long-road',
  type: 'ability',
  subtype: 'instinct',
  name: 'Might of the Long Road',
  text: 'An ally of yours gains +3 attack and +4 health. Instant.',
  flavor: 'Every mile walked makes the arm stronger.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 4)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Might of the Long Road: a huge glowing fist-shaped aura of raw power, in a snowy pass, centered and seen from slightly below, teal accents, prehistoric jungle era style'
  }
})
