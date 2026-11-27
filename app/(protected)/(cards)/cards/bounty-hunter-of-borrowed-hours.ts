import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bounty-hunter-of-borrowed-hours',
  type: 'ally',
  name: 'Bounty Hunter of Borrowed Hours',
  text: 'When it enters: draw a card if the enemy has more allies than you.',
  flavor: 'She collects debts in minutes and seconds.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  element: 'time',
  price: 140,
  cost: 2,
  keywords: ['flying'],
  attack: 3,
  health: 3,
  onEnter(ctx) {
    if (alliesOf(ctx, ctx.opponent).length > alliesOf(ctx, ctx.owner).length) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Bounty Hunter of Borrowed Hours: a lanky middle-aged man with golden skin, platinum blond hair in a sharp bob, heavy stubble and heterochromatic eyes, wearing a fur hat, dressed in a medieval tabard over a space suit liner, holding a wanted poster and a coiled lasso, with wide-eyed wonder, lime green accents, time rift wanderer style'
  }
})
