import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'greatsword-of-dawn',
  type: 'weapon',
  name: 'Greatsword of Dawn',
  text: '',
  flavor: 'It shines brightest at the first light of battle.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 14,
  durability: 3,
  keywords: ['cleave'],
  ai: { value: 5 },
  art: {
    subject: 'a giant two-handed sword glowing golden like the sunrise, planted on a hilltop'
  }
})
