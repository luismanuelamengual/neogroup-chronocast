import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tracking-stasis',
  type: 'ability',
  name: 'Tracking Stasis',
  text: 'Freeze an enemy ally.',
  flavor: 'Stop right there. The hunt is over.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Tracking Stasis: a clock frozen inside a floating crystal, its hands stopped, above a calm lake at dusk, close-up filling the frame, turquoise accents, hunter style'
  }
})
