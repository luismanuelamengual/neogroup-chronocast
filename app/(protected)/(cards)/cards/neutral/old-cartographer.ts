import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-cartographer',
  type: 'ally',
  name: 'Old Cartographer',
  text: 'When it dies: summon a Rift Spark.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  keywords: ['flying'],
  attack: 4,
  health: 6,
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'rift-spark')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject: 'a time-traveling adventurer, the old cartographer, charging into battle, time rift wanderer style'
  }
})
