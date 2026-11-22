import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'lost-chrononaut',
  type: 'ally',
  name: 'Lost Chrononaut',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 80,
  cost: 7,
  attack: 9,
  health: 13,
  ai: { value: 7 },
  art: {
    subject: 'a time-traveling adventurer, the lost chrononaut, lunging forward, time rift wanderer style'
  }
})
