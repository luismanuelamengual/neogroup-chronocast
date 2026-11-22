import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'tracking-vest',
  type: 'armor',
  name: 'Tracking Vest',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject: 'Tracking Vest: a single piece of armor on a stand, hunter style'
  }
})
