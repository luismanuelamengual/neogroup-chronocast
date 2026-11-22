import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'plate-of-rage',
  type: 'armor',
  name: 'Plate of Rage',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 450,
  cost: 1,
  armor: 4,
  ai: { value: 2 },
  art: {
    subject: 'Plate of Rage: a single piece of armor on a stand, warrior style'
  }
})
