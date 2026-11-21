import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'tavern-brawler',
  type: 'ally',
  name: 'Tavern Brawler',
  text: '',
  flavor: 'Every era has a tavern. Every tavern has him.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 12,
  health: 12,
  ai: { value: 3 },
  art: {
    subject: 'a burly brawler with rolled-up sleeves and a broken chair leg, grinning in a crowded tavern'
  }
})
