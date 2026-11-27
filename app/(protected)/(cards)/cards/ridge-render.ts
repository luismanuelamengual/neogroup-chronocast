import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ridge-render',
  type: 'ally',
  name: 'Ridge Render',
  text: 'When it attacks an ally and the ally survives: that ally loses all its attack.',
  flavor: 'She does not kill the beast. She breaks it.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 420,
  cost: 5,
  tribe: 'caveborn',
  attack: 5,
  health: 12,
  onAttack(ctx, target) {
    const victim = unitAt(ctx, target)

    if (victim) {
      ctx.engine.afterDamage(() => {
        const found = ctx.engine.findUnit(victim.uid)

        if (found && found.unit.attack > 0) {
          ctx.engine.buff(victim.uid, -found.unit.attack, 0)
        }
      })
    }
  },
  ai: { value: 6, tags: ['control'] },
  art: {
    subject:
      'Ridge Render: a fierce hunter woman with raven feathers in her hair swinging a bone club on a rocky ridge, full body, slate blue accents, prehistoric jungle era style'
  }
})
