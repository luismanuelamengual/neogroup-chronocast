import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'patient-vest',
  type: 'armor',
  name: 'Patient Vest',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  armor: 10,
  ai: { value: 4 },
  art: {
    subject: 'Patient Vest: a single piece of armor on a stand, hunter style'
  }
})
