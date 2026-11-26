import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'devout-prayer-staff',
  type: 'weapon',
  name: 'Devout Prayer Staff',
  text: 'When it is equipped: your hero heals 7.',
  flavor: 'Faith with a heavy end.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  attack: 6,
  durability: 5,
  onPlay(ctx) {
    healHero(ctx, 7)
  },
  ai: { value: 6 },
  art: {
    subject:
      'Devout Prayer Staff: a single staff made of pale ash wood wrapped in red cloth, on a worn wooden table, diagonal dynamic composition, magenta accents, mystic healer style'
  }
})
