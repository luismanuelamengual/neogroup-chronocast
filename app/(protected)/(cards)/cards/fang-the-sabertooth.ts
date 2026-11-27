import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, isPrey, self, slotOf, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fang-the-sabertooth',
  type: 'ally',
  reward: true,
  name: 'Fang, the Sabertooth',
  text: 'Its attacks against a Prey deal 5 more damage, and it heals 3 when it attacks one.',
  flavor: "Kora's oldest friend, and her sharpest.",
  faction: 'primal',
  restriction: { heroes: ['kora-wildfang'] },
  rarity: 'legendary',
  cost: 4,
  tribe: 'beast',
  keywords: ['unique', 'charge', 'quick'],
  attack: 7,
  health: 9,
  attackBonus(ctx, attacker, target) {
    const prey = unitAt(ctx, target)

    return unitAt(ctx, attacker)?.uid === ctx.self.uid && !!prey && isPrey(ctx, prey) ? 5 : 0
  },
  onAttack(ctx, target) {
    const unit = unitAt(ctx, target)
    const me = self(ctx)
    const ref = me ? slotOf(ctx, me) : null

    if (ref && unit && isPrey(ctx, unit)) {
      heal(ctx, ref, 3)
    }
  },
  ai: { value: 5 },
  art: {
    subject: 'a massive sabertooth tiger with scars and a bone collar, leaping out of tall grass with fangs bared'
  }
})
