import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-hound',
  type: 'ally',
  name: 'Rift Hound',
  text: '',
  flavor: 'It smells fear across the centuries.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 9,
  health: 4,
  keywords: ['charge'],
  ai: { value: 2, tags: ['aggro'] },
  art: {
    subject: 'a lean ghostly hound with turquoise flames for a tail, bursting out of a rift'
  }
})
