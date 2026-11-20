import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stone-thrower',
  type: 'ally',
  name: 'Stone Thrower',
  text: '',
  flavor: 'Technology: a big rock. Strategy: throw it.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 60,
  cost: 4,
  attack: 13,
  health: 24,
  keywords: ['ranged'],
  ai: { value: 4 },
  art: {
    subject: 'a muscular caveman hurling a huge boulder from the top of a hill'
  }
})
