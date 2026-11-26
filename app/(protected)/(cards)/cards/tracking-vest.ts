import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'tracking-vest',
  type: 'armor',
  name: 'Tracking Vest',
  text: '',
  flavor: 'Pockets for every trail.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 55,
  cost: 3,
  armor: 2,
  durability: 5,
  ai: { value: 3 },
  art: {
    subject:
      'Tracking Vest: a single vest made of chrome with neon light strips, on a fur rug, centered and seen from slightly below, rose pink accents, hunter style'
  }
})
