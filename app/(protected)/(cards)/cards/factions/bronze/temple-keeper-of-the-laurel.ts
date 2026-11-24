import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'temple-keeper-of-the-laurel',
  type: 'ally',
  name: 'Temple Keeper of the Laurel',
  text: 'When it enters: if you have another Oracle, draw a card.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  resist: ['light'],
  price: 630,
  cost: 4,
  tribe: 'oracle',
  attack: 6,
  health: 8,
  onEnter(ctx) {
    if (tribeAllies(ctx, ctx.owner, 'oracle', true).length > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 5, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Temple Keeper of the Laurel: a petite elderly woman with freckled fair skin, snow-white hair in a single long braid and a monocle, dressed in a saffron chiton with gold arm bands, holding a ring of iron keys, with a mischievous wink, amber accents, ancient bronze-age empire style'
  }
})
