import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isAllyOf, isEnhanced, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patient-vest',
  type: 'armor',
  subtype: 'suit',
  name: 'Patient Vest',
  text: 'Every damage your Enhanced allies take is 1 lower.',
  flavor: 'It waits, like the one who wears it.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  armor: 3,
  durability: 3,
  modifyDamage(ctx, target, amount) {
    const unit = target.slot !== 'hero' && isAllyOf(ctx, target, ctx.owner) ? unitAt(ctx, target) : null

    return unit && isEnhanced(unit) ? Math.max(0, amount - 1) : amount
  },
  ai: { value: 4 },
  art: {
    subject:
      'Patient Vest: a single vest made of carved obsidian, on a pile of old coins, seen from above, violet accents, hunter style'
  }
})
