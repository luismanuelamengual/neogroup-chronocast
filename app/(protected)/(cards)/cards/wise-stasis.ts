import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, freeze, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wise-stasis',
  type: 'ability',
  subtype: 'spell',
  name: 'Wise Stasis',
  text: 'Freeze an enemy ally. If it was already frozen, draw a card.',
  flavor: 'The wise know when to stop the clock.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])
    const wasFrozen = !!unit && ctx.engine.isFrozen(unit)

    freeze(ctx, ctx.targets[0])

    if (wasFrozen) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Wise Stasis: a clock frozen inside a floating crystal, its hands stopped, in a snowy pass, close-up filling the frame, crimson accents, medieval magic order style'
  }
})
