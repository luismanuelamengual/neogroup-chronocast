import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'thorned-colossus',
  type: 'ally',
  name: 'Thorned Colossus',
  text: '',
  flavor: 'Hug it at your own risk.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 190,
  cost: 5,
  attack: 16,
  health: 44,
  keywords: ['thorns'],
  thorns: 6,
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject: 'a towering colossus covered in giant crystal thorns, roaring in a canyon'
  }
})
