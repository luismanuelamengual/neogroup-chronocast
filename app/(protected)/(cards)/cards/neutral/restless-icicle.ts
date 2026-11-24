import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'restless-icicle',
  type: 'ally',
  name: 'Restless Icicle',
  text: 'When it enters: destroy the priciest enemy artifact.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'ice',
  resist: ['ice'],
  weak: ['fire'],
  price: 65,
  cost: 4,
  tribe: 'elemental',
  keywords: ['charge'],
  attack: 4,
  health: 8,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 4, tags: ['antiGear'] },
  art: {
    subject:
      'Restless Icicle: an elemental icicle with a towering pillar shape made of storm purple with yellow lightning, rearing up, time rift wanderer style'
  }
})
