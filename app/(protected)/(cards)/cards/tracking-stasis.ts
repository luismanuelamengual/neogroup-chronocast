import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, freeze, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-stasis',
  type: 'ability',
  subtype: 'spell',
  name: 'Tracking Stasis',
  text: 'Freeze an enemy ally. Draw a card if it has 6 attack or more.',
  flavor: 'Stop right there. The hunt is over.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 40,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    freeze(ctx, ctx.targets[0])

    if (unit && ctx.engine.attackOf(unit) >= 6) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Tracking Stasis: a clock frozen inside a floating crystal, its hands stopped, above a calm lake at dusk, close-up filling the frame, turquoise accents, hunter style'
  }
})
