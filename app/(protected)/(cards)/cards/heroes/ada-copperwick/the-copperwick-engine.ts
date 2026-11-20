import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-copperwick-engine',
  type: 'item',
  reward: true,
  name: 'The Copperwick Engine',
  text: 'Gain 3 Chronos, draw 2 cards and summon a Gear Drone.',
  flavor: 'Her masterpiece. It runs on time itself.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'ada-copperwick' },
  rarity: 'exotic',
  cost: 3,
  keywords: ['unique'],
  onPlay(ctx) {
    gainChronos(ctx, ctx.owner, 3)
    draw(ctx, ctx.owner, 2)
    summonCard(ctx, ctx.owner, 'gear-drone')
  },
  ai: { value: 5, tags: ['ramp', 'draw', 'summon'] },
  art: {
    subject:
      'an incredible glowing copper engine with turquoise time energy flowing through glass tubes and spinning gears'
  }
})
