import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-gust',
  type: 'ally',
  name: 'Bold Gust',
  text: 'When it enters: destroy the priciest enemy artifact.',
  faction: 'neutral',
  restriction: { kind: 'any' },
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
    subject: 'an elemental spirit, the bold gust, lunging forward, time rift wanderer style'
  }
})
