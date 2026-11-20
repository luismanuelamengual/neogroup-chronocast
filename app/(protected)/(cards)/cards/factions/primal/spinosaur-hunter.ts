import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'spinosaur-hunter',
  type: 'ally',
  name: 'Spinosaur Hunter',
  text: '',
  flavor: 'The river is its hunting ground. And its dinner table.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 20,
  health: 34,
  keywords: ['cleave'],
  ai: { value: 6 },
  art: {
    subject: 'a spinosaurus with a tall red sail on its back snapping a giant fish out of a river'
  }
})
