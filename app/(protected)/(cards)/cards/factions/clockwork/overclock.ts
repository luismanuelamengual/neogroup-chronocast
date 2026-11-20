import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overclock',
  type: 'ability',
  name: 'Overclock',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'Faster! Faster! Oh no.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 8)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'a robot glowing red-hot with gears spinning wildly and steam bursting out'
  }
})
