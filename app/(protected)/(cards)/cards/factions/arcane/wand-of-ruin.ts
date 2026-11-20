import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wand-of-ruin',
  type: 'item',
  name: 'Wand of Ruin',
  text: 'Deal 16 damage to an enemy slot and draw a card. Fast.',
  flavor: 'Point the right end. Please.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  speed: 'fast',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 16)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['removal', 'draw'] },
  art: {
    subject: 'a black and gold wand crackling with violet destructive energy on a velvet stand'
  }
})
