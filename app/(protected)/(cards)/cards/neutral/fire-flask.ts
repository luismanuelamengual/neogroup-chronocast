import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fire-flask',
  type: 'item',
  name: 'Fire Flask',
  text: 'Deal 14 damage to an enemy slot. Fast.',
  flavor: 'Handle with oven mitts.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  speed: 'fast',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 14)
  },
  ai: { value: 3, tags: ['removal', 'burn'] },
  art: {
    subject: 'a round glass flask full of swirling orange fire, flying through the air'
  }
})
