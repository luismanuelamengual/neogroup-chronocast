import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'necro-scholar',
  type: 'ally',
  name: 'Necro Scholar',
  text: 'On enter: a random ally of your discard pile returns to play.',
  flavor: 'Death is just a chapter. He skips it.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 6,
  health: 16,
  ability: {
    name: 'Raise the Dead',
    text: 'A random ally of your discard pile returns to play.',
    cost: 4,
    speed: 'slow',
    activate(ctx) {
      reviveFromDiscard(ctx, ctx.owner)
    }
  },
  onEnter(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['ability', 'revive'] },
  art: {
    subject: 'an old necromancer reading a glowing green book as skeletons rise around him'
  }
})
