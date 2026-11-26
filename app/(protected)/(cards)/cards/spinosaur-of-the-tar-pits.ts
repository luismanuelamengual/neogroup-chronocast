import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spinosaur-of-the-tar-pits',
  type: 'ally',
  name: 'Spinosaur of the Tar Pits',
  text: 'When another Saurian of yours enters: it gains +2 attack and +2 health.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  element: 'acid',
  weak: ['ice'],
  price: 180,
  cost: 4,
  tribe: 'saurian',
  attack: 2,
  health: 7,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'saurian')) {
      buff(ctx, ally, 2, 2)
    }
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Spinosaur of the Tar Pits: a spinosaur with a deep brown hide with a cream belly and a bony frill, standing proud on a rock, saffron yellow accents, prehistoric jungle era style'
  }
})
