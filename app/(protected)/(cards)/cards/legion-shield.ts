import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, buffTribe, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legion-shield',
  type: 'armor',
  subtype: 'shield',
  name: 'Legion Shield',
  text: 'When it is equipped, and while it is: your Legionnaires gain +2 health.',
  flavor: 'One shield, a hundred brothers behind it.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 150,
  cost: 3,
  durability: 4,
  armor: 2,
  onPlay(ctx) {
    buffTribe(ctx, ctx.owner, 'legionnaire', 0, 2)
  },
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'legionnaire')) {
      buff(ctx, ally, 0, 2)
    }
  },
  ai: { value: 3, tags: ['tribe'] },
  art: {
    subject:
      'Legion Shield: a tall rectangular bronze scutum with a golden eagle emblem, propped against a marble column, warm sunlight, centered, crimson accents, ancient bronze-age empire style'
  }
})
