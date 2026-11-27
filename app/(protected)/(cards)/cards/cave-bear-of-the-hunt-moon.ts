import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { isPrey, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cave-bear-of-the-hunt-moon',
  type: 'ally',
  name: 'Cave Bear of the Hunt Moon',
  text: 'Its attacks against a Prey deal 4 more damage.',
  flavor: 'It wakes only under the hunting moon.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  tribe: 'beast',
  keywords: ['charge'],
  attack: 5,
  health: 7,
  attackBonus(ctx, attacker, target) {
    const prey = unitAt(ctx, target)

    return unitAt(ctx, attacker)?.uid === ctx.self.uid && !!prey && isPrey(ctx, prey) ? 4 : 0
  },
  ai: { value: 4, tags: ['heal'] },
  art: {
    subject:
      'Cave Bear of the Hunt Moon: a bear with golden tawny fur and battle scars, prowling low, crimson accents, prehistoric jungle era style'
  }
})
