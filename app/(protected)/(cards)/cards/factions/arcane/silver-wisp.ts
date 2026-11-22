import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'silver-wisp',
  type: 'ally',
  name: 'Silver Wisp',
  text: '',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 70,
  cost: 5,
  tribe: 'fae',
  keywords: ['flying'],
  attack: 6,
  health: 11,
  ai: { value: 5 },
  art: {
    subject: 'a fairy-tale fae creature, the silver wisp, crouching, ready to strike, medieval magic order style'
  }
})
