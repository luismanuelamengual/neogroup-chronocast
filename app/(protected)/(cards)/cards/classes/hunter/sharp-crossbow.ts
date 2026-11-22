import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sharp-crossbow',
  type: 'weapon',
  name: 'Sharp Crossbow',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 4,
  durability: 3,
  ai: { value: 3 },
  art: {
    subject: 'Sharp Crossbow: a single crossbow weapon floating in dramatic light, hunter style'
  }
})
