import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forced-march',
  type: 'ability',
  name: 'Forced March',
  text: 'An ally of yours gains +10 attack this phase and draw a card. Instant.',
  flavor: 'Sleep is for the conquered.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 10)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['buff', 'draw'] },
  art: {
    subject: 'legionaries running in formation along a straight Roman road at dusk, dust trailing behind'
  }
})
