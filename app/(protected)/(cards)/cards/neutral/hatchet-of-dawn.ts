import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hatchet-of-dawn',
  type: 'weapon',
  name: 'Hatchet of Dawn',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'light',
  price: 40,
  cost: 1,
  attack: 2,
  durability: 2,
  ai: { value: 1 },
  art: {
    subject: 'Hatchet of Dawn: a single hatchet weapon floating in dramatic light, time rift wanderer style'
  }
})
