import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'shade-of-dying-stars',
  type: 'ally',
  name: 'Shade of Dying Stars',
  text: '',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  element: 'arcane',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 70,
  cost: 5,
  tribe: 'horror',
  attack: 6,
  health: 12,
  ai: { value: 5 },
  art: {
    subject: 'an eldritch horror from the end of time, the shade of dying stars, roaring, dark end-of-time void style'
  }
})
