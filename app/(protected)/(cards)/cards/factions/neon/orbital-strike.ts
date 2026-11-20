import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'orbital-strike',
  type: 'ability',
  name: 'Orbital Strike',
  text: 'Deal 24 damage to an enemy slot. Fast.',
  flavor: 'Look up. Smile.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  speed: 'fast',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 24)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a blinding beam of energy falling from a satellite in orbit onto a target in the neon city'
  }
})
