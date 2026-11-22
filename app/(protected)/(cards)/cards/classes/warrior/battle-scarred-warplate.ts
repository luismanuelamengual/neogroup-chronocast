import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'battle-scarred-warplate',
  type: 'armor',
  name: 'Battle-Scarred Warplate',
  text: 'When it is equipped: your allies heal 2.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'mythic',
  price: 31000,
  cost: 4,
  armor: 15,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 7 },
  art: {
    subject: 'Battle-Scarred Warplate: a single piece of armor on a stand, warrior style'
  }
})
