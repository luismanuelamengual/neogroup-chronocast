import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-gust',
  type: 'ally',
  name: 'Timeless Gust',
  text: 'When it dies: summon a Rift Spark.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'wind',
  resist: ['wind'],
  weak: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'elemental',
  keywords: ['guardian'],
  attack: 4,
  health: 11,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'rift-spark')
  },
  ai: { value: 5, tags: ['summon'] },
  art: {
    subject:
      'Timeless Gust: an elemental gust with a jagged crystal body made of pearly white mist, turning its head toward the viewer, time rift wanderer style'
  }
})
