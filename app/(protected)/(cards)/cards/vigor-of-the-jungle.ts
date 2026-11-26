import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-jungle',
  type: 'ability',
  subtype: 'instinct',
  name: 'Vigor of the Jungle',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'Grow wild, grow strong.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 8)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Vigor of the Jungle: a glowing heart of green life energy pulsing with veins of light, over a desert of red dunes, seen from above, rose pink accents, prehistoric jungle era style'
  }
})
