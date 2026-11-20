import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'firewall',
  type: 'trap',
  name: 'Firewall',
  text: 'When the enemy hero uses its ability: cancel it and draw a card.',
  flavor: 'Access denied.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  trigger: 'enemyAbility',
  onTrigger(ctx, event) {
    event.cancel()
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['trap', 'control', 'draw'] },
  art: {
    subject: 'a giant glowing wall of orange digital fire blocking a stream of hostile code'
  }
})
