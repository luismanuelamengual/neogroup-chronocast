import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grim-collector',
  type: 'ally',
  name: 'Grim Collector',
  text: 'At the end of each phase: deal 1 shadow damage to every damaged enemy ally.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 400,
  cost: 4,
  tribe: 'drifter',
  attack: 4,
  health: 10,
  onPhaseEnd(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      if (unit.health < unit.maxHealth) {
        damageAlly(ctx, unit, 1, 'shadow')
      }
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Grim Collector: a gaunt collector in a long black coat tallying wounded soldiers in a ledger, a lantern of green flame, dark ritual mood'
  }
})
