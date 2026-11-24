import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-copperwick-engine',
  type: 'item',
  reward: true,
  name: 'The Copperwick Engine',
  text: 'You gain 2 Chronos this phase, draw 2 cards and summon a Cog Drone.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'ada-copperwick' },
  rarity: 'exotic',
  cost: 3,
  keywords: ['unique'],
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 2)
    draw(ctx, ctx.owner, 2)
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 5, tags: ['draw', 'ramp', 'summon'] },
  art: {
    subject:
      'The Copperwick Engine: a small engine made of dark yew wood and brass fittings, floating above a marble pedestal, dramatic backlight, turquoise accents'
  }
})
