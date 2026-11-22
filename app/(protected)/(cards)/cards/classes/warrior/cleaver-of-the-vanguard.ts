import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cleaver-of-the-vanguard',
  type: 'weapon',
  name: 'Cleaver of the Vanguard',
  text: 'When it is equipped: your hero heals 5.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'exotic',
  price: 11600,
  cost: 3,
  attack: 4,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 5)
  },
  ai: { value: 5 },
  art: {
    subject: 'Cleaver of the Vanguard: a single cleaver weapon floating in dramatic light, warrior style'
  }
})
