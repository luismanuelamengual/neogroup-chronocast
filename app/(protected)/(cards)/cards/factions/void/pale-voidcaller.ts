import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'pale-voidcaller',
  type: 'ally',
  name: 'Pale Voidcaller',
  text: '',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 80,
  cost: 6,
  tribe: 'cultist',
  keywords: ['echo'],
  attack: 8,
  health: 13,
  ai: { value: 6 },
  art: {
    subject: 'a hooded doomsday cultist, the pale voidcaller, charging into battle, dark end-of-time void style'
  }
})
