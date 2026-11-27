import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-dune-worm',
  type: 'ally',
  name: 'Armored Dune Worm',
  text: 'Every damage it takes is 3 lower.',
  flavor: 'Spears bend on its rings.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  price: 60,
  cost: 5,
  tribe: 'beast',
  attack: 3,
  health: 11,
  modifyDamage(ctx, target, amount) {
    return unitAt(ctx, target)?.uid === ctx.self.uid ? Math.max(0, amount - 3) : amount
  },
  ai: { value: 5, tags: ['defense'] },
  art: {
    subject:
      'Armored Dune Worm: a giant sandworm with plated sandstone rings bursting out of a dune, mouth full of teeth, ochre accents, prehistoric jungle era style'
  }
})
