import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'laureled-dream-reader',
  type: 'ally',
  name: 'Laureled Dream Reader',
  text: 'When it enters: draw a card.',
  flavor: "She reads the empire's dreams and edits the bad ones.",
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  resist: ['light'],
  price: 70,
  cost: 5,
  tribe: 'oracle',
  keywords: ['guardian'],
  attack: 4,
  health: 11,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject:
      'Laureled Dream Reader: a lanky adult woman with dark ebony skin, chestnut hair in a messy bun and a burn scar on the jaw, wearing a sheer veil, dressed in flowing white robes with a laurel crown, holding a sleeping lantern of dreams, with calm focus, indigo accents, ancient bronze-age empire style'
  }
})
