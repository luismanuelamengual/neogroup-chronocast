import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharp-raptor',
  type: 'ally',
  name: 'Sharp Raptor',
  text: 'When it dies: your Saurians gain +1 attack and +1 health.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  weak: ['ice'],
  price: 200,
  cost: 5,
  tribe: 'saurian',
  attack: 7,
  health: 9,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'saurian', 1, 1)
  },
  ai: { value: 5, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Sharp Raptor: a raptor with a jet black hide with an emerald sheen and a broken tooth, pawing the ground, magenta accents, hunter style'
  }
})
