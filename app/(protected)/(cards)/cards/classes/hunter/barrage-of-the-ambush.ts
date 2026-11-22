import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-the-ambush',
  type: 'ability',
  name: 'Barrage of the Ambush',
  text: 'Deal 12 damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'legendary',
  price: 5200,
  cost: 4,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 12)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'Barrage of the Ambush: a crackling bolt of energy striking a lone target, hunter style'
  }
})
