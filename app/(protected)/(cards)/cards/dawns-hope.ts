import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, handSize, healHero } from '@/app/(protected)/(engine)/effects'

/** The most cards it draws. */
const MAX_DRAW = 3

export default defineCard({
  id: 'dawns-hope',
  type: 'ability',
  subtype: 'program',
  name: "Dawn's Hope",
  text: 'Draw cards until you have as many as the enemy (up to 3). If you draw none, your hero heals 6.',
  flavor: 'The darkest hour is the one right before the light.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 420,
  cost: 2,
  onPlay(ctx) {
    const missing = Math.min(MAX_DRAW, handSize(ctx, ctx.opponent) - handSize(ctx, ctx.owner))

    if (missing > 0) {
      draw(ctx, ctx.owner, missing)
    } else {
      healHero(ctx, 6)
    }
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject:
      "Dawn's Hope: a lone knight kneeling on a battlefield at night, the first ray of sunrise breaking through dark clouds onto her raised hand, golden light, hopeful"
  }
})
