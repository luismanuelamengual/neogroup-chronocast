import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-crossbow',
  type: 'weapon',
  name: 'Keen-Eyed Crossbow',
  text: 'When it is equipped: your hero heals 4.',
  flavor: 'It sees the gap in every armor.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  attack: 3,
  durability: 2,
  onPlay(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 2 },
  art: {
    subject:
      'Keen-Eyed Crossbow: a single crossbow made of white bone and leather wraps, on cracked stone tiles, diagonal dynamic composition, indigo accents, hunter style'
  }
})
