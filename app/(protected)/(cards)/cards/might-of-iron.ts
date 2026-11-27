import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, grantKeyword, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-iron',
  type: 'ability',
  subtype: 'tactic',
  name: 'Might of Iron',
  text: 'An ally of yours gains +4 attack this phase and Cleave. Instant.',
  flavor: 'Strength forged, not born.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buffThisPhase(ctx, unit, 4)
      grantKeyword(ctx, unit, 'cleave')
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Might of Iron: a huge glowing fist-shaped aura of raw power, above a calm lake at dusk, swirling around the center, magenta accents, warrior style'
  }
})
