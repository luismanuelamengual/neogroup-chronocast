import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'magic-bolt',
  type: 'ability',
  name: 'Magic Bolt',
  text: 'Deal 7 damage to an enemy slot. Fast.',
  flavor: 'The first spell every apprentice learns. And the last some enemies see.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 7)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: "a bright violet bolt of magic shooting from a mage's fingertip"
  }
})
