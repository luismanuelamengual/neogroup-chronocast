import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'legion-slinger',
  type: 'ally',
  name: 'Legion Slinger',
  text: '',
  flavor: 'A stone from far away still hurts.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  health: 8,
  keywords: ['ranged'],
  ai: { value: 1 },
  art: {
    subject: 'a lightly armored Roman slinger whirling a leather sling on a rocky hill'
  }
})
