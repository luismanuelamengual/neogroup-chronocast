import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tax-automaton',
  type: 'ally',
  boss: true,
  name: 'Tax Automaton',
  text: 'On enter: draw a card.',
  flavor: 'It counts everything. Including you.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'chancellor-brassmaw' },
  rarity: 'epic',
  cost: 3,
  attack: 10,
  health: 18,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'a small brass robot with an abacus and a ledger, counting coins with mechanical fingers'
  }
})
