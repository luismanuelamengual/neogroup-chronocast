import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stray-strike',
  type: 'ability',
  name: 'Stray Strike',
  text: 'Deal 8 damage to an enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'Stray Strike: a crackling bolt of energy striking a lone target, time rift wanderer style'
  }
})
