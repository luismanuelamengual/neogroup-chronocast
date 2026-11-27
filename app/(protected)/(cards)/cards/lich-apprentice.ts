import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lich-apprentice',
  type: 'ally',
  name: 'Lich Apprentice',
  text: 'When it enters: if your discard pile has 10 or more cards, draw 2 cards.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  tribe: 'undead',
  attack: 3,
  health: 6,
  onEnter(ctx) {
    if (discardSize(ctx, ctx.owner) >= 10) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Lich Apprentice: a young skeletal mage reading a tome bound in skin by candlelight, full body, pale violet accents, dark end-of-time void style'
  }
})
