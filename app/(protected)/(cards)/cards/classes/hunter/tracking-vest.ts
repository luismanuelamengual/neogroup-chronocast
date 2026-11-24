import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'tracking-vest',
  type: 'armor',
  name: 'Tracking Vest',
  text: '',
  flavor: 'Pockets for every trail.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject:
      'Tracking Vest: a single vest made of chrome with neon light strips, on a fur rug, centered and seen from slightly below, rose pink accents, hunter style'
  }
})
