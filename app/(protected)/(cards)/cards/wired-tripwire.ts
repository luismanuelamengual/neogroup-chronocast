import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wired-tripwire',
  type: 'trap',
  name: 'Wired Tripwire',
  text: 'When an enemy ally is summoned: freeze it and draw a card.',
  flavor: 'One wire, one hundred volts.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      freeze(ctx, event.unit)
    }

    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Wired Tripwire: a thin glinting tripwire stretched low between rocks, bursting toward the viewer, indigo accents, prehistoric jungle era style'
  }
})
