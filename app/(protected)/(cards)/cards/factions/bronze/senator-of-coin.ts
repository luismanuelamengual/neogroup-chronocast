import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'senator-of-coin',
  type: 'ally',
  name: 'Senator of Coin',
  text: 'On enter: draw a card and gain 1 Chronos.',
  flavor: 'Every vote has a price. Every price has a vote.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 8,
  health: 20,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'ramp'] },
  art: {
    subject: 'a plump smiling senator in a purple-striped toga counting gold coins on a marble table'
  }
})
