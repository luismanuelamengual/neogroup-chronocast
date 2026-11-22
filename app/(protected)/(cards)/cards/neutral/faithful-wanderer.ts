import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'faithful-wanderer',
  type: 'ally',
  name: 'Faithful Wanderer',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'drifter',
  keywords: ['ranged'],
  attack: 4,
  health: 9,
  ai: { value: 3 },
  art: {
    subject: 'a time-traveling wanderer, the faithful wanderer, standing guard, time rift wanderer style'
  }
})
