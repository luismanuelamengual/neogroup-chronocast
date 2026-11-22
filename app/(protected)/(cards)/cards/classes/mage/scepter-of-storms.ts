import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'scepter-of-storms',
  type: 'weapon',
  name: 'Scepter of Storms',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  element: 'lightning',
  price: 155,
  cost: 2,
  keywords: ['ranged'],
  attack: 2,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject: 'Scepter of Storms: a single scepter weapon floating in dramatic light, mage style'
  }
})
