import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-steel',
  type: 'ability',
  name: 'Rally of Steel',
  text: 'Your Colossi gain +1 attack and +2 health.',
  flavor: 'Raise your blades. Raise your voices.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  onPlay(ctx) {
    buffTribe(ctx, ctx.owner, 'colossus', 1, 2)
  },
  ai: { value: 2, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Rally of Steel: a tattered war banner planted in the ground, glowing with rallying light, inside a cave of crystals, centered and seen from slightly below, tangerine accents, warrior style'
  }
})
