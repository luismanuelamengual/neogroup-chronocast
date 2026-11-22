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
    subject: 'Flickering Mantle: a single piece of armor on a stand, mage style'
  }
})
