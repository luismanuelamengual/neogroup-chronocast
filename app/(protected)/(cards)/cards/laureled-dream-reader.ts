import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, hasPanoply } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'laureled-dream-reader',
  type: 'ally',
  name: 'Laureled Dream Reader',
  text: 'When it enters: with Panoply, draw 2 cards.',
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
    if (hasPanoply(ctx)) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject:
      'Laureled Dream Reader: a lanky adult woman with dark ebony skin, chestnut hair in a messy bun and a burn scar on the jaw, wearing a sheer veil, dressed in flowing white robes with a laurel crown, holding a sleeping lantern of dreams, with calm focus, indigo accents, ancient bronze-age empire style'
  }
})
