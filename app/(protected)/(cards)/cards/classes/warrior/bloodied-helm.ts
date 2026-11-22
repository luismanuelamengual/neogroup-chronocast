import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-helm',
  type: 'armor',
  name: 'Bloodied Helm',
  text: 'When it is equipped: your allies heal 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'epic',
  price: 1880,
  cost: 4,
  armor: 13,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 5 },
  art: {
    subject: 'Bloodied Helm: a single piece of armor on a stand, warrior style'
  }
})
