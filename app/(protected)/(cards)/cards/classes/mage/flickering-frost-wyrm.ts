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
    subject:
      'Flickering Frost Wyrm: a wyrm with obsidian scales with ember cracks and smoke curling from its nostrils, pawing the ground, indigo accents, mage style'
  }
})
