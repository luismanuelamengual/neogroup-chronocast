import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'warpick-of-rage',
  type: 'weapon',
  name: 'Warpick of Rage',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 4,
  durability: 3,
  ai: { value: 3 },
  art: {
    subject: 'Warpick of Rage: a single warpick weapon floating in dramatic light, warrior style'
  }
})
