import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nest-keeper',
  type: 'ally',
  name: 'Nest Keeper',
  text: 'At the start of each phase, if you have 3 or more allies, draw a card.',
  flavor: 'A crowded nest is a happy nest.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  attack: 5,
  health: 10,
  onPhaseStart(ctx) {
    if (alliesOf(ctx, ctx.owner).length >= 3) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a feathered dinosaur mother guarding a big nest full of cracking eggs in tall ferns'
  }
})
