import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'kite-shield-of-rage',
  type: 'armor',
  name: 'Kite Shield of Rage',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject: 'Kite Shield of Rage: a single piece of armor on a stand, warrior style'
  }
})
