import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'radiant-halo',
  type: 'armor',
  name: 'Radiant Halo',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  armor: 7,
  ai: { value: 3 },
  art: {
    subject: 'Radiant Halo: a single piece of armor on a stand, mystic healer style'
  }
})
