import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-mail',
  type: 'armor',
  name: 'Rift Mail',
  text: '',
  flavor: 'The links shimmer between now and then.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  armor: 20,
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject: 'a chainmail shirt with links that shimmer turquoise, hanging on a stand'
  }
})
