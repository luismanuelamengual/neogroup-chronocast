import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { cardOf, destroyAt, draw, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'offering-lamb',
  type: 'ability',
  subtype: 'ritual',
  name: 'Offering Lamb',
  text: 'Sacrifice an ally of yours: draw as many cards as its cost (up to 3).',
  flavor: 'The gods are fed. The pages turn.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      const cards = Math.min(3, cardOf(unit).cost)

      destroyAt(ctx, ctx.targets[0])
      draw(ctx, ctx.owner, cards)
    }
  },
  ai: { value: 3, tags: ['draw', 'sacrifice'] },
  art: {
    subject:
      'Offering Lamb: a small white lamb made of light standing on a black stone altar ringed with candles, close-up filling the frame, gold accents, dark end-of-time void style'
  }
})
