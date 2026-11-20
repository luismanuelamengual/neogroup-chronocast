import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'poisoned-crossbow',
  type: 'weapon',
  name: 'Poisoned Crossbow',
  text: '',
  flavor: 'A scratch is enough.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 7,
  durability: 3,
  keywords: ['ranged', 'poison'],
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a dark crossbow loaded with a bolt dripping green poison'
  }
})
