import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'starweavers-astrolabe',
  type: 'item',
  reward: true,
  name: "Starweaver's Astrolabe",
  text: 'Draw 2 cards and gain 2 Chronos. Fast.',
  flavor: 'It shows where every star was, and where it will be.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'ilyra-starweaver' },
  rarity: 'legendary',
  cost: 2,
  speed: 'fast',
  keywords: ['unique'],
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
    gainChronos(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['draw'] },
  art: { subject: 'an ornate silver astrolabe floating in the air, its rings spinning around a tiny shining star' }
})
