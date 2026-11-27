import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, isPrey, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'young-tyrant',
  type: 'ally',
  name: 'Young Tyrant',
  text: 'When it attacks a Prey: draw a card.',
  flavor: 'A king in the making, a tyrant already.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  weak: ['ice'],
  price: 40,
  cost: 1,
  tribe: 'saurian',
  attack: 3,
  health: 3,
  onAttack(ctx, target) {
    const unit = unitAt(ctx, target)

    if (unit && isPrey(ctx, unit)) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 1, tags: ['aggro', 'heal'] },
  art: {
    subject:
      'Young Tyrant: a tyrant with a sandy gold hide with brown speckles and glowing amber eyes, leaping forward, scarlet accents, prehistoric jungle era style'
  }
})
