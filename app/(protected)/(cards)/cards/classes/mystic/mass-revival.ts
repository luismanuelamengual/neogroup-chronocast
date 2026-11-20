import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mass-revival',
  type: 'ability',
  name: 'Mass Revival',
  text: 'A random ally of your discard pile returns to play, a random ally of your discard pile returns to play and your allies heal 6. Slow.',
  flavor: 'Rise, all of you.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 675,
  cost: 6,
  speed: 'slow',
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    reviveFromDiscard(ctx, ctx.owner)
    healAllAllies(ctx, ctx.owner, 6)
  },
  ai: { value: 7, tags: ['revive', 'heal'] },
  art: {
    subject: 'several fallen warriors rising in pillars of golden light on a battlefield at dawn'
  }
})
