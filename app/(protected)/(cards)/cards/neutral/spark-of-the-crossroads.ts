import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'spark-of-the-crossroads',
  type: 'ally',
  name: 'Spark of the Crossroads',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'lightning',
  resist: ['lightning'],
  weak: ['earth'],
  price: 50,
  cost: 2,
  tribe: 'elemental',
  keywords: ['guardian'],
  attack: 2,
  health: 8,
  ai: { value: 2 },
  art: {
    subject: 'an elemental spirit, the spark of the crossroads, roaring, time rift wanderer style'
  }
})
