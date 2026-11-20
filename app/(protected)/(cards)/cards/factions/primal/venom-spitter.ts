import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'venom-spitter',
  type: 'ally',
  name: 'Venom Spitter',
  text: '',
  flavor: 'It does not need to bite.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 5,
  health: 12,
  keywords: ['poison', 'ranged'],
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject: 'a small frilled dinosaur spitting a stream of green venom from a jungle branch'
  }
})
