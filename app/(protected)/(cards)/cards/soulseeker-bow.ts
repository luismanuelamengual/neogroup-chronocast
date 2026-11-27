import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soulseeker-bow',
  type: 'weapon',
  subtype: 'bow',
  name: 'Soulseeker Bow',
  text: 'When an attack of your hero with it kills an ally: your hero heals 6.',
  flavor: 'Every arrow comes back with something.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 420,
  cost: 5,
  attack: 3,
  durability: 5,
  onAttack(ctx, target) {
    const victim = unitAt(ctx, target)

    if (victim) {
      ctx.engine.afterDamage(() => {
        if (!ctx.engine.findUnit(victim.uid)) {
          healHero(ctx, 6)
        }
      })
    }
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject:
      'Soulseeker Bow: a recurve bow carved from pale bone with glowing ghostly feathers on its string, on a mossy rock, teal accents, prehistoric jungle era style'
  }
})
