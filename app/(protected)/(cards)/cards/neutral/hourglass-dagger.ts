import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hourglass-dagger',
  type: 'weapon',
  name: 'Hourglass Dagger',
  text: '',
  flavor: 'One cut, and the sand starts to fall.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 525,
  cost: 2,
  attack: 7,
  durability: 3,
  keywords: ['poison'],
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a slim curved dagger with a tiny hourglass in its hilt, dripping green venom'
  }
})
