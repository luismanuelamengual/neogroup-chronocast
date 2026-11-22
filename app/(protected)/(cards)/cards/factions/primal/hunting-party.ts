import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hunting-party',
  type: 'ability',
  name: 'Hunting Party',
  text: 'Deal 4 damage to an enemy ally and draw a card.',
  flavor: 'Everyone eats tonight.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 170,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['removal', 'draw'] },
  art: {
    subject: 'tribal hunters with spears and a raptor companion charging at a giant beast through tall grass'
  }
})
