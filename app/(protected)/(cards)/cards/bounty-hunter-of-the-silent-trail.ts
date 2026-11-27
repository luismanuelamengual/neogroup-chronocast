import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison, randomAlly, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-hunter-of-the-silent-trail',
  type: 'ally',
  name: 'Bounty Hunter of the Silent Trail',
  text: 'When it dies: poison a random enemy ally (3).',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  keywords: ['quick'],
  attack: 3,
  health: 6,
  onDeath(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref) {
      poison(ctx, ref, 3)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Bounty Hunter of the Silent Trail: a towering adult owlfolk woman with sandy feathers and a jeweled brow piercing, dressed in a 1920s pinstripe suit with a tattered cape, holding a wanted poster and a coiled lasso, with a confident smirk, amber accents, hunter style'
  }
})
