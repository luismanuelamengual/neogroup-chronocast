import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'flickering-ward',
  type: 'armor',
  name: 'Flickering Ward',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 6,
  ai: { value: 2 },
  art: {
    subject: 'Flickering Ward: a single piece of armor on a stand, mage style'
  }
})
