import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'firedrake-of-the-moon',
  type: 'ally',
  name: 'Firedrake of the Moon',
  text: 'When another Drake of yours enters: deal 2 fire damage to a random enemy ally.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'fire',
  resist: ['fire'],
  weak: ['ice'],
  price: 160,
  cost: 3,
  tribe: 'drake',
  keywords: ['flying'],
  attack: 2,
  health: 6,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'drake')) {
      damageRandomAlly(ctx, ctx.opponent, 2, 'fire')
    }
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Firedrake of the Moon: a firedrake with violet scales and crystal spines along its back, baring its teeth, indigo accents, medieval magic order style'
  }
})
