import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forsaken-resurrection',
  type: 'ability',
  name: 'Forsaken Resurrection',
  text: 'A random ally of your discard pile returns to play. Slow.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  speed: 'slow',
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject: 'Forsaken Resurrection: a ghostly figure rising from a grave in green light, dark end-of-time void style'
  }
})
