import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'drake-of-the-tower',
  type: 'ally',
  name: 'Drake of the Tower',
  text: '',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['fire'],
  weak: ['ice'],
  price: 80,
  cost: 6,
  tribe: 'drake',
  attack: 8,
  health: 14,
  ai: { value: 6 },
  art: {
    subject: 'a dragon-kin creature, the drake of the tower, standing guard, medieval magic order style'
  }
})
