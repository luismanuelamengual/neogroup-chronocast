import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'nightmare-steed',
  type: 'ally',
  name: 'Nightmare Steed',
  text: '',
  flavor: 'It runs on screams.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 16,
  health: 10,
  keywords: ['charge', 'echo'],
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject: 'a black skeletal horse with green fire mane galloping through the void, hooves leaving cracks'
  }
})
