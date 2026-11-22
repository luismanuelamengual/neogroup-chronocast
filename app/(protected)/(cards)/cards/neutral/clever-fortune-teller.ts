import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'clever-fortune-teller',
  type: 'ally',
  name: 'Clever Fortune Teller',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 80,
  cost: 6,
  tribe: 'drifter',
  keywords: ['quick'],
  attack: 8,
  health: 13,
  ai: { value: 6 },
  art: {
    subject: 'a time-traveling wanderer, the clever fortune teller, mid-leap, time rift wanderer style'
  }
})
