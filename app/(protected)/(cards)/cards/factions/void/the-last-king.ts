import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-last-king',
  type: 'ally',
  name: 'The Last King',
  text: 'On enter: a random ally of your discard pile returns to play and a random ally of your discard pile returns to play.',
  flavor: 'He rules the end of time. His subjects are all dead.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'legendary',
  price: 5750,
  cost: 7,
  attack: 24,
  health: 27,
  keywords: ['unique', 'lifesteal'],
  onEnter(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 9, tags: ['revive'] },
  art: {
    subject: 'an undead king on a throne of bones floating in a dark nebula, a crown of green fire on his skull'
  }
})
