import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'glyptodon-of-the-volcano',
  type: 'ally',
  name: 'Glyptodon of the Volcano',
  text: 'When it enters: summon a Sabertooth Cub.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  element: 'fire',
  price: 750,
  cost: 6,
  tribe: 'beast',
  attack: 8,
  health: 12,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 7, tags: ['summon'] },
  art: {
    subject: 'an ice-age beast, the glyptodon of the volcano, glaring at the viewer, prehistoric jungle era style'
  }
})
