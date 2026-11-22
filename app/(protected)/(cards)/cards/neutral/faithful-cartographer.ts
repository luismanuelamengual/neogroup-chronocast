import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'faithful-cartographer',
  type: 'ally',
  name: 'Faithful Cartographer',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 70,
  cost: 5,
  keywords: ['ranged'],
  attack: 6,
  health: 11,
  ai: { value: 5 },
  art: {
    subject: 'a time-traveling adventurer, the faithful cartographer, roaring, time rift wanderer style'
  }
})
