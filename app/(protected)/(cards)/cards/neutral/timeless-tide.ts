import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'timeless-tide',
  type: 'ally',
  name: 'Timeless Tide',
  text: '',
  flavor: 'It rises in every century at once.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'water',
  resist: ['water'],
  weak: ['lightning'],
  price: 70,
  cost: 5,
  tribe: 'elemental',
  keywords: ['ranged'],
  attack: 7,
  health: 9,
  ai: { value: 5 },
  art: {
    subject:
      'Timeless Tide: an elemental tide with a flickering winged shape made of icy blue and white crystal, mid-stride, time rift wanderer style'
  }
})
