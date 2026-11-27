import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, destroyAt, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grave-pact',
  type: 'ability',
  subtype: 'ritual',
  name: 'Grave Pact',
  text: 'Sacrifice an ally of yours: a random enemy ally takes as much shadow damage as its attack.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      const amount = ctx.engine.attackOf(unit)

      destroyAt(ctx, ctx.targets[0])
      damageRandomAlly(ctx, ctx.opponent, amount, 'shadow')
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Grave Pact: two skeletal hands shaking over an open grave as dark energy coils around them, close-up, violet accents, dark end-of-time void style'
  }
})
