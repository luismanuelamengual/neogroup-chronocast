import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cleaver-of-the-vanguard',
  type: 'weapon',
  name: 'Cleaver of the Vanguard',
  text: 'When it is equipped: your hero heals 5.',
  flavor: 'First into the fray, first out of it with trophies.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'exotic',
  price: 3160,
  cost: 3,
  attack: 4,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 5)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Cleaver of the Vanguard: a single cleaver made of chrome with neon light strips, resting on a velvet cloth, swirling around the center, magenta accents, warrior style'
  }
})
