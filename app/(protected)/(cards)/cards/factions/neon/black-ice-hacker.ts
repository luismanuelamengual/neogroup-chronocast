import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'black-ice-hacker',
  type: 'ally',
  name: 'Black Ice Hacker',
  text: 'On enter: draw 2 cards.',
  flavor: 'She does not break in. She was always inside.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 10,
  health: 11,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject: 'a hacker in a dark hoodie surrounded by floating holographic screens of black and cyan code'
  }
})
