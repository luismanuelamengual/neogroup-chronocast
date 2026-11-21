import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cyber-samurai',
  type: 'ally',
  name: 'Cyber Samurai',
  text: 'When it attacks: draw a card.',
  flavor: 'An old code, rewritten in light.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 16,
  health: 14,
  keywords: ['quick'],
  onAttack(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a cyber samurai in sleek black armor with glowing red lines, drawing a plasma katana'
  }
})
