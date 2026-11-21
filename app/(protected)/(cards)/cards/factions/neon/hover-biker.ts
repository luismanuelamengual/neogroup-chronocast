import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hover-biker',
  type: 'ally',
  name: 'Hover Biker',
  text: '',
  flavor: 'No wheels, no brakes, no regrets.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 60,
  cost: 4,
  attack: 16,
  health: 12,
  keywords: ['charge', 'quick'],
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject: 'a biker on a futuristic floating motorcycle leaving neon light trails across a highway'
  }
})
