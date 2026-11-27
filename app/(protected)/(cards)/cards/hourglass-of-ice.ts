import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hourglass-of-ice',
  type: 'ability',
  subtype: 'gadget',
  name: 'Hourglass of Ice',
  text: 'You gain 2 Chronos this phase and draw a card. Instant.',
  flavor: 'Time freezes, one grain at a time.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 2)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['ramp'] },
  art: {
    subject:
      'Hourglass of Ice: a giant ornate hourglass with glowing falling sand, in a ruined temple, dramatic backlight, gold accents, mage style'
  }
})
