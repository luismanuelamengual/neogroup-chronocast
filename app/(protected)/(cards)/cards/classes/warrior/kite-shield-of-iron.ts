import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'kite-shield-of-iron',
  type: 'armor',
  name: 'Kite Shield of Iron',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 6,
  ai: { value: 2 },
  art: {
    subject: 'Kite Shield of Iron: a single piece of armor on a stand, warrior style'
  }
})
