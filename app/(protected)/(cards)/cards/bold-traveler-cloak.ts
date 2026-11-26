import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-traveler-cloak',
  type: 'armor',
  name: 'Bold Traveler Cloak',
  text: 'When it is equipped: your hero heals 6.',
  flavor: 'It has seen every era and complained in each one.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 480,
  cost: 4,
  armor: 3,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 6)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Bold Traveler Cloak: a single cloak made of chrome with neon light strips, resting on a velvet cloth, bursting toward the viewer, scarlet accents, time rift wanderer style'
  }
})
