import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-starlight-oracle',
  type: 'ally',
  name: 'The Starlight Oracle',
  text: 'At the start of each phase, draw a card.',
  flavor: 'She saw this match long ago. She liked the ending.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'legendary',
  price: 5250,
  cost: 5,
  attack: 14,
  health: 34,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 7, tags: ['draw'] },
  art: {
    subject: 'a blindfolded oracle surrounded by floating constellations and a glowing celestial sphere'
  }
})
