import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lucky-blessing',
  type: 'ability',
  subtype: 'instinct',
  name: 'Lucky Blessing',
  text: 'Your hero heals 12. If you have a trap set, draw a card.',
  flavor: 'Luck is a skill, if you ask the lucky.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 12)

    if (ctx.engine.player(ctx.owner).traps.length > 0) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Lucky Blessing: a halo of soft light over an empty altar, over a desert of red dunes, centered and seen from slightly below, cobalt blue accents, prehistoric jungle era style'
  }
})
