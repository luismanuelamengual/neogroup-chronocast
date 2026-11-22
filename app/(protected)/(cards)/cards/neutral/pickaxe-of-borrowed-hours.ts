import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pickaxe-of-borrowed-hours',
  type: 'weapon',
  name: 'Pickaxe of Borrowed Hours',
  text: 'When it is equipped: your hero heals 4.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'exotic',
  element: 'time',
  price: 10800,
  cost: 2,
  attack: 3,
  durability: 3,
  onPlay(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 4 },
  art: {
    subject: 'Pickaxe of Borrowed Hours: a single pickaxe weapon floating in dramatic light, time rift wanderer style'
  }
})
