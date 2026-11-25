import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-chrome-brawler',
  type: 'ally',
  name: 'Midnight Chrome Brawler',
  text: 'When it enters: the enemy hero loses 1 energy.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  element: 'shadow',
  weak: ['lightning'],
  price: 55,
  cost: 3,
  tribe: 'cyborg',
  keywords: ['retaliate'],
  attack: 5,
  health: 6,
  onEnter(ctx) {
    drainEnergy(ctx, ctx.opponent, 1)
  },
  ai: { value: 3, tags: ['control'] },
  art: {
    subject:
      'Midnight Chrome Brawler: a muscular elderly woman with warm beige skin, salt-and-pepper hair in a topknot and a burn scar on the jaw, wearing a chrome visor, dressed in a matte-black exoskeleton, raising chrome fists, with a serene smile, crimson accents, neon cyberpunk future style'
  }
})
