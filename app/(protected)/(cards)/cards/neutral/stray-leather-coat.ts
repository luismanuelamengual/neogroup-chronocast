import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stray-leather-coat',
  type: 'armor',
  name: 'Stray Leather Coat',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject: 'Stray Leather Coat: a single piece of armor on a stand, time rift wanderer style'
  }
})
