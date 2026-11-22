import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'temple-keeper-of-the-sun-temple',
  type: 'ally',
  name: 'Temple Keeper of the Sun Temple',
  text: '',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  element: 'light',
  resist: ['light'],
  price: 80,
  cost: 6,
  tribe: 'oracle',
  keywords: ['guardian'],
  attack: 7,
  health: 15,
  ai: { value: 6 },
  art: {
    subject:
      'an ancient temple seer in white robes, the temple keeper of the sun temple, crouching, ready to strike, ancient bronze-age empire style'
  }
})
