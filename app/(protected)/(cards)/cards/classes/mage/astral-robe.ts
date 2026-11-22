import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'astral-robe',
  type: 'armor',
  name: 'Astral Robe',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'exotic',
  price: 11600,
  cost: 3,
  armor: 12,
  ai: { value: 5 },
  art: {
    subject: 'Astral Robe: a single piece of armor on a stand, mage style'
  }
})
