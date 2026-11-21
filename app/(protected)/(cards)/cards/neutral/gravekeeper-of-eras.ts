import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gravekeeper-of-eras',
  type: 'ally',
  name: 'Gravekeeper of Eras',
  text: 'On enter: a random ally of your discard pile returns to play.',
  flavor: 'No one stays buried in the Rift.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 12,
  health: 12,
  onEnter(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 5, tags: ['revive'] },
  art: {
    subject: 'an old gravekeeper with a lantern and a shovel, ghostly warriors rising from graves behind him'
  }
})
