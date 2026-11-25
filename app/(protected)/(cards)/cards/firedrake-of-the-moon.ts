import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'firedrake-of-the-moon',
  type: 'ally',
  name: 'Firedrake of the Moon',
  text: 'When another Drake of yours enters: it gains +1 attack and +1 health.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  element: 'fire',
  resist: ['fire'],
  weak: ['ice'],
  price: 170,
  cost: 3,
  tribe: 'drake',
  keywords: ['flying'],
  attack: 2,
  health: 6,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'drake')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Firedrake of the Moon: a firedrake with violet scales and crystal spines along its back, baring its teeth, indigo accents, medieval magic order style'
  }
})
