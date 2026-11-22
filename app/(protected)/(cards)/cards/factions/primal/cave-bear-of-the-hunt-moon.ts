import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cave-bear-of-the-hunt-moon',
  type: 'ally',
  name: 'Cave Bear of the Hunt Moon',
  text: 'When it enters: your allies heal 3.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  tribe: 'beast',
  keywords: ['charge'],
  attack: 5,
  health: 7,
  onEnter(ctx) {
    healAllAllies(ctx, ctx.owner, 3)
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject: 'an ice-age beast, the cave bear of the hunt moon, charging into battle, prehistoric jungle era style'
  }
})
