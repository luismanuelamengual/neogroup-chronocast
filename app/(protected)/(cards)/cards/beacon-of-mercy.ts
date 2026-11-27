import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'beacon-of-mercy',
  type: 'artifact',
  name: 'Beacon of Mercy',
  text: 'When an ally of yours dies: your other allies heal 3. (4 uses)',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 150,
  cost: 2,
  charges: 4,
  onOwnAllyDeath(ctx) {
    healAllAllies(ctx, ctx.owner, 3)
    spendCharge(ctx)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Beacon of Mercy: a white stone lighthouse lantern burning with a soft golden flame on a rocky shore, mourning candles at its base, mystic healer style'
  }
})
