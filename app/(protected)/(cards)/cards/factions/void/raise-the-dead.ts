import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'raise-the-dead',
  type: 'ability',
  name: 'Raise the Dead',
  text: 'A random ally of your discard pile returns to play.',
  flavor: 'Up. Back to work.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject: 'skeletal hands bursting out of the ground in a graveyard floating in space, green light rising'
  }
})
