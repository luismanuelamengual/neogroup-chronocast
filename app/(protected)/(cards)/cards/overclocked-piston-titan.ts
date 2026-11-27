import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, damage, self, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overclocked-piston-titan',
  type: 'ally',
  name: 'Overclocked Piston Titan',
  text: 'At the end of each phase: it takes 2 damage and gains +2 attack.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['eclipse'] },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  price: 65,
  cost: 4,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 4,
  health: 9,
  onPhaseEnd(ctx) {
    const unit = self(ctx)
    const ref = unit ? slotOf(ctx, unit) : null

    if (ref) {
      damage(ctx, ref, 2)
      buffSelf(ctx, 2, 0)
    }
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'Overclocked Piston Titan: a titan built of riveted copper with green patina, with a single giant lens, standing guard, steampunk steam era style'
  }
})
