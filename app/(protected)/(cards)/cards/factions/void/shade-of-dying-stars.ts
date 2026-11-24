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
    subject:
      'Shade of Dying Stars: a shade with translucent purple membranes and many writhing limbs, pawing the ground, tangerine accents, dark end-of-time void style'
  }
})
