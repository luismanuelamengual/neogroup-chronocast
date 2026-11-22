import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-comet',
  type: 'ability',
  name: 'Spike of the Comet',
  text: 'Deal 9 arcane damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  element: 'arcane',
  price: 1720,
  cost: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 9)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'Spike of the Comet: a crackling bolt of energy striking a lone target, mage style'
  }
})
