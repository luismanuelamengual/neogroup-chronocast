import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-grand-orrery',
  type: 'ally',
  name: 'The Grand Orrery',
  text: 'On enter: gain 3 Chronos and draw 2 cards.',
  flavor: 'It moves the planets, and the planets move the war.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'legendary',
  price: 5750,
  cost: 7,
  attack: 20,
  health: 50,
  keywords: ['unique'],
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 3)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 9, tags: ['ramp', 'draw'] },
  art: {
    subject: 'a gigantic walking brass orrery with planets spinning on its arms, gears and stars around it'
  }
})
