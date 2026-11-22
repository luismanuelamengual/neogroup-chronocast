import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lamplighter-of-thorns',
  type: 'ally',
  name: 'Lamplighter of Thorns',
  text: 'When it dies: deal 5 damage to a random enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  attack: 6,
  health: 8,
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 5)
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject: 'a time-traveling adventurer, the lamplighter of thorns, raising its weapon, hunter style'
  }
})
