import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dryad-of-the-archmage',
  type: 'ally',
  name: 'Dryad of the Archmage',
  text: 'When another Fae of yours enters: your hero heals 2.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 690,
  cost: 5,
  tribe: 'fae',
  keywords: ['shield'],
  attack: 5,
  health: 13,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'fae')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 6, tags: ['heal'] },
  art: {
    subject: 'a fairy-tale fae creature, the dryad of the archmage, standing guard, medieval magic order style'
  }
})
