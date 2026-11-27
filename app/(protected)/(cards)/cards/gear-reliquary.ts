import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gear-reliquary',
  type: 'artifact',
  name: 'Gear Reliquary',
  text: 'When another artifact of yours leaves play: draw a card. (3 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  charges: 3,
  onArtifactLeave(ctx, artifact) {
    if (artifact.uid !== ctx.self.uid) {
      draw(ctx, ctx.owner, 1)
      spendCharge(ctx)
    }
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      'Gear Reliquary: a glass case holding a golden gear on velvet with tiny pipes hissing steam, steampunk clockwork era style'
  }
})
