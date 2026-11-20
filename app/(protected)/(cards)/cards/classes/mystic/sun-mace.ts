import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sun-mace',
  type: 'weapon',
  name: 'Sun Mace',
  text: '',
  flavor: 'A little sunlight, applied firmly.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 7,
  durability: 3,
  ai: { value: 2 },
  art: {
    subject: 'a golden mace with a sun-shaped head glowing with warm light'
  }
})
