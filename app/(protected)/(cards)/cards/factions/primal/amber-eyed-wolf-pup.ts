import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'amber-eyed-wolf-pup',
  type: 'ally',
  name: 'Amber-Eyed Wolf Pup',
  text: 'When it enters: it gains +1 attack and +2 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 70,
  cost: 5,
  tribe: 'beast',
  attack: 6,
  health: 10,
  onEnter(ctx) {
    buffSelf(ctx, 1, 2)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Amber-Eyed Wolf Pup: a pup with blue-grey fur and a notched ear, roaring with jaws wide open, violet accents, prehistoric jungle era style'
  }
})
