import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'mana-shield',
  type: 'armor',
  name: 'Mana Shield',
  text: '',
  flavor: 'A wall of thought.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 14,
  ai: { value: 2 },
  art: {
    subject: 'a translucent blue bubble of magic energy surrounding a mage, arrows bouncing off'
  }
})
