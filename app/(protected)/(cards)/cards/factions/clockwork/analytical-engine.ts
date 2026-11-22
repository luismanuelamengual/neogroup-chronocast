import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'analytical-engine',
  type: 'artifact',
  name: 'Analytical Engine',
  text: 'Artifact with 3 uses. At the start of each phase, draw a card.',
  flavor: 'It thinks so you do not have to. It just needs more cards.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 190,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a huge brass calculating machine with spinning gears and punch cards flying out of it'
  }
})
