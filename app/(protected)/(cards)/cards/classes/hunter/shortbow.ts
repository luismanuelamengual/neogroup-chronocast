import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'shortbow',
  type: 'weapon',
  name: 'Shortbow',
  text: '',
  flavor: 'Light, fast and always within reach.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  durability: 3,
  keywords: ['ranged'],
  ai: { value: 1 },
  art: {
    subject: 'a simple wooden shortbow with a quiver of feathered arrows leaning against a tree'
  }
})
