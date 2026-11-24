import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-labyrinth',
  type: 'ability',
  name: 'Rally of the Labyrinth',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  flavor: 'Lost in the maze, found in the fight.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 4)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Rally of the Labyrinth: a tattered war banner planted in the ground, glowing with rallying light, in a snowy pass, close-up filling the frame, lime green accents, ancient bronze-age empire style'
  }
})
