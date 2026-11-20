import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lightning-bolt',
  type: 'ability',
  name: 'Lightning Bolt',
  text: 'Deal 12 damage to an enemy slot. Fast.',
  flavor: 'From the sky, with love.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  speed: 'fast',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 12)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a jagged bolt of blue lightning striking down from a stormy sky'
  }
})
