import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clockheart-engine',
  type: 'artifact',
  name: 'Clockheart Engine',
  text: 'Artifact. At the start of each phase, you gain 1 Chronos and draw a card.',
  flavor: 'A heart of gears that beats in Chronos.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'legendary',
  price: 4800,
  cost: 5,
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5 },
  art: {
    subject: 'a giant mechanical heart of brass gears and glowing chronos crystals, pulsing with violet energy'
  }
})
