import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'chainmail',
  type: 'armor',
  name: 'Chainmail',
  text: '',
  flavor: 'A thousand little rings, one big comfort.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 45,
  cost: 1,
  armor: 8,
  ai: { value: 1 },
  art: {
    subject: 'a shirt of chainmail hanging on a wooden rack in a blacksmith shop'
  }
})
