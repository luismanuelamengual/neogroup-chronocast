import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-gust',
  type: 'ally',
  name: 'Bold Gust',
  text: 'When it enters: destroy the priciest enemy artifact.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'wind',
  resist: ['wind'],
  weak: ['ice'],
  price: 80,
  cost: 6,
  tribe: 'elemental',
  attack: 8,
  health: 10,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 6, tags: ['antiGear'] },
  art: {
    subject:
      'Bold Gust: an elemental gust with a serpent-like coil made of ember red sparks, mid-stride, time rift wanderer style'
  }
})
