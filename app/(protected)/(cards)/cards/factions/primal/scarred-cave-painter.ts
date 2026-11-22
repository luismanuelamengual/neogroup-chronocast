import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scarred-cave-painter',
  type: 'ally',
  name: 'Scarred Cave Painter',
  text: 'When it enters: your other Caveborn gain +1 attack and +1 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  resist: ['ice'],
  price: 570,
  cost: 3,
  tribe: 'caveborn',
  keywords: ['charge'],
  attack: 5,
  health: 6,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'caveborn', 1, 1, true)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'a prehistoric tribe warrior in furs and bone ornaments, the scarred cave painter, standing guard, prehistoric jungle era style'
  }
})
