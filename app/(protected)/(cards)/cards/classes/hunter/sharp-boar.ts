import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharp-boar',
  type: 'ally',
  name: 'Sharp Boar',
  text: 'When it enters: deal 3 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'beast',
  attack: 4,
  health: 3,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 2, tags: ['aggro', 'removal'] },
  art: {
    subject: 'an ice-age beast, the sharp boar, raising its weapon, hunter style'
  }
})
