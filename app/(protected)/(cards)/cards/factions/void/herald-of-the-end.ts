import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'herald-of-the-end',
  type: 'ally',
  name: 'Herald of the End',
  text: 'On enter: deal 6 damage to every ally, yours too and draw a card.',
  flavor: 'He does not bring the end. He announces it.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'epic',
  price: 2000,
  cost: 6,
  attack: 20,
  health: 20,
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
    damageAllAllies(ctx, ctx.owner, 6)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 7, tags: ['removal', 'draw'] },
  art: {
    subject: 'a tall angelic figure with black broken wings blowing a horn as reality cracks around him'
  }
})
