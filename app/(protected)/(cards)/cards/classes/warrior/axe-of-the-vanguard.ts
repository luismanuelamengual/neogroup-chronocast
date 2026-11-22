import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'axe-of-the-vanguard',
  type: 'weapon',
  name: 'Axe of the Vanguard',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 65,
  cost: 4,
  attack: 5,
  durability: 3,
  ai: { value: 4 },
  art: {
    subject: 'Axe of the Vanguard: a single axe weapon floating in dramatic light, warrior style'
  }
})
