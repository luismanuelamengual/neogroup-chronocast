import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'temporal-shock',
  type: 'ability',
  name: 'Temporal Shock',
  text: 'Deal 10 damage to an enemy ally. Fast.',
  flavor: 'A jolt from a second that went wrong.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a crackling bolt of turquoise lightning shaped like a clock hand striking a creature'
  }
})
