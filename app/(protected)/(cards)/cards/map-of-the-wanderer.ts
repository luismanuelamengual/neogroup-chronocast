import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhase } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'map-of-the-wanderer',
  type: 'item',
  name: 'Map of the Wanderer',
  text: 'Your allies with 3 attack or less gain +3 attack this phase. Instant.',
  flavor: 'It always points to where you are not.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'instant',
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      if (ctx.engine.attackOf(unit) <= 3) {
        buffThisPhase(ctx, unit, 3)
      }
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Map of the Wanderer: a small map made of crystal and silver filigree, on a mossy rock, close-up filling the frame, saffron yellow accents, time rift wanderer style'
  }
})
