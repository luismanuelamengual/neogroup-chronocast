import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lich-of-the-last-hour',
  type: 'ally',
  name: 'Lich of the Last Hour',
  text: 'At the start of each phase, if your discard pile has 6 or more cards, a random ally of your discard pile returns to play.',
  flavor: 'At the last hour, the dead rise for him.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 14,
  health: 32,
  onPhaseStart(ctx) {
    if (discardSize(ctx, ctx.owner) >= 6) {
      reviveFromDiscard(ctx, ctx.owner)
    }
  },
  ai: { value: 6, tags: ['revive'] },
  art: {
    subject: 'a lich in tattered robes holding a cracked hourglass full of green sand, skeletons rising behind him'
  }
})
