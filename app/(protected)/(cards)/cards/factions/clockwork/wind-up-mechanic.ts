import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wind-up-mechanic',
  type: 'ally',
  name: 'Wind-Up Mechanic',
  text: '',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'inventor',
  keywords: ['thorns'],
  thorns: 4,
  attack: 6,
  health: 8,
  ai: { value: 4 },
  art: {
    subject: 'a steampunk inventor with goggles, the wind-up mechanic, standing guard, steampunk steam era style'
  }
})
