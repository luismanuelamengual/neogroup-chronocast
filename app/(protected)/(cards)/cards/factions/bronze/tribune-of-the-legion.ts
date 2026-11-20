import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tribune-of-the-legion',
  type: 'ally',
  name: 'Tribune of the Legion',
  text: 'On enter: your other allies gain +2 attack and +2 health.',
  flavor: 'His voice carries over the clash of a thousand shields.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 14,
  health: 26,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 2, 2, true)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'a young tribune on horseback raising a gladius, rallying a line of legionaries behind him'
  }
})
