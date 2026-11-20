import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wolfhide-armor',
  type: 'armor',
  name: 'Wolfhide Armor',
  text: '',
  flavor: 'The pack runs with you, even when they are not there.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  armor: 18,
  ai: { value: 3 },
  art: {
    subject: 'a rugged armor made of grey wolf pelts with a wolf head hood'
  }
})
