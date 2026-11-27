import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardRandom } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dusk-raider',
  type: 'ally',
  name: 'Dusk Raider',
  text: 'When it enters: the enemy discards a random card, and so do you.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 150,
  cost: 3,
  tribe: 'beast',
  keywords: ['charge'],
  attack: 4,
  health: 6,
  onEnter(ctx) {
    discardRandom(ctx, ctx.opponent)
    discardRandom(ctx, ctx.owner)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Dusk Raider: a feral raider wolf with a torn saddlebag bursting through a camp at dusk, scattered scrolls flying, dark ritual mood'
  }
})
