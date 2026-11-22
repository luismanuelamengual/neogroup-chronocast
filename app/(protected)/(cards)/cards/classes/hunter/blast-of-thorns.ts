import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blast-of-thorns',
  type: 'ability',
  name: 'Blast of Thorns',
  text: 'Deal 8 damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'Blast of Thorns: a crackling bolt of energy striking a lone target, hunter style'
  }
})
