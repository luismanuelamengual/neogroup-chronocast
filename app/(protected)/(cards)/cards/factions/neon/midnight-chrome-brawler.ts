import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-chrome-brawler',
  type: 'ally',
  name: 'Midnight Chrome Brawler',
  text: 'When it enters: the enemy hero loses 1 energy.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  element: 'shadow',
  weak: ['lightning'],
  price: 55,
  cost: 3,
  tribe: 'cyborg',
  attack: 5,
  health: 6,
  onEnter(ctx) {
    drainEnergy(ctx, ctx.opponent, 1)
  },
  ai: { value: 3, tags: ['control'] },
  art: {
    subject:
      'a futuristic cyborg with glowing implants, the midnight chrome brawler, crouching, ready to strike, neon cyberpunk future style'
  }
})
