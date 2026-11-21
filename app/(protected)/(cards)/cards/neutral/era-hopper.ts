import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'era-hopper',
  type: 'ally',
  name: 'Era Hopper',
  text: '',
  flavor: 'Never in the same century twice.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 7,
  health: 6,
  keywords: ['agile'],
  ai: { value: 2 },
  art: {
    subject: 'a nimble traveler in a patched coat leaping through a small swirling portal'
  }
})
