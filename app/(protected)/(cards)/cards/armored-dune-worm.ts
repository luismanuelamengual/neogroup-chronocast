import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyTrap } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-dune-worm',
  type: 'ally',
  name: 'Armored Dune Worm',
  text: 'When it enters: destroy a trap of the enemy.',
  flavor: 'Spears bend on its rings.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 60,
  cost: 5,
  tribe: 'beast',
  attack: 3,
  health: 11,
  onEnter(ctx) {
    destroyTrap(ctx, ctx.opponent)
  },
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject:
      'Armored Dune Worm: a giant sandworm with plated sandstone rings bursting out of a dune, mouth full of teeth, ochre accents, prehistoric jungle era style'
  }
})
