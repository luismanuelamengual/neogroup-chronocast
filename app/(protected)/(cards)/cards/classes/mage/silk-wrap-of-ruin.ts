import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'silk-wrap-of-ruin',
  type: 'armor',
  name: 'Silk Wrap of Ruin',
  text: 'When it is equipped: your allies heal 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  armor: 6,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 2 },
  art: {
    subject: 'Silk Wrap of Ruin: a single piece of armor on a stand, mage style'
  }
})
