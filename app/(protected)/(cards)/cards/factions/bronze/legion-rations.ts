import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legion-rations',
  type: 'item',
  name: 'Legion Rations',
  text: 'Your allies heal 6.',
  flavor: 'Bread, cheese and a sip of wine. Enough to conquer Gaul.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 6)
  },
  ai: { value: 1, tags: ['heal'] },
  art: {
    subject: "a soldier's bag open on a rock with bread, cheese, olives and a clay wine jug"
  }
})
