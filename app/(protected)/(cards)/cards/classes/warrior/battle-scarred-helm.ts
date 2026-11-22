import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'battle-scarred-helm',
  type: 'armor',
  name: 'Battle-Scarred Helm',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject: 'Battle-Scarred Helm: a single piece of armor on a stand, warrior style'
  }
})
