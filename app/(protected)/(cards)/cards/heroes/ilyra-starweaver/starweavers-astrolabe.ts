import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'starweavers-astrolabe',
  type: 'item',
  reward: true,
  name: "Starweaver's Astrolabe",
  text: 'Draw 2 cards and you gain 2 Chronos this phase.',
  flavor: 'Ilyra charts the stars that charted her.',
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
  ai: { value: 5, tags: ['draw', 'ramp'] },
  art: {
    subject:
      "Starweaver's Astrolabe: a small astrolabe made of ivory and jade, on a pile of old coins, swirling around the center, ivory accents"
  }
})
