import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, isCursed, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ossuary-altar',
  type: 'artifact',
  name: 'Ossuary Altar',
  text: 'When an enemy ally that has a curse dies: draw a card. (3 uses)',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  charges: 3,
  onEnemyAllyDeath(ctx, unit) {
    if (isCursed(unit)) {
      draw(ctx, ctx.owner, 1)
      spendCharge(ctx)
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Ossuary Altar: a stone altar built from stacked skulls with black candles burning on top, dark end-of-time void style'
  }
})
