import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'moonlit-battlemage',
  type: 'ally',
  name: 'Moonlit Battlemage',
  text: 'When another Magus of yours enters: your hero heals 2.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  resist: ['arcane'],
  price: 140,
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
    subject: 'a medieval spellcaster, the moonlit battlemage, lunging forward, medieval magic order style'
  }
})
