import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'frozen-ward',
  type: 'armor',
  name: 'Frozen Ward',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  armor: 3,
  ai: { value: 1 },
  art: {
    subject: 'Frozen Ward: a single piece of armor on a stand, mage style'
  }
})
