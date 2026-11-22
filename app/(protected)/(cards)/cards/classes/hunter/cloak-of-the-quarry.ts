import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'cloak-of-the-quarry',
  type: 'armor',
  name: 'Cloak of the Quarry',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 6,
  ai: { value: 2 },
  art: {
    subject: 'Cloak of the Quarry: a single piece of armor on a stand, hunter style'
  }
})
