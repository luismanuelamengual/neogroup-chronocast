import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arcane-intellect',
  type: 'ability',
  name: 'Arcane Intellect',
  text: 'Draw 2 cards and gain 1 Chronos.',
  flavor: 'Knowledge is the only power that grows when you spend it.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw', 'ramp'] },
  art: {
    subject: "a glowing open book with streams of runes flowing into a mage's eyes"
  }
})
