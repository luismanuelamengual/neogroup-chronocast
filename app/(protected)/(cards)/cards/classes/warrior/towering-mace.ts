import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'towering-mace',
  type: 'weapon',
  name: 'Towering Mace',
  text: '',
  flavor: 'Built for giants. Swung by the stubborn.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 4,
  durability: 3,
  ai: { value: 3 },
  art: {
    subject:
      'Towering Mace: a single mace made of ivory and jade, on cracked stone tiles, bursting toward the viewer, saffron yellow accents, warrior style'
  }
})
