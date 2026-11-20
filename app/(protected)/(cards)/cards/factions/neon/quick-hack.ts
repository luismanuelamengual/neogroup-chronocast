import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'quick-hack',
  type: 'ability',
  name: 'Quick Hack',
  text: 'Deal 6 damage to an enemy ally and draw a card. Instant.',
  flavor: 'Three keystrokes. Done.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'instant',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 6)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['removal', 'draw'] },
  art: {
    subject: 'glowing cyan code wrapping around an enemy robot and making it spark'
  }
})
