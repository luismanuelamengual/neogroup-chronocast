import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, isPrey, self, slotOf, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tar-soaked-sabertooth',
  type: 'ally',
  name: 'Tar-Soaked Sabertooth',
  text: 'When it attacks a Prey: it heals 4.',
  flavor: 'Climbed out of the tar pits, angrier than ever.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  element: 'acid',
  price: 160,
  cost: 3,
  tribe: 'beast',
  keywords: ['guardian', 'retaliate'],
  attack: 3,
  health: 10,
  onAttack(ctx, target) {
    const unit = unitAt(ctx, target)
    const me = self(ctx)
    const ref = me ? slotOf(ctx, me) : null

    if (ref && unit && isPrey(ctx, unit)) {
      heal(ctx, ref, 4)
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Tar-Soaked Sabertooth: a sabertooth with sandy fur with dark mane and a hump of fat, sniffing the air, ivory accents, prehistoric jungle era style'
  }
})
