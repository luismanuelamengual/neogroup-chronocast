import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venomous-jerkin',
  type: 'armor',
  subtype: 'suit',
  name: 'Venomous Jerkin',
  text: 'When it is equipped: draw a card.',
  flavor: 'Lined with the skins of things that bite.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  armor: 2,
  durability: 4,
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Venomous Jerkin: a single jerkin made of white bone and leather wraps, leaning against a ruined wall, diagonal dynamic composition, lime green accents, hunter style'
  }
})
