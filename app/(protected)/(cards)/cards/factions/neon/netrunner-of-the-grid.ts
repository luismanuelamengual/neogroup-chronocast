import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'netrunner-of-the-grid',
  type: 'ally',
  name: 'Netrunner of the Grid',
  text: 'When it enters: your other Netrunners gain +1 attack and +1 health.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  tribe: 'netrunner',
  keywords: ['ranged'],
  attack: 2,
  health: 9,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'netrunner', 1, 1, true)
  },
  ai: { value: 3, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the netrunner of the grid, raising its weapon, neon cyberpunk future style'
  }
})
