import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'campfire-tales',
  type: 'ability',
  subtype: 'instinct',
  name: 'Campfire Tales',
  text: 'Your allies heal 4. Draw a card.',
  flavor: 'Every scar has a story worth telling.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 4)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['heal', 'draw'] },
  art: {
    subject:
      'Campfire Tales: a crackling campfire in a cave mouth at night, sparks rising, hide drums and bone cups around it, warm orange accents, prehistoric jungle era style'
  }
})
