import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wandering-wanderer',
  type: 'ally',
  name: 'Wandering Wanderer',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 4,
  keywords: ['agile'],
  attack: 5,
  health: 10,
  ai: { value: 4 },
  art: {
    subject: 'a time-traveling adventurer, the wandering wanderer, raising its weapon, time rift wanderer style'
  }
})
