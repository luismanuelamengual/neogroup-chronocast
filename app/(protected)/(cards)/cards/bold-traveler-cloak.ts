import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-traveler-cloak',
  type: 'armor',
  subtype: 'leather',
  name: 'Bold Traveler Cloak',
  text: 'When a trap of yours goes off: your hero heals 4.',
  flavor: 'It has seen every era and complained in each one.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  armor: 3,
  durability: 4,
  onTrapTriggered(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Bold Traveler Cloak: a single cloak made of chrome with neon light strips, resting on a velvet cloth, bursting toward the viewer, scarlet accents, prehistoric jungle era style'
  }
})
