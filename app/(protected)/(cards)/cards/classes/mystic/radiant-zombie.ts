import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'radiant-zombie',
  type: 'ally',
  name: 'Radiant Zombie',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 55,
  cost: 3,
  tribe: 'undead',
  keywords: ['shield'],
  attack: 4,
  health: 9,
  ai: { value: 3 },
  art: {
    subject: 'an undead creature, the radiant zombie, raising its weapon, mystic healer style'
  }
})
