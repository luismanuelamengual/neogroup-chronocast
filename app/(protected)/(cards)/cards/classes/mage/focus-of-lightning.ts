import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'focus-of-lightning',
  type: 'weapon',
  name: 'Focus of Lightning',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'lightning',
  price: 50,
  cost: 2,
  keywords: ['ranged'],
  attack: 2,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject: 'Focus of Lightning: a single focus weapon floating in dramatic light, mage style'
  }
})
