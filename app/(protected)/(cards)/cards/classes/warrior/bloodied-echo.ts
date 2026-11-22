import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-echo',
  type: 'ability',
  name: 'Bloodied Echo',
  text: 'A random ally of your discard pile returns to play. Slow.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'slow',
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject: 'Bloodied Echo: a ghostly figure rising from a grave in green light, warrior style'
  }
})
