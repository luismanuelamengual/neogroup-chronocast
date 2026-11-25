import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'courage-of-spirits',
  type: 'ability',
  name: 'Courage of Spirits',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  flavor: 'The spirits whisper: do not run.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
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
      'Courage of Spirits: a lion-head emblem blazing with golden light, in a sunlit meadow, swirling around the center, rose pink accents, mystic healer style'
  }
})
