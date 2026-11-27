import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-dusk',
  type: 'ability',
  subtype: 'tactic',
  name: 'Vigor of Dusk',
  text: 'An ally of yours gains as much attack this phase as its health. Instant.',
  flavor: 'Evening brings a second wind.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buffThisPhase(ctx, unit, unit.health)
    }
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Vigor of Dusk: a glowing heart of green life energy pulsing with veins of light, above a calm lake at dusk, seen from above, scarlet accents, ancient bronze-age empire style'
  }
})
