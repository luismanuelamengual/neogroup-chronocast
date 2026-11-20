import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buff } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'banner-of-the-rift',
  type: 'item',
  name: 'Banner of the Rift',
  text: 'Your allies gain +3 attack and +6 health.',
  flavor: 'Under it, every era fights as one.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      buff(ctx, unit, 3, 6)
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'a tall turquoise banner with an hourglass emblem waving above a cheering army'
  }
})
