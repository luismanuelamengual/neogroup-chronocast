import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'healing-amulet',
  type: 'armor',
  name: 'Healing Amulet',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 70,
  cost: 5,
  armor: 15,
  ai: { value: 5 },
  art: {
    subject: 'Healing Amulet: a single piece of armor on a stand, mystic healer style'
  }
})
