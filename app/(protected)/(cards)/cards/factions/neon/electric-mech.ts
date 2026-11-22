import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'electric-mech',
  type: 'ally',
  name: 'Electric Mech',
  text: 'When it enters: your other Cyborgs gain +1 attack and +1 health.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  weak: ['lightning'],
  price: 570,
  cost: 3,
  tribe: 'cyborg',
  keywords: ['ranged'],
  attack: 2,
  health: 10,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'cyborg', 1, 1, true)
  },
  ai: { value: 4, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'a futuristic cyborg with glowing implants, the electric mech, crouching, ready to strike, neon cyberpunk future style'
  }
})
