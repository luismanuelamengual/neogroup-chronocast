import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'poison-arrows',
  type: 'ability',
  name: 'Poison Arrows',
  text: 'Deal 2 damage to an enemy slot and poison it (3).',
  flavor: 'The arrow is the message. The poison is the ending.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 60,
  cost: 1,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 2)
    poison(ctx, ctx.targets[0], 3)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a volley of green-tipped arrows dripping with glowing poison flying through a dark forest'
  }
})
