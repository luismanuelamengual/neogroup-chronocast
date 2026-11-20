import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clockwork-dragon',
  type: 'ally',
  name: 'Clockwork Dragon',
  text: 'On enter: deal 4 damage to every enemy ally.',
  flavor: 'Its fire runs on coal and very bad intentions.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 675,
  cost: 6,
  attack: 22,
  health: 40,
  keywords: ['flying'],
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 4)
  },
  ai: { value: 7, tags: ['removal'] },
  art: {
    subject: 'a brass and copper mechanical dragon with clockwork wings breathing fire over a Victorian city'
  }
})
