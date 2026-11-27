import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, grantKeyword, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-volcano',
  type: 'ability',
  subtype: 'instinct',
  name: 'Rally of the Volcano',
  text: 'An ally of yours gains +4 attack this phase and Quick. Instant.',
  flavor: 'The mountain roars and the tribe answers.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'epic',
  price: 900,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buffThisPhase(ctx, unit, 4)
      grantKeyword(ctx, unit, 'quick')
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Rally of the Volcano: a tattered war banner planted in the ground, glowing with rallying light, over a desert of red dunes, diagonal dynamic composition, tangerine accents, prehistoric jungle era style'
  }
})
