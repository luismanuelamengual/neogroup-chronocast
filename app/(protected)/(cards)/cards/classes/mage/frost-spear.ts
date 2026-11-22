import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-spear',
  type: 'ability',
  name: 'Frost Spear',
  text: 'Deal 4 damage to an enemy slot and freeze it for the rest of this phase and the next.',
  flavor: 'Cold, sharp and to the point.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 60,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4)
    freeze(ctx, ctx.targets[0], 1)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a long spear of blue ice flying from the hand of a mage, frost trailing behind it'
  }
})
