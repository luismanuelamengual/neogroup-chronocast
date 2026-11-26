import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-mist',
  type: 'ally',
  name: 'Wandering Mist',
  text: 'When another Elemental of yours enters: it gains +1 attack and +1 health. At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: {},
  rarity: 'epic',
  element: 'water',
  resist: ['water'],
  weak: ['lightning'],
  price: 1000,
  cost: 2,
  tribe: 'elemental',
  keywords: ['shield'],
  attack: 2,
  health: 4,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'elemental')) {
      buff(ctx, ally, 1, 1)
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 3, tags: ['buff', 'heal', 'tribe'] },
  art: {
    subject:
      'Wandering Mist: an elemental mist with a swirling vortex shape made of silver wind streams, standing proud on a rock, time rift wanderer style'
  }
})
