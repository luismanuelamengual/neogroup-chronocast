import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-blessing',
  type: 'ability',
  subtype: 'instinct',
  name: 'Old Blessing',
  text: 'Your hero heals 6. Draw the first trap of your deck.',
  flavor: 'Older than the gods who gave it.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  onPlay(ctx) {
    healHero(ctx, 6)
    seekType(ctx, ctx.owner, 'trap')
  },
  ai: { value: 4, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Old Blessing: a halo of soft light over an empty altar, inside a cave of crystals, swirling around the center, turquoise accents, prehistoric jungle era style'
  }
})
