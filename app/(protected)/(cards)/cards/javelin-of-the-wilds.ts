import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'javelin-of-the-wilds',
  type: 'weapon',
  name: 'Javelin of the Wilds',
  text: 'When it is equipped: your hero heals 4.',
  flavor: 'Thrown by the jungle, caught by nobody.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  attack: 3,
  durability: 2,
  onPlay(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Javelin of the Wilds: a single javelin made of blue steel with silver runes, on a fur rug, diagonal dynamic composition, amber accents, hunter style'
  }
})
