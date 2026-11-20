import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'voltblade',
  type: 'weapon',
  name: 'The Voltblade',
  text: '',
  flavor: 'Charged with the lightning of the year 3000.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'ryn-voltblade' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 10,
  durability: 3,
  keywords: ['quick'],
  ai: { value: 4 },
  art: {
    subject: 'a futuristic katana with a blade of crackling blue plasma and a black grip'
  }
})
