import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dire-wolf-of-amber',
  type: 'ally',
  name: 'Dire Wolf of Amber',
  text: 'When it dies: your Beasts gain +1 attack and +1 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  tribe: 'beast',
  attack: 3,
  health: 6,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'beast', 1, 1)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject: 'an ice-age beast, the dire wolf of amber, roaring, prehistoric jungle era style'
  }
})
