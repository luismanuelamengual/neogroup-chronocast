import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'longbow-of-the-hawk',
  type: 'weapon',
  name: 'Longbow of the Hawk',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  element: 'wind',
  price: 155,
  cost: 2,
  keywords: ['poison'],
  attack: 2,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject: 'Longbow of the Hawk: a single longbow weapon floating in dramatic light, hunter style'
  }
})
