import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-dusk',
  type: 'ability',
  name: 'Vigor of Dusk',
  text: 'An ally of yours gains +12 attack this phase. Instant.',
  flavor: 'Evening brings a second wind.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 205,
  cost: 5,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 12)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Vigor of Dusk: a glowing heart of green life energy pulsing with veins of light, above a calm lake at dusk, seen from above, scarlet accents, time rift wanderer style'
  }
})
