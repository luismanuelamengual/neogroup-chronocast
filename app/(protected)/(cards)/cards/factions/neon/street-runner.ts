import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'street-runner',
  type: 'ally',
  name: 'Street Runner',
  text: '',
  flavor: 'Deliveries in under a second, or the next one is free.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 5,
  health: 4,
  keywords: ['quick'],
  ai: { value: 1 },
  art: {
    subject: 'a cyberpunk courier girl with glowing roller blades racing through a rainy neon street'
  }
})
