import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-hunt-moon',
  type: 'ability',
  subtype: 'instinct',
  name: 'Rally of the Hunt Moon',
  text: 'Your Beasts gain +2 attack and +2 health. Instant.',
  flavor: 'Under the hunting moon, the tribe is one.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'beast')) {
      buff(ctx, unit, 2, 2)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Rally of the Hunt Moon: a tattered war banner planted in the ground, glowing with rallying light, in a dark forest clearing, close-up filling the frame, gold accents, prehistoric jungle era style'
  }
})
