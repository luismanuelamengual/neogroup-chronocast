import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'apprentice-wand',
  type: 'weapon',
  name: "Apprentice's Wand",
  text: '',
  flavor: 'Point, swish, hope.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  durability: 3,
  keywords: ['ranged'],
  ai: { value: 1 },
  art: {
    subject: 'a simple wooden wand with a small glowing crystal tip on a desk'
  }
})
