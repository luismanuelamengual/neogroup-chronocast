import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'flickering-frost-wyrm',
  type: 'ally',
  name: 'Flickering Frost Wyrm',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  element: 'ice',
  resist: ['fire'],
  weak: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'drake',
  keywords: ['flying'],
  attack: 7,
  health: 9,
  ai: { value: 5 },
  art: {
    subject: 'a dragon-kin creature, the flickering frost wyrm, lunging forward, mage style'
  }
})
