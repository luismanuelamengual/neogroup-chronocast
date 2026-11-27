import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sanctuary-bell',
  type: 'artifact',
  name: 'Sanctuary Bell',
  text: 'At the start of each phase: draw a card if your hero has more health than the enemy hero. (4 uses)',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 340,
  cost: 3,
  charges: 4,
  onPhaseStart(ctx) {
    if (ctx.engine.player(ctx.owner).hero.health > ctx.engine.player(ctx.opponent).hero.health) {
      draw(ctx, ctx.owner, 1)
    }

    spendCharge(ctx)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Sanctuary Bell: a great bronze bell hanging in a white stone bell tower, sunrise behind it, doves taking off, mystic healer style'
  }
})
