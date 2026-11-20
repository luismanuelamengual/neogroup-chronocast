import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grappling-hook',
  type: 'item',
  name: 'Grappling Hook',
  text: 'Deal 6 damage to an enemy slot and draw a card.',
  flavor: 'Pull the future a little closer.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 6)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a grappling hook flying on a rope towards a creature, glinting in the light'
  }
})
