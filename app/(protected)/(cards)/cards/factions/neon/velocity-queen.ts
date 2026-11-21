import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'velocity-queen',
  type: 'ally',
  name: 'Velocity Queen',
  text: '',
  flavor: 'First place. Every lap. Every century.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 16,
  health: 11,
  keywords: ['quick', 'frenzy', 'agile'],
  ai: { value: 5 },
  art: {
    subject: 'a racing queen in a glowing magenta suit standing on a hover racer, light trails behind her'
  }
})
