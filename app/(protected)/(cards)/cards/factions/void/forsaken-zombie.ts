import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'forsaken-zombie',
  type: 'ally',
  name: 'Forsaken Zombie',
  text: '',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  resist: ['shadow', 'ice'],
  price: 55,
  cost: 3,
  tribe: 'undead',
  attack: 5,
  health: 8,
  ai: { value: 3 },
  art: {
    subject: 'an undead creature, the forsaken zombie, charging into battle, dark end-of-time void style'
  }
})
