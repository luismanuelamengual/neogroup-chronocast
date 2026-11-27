import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, draw, isTribe, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sudden-sprout',
  type: 'ability',
  subtype: 'instinct',
  name: 'Sudden Sprout',
  text: 'An ally of yours gains +2 attack and +2 health (+3 and +4 if it is a Saurian). Draw a card.',
  flavor: 'Overnight, the jungle doubles.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])
    const saurian = !!unit && isTribe(unit, 'saurian')

    buffAt(ctx, ctx.targets[0], saurian ? 3 : 2, saurian ? 4 : 2)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['buff', 'draw'] },
  art: {
    subject:
      'Sudden Sprout: a burst of fresh green shoots and ferns erupting from cracked earth, glowing spores, close-up filling the frame, lime accents, prehistoric jungle era style'
  }
})
