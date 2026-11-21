import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-final-silence',
  type: 'ally',
  name: 'The Final Silence',
  text: 'On enter: deal 15 damage to every ally, yours too and a random ally of your discard pile returns to play.',
  flavor: 'After the last sound, only this.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'mythic',
  price: 35000,
  cost: 9,
  attack: 34,
  health: 35,
  keywords: ['unique', 'echo'],
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 15)
    damageAllAllies(ctx, ctx.owner, 15)
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 12, tags: ['removal', 'revive'] },
  art: {
    subject: 'a vast faceless entity of absolute darkness rising over the end of time, galaxies fading into it'
  }
})
