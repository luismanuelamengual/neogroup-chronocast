import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'study-of-flame',
  type: 'ability',
  name: 'Study of Flame',
  text: 'Draw 2 cards.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Study of Flame: an open book with glowing pages flipping by themselves, in a ruined temple, diagonal dynamic composition, saffron yellow accents, mage style'
  }
})
