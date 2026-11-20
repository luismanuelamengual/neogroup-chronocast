import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'requiem',
  type: 'ability',
  name: 'Requiem',
  text: 'A random ally of your discard pile returns to play and your allies heal 6.',
  flavor: 'For those who fell. And those who will.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'nyx-hollowsong' },
  rarity: 'common',
  price: 60,
  cost: 4,
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    healAllAllies(ctx, ctx.owner, 6)
  },
  ai: { value: 4, tags: ['revive', 'heal'] },
  art: {
    subject: 'a choir of ghostly singers around Nyx in a dark cathedral floating in space'
  }
})
