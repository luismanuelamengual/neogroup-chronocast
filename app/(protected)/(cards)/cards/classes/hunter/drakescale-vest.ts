import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'drakescale-vest',
  type: 'armor',
  name: 'Drakescale Vest',
  text: '',
  flavor: 'The drake did not need it anymore.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  armor: 24,
  ai: { value: 4 },
  art: {
    subject: "a vest made of shimmering green dragon scales on a hunter's lodge wall"
  }
})
