import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gorraks-cave-bear',
  type: 'ally',
  name: "Gorrak's Cave Bear",
  text: 'When another Beast of yours enters: your hero heals 2. At the start of each phase: it gains +1 attack and +1 health.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'legendary',
  price: 2320,
  cost: 5,
  tribe: 'beast',
  keywords: ['unique', 'retaliate'],
  attack: 5,
  health: 14,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'beast')) {
      healHero(ctx, 2)
    }
  },
  onPhaseStart(ctx) {
    buffSelf(ctx, 1, 1)
  },
  ai: { value: 7, tags: ['buff', 'heal'] },
  art: {
    subject:
      "Gorrak's Cave Bear: a bear with striped ginger fur and a broad antler rack, circling warily, turquoise accents, prehistoric jungle era style"
  }
})
