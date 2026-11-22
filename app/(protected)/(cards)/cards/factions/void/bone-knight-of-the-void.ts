import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bone-knight-of-the-void',
  type: 'ally',
  name: 'Bone Knight of the Void',
  text: '',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 50,
  cost: 2,
  tribe: 'undead',
  attack: 2,
  health: 9,
  ai: { value: 2 },
  art: {
    subject: 'an undead creature, the bone knight of the void, mid-leap, dark end-of-time void style'
  }
})
