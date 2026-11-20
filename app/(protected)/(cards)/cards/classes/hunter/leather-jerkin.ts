import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'leather-jerkin',
  type: 'armor',
  name: 'Leather Jerkin',
  text: '',
  flavor: 'Quiet, light and comfortable.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 45,
  cost: 1,
  armor: 7,
  ai: { value: 1 },
  art: {
    subject: 'a brown leather hunting vest with many pockets and straps'
  }
})
