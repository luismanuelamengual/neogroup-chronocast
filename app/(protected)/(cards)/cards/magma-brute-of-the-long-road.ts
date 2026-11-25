import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'magma-brute-of-the-long-road',
  type: 'ally',
  name: 'Magma Brute of the Long Road',
  text: 'When it dies: your Elementals gain +1 attack and +1 health.',
  faction: 'neutral',
  restriction: {},
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
    subject:
      'Magma Brute of the Long Road: an elemental brute with a crouching wolf shape made of icy blue and white crystal, leaping forward, time rift wanderer style'
  }
})
