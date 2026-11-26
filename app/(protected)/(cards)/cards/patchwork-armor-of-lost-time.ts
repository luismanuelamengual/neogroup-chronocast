import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patchwork-armor-of-lost-time',
  type: 'armor',
  subtype: 'exosuit',
  name: 'Patchwork Armor of Lost Time',
  text: 'When it is equipped: draw a card.',
  flavor: 'A Roman plate, a samurai sleeve, a future buckle.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'legendary',
  price: 2080,
  cost: 2,
  armor: 2,
  durability: 5,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Patchwork Armor of Lost Time: a single armor made of white bone and leather wraps, half buried in snow, diagonal dynamic composition, violet accents, steampunk steam era style'
  }
})
