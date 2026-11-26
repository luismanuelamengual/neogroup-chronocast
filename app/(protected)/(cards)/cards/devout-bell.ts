import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-bell',
  type: 'weapon',
  name: 'Devout Bell',
  text: 'When it is equipped: your hero heals 4.',
  flavor: 'Each toll is a vow kept.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  element: 'sonic',
  price: 360,
  cost: 2,
  attack: 3,
  durability: 3,
  onPlay(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Devout Bell: a single bell made of blue steel with silver runes, surrounded by rippling sound waves, floating above a marble pedestal, swirling around the center, scarlet accents, mystic healer style'
  }
})
