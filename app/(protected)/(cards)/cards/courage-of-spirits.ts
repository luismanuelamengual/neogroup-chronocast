import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courage-of-spirits',
  type: 'ability',
  subtype: 'tactic',
  name: 'Courage of Spirits',
  text: 'An ally of yours gains +2 attack this phase for each ally of yours. Instant.',
  flavor: 'The spirits whisper: do not run.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 2 * alliesOf(ctx, ctx.owner).length)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Courage of Spirits: a lion-head emblem blazing with golden light, in a sunlit meadow, swirling around the center, rose pink accents, mystic healer style'
  }
})
