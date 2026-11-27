import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isTribe, slotsNextTo, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'varros-legion-standard',
  type: 'artifact',
  name: "Varro's Legion Standard",
  text: 'The attacks of your Legionnaires that have an ally next to them deal 2 more damage.',
  faction: 'bronze',
  restriction: { heroes: ['legate-varro'] },
  rarity: 'legendary',
  price: 2200,
  cost: 3,
  keywords: ['unique'],
  attackBonus(ctx, attacker) {
    const unit = attacker.player === ctx.owner ? unitAt(ctx, attacker) : null

    return unit && isTribe(unit, 'legionnaire') && slotsNextTo(ctx, attacker).some((ref) => unitAt(ctx, ref)) ? 2 : 0
  },
  ai: { value: 6 },
  art: {
    subject:
      "Varro's Legion Standard: a tall bronze eagle standard with crimson banners planted in the ground before a shield wall, ancient bronze empire style"
  }
})
