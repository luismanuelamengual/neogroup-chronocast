import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'elk-of-the-wilds',
  type: 'ally',
  name: 'Elk of the Wilds',
  text: 'When it dies: deal 7 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 80,
  cost: 6,
  tribe: 'beast',
  attack: 8,
  health: 9,
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 7)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'an ice-age beast, the elk of the wilds, mid-leap, hunter style'
  }
})
