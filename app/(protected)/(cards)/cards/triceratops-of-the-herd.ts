import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'triceratops-of-the-herd',
  type: 'ally',
  name: 'Triceratops of the Herd',
  text: 'When it enters: it gains +1 attack and +1 health for each other Saurian of yours.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'uncommon',
  weak: ['ice'],
  price: 160,
  cost: 3,
  tribe: 'saurian',
  keywords: ['charge'],
  attack: 4,
  health: 6,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'saurian', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Triceratops of the Herd: a triceratops with a scarlet hide with black tiger stripes and thick plated armor, roaring with jaws wide open, violet accents, prehistoric jungle era style'
  }
})
