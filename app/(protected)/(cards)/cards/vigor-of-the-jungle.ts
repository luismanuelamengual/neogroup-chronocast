import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhaseAt, isPrey } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-jungle',
  type: 'ability',
  subtype: 'instinct',
  name: 'Vigor of the Jungle',
  text: 'An ally of yours gains +4 attack this phase, or +8 if an enemy ally is your Prey. Instant.',
  flavor: 'Grow wild, grow strong.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], alliesOf(ctx, ctx.opponent).some((unit) => isPrey(ctx, unit)) ? 8 : 4)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Vigor of the Jungle: a glowing heart of green life energy pulsing with veins of light, over a desert of red dunes, seen from above, rose pink accents, prehistoric jungle era style'
  }
})
