import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rot-wave',
  type: 'ability',
  subtype: 'ritual',
  name: 'Rot Wave',
  text: 'Deal 2 shadow damage to every enemy ally, +1 for every 5 cards in your discard pile.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 5,
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 2 + Math.floor(discardSize(ctx, ctx.owner) / 5), 'shadow')
  },
  ai: { value: 5, tags: ['removal'] },
  art: {
    subject:
      'Rot Wave: a wave of green rot sweeping across a battlefield and withering everything in its path, wide shot, rot green accents, dark end-of-time void style'
  }
})
