import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sky-courier',
  type: 'ally',
  name: 'Sky Courier',
  text: '',
  flavor: 'Delivers letters to the past. Late, as always.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 2,
  attack: 7,
  health: 10,
  keywords: ['flying'],
  ai: { value: 2 },
  art: {
    subject: 'a young courier riding a giant colorful griffin over the clouds, a satchel of letters fluttering behind'
  }
})
