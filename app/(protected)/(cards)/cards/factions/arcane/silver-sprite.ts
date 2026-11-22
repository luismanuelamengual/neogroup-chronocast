import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'silver-sprite',
  type: 'ally',
  name: 'Silver Sprite',
  text: '',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 80,
  cost: 6,
  tribe: 'fae',
  attack: 7,
  health: 16,
  ai: { value: 6 },
  art: {
    subject: 'a fairy-tale fae creature, the silver sprite, standing guard, medieval magic order style'
  }
})
