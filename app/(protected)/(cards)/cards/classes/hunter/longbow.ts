import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'longbow',
  type: 'weapon',
  name: 'Longbow',
  text: '',
  flavor: 'It shoots further than the eye can see.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 9,
  durability: 3,
  keywords: ['ranged'],
  ai: { value: 3 },
  art: {
    subject: 'a tall yew longbow drawn to full tension against a sunset'
  }
})
