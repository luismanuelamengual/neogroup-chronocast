import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'raptor-scout',
  type: 'ally',
  name: 'Raptor Scout',
  text: 'When it dies: draw a card.',
  flavor: 'It always comes back with news, even when it does not come back.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 65,
  cost: 2,
  attack: 5,
  health: 5,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a small fast raptor with a feathered crest sprinting through the jungle, looking back over its shoulder'
  }
})
