import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'tusked-hog',
  type: 'ally',
  name: 'Tusked Hog',
  text: '',
  flavor: 'Bad temper, worse breath.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 8,
  health: 12,
  ai: { value: 2 },
  art: {
    subject: 'a hairy prehistoric hog with enormous curved tusks snorting in the mud'
  }
})
