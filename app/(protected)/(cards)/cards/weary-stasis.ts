import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { cardOf, freeze, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'weary-stasis',
  type: 'ability',
  subtype: 'spell',
  name: 'Weary Stasis',
  text: 'Freeze an enemy ally that costs 2 or less.',
  flavor: 'Even time needs to rest.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 120,
  cost: 0,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit && cardOf(unit).cost <= 2) {
      freeze(ctx, ctx.targets[0])
    }
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Weary Stasis: a clock frozen inside a floating crystal, its hands stopped, over a stormy battlefield, dramatic backlight, lime green accents, medieval magic order style'
  }
})
