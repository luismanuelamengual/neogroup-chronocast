import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'iron-gladius',
  type: 'weapon',
  name: 'Iron Gladius',
  text: '',
  flavor: 'Short, sharp and very, very reliable.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 60,
  cost: 2,
  attack: 8,
  durability: 3,
  ai: { value: 2 },
  art: { subject: 'a short iron gladius with a bronze pommel and a leather grip, stuck in the sand of an arena' }
})
