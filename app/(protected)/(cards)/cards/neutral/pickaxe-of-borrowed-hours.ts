import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pickaxe-of-borrowed-hours',
  type: 'weapon',
  name: 'Pickaxe of Borrowed Hours',
  text: 'When it is equipped: your hero heals 4.',
  flavor: 'It digs through time instead of stone.',
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
    subject:
      'Pickaxe of Borrowed Hours: a single pickaxe made of chrome with neon light strips, surrounded by floating clock hands and glowing sand, on a fur rug, close-up filling the frame, gold accents, time rift wanderer style'
  }
})
