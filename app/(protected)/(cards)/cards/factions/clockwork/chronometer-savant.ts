import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chronometer-savant',
  type: 'ally',
  name: 'Chronometer Savant',
  text: 'On enter: gain 1 Chronos and draw a card.',
  flavor: 'He measures time to the millionth of a second. Then he steals it.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 8,
  health: 18,
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['ramp', 'draw'] },
  art: {
    subject: 'a scholar with a monocle and dozens of pocket watches hanging from his coat, studying a giant chronometer'
  }
})
