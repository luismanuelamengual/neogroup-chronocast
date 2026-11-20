import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pixel-the-drone-fox',
  type: 'ally',
  name: 'Pixel, the Drone Fox',
  text: 'On enter: draw a card.',
  flavor: 'Part fox, part drone, all trouble.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'vex-nightwire' },
  rarity: 'rare',
  price: 525,
  cost: 2,
  attack: 8,
  health: 12,
  keywords: ['stealth', 'quick'],
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a robotic fox made of glowing neon panels with holographic tail, crouching on a neon sign'
  }
})
