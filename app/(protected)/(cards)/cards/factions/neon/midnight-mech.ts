import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-mech',
  type: 'ally',
  name: 'Midnight Mech',
  text: 'When it enters: draw the first Cyborg of your deck.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  element: 'shadow',
  weak: ['lightning'],
  price: 170,
  cost: 3,
  tribe: 'cyborg',
  attack: 4,
  health: 8,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'cyborg')
  },
  ai: { value: 3, tags: ['draw', 'tribe'] },
  art: {
    subject: 'a futuristic cyborg with glowing implants, the midnight mech, standing guard, neon cyberpunk future style'
  }
})
