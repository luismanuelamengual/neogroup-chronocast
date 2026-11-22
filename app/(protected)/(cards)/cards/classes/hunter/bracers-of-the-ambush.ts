import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bracers-of-the-ambush',
  type: 'armor',
  name: 'Bracers of the Ambush',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 65,
  cost: 4,
  armor: 12,
  ai: { value: 4 },
  art: {
    subject: 'Bracers of the Ambush: a single piece of armor on a stand, hunter style'
  }
})
