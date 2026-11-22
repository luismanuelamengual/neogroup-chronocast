import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'pegasus-of-still-waters',
  type: 'ally',
  name: 'Pegasus of Still Waters',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 65,
  cost: 4,
  tribe: 'fae',
  attack: 6,
  health: 9,
  ai: { value: 4 },
  art: {
    subject: 'a fairy-tale fae creature, the pegasus of still waters, lunging forward, mystic healer style'
  }
})
