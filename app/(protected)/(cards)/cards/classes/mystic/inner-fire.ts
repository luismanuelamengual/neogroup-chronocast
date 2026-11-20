import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'inner-fire',
  type: 'ability',
  name: 'Inner Fire',
  text: 'An ally of yours gains +6 attack this phase and it heals 6. Fast.',
  flavor: 'The flame was always there.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 150,
  cost: 1,
  speed: 'fast',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 6)
    heal(ctx, ctx.targets[0], 6)
  },
  ai: { value: 1, tags: ['buff', 'heal'] },
  art: {
    subject: 'a warrior glowing from inside with a warm orange flame in his chest'
  }
})
