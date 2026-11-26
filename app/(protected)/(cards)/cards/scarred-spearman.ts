import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scarred-spearman',
  type: 'ally',
  name: 'Scarred Spearman',
  text: 'After it takes damage: it gains +2 attack.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'uncommon',
  resist: ['ice'],
  price: 220,
  cost: 6,
  tribe: 'caveborn',
  keywords: ['guardian', 'retaliate'],
  attack: 6,
  health: 14,
  onDamaged(ctx) {
    buffSelf(ctx, 2, 0)
  },
  ai: { value: 6, tags: ['buff'] },
  art: {
    subject:
      'Scarred Spearman: a lanky young man with light brown skin, blue-black hair with a side-swept fringe, a full beard and bushy eyebrows, dressed in ochre body paint and a reed skirt, thrusting a flint spear, with calm focus, gold accents, prehistoric jungle era style'
  }
})
