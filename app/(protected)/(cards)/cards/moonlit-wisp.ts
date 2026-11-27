import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, cardOf, returnToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'moonlit-wisp',
  type: 'ally',
  name: 'Moonlit Wisp',
  text: "When it enters: return a random enemy ally that costs 2 or less to its owner's hand.",
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 50,
  cost: 2,
  tribe: 'fae',
  keywords: ['ranged'],
  attack: 1,
  health: 6,
  onEnter(ctx) {
    const cheap = alliesOf(ctx, ctx.opponent).filter((unit) => cardOf(unit).cost <= 2)

    if (cheap.length > 0) {
      returnToHand(ctx, cheap[Math.floor(ctx.random() * cheap.length)])
    }
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Moonlit Wisp: a wisp with rose skin and ivy hair and feathered wings, pawing the ground, turquoise accents, medieval magic order style'
  }
})
