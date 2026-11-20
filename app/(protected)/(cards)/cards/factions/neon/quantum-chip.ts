import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'quantum-chip',
  type: 'item',
  name: 'Quantum Chip',
  text: 'Draw 3 cards. Fast.',
  flavor: 'It holds every answer. Some of them at once.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'epic',
  price: 1600,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    draw(ctx, ctx.owner, 3)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a tiny glowing quantum computer chip floating above a hand, with light particles in superposition'
  }
})
