import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wanderers-sling',
  type: 'weapon',
  name: "Wanderer's Sling",
  text: '',
  flavor: 'Any pebble is a weapon if you throw it from far enough.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  durability: 3,
  keywords: ['ranged'],
  ai: { value: 2 },
  art: {
    subject: 'a leather sling swinging a glowing turquoise stone, with motion lines'
  }
})
