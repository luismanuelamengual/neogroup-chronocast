import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wild-crossbow',
  type: 'weapon',
  name: 'Wild Crossbow',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 70,
  cost: 5,
  attack: 6,
  durability: 4,
  ai: { value: 5 },
  art: {
    subject: 'Wild Crossbow: a single crossbow weapon floating in dramatic light, hunter style'
  }
})
