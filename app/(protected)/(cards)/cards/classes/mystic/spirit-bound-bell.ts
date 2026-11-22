import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'spirit-bound-bell',
  type: 'weapon',
  name: 'Spirit-Bound Bell',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  element: 'sonic',
  price: 50,
  cost: 2,
  keywords: ['lifesteal'],
  attack: 2,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject: 'Spirit-Bound Bell: a single bell weapon floating in dramatic light, mystic healer style'
  }
})
