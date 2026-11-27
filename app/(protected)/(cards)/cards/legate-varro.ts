import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { addBoon, hasPanoply, isTribe, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legate-varro',
  type: 'hero',
  name: 'Legate Varro',
  text: 'Testudo (4): until the end of this phase, your allies take 2 less damage and you deal 2 more damage to the enemy hero and allies. Instant. Panoply (your hero has a weapon and an armor): the attacks of your Legionnaires deal 1 more damage.',
  flavor: 'He has held the line in more centuries than he can count.',
  faction: 'bronze',
  side: 'dawn',
  restriction: { heroes: ['legate-varro'] },
  rarity: 'common',
  cost: 0,
  health: 65,
  ability: {
    name: 'Testudo',
    text: 'Until the end of this phase, your allies take 2 less damage and you deal 2 more damage to the enemy hero and allies.',
    cost: 4,
    speed: 'instant',
    activate(ctx) {
      // Only for the rest of this phase (0 more phases).
      addBoon(ctx, ctx.owner, 'guard', 2, 0)
      addBoon(ctx, ctx.owner, 'empower', 2, 0)
    }
  },
  attackBonus(ctx, attacker) {
    const unit = attacker.slot === 'hero' ? null : unitAt(ctx, attacker)

    return unit && isTribe(unit, 'legionnaire') && hasPanoply(ctx) ? 1 : 0
  },
  ai: { value: 0 },
  art: {
    subject:
      'a veteran Roman legate with a scarred face and a red cloak, bronze lorica and a tall plumed helmet, raising a tower shield in front of a marching legion'
  }
})
