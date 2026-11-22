import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stole-of-renewal',
  type: 'armor',
  name: 'Stole of Renewal',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  armor: 13,
  ai: { value: 5 },
  art: {
    subject: 'Stole of Renewal: a single piece of armor on a stand, mystic healer style'
  }
})
