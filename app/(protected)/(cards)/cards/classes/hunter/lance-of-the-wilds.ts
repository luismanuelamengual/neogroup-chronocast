import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lance-of-the-wilds',
  type: 'ability',
  name: 'Lance of the Wilds',
  text: 'Deal 11 damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 65,
  cost: 4,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 11)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'Lance of the Wilds: a crackling bolt of energy striking a lone target, hunter style'
  }
})
