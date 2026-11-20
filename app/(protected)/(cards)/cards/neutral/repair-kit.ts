import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'repair-kit',
  type: 'item',
  name: 'Repair Kit',
  text: 'Your hero gains 12 armor.',
  flavor: 'Hammer, rivets and a lot of hope.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 12)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject: 'an open toolbox with a hammer, rivets and metal plates next to a dented shield'
  }
})
