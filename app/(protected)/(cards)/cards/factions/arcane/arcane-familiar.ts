import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'arcane-familiar',
  type: 'ally',
  token: true,
  name: 'Arcane Familiar',
  text: '',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  element: 'arcane',
  resist: ['arcane'],
  weak: ['shadow'],
  cost: 1,
  tribe: 'fae',
  keywords: ['flying'],
  attack: 2,
  health: 2,
  ai: { value: 1 },
  art: {
    subject: 'a small glowing owl familiar made of blue arcane light, medieval magic order style'
  }
})
