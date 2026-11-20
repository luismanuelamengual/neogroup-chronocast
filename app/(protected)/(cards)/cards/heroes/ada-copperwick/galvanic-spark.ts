import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'galvanic-spark',
  type: 'ability',
  name: 'Galvanic Spark',
  text: 'Deal 6 damage to an enemy slot. Fast.',
  flavor: 'A little electricity to wake things up.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'ada-copperwick' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 6)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: "a bright blue spark jumping from a copper coil in Ada's hand"
  }
})
