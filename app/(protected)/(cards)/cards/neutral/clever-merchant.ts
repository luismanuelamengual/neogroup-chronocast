import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clever-merchant',
  type: 'ally',
  name: 'Clever Merchant',
  text: 'When it enters: destroy the priciest enemy artifact.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  tribe: 'drifter',
  attack: 3,
  health: 6,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'a time-traveling wanderer, the clever merchant, roaring, time rift wanderer style'
  }
})
