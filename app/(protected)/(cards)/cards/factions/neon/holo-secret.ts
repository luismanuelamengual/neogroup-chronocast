import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'holo-secret',
  type: 'ability',
  name: 'Holo Secret',
  text: 'Draw 2 cards.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 65,
  cost: 4,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Holo Secret: a sealed envelope with a glowing wax seal, half hidden in shadow, over a desert of red dunes, seen from above, teal accents, neon cyberpunk future style'
  }
})
