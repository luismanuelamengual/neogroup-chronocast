import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'magma-brute-of-the-long-road',
  type: 'ally',
  name: 'Magma Brute of the Long Road',
  text: 'When it dies: your Elementals gain +1 attack and +1 health.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  element: 'fire',
  resist: ['fire'],
  weak: ['water'],
  price: 510,
  cost: 2,
  tribe: 'elemental',
  keywords: ['shield'],
  attack: 3,
  health: 5,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'elemental', 1, 1)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject: 'an elemental spirit, the magma brute of the long road, raising its weapon, time rift wanderer style'
  }
})
