import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stole-of-light',
  type: 'armor',
  name: 'Stole of Light',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  armor: 10,
  ai: { value: 4 },
  art: {
    subject: 'Stole of Light: a single piece of armor on a stand, mystic healer style'
  }
})
