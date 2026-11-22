import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'timeless-tide',
  type: 'ally',
  name: 'Timeless Tide',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'water',
  resist: ['water'],
  weak: ['lightning'],
  price: 70,
  cost: 5,
  tribe: 'elemental',
  keywords: ['ranged'],
  attack: 7,
  health: 9,
  ai: { value: 5 },
  art: {
    subject: 'an elemental spirit, the timeless tide, mid-leap, time rift wanderer style'
  }
})
