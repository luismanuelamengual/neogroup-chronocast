import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhase } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-labyrinth',
  type: 'ability',
  subtype: 'tactic',
  name: 'Rally of the Labyrinth',
  text: 'Your ally with the least attack gains +5 attack this phase. Instant.',
  flavor: 'Lost in the maze, found in the fight.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  speed: 'instant',
  onPlay(ctx) {
    const [weakest] = alliesOf(ctx, ctx.owner).sort(
      (one, other) => ctx.engine.attackOf(one) - ctx.engine.attackOf(other)
    )

    if (weakest) {
      buffThisPhase(ctx, weakest, 5)
    }
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Rally of the Labyrinth: a tattered war banner planted in the ground, glowing with rallying light, in a snowy pass, close-up filling the frame, lime green accents, ancient bronze-age empire style'
  }
})
