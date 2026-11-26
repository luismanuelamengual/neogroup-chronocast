import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'moonlit-battlemage',
  type: 'ally',
  name: 'Moonlit Battlemage',
  text: 'When another Magus of yours enters: your hero heals 2.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'uncommon',
  resist: ['arcane'],
  price: 120,
  cost: 1,
  tribe: 'magus',
  attack: 3,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'magus')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 1, tags: ['aggro', 'heal'] },
  art: {
    subject:
      'Moonlit Battlemage: a plump elderly half-orc man with light brown skin, silver hair in a messy bun and a scar across one eye, wearing a deep hood, dressed in layered emerald robes with a book chained to the belt, gripping a well-worn weapon, crouched low, with grim determination, tangerine accents, medieval magic order style'
  }
})
