import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'swift-stonethrower',
  type: 'ally',
  name: 'Swift Stonethrower',
  text: 'At the start of each phase: it gains +1 attack and +1 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  resist: ['ice'],
  price: 80,
  cost: 7,
  tribe: 'caveborn',
  attack: 6,
  health: 15,
  onPhaseStart(ctx) {
    buffSelf(ctx, 1, 1)
  },
  ai: { value: 7, tags: ['buff'] },
  art: {
    subject:
      'a prehistoric tribe warrior in furs and bone ornaments, the swift stonethrower, glaring at the viewer, prehistoric jungle era style'
  }
})
