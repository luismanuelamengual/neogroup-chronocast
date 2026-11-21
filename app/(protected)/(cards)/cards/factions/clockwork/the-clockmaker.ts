import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-clockmaker',
  type: 'ally',
  name: 'The Clockmaker',
  text: 'On enter: gain 4 Chronos and draw 2 cards. At the start of each phase, gain 1 Chronos and your allies gain +1 attack and +2 health.',
  flavor: 'He built the first clock. Then he built time to put in it.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'mythic',
  price: 35000,
  cost: 8,
  attack: 22,
  health: 30,
  keywords: ['unique'],
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 4)
    draw(ctx, ctx.owner, 2)
  },
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
    buffAllies(ctx, ctx.owner, 1, 2)
  },
  ai: { value: 11, tags: ['ramp', 'draw', 'buff'] },
  art: {
    subject:
      'an ancient mysterious clockmaker with a white beard and countless glowing clock faces orbiting around him in a vast workshop'
  }
})
