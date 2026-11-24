import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'flickering-mantle',
  type: 'armor',
  name: 'Flickering Mantle',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject:
      'Flickering Mantle: a single mantle made of pale ash wood wrapped in red cloth, half buried in snow, diagonal dynamic composition, scarlet accents, mage style'
  }
})
