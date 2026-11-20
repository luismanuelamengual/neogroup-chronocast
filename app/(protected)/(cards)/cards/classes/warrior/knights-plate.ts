import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'knights-plate',
  type: 'armor',
  name: "Knight's Plate",
  text: '',
  flavor: 'Clanks a lot. Survives a lot more.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 22,
  ai: { value: 3 },
  art: {
    subject: 'a full suit of polished steel plate armor standing in a castle hall'
  }
})
