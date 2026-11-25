import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'ethereal-basilisk',
  type: 'ally',
  name: 'Ethereal Basilisk',
  text: '',
  flavor: 'Its gaze passes through walls.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'common',
  element: 'arcane',
  resist: ['fire'],
  weak: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'drake',
  keywords: ['shield'],
  attack: 5,
  health: 10,
  ai: { value: 4 },
  art: {
    subject:
      'Ethereal Basilisk: a basilisk with golden scales and a frilled neck, leaping forward, rose pink accents, mage style'
  }
})
