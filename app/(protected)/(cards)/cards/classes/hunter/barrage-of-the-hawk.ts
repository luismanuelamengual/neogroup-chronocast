import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-the-hawk',
  type: 'ability',
  name: 'Barrage of the Hawk',
  text: 'Deal 6 wind damage to an enemy ally. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  element: 'wind',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 6)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'Barrage of the Hawk: a crackling bolt of energy striking a lone target, hunter style'
  }
})
