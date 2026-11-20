import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'skyship-gunner',
  type: 'ally',
  name: 'Skyship Gunner',
  text: '',
  flavor: 'From the deck of her flying ship, nothing is out of range.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 14,
  health: 24,
  keywords: ['flying', 'ranged'],
  ai: { value: 4 },
  art: {
    subject: 'a goggled gunner aiming a long brass rifle from the deck of a small flying ship'
  }
})
