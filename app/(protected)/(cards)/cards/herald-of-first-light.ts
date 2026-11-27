import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'herald-of-first-light',
  type: 'ally',
  name: 'Herald of First Light',
  text: 'When it enters: put the first ally of your discard pile in your hand.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 6,
  tribe: 'fae',
  keywords: ['flying'],
  attack: 6,
  health: 12,
  onEnter(ctx) {
    alliesToHand(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Herald of First Light: a radiant winged fae herald blowing a golden trumpet, a spectral warrior stepping out of the light behind it, mystic healer style'
  }
})
