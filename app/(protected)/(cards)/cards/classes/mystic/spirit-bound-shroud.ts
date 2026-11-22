import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'spirit-bound-shroud',
  type: 'armor',
  name: 'Spirit-Bound Shroud',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject: 'Spirit-Bound Shroud: a single piece of armor on a stand, mystic healer style'
  }
})
