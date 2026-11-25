import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'ethereal-cockatrice',
  type: 'ally',
  name: 'Ethereal Cockatrice',
  text: '',
  flavor: 'Half there, fully dangerous.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'common',
  element: 'arcane',
  resist: ['fire'],
  weak: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'drake',
  attack: 7,
  health: 10,
  ai: { value: 5 },
  art: {
    subject:
      'Ethereal Cockatrice: a cockatrice with emerald scales and a rooster crest, mid-stride, tangerine accents, mage style'
  }
})
