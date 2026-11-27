import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPreyAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'amber-eyed-wolf-pup',
  type: 'ally',
  name: 'Amber-Eyed Wolf Pup',
  text: 'When it enters: a random enemy ally becomes your Prey.',
  flavor: 'Its eyes glow before its teeth do.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 70,
  cost: 5,
  tribe: 'beast',
  attack: 6,
  health: 10,
  onEnter(ctx) {
    const prey = randomAlly(ctx, ctx.opponent)

    if (prey) {
      markPreyAlly(ctx, prey)
    }
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Amber-Eyed Wolf Pup: a pup with blue-grey fur and a notched ear, roaring with jaws wide open, violet accents, prehistoric jungle era style'
  }
})
