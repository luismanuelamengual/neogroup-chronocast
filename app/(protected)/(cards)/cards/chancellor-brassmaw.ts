import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy, takeControl, unitAt } from '@/app/(protected)/(engine)/effects'

/** The energy he gains when an ally under contract dies. */
const ENERGY_ON_DEATH = 2

export default defineCard({
  id: 'chancellor-brassmaw',
  type: 'hero',
  name: 'Chancellor Brassmaw',
  text: 'Forced Contract (4): take control of an enemy ally until the end of the next phase; then it goes back to its owner. When an ally under contract dies, gain 2 energy.',
  flavor: 'He owns the factories, the city and most of the clocks.',
  faction: 'clockwork',
  side: 'eclipse',
  restriction: { heroes: ['chancellor-brassmaw'] },
  rarity: 'uncommon',
  element: 'sonic',
  cost: 0,
  health: 65,
  ability: {
    name: 'Forced Contract',
    text: 'Take control of an enemy ally until the end of the next phase; then it goes back to its owner.',
    cost: 4,
    targets: ['enemyAlly'],
    ai: { tags: ['removal'] },
    canActivate(ctx) {
      if (!unitAt(ctx, ctx.targets[0])) {
        return 'invalidTarget'
      }

      return ctx.engine.freeSlots(ctx.owner).length > 0 ? null : 'slotsFull'
    },
    activate(ctx) {
      takeControl(ctx, ctx.targets[0])
    }
  },
  onOwnAllyDeath(ctx, unit) {
    if (unit.contract) {
      gainEnergy(ctx, ctx.owner, ENERGY_ON_DEATH)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a fat sinister Victorian chancellor with a brass mechanical jaw, a monocle and a top hat sitting behind a giant desk of gears'
  }
})
