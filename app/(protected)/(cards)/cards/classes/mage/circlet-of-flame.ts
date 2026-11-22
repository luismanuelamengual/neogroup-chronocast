import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'circlet-of-flame',
  type: 'armor',
  name: 'Circlet of Flame',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 65,
  cost: 4,
  armor: 12,
  ai: { value: 4 },
  art: {
    subject: 'Circlet of Flame: a single piece of armor on a stand, mage style'
  }
})
