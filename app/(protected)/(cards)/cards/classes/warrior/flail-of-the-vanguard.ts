import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'flail-of-the-vanguard',
  type: 'weapon',
  name: 'Flail of the Vanguard',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 3,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject: 'Flail of the Vanguard: a single flail weapon floating in dramatic light, warrior style'
  }
})
