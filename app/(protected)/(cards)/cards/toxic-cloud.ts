import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poisonAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'toxic-cloud',
  type: 'ability',
  subtype: 'ritual',
  name: 'Toxic Cloud',
  text: 'Poison every ally, yours too (3).',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 360,
  cost: 3,
  onPlay(ctx) {
    poisonAllAllies(ctx, ctx.opponent, 3)
    poisonAllAllies(ctx, ctx.owner, 3)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Toxic Cloud: a thick green cloud rolling across a battlefield, soldiers of both armies coughing and staggering, dark ritual mood'
  }
})
