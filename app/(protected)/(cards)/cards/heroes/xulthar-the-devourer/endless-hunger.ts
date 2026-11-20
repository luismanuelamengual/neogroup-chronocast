import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'endless-hunger',
  type: 'ability',
  boss: true,
  name: 'Endless Hunger',
  text: 'A random ally of your discard pile returns to play and a random ally of your discard pile returns to play.',
  flavor: 'Nothing it eats stays gone.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'xulthar-the-devourer' },
  rarity: 'epic',
  cost: 3,
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 4, tags: ['revive'] },
  art: {
    subject: 'shadowy creatures crawling back out of a dark swirling mouth in the void'
  }
})
