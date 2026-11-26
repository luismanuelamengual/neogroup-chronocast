import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'argos-the-silver-hound',
  type: 'ally',
  name: 'Argos, the Silver Hound',
  text: 'When it enters: deal 3 wind damage to a random enemy ally.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'rare',
  price: 420,
  element: 'wind',
  cost: 3,
  keywords: ['quick'],
  attack: 4,
  health: 6,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a sleek silver hound with a golden collar leaping through a sunny meadow'
  }
})
