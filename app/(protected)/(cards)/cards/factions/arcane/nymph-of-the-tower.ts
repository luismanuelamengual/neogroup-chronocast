import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'nymph-of-the-tower',
  type: 'ally',
  name: 'Nymph of the Tower',
  text: '',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 80,
  cost: 7,
  tribe: 'fae',
  attack: 8,
  health: 15,
  ai: { value: 7 },
  art: {
    subject: 'a fairy-tale fae creature, the nymph of the tower, lunging forward, medieval magic order style'
  }
})
