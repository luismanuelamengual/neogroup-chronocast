import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-wanderer',
  type: 'ability',
  name: 'Spike of the Wanderer',
  text: 'Deal 11 damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 4,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 11)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'Spike of the Wanderer: a crackling bolt of energy striking a lone target, time rift wanderer style'
  }
})
