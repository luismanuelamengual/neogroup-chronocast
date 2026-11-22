import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'ethereal-basilisk',
  type: 'ally',
  name: 'Ethereal Basilisk',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
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
    subject: 'a dragon-kin creature, the ethereal basilisk, standing guard, mage style'
  }
})
