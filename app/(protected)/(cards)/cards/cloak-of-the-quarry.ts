import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isTribe, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cloak-of-the-quarry',
  type: 'armor',
  subtype: 'leather',
  name: 'Cloak of the Quarry',
  text: 'Every damage your Caveborn take is 1 lower.',
  flavor: 'The prey never sees it coming.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 2,
  durability: 3,
  modifyDamage(ctx, target, amount) {
    const unit = unitAt(ctx, target)

    return unit && target.player === ctx.owner && isTribe(unit, 'caveborn') ? Math.max(0, amount - 1) : amount
  },
  ai: { value: 2 },
  art: {
    subject:
      'Cloak of the Quarry: a single cloak made of dark yew wood and brass fittings, floating above a marble pedestal, swirling around the center, lime green accents, hunter style'
  }
})
