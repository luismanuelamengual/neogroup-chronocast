import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mercenary-of-the-wanderer',
  type: 'ally',
  name: 'Mercenary of the Wanderer',
  text: 'At the start of each phase: your hero heals 1 for each Drifter of yours.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  tribe: 'drifter',
  keywords: ['guardian', 'agile'],
  attack: 3,
  health: 10,
  onPhaseStart(ctx) {
    healHero(ctx, tribeAllies(ctx, ctx.owner, 'drifter').length)
  },
  ai: { value: 4, tags: ['defense', 'heal'] },
  art: {
    subject:
      'Mercenary of the Wanderer: a petite elderly dwarf woman with warm beige skin, silver hair in a messy bun and heavy golden earrings, wearing a turban, dressed in a Renaissance doublet with mismatched armor pieces, resting a notched greatsword on the shoulder, with a confident smirk, violet accents, time rift wanderer style'
  }
})
