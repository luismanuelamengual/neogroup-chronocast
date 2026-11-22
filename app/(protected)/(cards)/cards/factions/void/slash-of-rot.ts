import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'slash-of-rot',
  type: 'ability',
  name: 'Slash of Rot',
  text: 'Deal 15 shadow damage to an enemy ally.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  element: 'shadow',
  price: 690,
  cost: 5,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 15)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'Slash of Rot: a crackling bolt of energy striking a lone target, dark end-of-time void style'
  }
})
