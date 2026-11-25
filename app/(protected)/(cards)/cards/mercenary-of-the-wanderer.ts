import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mercenary-of-the-wanderer',
  type: 'ally',
  name: 'Mercenary of the Wanderer',
  text: 'When it enters: your hero heals 5. At the start of each phase: your hero heals 2.',
  faction: 'neutral',
  restriction: {},
  rarity: 'epic',
  price: 1720,
  cost: 3,
  tribe: 'drifter',
  keywords: ['guardian', 'agile'],
  attack: 3,
  health: 10,
  onEnter(ctx) {
    healHero(ctx, 5)
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 4, tags: ['defense', 'heal'] },
  art: {
    subject:
      'Mercenary of the Wanderer: a petite elderly dwarf woman with warm beige skin, silver hair in a messy bun and heavy golden earrings, wearing a turban, dressed in a Renaissance doublet with mismatched armor pieces, resting a notched greatsword on the shoulder, with a confident smirk, violet accents, time rift wanderer style'
  }
})
