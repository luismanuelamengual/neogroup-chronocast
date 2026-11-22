import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'copper-gyrocopter',
  type: 'ally',
  name: 'Copper Gyrocopter',
  text: '',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  weak: ['wind'],
  price: 50,
  cost: 2,
  tribe: 'skyship',
  keywords: ['guardian'],
  attack: 2,
  health: 8,
  ai: { value: 2 },
  art: {
    subject: 'a steampunk flying machine, the copper gyrocopter, mid-leap, steampunk steam era style'
  }
})
