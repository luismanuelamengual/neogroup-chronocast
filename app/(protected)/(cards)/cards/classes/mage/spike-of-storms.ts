import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-storms',
  type: 'ability',
  name: 'Spike of Storms',
  text: 'Deal 11 lightning damage to an enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'lightning',
  price: 65,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 11)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'Spike of Storms: a crackling bolt of energy striking a lone target, mage style'
  }
})
