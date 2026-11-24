import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'map-of-the-wanderer',
  type: 'item',
  name: 'Map of the Wanderer',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'It always points to where you are not.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Map of the Wanderer: a small map made of crystal and silver filigree, on a mossy rock, close-up filling the frame, saffron yellow accents, time rift wanderer style'
  }
})
