import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blueprint-cache',
  type: 'item',
  name: 'Blueprint Cache',
  text: 'Draw a card and gain 1 Chronos.',
  flavor: 'Every invention starts with the notes of someone else.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 60,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a brass tube popping open, rolled blueprints of strange machines spilling onto a workbench'
  }
})
