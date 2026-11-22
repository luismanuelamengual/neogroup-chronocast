import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'cleaver-of-valor',
  type: 'weapon',
  name: 'Cleaver of Valor',
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
    subject: 'Cleaver of Valor: a single cleaver weapon floating in dramatic light, warrior style'
  }
})
